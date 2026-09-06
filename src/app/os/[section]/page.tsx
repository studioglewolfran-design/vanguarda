import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AlertTriangle, ArrowUpRight, AudioLines, CheckCircle2, CircleDot, FileCheck2, FileSignature, FolderOpen, MessageSquareText } from "lucide-react"

import { AudioUploadForm } from "@/components/dashboard/audio-upload-form"
import { CaptureForm } from "@/components/dashboard/capture-form"
import { SectionHeading } from "@/components/studio/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { readOperationalPanel, type OperationalPanel } from "@/lib/isa/operational-panel"

const sectionMeta = {
  projetos: ["Projetos", "Movimento com contexto.", "Objetivos, tarefas e bloqueios lidos da fonte operacional do Studio."],
  clientes: ["Clientes", "Relações com memória.", "Histórico, documentos, alertas e próximo movimento de cada relação."],
  comercial: ["Comercial", "Valor precisa de contorno.", "Uma visão inicial das conversas, propostas e definições necessárias para transformar trabalho em receita."],
  repertorio: ["Repertório", "Referência não é decoração.", "O acervo visual e intelectual do Studio organizado como matéria de pesquisa, contraste e decisão."],
  decisoes: ["Decisões", "Escolher também é proteger.", "O que depende da founder, o que já está confirmado e o que não deve virar compromisso por acidente."],
  inteligencia: ["Memória e inteligência", "Capturar. Relacionar. Discernir.", "Uma entrada única para registrar contexto sem transformar automaticamente toda ideia em tarefa."],
} as const

type SectionKey = keyof typeof sectionMeta
const labelClass = "text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-kobold"

export function generateStaticParams() {
  return Object.keys(sectionMeta).map((section) => ({ section }))
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params
  const meta = sectionMeta[section as SectionKey]
  return { title: meta?.[0] ?? "Studio OS" }
}

function Projects({ panel }: { panel: OperationalPanel }) {
  return <div className="mt-8 grid gap-4 xl:grid-cols-2">{panel.projects.map((project) => <article key={project.name} className="overflow-hidden rounded-2xl border border-surface-300 bg-white"><div className="border-b border-surface-200 p-6"><div className="flex items-start justify-between gap-3"><h2 className="font-sans text-xl font-medium">{project.name}</h2><Badge variant="outline">{project.status}</Badge></div><p className="mt-4 text-sm leading-6 text-surface-600">{project.objective}</p></div><div className="space-y-5 p-6"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-kobold">Contexto</p><p className="mt-2 text-sm leading-6 text-surface-600">{project.context || "Contexto resumido ainda não registrado."}</p></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-kobold">Próximas ações</p><div className="mt-2 space-y-2">{project.tasks.length ? project.tasks.map((task) => <p key={task} className="flex gap-2 rounded-xl bg-surface-100 p-3 text-xs leading-5"><CircleDot className="mt-0.5 size-3.5 shrink-0 text-brand-kobold" />{task}</p>) : <p className="text-xs text-surface-500">Nenhuma ação aberta registrada.</p>}</div></div><div className="rounded-xl border border-brand-sahara/40 bg-brand-arena/30 p-4"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-cotta">Bloqueio</p><p className="mt-2 text-xs leading-5">{project.blocker}</p></div></div></article>)}</div>
}

function Clients({ panel }: { panel: OperationalPanel }) {
  return <div className="mt-8 grid gap-4 xl:grid-cols-2">{panel.clients.map((client) => <article key={client.id} className="rounded-2xl border border-surface-300 bg-white p-6"><div className="flex items-start justify-between gap-3"><div><h2 className="font-sans text-xl font-medium">{client.name}</h2><p className="mt-1 text-xs text-surface-500">{client.relationship}</p></div><Badge variant="outline">{client.status}</Badge></div><div className="mt-6 grid grid-cols-2 gap-2">{[[FileSignature,"Propostas",client.proposals],[FileCheck2,"Contratos",client.contracts],[FolderOpen,"Briefings",client.briefings],[MessageSquareText,"Conversas",client.conversations]].map(([Icon,label,value]) => { const ItemIcon = Icon as typeof FileSignature; return <div key={label as string} className="rounded-xl bg-surface-100 p-3"><ItemIcon className="size-3.5 text-brand-kobold" /><p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em]">{label as string}</p><p className="mt-1 text-[11px] leading-4 text-surface-500">{value as string}</p></div>})}</div><div className="mt-6 border-t border-surface-200 pt-5"><p className={labelClass}>Próximo movimento</p><p className="mt-2 text-sm font-medium leading-6">{client.next}</p></div>{client.alert ? <p className="mt-4 flex gap-2 rounded-xl bg-brand-arena/35 p-3 text-xs leading-5"><AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-brand-cotta" />{client.alert}</p> : null}</article>)}</div>
}

function Commercial({ panel }: { panel: OperationalPanel }) {
  const stages = [
    ["Escuta", panel.clients.filter((client) => /descoberta|conversa|diagnóstico/i.test(client.status)).length, "Relações ainda formando contexto"],
    ["Definição", panel.clients.filter((client) => /proposta|escopo|formalização/i.test(`${client.status} ${client.next}`)).length, "Escopo, valor ou contrato em decisão"],
    ["Ativo", panel.clients.filter((client) => /ativo|andamento|execução/i.test(client.status)).length, "Trabalhos com movimento registrado"],
  ] as const
  return <div className="mt-8"><div className="grid gap-3 md:grid-cols-3">{stages.map(([label,value,note], index) => <article key={label} className={`rounded-2xl border p-6 ${index === 1 ? "border-brand-bleu/40 bg-brand-antar/45" : "border-surface-300 bg-white"}`}><span className="font-mono text-4xl">{value}</span><h2 className="mt-10 font-sans text-lg font-medium">{label}</h2><p className="mt-2 text-xs text-surface-500">{note}</p></article>)}</div><section className="mt-8 rounded-2xl border border-surface-300 bg-white"><div className="border-b border-surface-200 p-6"><p className={labelClass}>Fila de definição comercial</p><h2 className="mt-2 font-sans text-2xl font-medium">O que precisa ganhar contorno</h2></div><div className="divide-y divide-surface-200">{panel.clients.slice(0, 8).map((client) => <article key={client.id} className="grid gap-3 p-5 sm:grid-cols-[1fr_1.4fr_auto] sm:items-center"><div><p className="font-medium">{client.name}</p><p className="mt-1 text-xs text-surface-500">{client.status}</p></div><p className="text-xs leading-5 text-surface-600">{client.next}</p><Badge variant="outline">A confirmar</Badge></article>)}</div></section></div>
}

function Repertoire() {
  const collections = [
    ["Curadoria visual", "15 + 1 pastas", "Padrões, tensões, arquétipos e contraprovas do repertório pessoal.", "Acervo interno · curadoria visual v2"],
    ["Direção de negócio", "7 módulos", "Tese, mercados, público, problemas, valor, oferta e direção estratégica.", "/docs/direcao-negocio/README.md"],
    ["Método Design Invisível", "28 prompts", "Pesquisa e direção de marca do fundamento à aplicação.", "/diretrizes/research"],
    ["Memória de projetos", "Acervo vivo", "Dossiês, conversas, aprendizados e decisões associados aos clientes.", "/docs/clientes/README.md"],
  ]
  return <div className="mt-8 grid gap-4 md:grid-cols-2">{collections.map(([title,count,description,source], index) => <article key={title} className={`relative min-h-72 overflow-hidden rounded-[1.75rem] border p-7 ${index === 0 ? "border-surface-950 bg-surface-950 text-white" : "border-surface-300 bg-white"}`}><span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-55">Acervo 0{index + 1} · {count}</span><div className="absolute bottom-7 left-7 right-7"><h2 className="font-sans text-2xl font-medium">{title}</h2><p className="mt-3 text-sm leading-6 opacity-65">{description}</p><p className="mt-5 truncate font-mono text-[9px] opacity-45">{source}</p></div></article>)}</div>
}

function Decisions({ panel }: { panel: OperationalPanel }) {
  const confirmed = panel.clarity.confirmed.filter((item) => !/\bisa\b/i.test(item))
  const pending = panel.decisions.concat(panel.clarity.pending).filter((item) => !/\bisa\b/i.test(item))
  return <div className="mt-8 grid gap-5 xl:grid-cols-2"><section className="rounded-2xl border border-surface-300 bg-white"><div className="border-b border-surface-200 p-6"><p className={`${labelClass} text-brand-midori`}>Direção confirmada</p><h2 className="mt-2 font-sans text-2xl font-medium">O que já orienta o Studio</h2></div><div className="divide-y divide-surface-200">{confirmed.map((item) => <p key={item} className="flex gap-3 p-5 text-sm leading-6"><CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-midori" />{item}</p>)}</div></section><section className="rounded-2xl border border-brand-sahara/50 bg-brand-arena/30"><div className="border-b border-brand-sahara/40 p-6"><p className={`${labelClass} text-brand-cotta`}>Decisão da founder</p><h2 className="mt-2 font-sans text-2xl font-medium">O que permanece aberto</h2></div><div className="divide-y divide-brand-sahara/30">{pending.slice(0, 10).map((item) => <p key={item} className="flex gap-3 p-5 text-sm leading-6"><CircleDot className="mt-1 size-4 shrink-0 text-brand-cotta" />{item}</p>)}</div></section></div>
}

function Intelligence({ panel }: { panel: OperationalPanel }) {
  return <div className="mt-8 grid gap-5 xl:grid-cols-[1.2fr_0.8fr]"><Card className="bg-white"><CardHeader><CardTitle className="font-sans text-xl">Registrar contexto</CardTitle><CardDescription>Ideia, conversa, prazo, pessoa, decisão ou bloqueio.</CardDescription></CardHeader><CardContent><CaptureForm /></CardContent></Card><Card className="bg-white"><CardHeader><CardTitle className="flex items-center gap-2 font-sans text-xl"><AudioLines className="size-5 text-brand-kobold" /> Captura por áudio</CardTitle><CardDescription>Use o celular quando escrever interromper o pensamento.</CardDescription></CardHeader><CardContent><AudioUploadForm /></CardContent></Card><section className="rounded-2xl border border-surface-300 bg-white p-6 xl:col-span-2"><p className={labelClass}>Protocolo de discernimento</p><div className="mt-5 grid gap-4 md:grid-cols-3">{[["Capturar","O registro preserva o contexto sem prometer execução."],["Relacionar","A informação é conectada a projetos, pessoas e decisões existentes."],["Confirmar","Mudanças de prioridade, prazo ou compromisso continuam dependendo de validação humana."]].map(([title,description], index) => <article key={title} className="rounded-xl bg-surface-100 p-5"><span className="font-mono text-[9px] text-brand-kobold">0{index + 1}</span><h2 className="mt-8 font-sans text-lg font-medium">{title}</h2><p className="mt-2 text-xs leading-5 text-surface-600">{description}</p></article>)}</div><p className="mt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-surface-500">Fonte operacional consolidada em {panel.lastConsolidation}</p></section></div>
}

export default async function OsSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  if (!(section in sectionMeta)) notFound()
  const key = section as SectionKey
  const [eyebrow, title, description] = sectionMeta[key]
  const panel = await readOperationalPanel()
  return <div className="mx-auto max-w-[1500px] px-4 py-7 sm:px-7 lg:px-10 lg:py-10"><SectionHeading eyebrow={eyebrow} title={title} description={description} />{key === "projetos" ? <Projects panel={panel} /> : key === "clientes" ? <Clients panel={panel} /> : key === "comercial" ? <Commercial panel={panel} /> : key === "repertorio" ? <Repertoire /> : key === "decisoes" ? <Decisions panel={panel} /> : <Intelligence panel={panel} />}<footer className="mt-14 flex items-center justify-between border-t border-surface-300 pt-5"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-surface-500">Studio OS · Alpha 0.1</p><Link href="/os" className="inline-flex items-center gap-2 text-xs font-semibold">Voltar à visão geral <ArrowUpRight className="size-3.5" /></Link></footer></div>
}
