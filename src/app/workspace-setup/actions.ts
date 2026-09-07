"use server"

import { redirect } from "next/navigation"

import { provisionCurrentWorkspace } from "@/lib/supabase/queries/workspaces"

export async function provisionWorkspace(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim()

  if (name.length < 1 || name.length > 120) {
    redirect("/workspace-setup?error=Escolha um nome de até 120 caracteres.")
  }

  try {
    await provisionCurrentWorkspace(name)
  } catch {
    redirect("/workspace-setup?error=Não foi possível preparar seu espaço privado.")
  }

  redirect("/os")
}
