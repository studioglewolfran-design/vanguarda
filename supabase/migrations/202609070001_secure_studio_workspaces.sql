-- Camada privada do Studio OS.
-- Aplicar no Supabase antes de usar STUDIO_OS_DATA_MODE=supabase.

create extension if not exists pgcrypto;

create table if not exists public.studio_workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 120),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.studio_workspace_members (
  workspace_id uuid not null references public.studio_workspaces(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'viewer' check (role in ('owner', 'editor', 'viewer')),
  created_at timestamptz not null default timezone('utc', now()),
  primary key (workspace_id, user_id)
);

create table if not exists public.studio_records (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.studio_workspaces(id) on delete cascade,
  record_type text not null check (char_length(trim(record_type)) between 1 and 80),
  record_key text not null check (char_length(trim(record_key)) between 1 and 160),
  payload jsonb not null check (jsonb_typeof(payload) = 'object'),
  source_label text,
  created_by uuid not null references auth.users(id) on delete restrict,
  updated_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (workspace_id, record_type, record_key)
);

create table if not exists public.studio_audit_events (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.studio_workspaces(id) on delete cascade,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null check (action in ('insert', 'update', 'delete')),
  record_id uuid,
  record_type text,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists studio_workspace_members_user_idx
  on public.studio_workspace_members (user_id);
create index if not exists studio_records_workspace_type_idx
  on public.studio_records (workspace_id, record_type);
create index if not exists studio_audit_events_workspace_created_idx
  on public.studio_audit_events (workspace_id, created_at desc);

create or replace function public.is_studio_workspace_member(p_workspace_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.studio_workspace_members
    where workspace_id = p_workspace_id
      and user_id = (select auth.uid())
  );
$$;

create or replace function public.is_studio_workspace_editor(p_workspace_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.studio_workspace_members
    where workspace_id = p_workspace_id
      and user_id = (select auth.uid())
      and role in ('owner', 'editor')
  );
$$;

create or replace function public.is_studio_workspace_owner(p_workspace_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.studio_workspace_members
    where workspace_id = p_workspace_id
      and user_id = (select auth.uid())
      and role = 'owner'
  );
$$;

create or replace function public.provision_my_studio_workspace(workspace_name text default 'Studio Gle Wolfran')
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := (select auth.uid());
  existing_workspace_id uuid;
  new_workspace_id uuid;
begin
  if current_user_id is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;

  select workspace_id
    into existing_workspace_id
    from public.studio_workspace_members
   where user_id = current_user_id
   order by created_at
   limit 1;

  if existing_workspace_id is not null then
    return existing_workspace_id;
  end if;

  insert into public.studio_workspaces (name, created_by)
  values (coalesce(nullif(trim(workspace_name), ''), 'Studio Gle Wolfran'), current_user_id)
  returning id into new_workspace_id;

  insert into public.studio_workspace_members (workspace_id, user_id, role)
  values (new_workspace_id, current_user_id, 'owner');

  return new_workspace_id;
end;
$$;

create or replace function public.set_studio_record_audit_fields()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select auth.uid()) is null then
    raise exception 'not_authenticated' using errcode = '42501';
  end if;

  if tg_op = 'INSERT' then
    new.created_by := (select auth.uid());
  end if;
  new.updated_by := (select auth.uid());
  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

create or replace function public.write_studio_audit_event()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (select auth.uid()) is not null then
    if tg_op = 'DELETE' then
      insert into public.studio_audit_events (workspace_id, actor_id, action, record_id, record_type)
      values (old.workspace_id, (select auth.uid()), 'delete', old.id, old.record_type);
      return old;
    end if;

    insert into public.studio_audit_events (workspace_id, actor_id, action, record_id, record_type)
    values (new.workspace_id, (select auth.uid()), lower(tg_op), new.id, new.record_type);
  end if;

  return new;
end;
$$;

drop trigger if exists studio_records_audit_fields on public.studio_records;
create trigger studio_records_audit_fields
before insert or update on public.studio_records
for each row execute function public.set_studio_record_audit_fields();

drop trigger if exists studio_records_audit_event on public.studio_records;
create trigger studio_records_audit_event
after insert or update or delete on public.studio_records
for each row execute function public.write_studio_audit_event();

alter table public.studio_workspaces enable row level security;
alter table public.studio_workspace_members enable row level security;
alter table public.studio_records enable row level security;
alter table public.studio_audit_events enable row level security;

drop policy if exists "workspace members can read workspaces" on public.studio_workspaces;
create policy "workspace members can read workspaces"
on public.studio_workspaces for select to authenticated
using (public.is_studio_workspace_member(id));

drop policy if exists "workspace owners can update workspace" on public.studio_workspaces;
create policy "workspace owners can update workspace"
on public.studio_workspaces for update to authenticated
using (public.is_studio_workspace_owner(id))
with check (public.is_studio_workspace_owner(id));

drop policy if exists "members can read workspace memberships" on public.studio_workspace_members;
create policy "members can read workspace memberships"
on public.studio_workspace_members for select to authenticated
using (user_id = (select auth.uid()) or public.is_studio_workspace_member(workspace_id));

drop policy if exists "owners can manage workspace memberships" on public.studio_workspace_members;
create policy "owners can manage workspace memberships"
on public.studio_workspace_members for all to authenticated
using (public.is_studio_workspace_owner(workspace_id))
with check (public.is_studio_workspace_owner(workspace_id));

drop policy if exists "members can read studio records" on public.studio_records;
create policy "members can read studio records"
on public.studio_records for select to authenticated
using (public.is_studio_workspace_member(workspace_id));

drop policy if exists "editors can create studio records" on public.studio_records;
create policy "editors can create studio records"
on public.studio_records for insert to authenticated
with check (public.is_studio_workspace_editor(workspace_id));

drop policy if exists "editors can update studio records" on public.studio_records;
create policy "editors can update studio records"
on public.studio_records for update to authenticated
using (public.is_studio_workspace_editor(workspace_id))
with check (public.is_studio_workspace_editor(workspace_id));

drop policy if exists "owners and editors can delete studio records" on public.studio_records;
create policy "owners and editors can delete studio records"
on public.studio_records for delete to authenticated
using (public.is_studio_workspace_editor(workspace_id));

drop policy if exists "members can read studio audit events" on public.studio_audit_events;
create policy "members can read studio audit events"
on public.studio_audit_events for select to authenticated
using (public.is_studio_workspace_member(workspace_id));

revoke all on public.studio_workspaces from anon;
revoke all on public.studio_workspace_members from anon;
revoke all on public.studio_records from anon;
revoke all on public.studio_audit_events from anon;
grant select, update on public.studio_workspaces to authenticated;
grant select on public.studio_workspace_members to authenticated;
grant select, insert, update, delete on public.studio_records to authenticated;
grant select on public.studio_audit_events to authenticated;

revoke all on function public.is_studio_workspace_member(uuid) from public;
revoke all on function public.is_studio_workspace_editor(uuid) from public;
revoke all on function public.is_studio_workspace_owner(uuid) from public;
revoke all on function public.provision_my_studio_workspace(text) from public;
grant execute on function public.provision_my_studio_workspace(text) to authenticated;
