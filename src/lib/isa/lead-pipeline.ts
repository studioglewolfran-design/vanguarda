import "server-only"

import { readFile } from "node:fs/promises"
import path from "node:path"

export type LeadPipelineStage = {
  id: string
  label: string
  automation: string
  humanAction: string
}

export type LeadRecord = {
  title: string
  state: string
  origin: string
  facts: string[]
  nextSteps: string[]
}

export type LeadPipeline = {
  isDemo: boolean
  stages: LeadPipelineStage[]
  lead: LeadRecord | null
}

const LEAD_PATH = path.join(process.cwd(), "docs", "leads", "empresa-insulfilm-indicacao-v0.1.md")

const stages: LeadPipelineStage[] = [
  { id: "novo-sinal", label: "Novo sinal", automation: "Registra origem e relato literal.", humanAction: "Nenhum contato automático." },
  { id: "pedir-contexto", label: "Pedir contexto", automation: "Lista os dados necessários para avançar.", humanAction: "Aprovar e fazer o pedido pela relação adequada." },
  { id: "pre-pesquisa", label: "Pré-pesquisa", automation: "Organiza fontes públicas e perguntas.", humanAction: "Revisar a leitura antes do contato." },
  { id: "entrevista", label: "Entrevista", automation: "Prepara pauta, objetivos e convite em rascunho.", humanAction: "Confirmar data e enviar convite." },
  { id: "sintese", label: "Síntese", automation: "Estrutura uma devolutiva provisória.", humanAction: "Validar a leitura com o decisor." },
  { id: "encaminhamento", label: "Encaminhamento", automation: "Sugere o menor próximo passo coerente.", humanAction: "Aprovar experimento, proposta ou encerramento." },
]

function clean(value: string) {
  return value.replace(/\*\*/g, "").replace(/`/g, "").replace(/\s+/g, " ").trim()
}

function section(markdown: string, heading: string) {
  const start = markdown.indexOf(heading)
  if (start === -1) return ""
  const end = markdown.indexOf("\n## ", start + heading.length)
  return markdown.slice(start + heading.length, end === -1 ? undefined : end)
}

export async function readLeadPipeline(): Promise<LeadPipeline> {
  const dataMode = process.env.STUDIO_OS_DATA_MODE ?? (process.env.VERCEL ? "demo" : "files")
  if (dataMode === "demo") return { isDemo: true, stages, lead: null }

  try {
    const markdown = await readFile(LEAD_PATH, "utf8")
    const title = clean(markdown.match(/^#\s+(.+)$/m)?.[1] ?? "Lead em triagem")
    const state = clean(markdown.match(/\*\*Estado:\*\*\s+`?([^`\n]+)`?/)?.[1] ?? "a confirmar")
    const origin = clean(markdown.match(/\*\*Origem:\*\*\s+([^\n]+)/)?.[1] ?? "Origem a confirmar")
    const facts = section(markdown, "## Fatos registrados")
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => clean(line.slice(2)))
    const nextSteps = Array.from(
      section(markdown, "## Próximo passo do pipeline").matchAll(/^\d+\.\s+([\s\S]*?)(?=^\d+\.|$)/gm),
      (match) => clean(match[1])
    )

    return { isDemo: false, stages, lead: { title, state, origin, facts, nextSteps } }
  } catch {
    return { isDemo: false, stages, lead: null }
  }
}
