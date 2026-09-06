"use server"

import { access, appendFile, mkdir, writeFile } from "node:fs/promises"
import { randomUUID } from "node:crypto"
import path from "node:path"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export type CaptureState = { status: "idle" | "success" | "error"; message: string }
export type AudioState = CaptureState

const captureSchema = z.object({
  capture: z.string().trim().min(3, "Escreva um pouco mais para eu registrar.").max(3000),
  kind: z.enum(["informação", "ideia", "compromisso", "bloqueio", "aguardando terceiro"]),
})

function safeMarkdown(value: string) {
  return value.replace(/\r?\n/g, " ").replace(/\|/g, "\\|").trim()
}

export async function captureInbox(_previousState: CaptureState, formData: FormData): Promise<CaptureState> {
  if (process.env.VERCEL) {
    return { status: "error", message: "Captura desativada no link de validação. Use a versão local por enquanto." }
  }
  const parsed = captureSchema.safeParse({ capture: formData.get("capture"), kind: formData.get("kind") })
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Não consegui registrar esta captura." }
  }

  const inboxPath = path.join(process.cwd(), "docs", "INBOX-ISA.md")
  await access(inboxPath)
  const timestamp = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short", timeStyle: "short", timeZone: "America/Manaus",
  }).format(new Date())
  const line = `\n- [ ] **${timestamp}** · ${parsed.data.kind} · ${safeMarkdown(parsed.data.capture)}`
  await appendFile(inboxPath, line, "utf8")
  revalidatePath("/dashboard")
  return { status: "success", message: "Capturado na inbox. Ainda não virou tarefa nem compromisso." }
}

const AUDIO_LIMIT = 25 * 1024 * 1024
const AUDIO_TYPES = new Set([
  "audio/mpeg", "audio/mp4", "audio/x-m4a", "audio/wav", "audio/webm", "audio/ogg",
])

export async function uploadAudio(_previousState: AudioState, formData: FormData): Promise<AudioState> {
  if (process.env.VERCEL) {
    return { status: "error", message: "Áudio desativado no link de validação. Use a versão local por enquanto." }
  }
  const audio = formData.get("audio")
  if (!(audio instanceof File) || audio.size === 0) {
    return { status: "error", message: "Escolha ou grave um áudio para enviar." }
  }
  if (audio.size > AUDIO_LIMIT) {
    return { status: "error", message: "O áudio deve ter no máximo 25 MB nesta versão." }
  }
  if (audio.type && !AUDIO_TYPES.has(audio.type)) {
    return { status: "error", message: "Formato de áudio não reconhecido." }
  }

  const extension = audio.name.toLowerCase().match(/\.(mp3|m4a|mp4|wav|webm|ogg)$/)?.[0] ?? ".webm"
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
  const fileName = `${timestamp}-${randomUUID().slice(0, 8)}${extension}`
  const audioDirectory = path.join(process.cwd(), "docs", "inbox-audio")
  await mkdir(audioDirectory, { recursive: true })
  await writeFile(path.join(audioDirectory, fileName), Buffer.from(await audio.arrayBuffer()))

  const inboxPath = path.join(process.cwd(), "docs", "INBOX-ISA.md")
  const localTime = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short", timeStyle: "short", timeZone: "America/Manaus",
  }).format(new Date())
  await appendFile(inboxPath, `\n- [ ] **${localTime}** · áudio · \`docs/inbox-audio/${fileName}\` · Aguardando transcrição e triagem.`, "utf8")
  revalidatePath("/dashboard")
  return { status: "success", message: "Áudio recebido. Ele está seguro na inbox e aguarda transcrição." }
}
