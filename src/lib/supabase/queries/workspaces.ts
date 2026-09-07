import "server-only"

import { createClient } from "@/lib/supabase/server"

export type StudioWorkspace = {
  id: string
  name: string
  role: "owner" | "editor" | "viewer"
}

export async function getCurrentWorkspace(): Promise<StudioWorkspace | null> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: membership, error: membershipError } = await supabase
    .from("studio_workspace_members")
    .select("workspace_id, role")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle()

  if (membershipError) throw membershipError
  if (!membership) return null

  const { data: workspace, error: workspaceError } = await supabase
    .from("studio_workspaces")
    .select("id, name")
    .eq("id", membership.workspace_id)
    .single()

  if (workspaceError) throw workspaceError

  return { ...workspace, role: membership.role }
}

export async function provisionCurrentWorkspace(name: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.rpc("provision_my_studio_workspace", {
    workspace_name: name,
  })

  if (error) throw error
  return data
}

export async function getSecureStudioRecord<T>(recordType: string, recordKey: string): Promise<T | null> {
  const workspace = await getCurrentWorkspace()
  if (!workspace) throw new Error("workspace_not_provisioned")

  const supabase = await createClient()
  const { data, error } = await supabase
    .from("studio_records")
    .select("payload")
    .eq("workspace_id", workspace.id)
    .eq("record_type", recordType)
    .eq("record_key", recordKey)
    .maybeSingle()

  if (error) throw error
  return (data?.payload as T | undefined) ?? null
}
