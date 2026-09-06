import Link from "next/link"
import { AlertTriangle, ArrowRight, CheckCircle2, CircleDot, Clock3, MoveUpRight } from "lucide-react"

import { SectionHeading } from "@/components/studio/section-heading"
import { Badge } from "@/components/ui/badge"
import { readOperationalPanel } from "@/lib/isa/operational-panel"
import { osNavigation } from "@/lib/studio/navigation"

export default async function StudioOsPage() {
  const panel = await readOperationalPanel()
  const openTasks = panel.tasks.filter((task) => !task.status.toLowerCase().includes("conclu"))
  const surfaceSafePending = panel.clarity.pending.filter((item) => !/\bisa\b/i.test(item))

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-7 sm:px-7 lg:px-10 lg:py-10">
      <SectionHeading index="00" eyebrow="Centro de comando" title="O Studio, agora." description="Uma visão operacional do que pede atenção, do que está bloqueado e do próximo movimento que produz clareza." />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Indicadores do Studio">
        {[
          [panel.projects.length, "Projetos em foco", "Frentes com movimento registrado"],
          [panel.clients.length, "Clientes mapeados", "Relações com memória central"],
          [openTasks.length, "Próximas ações", "Fila operacional consolidada"],
          [panel.alerts.length, "Pontos de atenção", "Prazos e bloqueios explícitos"],
        ].map(([value, label, note], index) => (
          <article key={label} className={`rounded-2xl border p-5 ${index === 3 ? "border-brand-sahara/50 bg-brand-arena/45" : "border-surface-300 bg-white"}`}>
            <p className="font-mono text-3xl font-medium">{value}</p><p className="mt-6 text-sm font-semibold">{label}</p><p className="mt-1 text-xs text-surface-500">{note}</p>
          </article>
        ))}
      </section>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <section className="overflow-hidden rounded-[1.75rem] bg-surface-950 text-white">
          <div className="flex items-start justify-between border-b border-surface-800 p-6 sm:p-8">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-atmos">Foco operacional</p><h2 className="mt-3 font-sans text-2xl font-medium">Ordem do dia</h2></div>
            <Clock3 className="size-5 text-surface-500" />
          </div>
          <div className="divide-y divide-surface-800">
            {panel.priorities.slice(0, 5).map((priority, index) => (
              <article key={priority} className="grid grid-cols-[32px_1fr] gap-3 px-6 py-5 sm:px-8"><span className="font-mono text-[10px] text-brand-atmos">0{index + 1}</span><p className="text-sm leading-6 text-surface-200">{priority}</p></article>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-surface-300 bg-white p-6 sm:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-kobold">Leitura em uma frase</p>
          <h2 className="mt-4 font-sans text-2xl font-medium leading-tight">{panel.clarity.summary}</h2>
          <div className="mt-8 space-y-3">
            {surfaceSafePending.slice(0, 3).map((item) => <p key={item} className="flex gap-3 rounded-xl bg-surface-100 p-3 text-xs leading-5 text-surface-600"><CircleDot className="mt-0.5 size-3.5 shrink-0 text-brand-cotta" />{item}</p>)}
          </div>
          <Link href="/os/decisoes" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-brand-kobold">Abrir decisões <ArrowRight className="size-3.5" /></Link>
        </section>
      </div>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-kobold">Arquitetura operacional</p><h2 className="mt-2 font-sans text-2xl font-medium">Módulos do OS</h2></div><p className="hidden text-xs text-surface-500 sm:block">Fonte atualizada em {panel.lastConsolidation}</p></div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {osNavigation.slice(1).map((item, index) => {
            const Icon = item.icon
            return <Link key={item.href} href={item.href} className="group flex min-h-36 flex-col justify-between rounded-2xl border border-surface-300 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-bleu hover:shadow-[0_16px_40px_-30px_#006298]"><div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-xl bg-brand-antar/60 text-brand-kobold"><Icon className="size-4" /></span><span className="font-mono text-[9px] text-surface-400">0{index + 1}</span></div><div><h3 className="font-sans text-lg font-medium">{item.label}</h3><p className="mt-1 text-xs text-surface-500">{item.description}</p></div></Link>
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-6 xl:grid-cols-[1fr_0.72fr]">
        <div>
          <div className="mb-5 flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-kobold">Movimento</p><h2 className="mt-2 font-sans text-2xl font-medium">Projetos em foco</h2></div><Link href="/os/projetos" className="text-xs font-semibold">Ver todos →</Link></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {panel.projects.slice(0, 4).map((project) => <article key={project.name} className="rounded-2xl border border-surface-300 bg-white p-5"><div className="flex items-start justify-between gap-3"><h3 className="font-sans text-base font-medium">{project.name}</h3><Badge variant="outline" className="text-[9px]">{project.status}</Badge></div><p className="mt-5 line-clamp-3 text-xs leading-5 text-surface-600">{project.objective}</p><p className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-kobold"><MoveUpRight className="size-3" />{project.tasks.length} ações registradas</p></article>)}
          </div>
        </div>
        <div>
          <div className="mb-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-cotta">Risco explícito</p><h2 className="mt-2 font-sans text-2xl font-medium">Pontos de atenção</h2></div>
          <div className="overflow-hidden rounded-2xl border border-brand-sahara/50 bg-brand-arena/30">
            {panel.alerts.length ? panel.alerts.slice(0, 5).map((alert) => <article key={`${alert.project}-${alert.title}`} className="border-b border-brand-sahara/30 p-5 last:border-0"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-cotta"><AlertTriangle className="size-3.5" />{alert.project}</p><p className="mt-2 text-sm font-medium leading-5">{alert.title}</p><p className="mt-2 text-xs text-surface-600">{alert.deadline} · {alert.status}</p></article>) : <div className="p-8 text-center"><CheckCircle2 className="mx-auto size-6 text-brand-midori" /><p className="mt-3 text-sm">Nenhum alerta estruturado agora.</p></div>}
          </div>
        </div>
      </section>
    </div>
  )
}
