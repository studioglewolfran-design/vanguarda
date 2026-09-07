"use client"

import { useMemo, useState } from "react"
import { CircleDot, Link2, Plus, Sparkles, Target } from "lucide-react"

type Idea = {
  id: string
  title: string
  note: string
  returns: number
  connections: number
  focusFit: boolean
  evidence: boolean
  divergence: boolean
}

const seeds: Idea[] = [
  { id: "diagnostico", title: "Diagnóstico autoral", note: "Profissionais e marcas pessoais: clareza antes de propor solução.", returns: 3, connections: 3, focusFit: true, evidence: true, divergence: false },
  { id: "experiencias", title: "Design de experiências", note: "Experiências autorais, incluindo noivas, quando a jornada pede direção.", returns: 2, connections: 3, focusFit: true, evidence: true, divergence: false },
  { id: "motor", title: "Motor Moral", note: "Aprofundamento pago e separado quando valores e limites são centrais.", returns: 2, connections: 2, focusFit: true, evidence: false, divergence: false },
  { id: "plataforma", title: "ISA como produto externo", note: "Possibilidade de futuro; hoje a ISA permanece uma camada interna.", returns: 2, connections: 1, focusFit: false, evidence: false, divergence: true },
]

function score(idea: Idea) {
  return 1 + idea.returns + idea.connections + (idea.focusFit ? 2 : 0) + (idea.evidence ? 2 : 0) - (idea.divergence ? 2 : 0)
}

function lane(idea: Idea) {
  const value = score(idea)
  if (idea.focusFit && value >= 7) return { label: "Foco agora", tone: "bg-brand-kobold text-white", detail: "Recebe energia e um próximo gesto." }
  if (value >= 4) return { label: "Explorar com limite", tone: "bg-brand-arena text-surface-950", detail: "Pode ganhar um experimento pequeno, sem disputar o foco." }
  return { label: "Horizonte", tone: "bg-surface-200 text-surface-700", detail: "Permanece preservada até retornar com mais força." }
}

function IdeaCard({ idea }: { idea: Idea }) {
  const value = score(idea)
  const currentLane = lane(idea)
  const signals = [
    ["semente", 1],
    ["retornos", idea.returns],
    ["conexões", idea.connections],
    ["foco", idea.focusFit ? 2 : 0],
    ["evidência", idea.evidence ? 2 : 0],
    ["destoa", idea.divergence ? -2 : 0],
  ].filter(([, points]) => points !== 0) as [string, number][]

  return (
    <article className="relative overflow-hidden rounded-2xl border border-surface-300 bg-white p-5">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-brand-atmos" style={{ width: `${Math.min(100, Math.max(8, value * 9))}%` }} />
      <div className="flex items-start justify-between gap-3 pt-2"><div><h3 className="font-sans text-lg font-medium">{idea.title}</h3><p className="mt-2 text-xs leading-5 text-surface-600">{idea.note}</p></div><span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-950 font-mono text-sm text-white" aria-label={`${value} pontos de força`}>{value}</span></div>
      <div className="mt-5 flex flex-wrap gap-1.5">{signals.map(([label, points]) => <span key={label} className={`rounded-full px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] ${points < 0 ? "bg-brand-cotta/10 text-brand-cotta" : "bg-surface-100 text-surface-600"}`}>{points > 0 ? "+" : ""}{points} {label}</span>)}</div>
      <div className="mt-5 flex items-center justify-between border-t border-surface-200 pt-4"><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${currentLane.tone}`}>{currentLane.label}</span><span className="text-right text-[10px] text-surface-500">{currentLane.detail}</span></div>
    </article>
  )
}

export function IdeaCompass() {
  const [ideas, setIdeas] = useState<Idea[]>(seeds)
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [focusFit, setFocusFit] = useState(true)

  const ordered = useMemo(() => [...ideas].sort((a, b) => score(b) - score(a)), [ideas])
  const focusIdeas = ordered.filter((idea) => lane(idea).label === "Foco agora")
  const explorationIdeas = ordered.filter((idea) => lane(idea).label === "Explorar com limite")
  const horizonIdeas = ordered.filter((idea) => lane(idea).label === "Horizonte")

  function addIdea(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const cleanTitle = title.trim()
    if (!cleanTitle) return
    setIdeas((current) => [...current, { id: crypto.randomUUID(), title: cleanTitle, note: note.trim() || "Captura inicial: aguarda retorno, conexão ou evidência.", returns: 0, connections: 0, focusFit, evidence: false, divergence: !focusFit }])
    setTitle("")
    setNote("")
    setFocusFit(true)
  }

  return <div className="mt-8 space-y-7">
    <section className="overflow-hidden rounded-[1.75rem] bg-surface-950 p-6 text-white sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-atmos">ISA · camada interna</p><h2 className="mt-3 font-sans text-3xl font-medium leading-tight">Nem toda ideia pede uma decisão.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-surface-300">A força aumenta quando uma possibilidade retorna com nova nuance, se conecta ao foco e encontra evidência. O que destoa não é apagado: fica protegido no horizonte.</p></div><div className="grid grid-cols-3 gap-3">{[[focusIdeas.length,"Foco agora","bg-brand-atmos text-surface-950"],[explorationIdeas.length,"Explorar","bg-brand-arena text-surface-950"],[horizonIdeas.length,"Horizonte","bg-surface-700 text-white"]].map(([value,label,tone]) => <div key={label as string} className={`rounded-2xl p-4 ${tone}`}><p className="font-mono text-3xl">{value}</p><p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.12em]">{label}</p></div>)}</div></div>
      <div className="mt-7 grid gap-3 border-t border-surface-800 pt-5 md:grid-cols-3">{[[Target,"Foco","Diagnóstico, marcas pessoais e experiências."],[Link2,"Conexões","Valores, repertório, projetos e sinais reais."],[Sparkles,"Autoria","Você confirma o que ganha energia."]].map(([Icon,titleText,body]) => { const CurrentIcon = Icon as typeof Target; return <div key={titleText as string} className="flex gap-3"><CurrentIcon className="mt-0.5 size-4 shrink-0 text-brand-atmos"/><p className="text-xs leading-5 text-surface-300"><strong className="block text-white">{titleText as string}</strong>{body as string}</p></div> })}</div>
    </section>

    <section className="rounded-2xl border border-surface-300 bg-white p-5 sm:p-6"><div className="flex items-center gap-2"><Plus className="size-4 text-brand-kobold"/><div><h2 className="font-sans text-lg font-medium">Registrar uma possibilidade</h2><p className="mt-1 text-xs text-surface-500">Fica nesta sessão da alpha; ainda não vira tarefa, proposta ou compromisso.</p></div></div><form onSubmit={addIdea} className="mt-5 grid gap-3 lg:grid-cols-[1fr_1.4fr_auto_auto]"><input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={100} placeholder="Nome da ideia" className="h-11 rounded-xl border border-surface-300 px-3 text-sm outline-none focus:border-brand-kobold"/><input value={note} onChange={(event) => setNote(event.target.value)} maxLength={240} placeholder="O que te chamou? (opcional)" className="h-11 rounded-xl border border-surface-300 px-3 text-sm outline-none focus:border-brand-kobold"/><label className="flex items-center gap-2 px-1 text-xs text-surface-600"><input type="checkbox" checked={focusFit} onChange={(event) => setFocusFit(event.target.checked)} className="size-4 accent-brand-kobold"/> conversa com o foco</label><button type="submit" className="rounded-xl bg-surface-950 px-4 py-2 text-sm font-semibold text-white">Guardar</button></form></section>

    <section className="grid gap-7 xl:grid-cols-3">{[["Foco agora", focusIdeas, "Energia protegida para o diagnóstico e experiências."],["Explorar com limite", explorationIdeas, "Teste pequeno ou pesquisa delimitada, sem ampliar a operação."],["Horizonte", horizonIdeas, "Preservado sem obrigação; a recorrência poderá mudar sua posição."]].map(([titleText, group, description]) => <div key={titleText as string}><div className="mb-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-kobold">{titleText as string}</p><p className="mt-1 text-xs text-surface-500">{description as string}</p></div><div className="space-y-3">{(group as Idea[]).length ? (group as Idea[]).map((idea) => <IdeaCard key={idea.id} idea={idea}/>) : <div className="rounded-2xl border border-dashed border-surface-300 p-5 text-xs text-surface-500">Nenhuma ideia nesta faixa ainda.</div>}</div></div>)}</section>
    <p className="flex gap-2 rounded-xl bg-brand-arena/40 p-4 text-xs leading-5 text-surface-700"><CircleDot className="mt-0.5 size-3.5 shrink-0 text-brand-cotta"/>A pontuação é uma lente transparente de discernimento: não mede talento, destino ou valor pessoal. Você pode mudar a leitura sempre que aparecer uma nova evidência.</p>
  </div>
}
