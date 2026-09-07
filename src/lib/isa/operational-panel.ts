import "server-only"

import { readFile } from "node:fs/promises"
import path from "node:path"

import { demoOperationalPanel } from "@/lib/studio/demo-data"
import { getSecureStudioRecord } from "@/lib/supabase/queries/workspaces"
import { z } from "zod"

export type OperationalAlert = { title: string; project: string; deadline: string; status: string }
export type OperationalProject = { name: string; objective: string; context: string; tasks: string[]; blocker: string; status: string }
export type OperationalTask = { priority: string; action: string; project: string; owner: string; deadline: string; status: string }
export type ClientRecord = {
  id: string
  name: string
  relationship: string
  status: string
  proposals: string
  contracts: string
  briefings: string
  conversations: string
  source: string
  next: string
  alert: string
}
export type OrbitalFront = {
  id: string
  title: string
  orbit: "alta" | "movimento" | "incubacao"
  domain: string
  why: string
  next: string
}
export type ClaritySnapshot = {
  summary: string
  stable: string[]
  confirmed: string[]
  pending: string[]
}
export type IsaUpdate = { date: string; origin: string; change: string; status: string; location: string }
export type OperationalPanel = {
  lastConsolidation: string
  priorities: string[]
  alerts: OperationalAlert[]
  projects: OperationalProject[]
  commitments: string[]
  peopleWaiting: string[]
  waitingOn: string[]
  decisions: string[]
  direction: string[]
  orbitalFronts: OrbitalFront[]
  tasks: OperationalTask[]
  clients: ClientRecord[]
  clarity: ClaritySnapshot
  isaUpdates: IsaUpdate[]
}

const operationalPanelSchema = z.object({
  lastConsolidation: z.string(),
  priorities: z.array(z.string()),
  alerts: z.array(z.object({ title: z.string(), project: z.string(), deadline: z.string(), status: z.string() })),
  projects: z.array(z.object({ name: z.string(), objective: z.string(), context: z.string(), tasks: z.array(z.string()), blocker: z.string(), status: z.string() })),
  commitments: z.array(z.string()),
  peopleWaiting: z.array(z.string()),
  waitingOn: z.array(z.string()),
  decisions: z.array(z.string()),
  direction: z.array(z.string()),
  orbitalFronts: z.array(z.object({ id: z.string(), title: z.string(), orbit: z.enum(["alta", "movimento", "incubacao"]), domain: z.string(), why: z.string(), next: z.string() })),
  tasks: z.array(z.object({ priority: z.string(), action: z.string(), project: z.string(), owner: z.string(), deadline: z.string(), status: z.string() })),
  clients: z.array(z.object({ id: z.string(), name: z.string(), relationship: z.string(), status: z.string(), proposals: z.string(), contracts: z.string(), briefings: z.string(), conversations: z.string(), source: z.string(), next: z.string(), alert: z.string() })),
  clarity: z.object({ summary: z.string(), stable: z.array(z.string()), confirmed: z.array(z.string()), pending: z.array(z.string()) }),
  isaUpdates: z.array(z.object({ date: z.string(), origin: z.string(), change: z.string(), status: z.string(), location: z.string() })),
})

const PANEL_PATH = path.join(process.cwd(), "docs", "PAINEL-OPERACIONAL.md")
const CONTEXT_PATH = path.join(process.cwd(), "docs", "CONTEXTO-OPERACIONAL-04-09-2026.md")
const ORBITAL_PATH = path.join(process.cwd(), "docs", "CAMPO-ORBITAL.md")
const CLIENTS_PATH = path.join(process.cwd(), "docs", "clientes", "CLIENTES.md")
const CLARITY_PATH = path.join(process.cwd(), "docs", "CLAREZA-MESTRA.md")
const ISA_UPDATES_PATH = path.join(process.cwd(), "docs", "ISA-ATUALIZACOES.md")

function section(markdown: string, heading: string, nextHeading: string) {
  const start = markdown.indexOf(heading)
  const end = markdown.indexOf(nextHeading, start + heading.length)
  if (start === -1) return ""
  return markdown.slice(start + heading.length, end === -1 ? undefined : end)
}

function cleanMarkdown(value: string) {
  return value.replace(/\*\*/g, "").replace(/`/g, "").replace(/\s+/g, " ").trim()
}

function bulletList(markdown: string, heading: string, nextHeading: string) {
  return section(markdown, heading, nextHeading)
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => cleanMarkdown(line.slice(2)))
}

function numberedList(markdown: string, heading: string, nextHeading: string) {
  return Array.from(
    section(markdown, heading, nextHeading).matchAll(/^\d+\.\s+([\s\S]*?)(?=^\d+\.|\n\n|$)/gm),
    (match) => cleanMarkdown(match[1])
  )
}

export async function readOperationalPanel(): Promise<OperationalPanel> {
  const dataMode = process.env.STUDIO_OS_DATA_MODE ?? (process.env.VERCEL ? "demo" : "files")
  if (dataMode === "demo") return demoOperationalPanel
  if (dataMode === "supabase") {
    const payload = await getSecureStudioRecord<unknown>("operational_panel", "default")
    const parsed = operationalPanelSchema.safeParse(payload)
    if (!parsed.success) throw new Error("secure_operational_panel_missing_or_invalid")
    return parsed.data
  }

  const [markdown, context, orbital, clientsMarkdown, clarityMarkdown, isaUpdatesMarkdown] = await Promise.all([
    readFile(PANEL_PATH, "utf8"),
    readFile(CONTEXT_PATH, "utf8"),
    readFile(ORBITAL_PATH, "utf8"),
    readFile(CLIENTS_PATH, "utf8"),
    readFile(CLARITY_PATH, "utf8"),
    readFile(ISA_UPDATES_PATH, "utf8"),
  ])
  const prioritiesSection = section(markdown, "## 1. Prioridades atuais", "## 2. Alertas e prazos")
  const alertsSection = section(markdown, "## 2. Alertas e prazos", "## 3. Projetos ativos")
  const projectsSection = section(markdown, "## 3. Projetos ativos", "## 4.")

  const priorities = Array.from(
    prioritiesSection.matchAll(/^\d+\.\s+([\s\S]*?)(?=^\d+\.|\n\n)/gm),
    (match) => cleanMarkdown(match[1])
  ).slice(0, 5)

  const alerts = alertsSection
    .split("\n")
    .filter((line) => line.startsWith("|") && !line.includes("---") && !line.includes("| Alerta |"))
    .map((line) => line.split("|").slice(1, -1).map(cleanMarkdown))
    .filter((cells) => cells.length >= 4)
    .map(([title, project, deadline, status]) => ({ title, project, deadline, status }))

  const projectMatches = Array.from(projectsSection.matchAll(/^###\s+3\.\d+\s+(.+)$/gm))
  const projects = projectMatches.slice(0, 6).map((match, index) => {
    const start = match.index ?? 0
    const end = projectMatches[index + 1]?.index ?? projectsSection.length
    const body = projectsSection.slice(start, end)
    const objective = body.match(/\*\*Objetivo:\*\*\s+([^\n]+)/)?.[1] ?? "Objetivo a confirmar no painel operacional."
    const situation = section(body, "**Situação atual:**", "**Próximas ações:**")
    const contextItems = situation.split("\n").filter((line) => line.startsWith("- ")).slice(0, 2).map((line) => cleanMarkdown(line.slice(2)))
    const tasks = Array.from(body.matchAll(/^- \[ \]\s+(.+)$/gm), (task) => cleanMarkdown(task[1])).slice(0, 4)
    const blocker = cleanMarkdown(body.match(/\*\*Bloqueio:\*\*\s+([^\n]+)/)?.[1] ?? "Nenhum bloqueio explícito registrado.")
    const status = cleanMarkdown(body.match(/\*\*Status:\*\*\s+([^\n]+)/)?.[1] ?? "Em andamento")
    return { name: cleanMarkdown(match[1]), objective: cleanMarkdown(objective), context: contextItems.join(" "), tasks, blocker, status }
  })

  const lastConsolidation = markdown.match(/\*\*Última consolidação:\*\*\s+([^\n]+)/)?.[1]?.trim() ?? "A confirmar"
  const commitments = Array.from(context.matchAll(/^###\s+(.+)$/gm), (match) => cleanMarkdown(match[1])).slice(0, 3)
  const peopleWaiting = bulletList(context, "## Pessoas aguardando Gleide", "## Respostas ou ações aguardadas de terceiros")
  const waitingOn = bulletList(context, "## Respostas ou ações aguardadas de terceiros", "## Decisões exclusivas de Gleide")
  const decisions = bulletList(context, "## Decisões exclusivas de Gleide", "## Situação financeira")
  const direction = bulletList(context, "## Direção estratégica em consolidação", "## Regra para a Isa")
  const orbitalFronts = orbital
    .split("\n")
    .filter((line) => line.startsWith("|") && !line.includes("---") && !line.includes("| ID |"))
    .map((line) => line.split("|").slice(1, -1).map(cleanMarkdown))
    .filter((cells) => cells.length >= 6 && ["alta", "movimento", "incubacao"].includes(cells[2]))
    .map(([id, title, orbit, domain, why, next]) => ({ id, title, orbit: orbit as OrbitalFront["orbit"], domain, why, next }))
  const tasks = section(markdown, "## 4. Próximas ações consolidadas", "## 5. Aguardando terceiros")
    .split("\n")
    .filter((line) => line.startsWith("|") && !line.includes("---") && !line.includes("| Prioridade |"))
    .map((line) => line.split("|").slice(1, -1).map(cleanMarkdown))
    .filter((cells) => cells.length >= 6)
    .map(([priority, action, project, owner, deadline, status]) => ({ priority, action, project, owner, deadline, status }))
    .slice(0, 10)
  const clients = clientsMarkdown
    .split("\n")
    .filter((line) => line.startsWith("|") && !line.includes("---") && !line.includes("| ID |"))
    .map((line) => line.split("|").slice(1, -1).map(cleanMarkdown))
    .filter((cells) => cells.length >= 11)
    .map(([id, name, relationship, status, proposals, contracts, briefings, conversations, source, next, alert]) => ({
      id, name, relationship, status, proposals, contracts, briefings, conversations, source, next, alert,
    }))
  const clarity: ClaritySnapshot = {
    summary: cleanMarkdown(section(clarityMarkdown, "## Leitura em uma frase", "## O que está acontecendo de verdade")),
    stable: bulletList(clarityMarkdown, "## Núcleo estável — alta confiança", "## Decisões vigentes").slice(0, 4),
    confirmed: numberedList(clarityMarkdown, "## Decisões vigentes", "## Hipóteses — não tratar como decisão").slice(0, 4),
    pending: numberedList(clarityMarkdown, "## Cinco decisões que ainda pertencem a Gleide", "## Regra de autoridade das fontes").slice(0, 4),
  }
  const isaUpdates = isaUpdatesMarkdown
    .split("\n")
    .filter((line) => line.startsWith("|") && !line.includes("---") && !line.includes("| Data |"))
    .map((line) => line.split("|").slice(1, -1).map(cleanMarkdown))
    .filter((cells) => cells.length >= 5)
    .map(([date, origin, change, status, location]) => ({ date, origin, change, status, location }))
  return { lastConsolidation, priorities, alerts, projects, commitments, peopleWaiting, waitingOn, decisions, direction, orbitalFronts, tasks, clients, clarity, isaUpdates }
}
