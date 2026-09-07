import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { provisionWorkspace } from "@/app/workspace-setup/actions"
import { createClient } from "@/lib/supabase/server"
import { getCurrentWorkspace } from "@/lib/supabase/queries/workspaces"

export const metadata: Metadata = {
  title: "Preparar espaço privado",
  robots: { index: false, follow: false },
}

export default async function WorkspaceSetupPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const localAuthDisabled =
    process.env.STUDIO_OS_AUTH_MODE === "disabled" &&
    process.env.NODE_ENV !== "production"

  if (localAuthDisabled) redirect("/os")

  if (!hasSupabaseConfig) {
    return <main className="grid min-h-screen place-items-center p-6"><p>O ambiente privado ainda não foi configurado.</p></main>
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/login?next=/workspace-setup")

  const workspace = await getCurrentWorkspace()
  if (workspace) redirect("/os")

  const { error } = await searchParams

  return (
    <main className="grid min-h-screen place-items-center bg-surface-100 px-4 py-10 text-surface-950">
      <section className="w-full max-w-md rounded-[1.75rem] border border-surface-300 bg-white p-7 shadow-sm sm:p-9">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-kobold">Ambiente privado</p>
        <h1 className="mt-4 font-sans text-3xl font-medium">Preparar seu espaço</h1>
        <p className="mt-3 text-sm leading-6 text-surface-600">Seu login está ativo. Crie o espaço protegido que será usado para guardar os registros reais do Studio.</p>
        {error ? <p className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p> : null}
        <form action={provisionWorkspace} className="mt-7 space-y-4">
          <label className="block text-sm font-semibold" htmlFor="name">Nome do espaço
            <input id="name" name="name" defaultValue="Studio Gle Wolfran" maxLength={120} required className="mt-2 h-12 w-full rounded-xl border border-surface-300 px-3 text-sm outline-none focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20" />
          </label>
          <button type="submit" className="w-full rounded-xl bg-surface-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-kobold">Criar espaço privado</button>
        </form>
      </section>
    </main>
  )
}
