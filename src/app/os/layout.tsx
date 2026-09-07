import type { Metadata } from "next"
import { redirect } from "next/navigation"

import { OsShell } from "@/components/studio/os-shell"
import { createClient } from "@/lib/supabase/server"
import { getCurrentWorkspace } from "@/lib/supabase/queries/workspaces"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: { default: "Studio OS", template: "%s · Studio OS" },
  description: "Centro operacional privado do Studio Gle Wolfran.",
  robots: { index: false, follow: false },
}

export default async function StudioOsLayout({ children }: { children: React.ReactNode }) {
  const hasSupabaseConfig = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  const localAuthDisabled =
    process.env.STUDIO_OS_AUTH_MODE === "disabled" &&
    process.env.NODE_ENV !== "production"

  if (hasSupabaseConfig && !localAuthDisabled) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect("/login?next=/os")

    if (process.env.STUDIO_OS_DATA_MODE === "supabase") {
      const workspace = await getCurrentWorkspace()
      if (!workspace) redirect("/workspace-setup?next=/os")
    }
  }

  return <OsShell>{children}</OsShell>
}
