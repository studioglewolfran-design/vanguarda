import { AlertTriangle, AudioLines, CheckCircle2, CircleDot, CircleHelp, Clock3, Compass, FileCheck2, FileSignature, FolderKanban, Inbox, ListTodo, Menu, MessageSquareText, Orbit, Sparkles, Users } from "lucide-react"

import { AudioUploadForm } from "@/components/dashboard/audio-upload-form"
import { CaptureForm } from "@/components/dashboard/capture-form"
import { LorranaActionCard } from "@/components/dashboard/lorrana-action-card"
import { OrbitalMap } from "@/components/dashboard/orbital-map"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { readOperationalPanel } from "@/lib/isa/operational-panel"

const navigation = [
  ["#agora", "Agora", Sparkles],
  ["#clareza", "Clareza", Compass],
  ["#clientes", "Clientes", Users],
  ["#campo-orbital", "Campo orbital", Orbit],
  ["#projetos", "Projetos", FolderKanban],
  ["#tarefas", "Tarefas", ListTodo],
  ["#captura", "Captura", Inbox],
] as const

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mb-5"><p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-kobold">{eyebrow}</p><h2 className="mt-2 font-sans text-2xl font-semibold sm:text-3xl">{title}</h2>{description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p> : null}</div>
}

export default async function DashboardPage() {
  const panel = await readOperationalPanel()
  const openTasks = panel.tasks.filter((task) => !task.status.toLowerCase().includes("conclu"))

  return (
    <main className="min-h-screen bg-surface-100 text-foreground">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-surface-800 bg-surface-950 text-surface-100 lg:flex">
        <div className="border-b border-surface-800 px-6 py-7">
          <div className="flex items-center gap-2 text-brand-atmos"><Sparkles className="size-5" /><span className="font-sans text-lg font-semibold">Isa</span></div>
          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-brand-atmos">Inteligência Sistêmica Autoral</p>
          <p className="mt-3 text-xs leading-5 text-surface-400">Projetos, contexto e próximos movimentos do Studio.</p>
        </div>
        <nav aria-label="Navegação principal" className="flex-1 space-y-1 px-3 py-5">
          {navigation.map(([href, label, Icon]) => <a key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-surface-300 transition hover:bg-surface-800 hover:text-white"><Icon className="size-4 text-brand-atmos" />{label}</a>)}
        </nav>
        <div className="border-t border-surface-800 p-5 text-xs leading-5 text-surface-400"><span className="inline-block size-2 rounded-full bg-brand-midori" />&nbsp; Fonte operacional<br />Atualizada em {panel.lastConsolidation}</div>
      </aside>

      <div className="lg:pl-64">
        <div className="sticky top-0 z-30 flex items-center gap-3 border-b bg-white/90 px-4 py-3 backdrop-blur lg:hidden"><Menu className="size-5" /><div><p className="font-sans text-sm font-semibold">Isa</p><p className="text-[10px] text-muted-foreground">Inteligência Sistêmica Autoral</p></div><a href="#captura" className="ml-auto rounded-full bg-primary px-3 py-1.5 text-xs font-semibold">Capturar</a></div>

        <div className="mx-auto max-w-[1240px] px-4 py-7 sm:px-8 lg:px-10 lg:py-10">
          <header className="mb-8 border-b border-surface-300 pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-kobold">Centro de projetos</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-[0.98] sm:text-5xl">O que está em movimento<br />e o que fazer agora.</h1>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white px-3 py-1.5"><strong>{panel.projects.length}</strong> projetos em foco</span>
              <span className="rounded-full bg-white px-3 py-1.5"><strong>{panel.clients.length}</strong> clientes mapeados</span>
              <span className="rounded-full bg-white px-3 py-1.5"><strong>{openTasks.length}</strong> próximas tarefas</span>
              <span className="rounded-full bg-brand-antar/60 px-3 py-1.5 text-brand-kobold"><strong>{panel.alerts.length}</strong> pontos de atenção</span>
            </div>
          </header>

          <section id="agora" className="scroll-mt-20">
            <SectionHeading eyebrow="Próximo movimento" title="Agora" description="A dashboard começa pela ação que destrava uma conversa real, depois amplia para o campo completo do Studio." />
            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
              <LorranaActionCard />
              <Card className="bg-surface-950 text-white">
                <CardHeader>
                  <CardTitle className="font-sans text-xl text-white">Ordem do dia</CardTitle>
                  <CardDescription className="text-surface-400">As prioridades que estão mais perto do centro.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {panel.priorities.slice(0, 4).map((priority, index) => (
                    <div key={priority} className="flex gap-3 border-b border-surface-800 pb-3 last:border-0 last:pb-0">
                      <span className="font-mono text-xs text-brand-atmos">0{index + 1}</span>
                      <p className="text-sm leading-5 text-surface-200">{priority}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="clareza" className="scroll-mt-20 pt-14">
            <SectionHeading eyebrow="Direção atual" title="Clareza antes de expansão" description="A síntese distingue o que já sustenta o Studio daquilo que ainda precisa de evidência ou escolha explícita." />
            <Card className="overflow-hidden bg-white">
              <CardHeader className="border-b bg-surface-950 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-atmos">Leitura em uma frase</p>
                <CardTitle className="max-w-4xl pt-2 font-sans text-2xl leading-8 text-white">{panel.clarity.summary}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 pt-6 lg:grid-cols-3">
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-kobold"><Sparkles className="size-4" /> Núcleo estável</p>
                  <div className="mt-3 space-y-3">{panel.clarity.stable.slice(0, 3).map((item) => <p key={item} className="border-l-2 border-brand-atmos pl-3 text-sm leading-6 text-muted-foreground">{item}</p>)}</div>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-midori"><CheckCircle2 className="size-4" /> Confirmado</p>
                  <div className="mt-3 space-y-3">{panel.clarity.confirmed.slice(0, 3).map((item) => <p key={item} className="border-l-2 border-brand-midori pl-3 text-sm leading-6 text-muted-foreground">{item}</p>)}</div>
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-cotta"><CircleHelp className="size-4" /> Decisão de Gleide</p>
                  <div className="mt-3 space-y-3">{panel.clarity.pending.slice(0, 3).map((item) => <p key={item} className="border-l-2 border-brand-cotta pl-3 text-sm leading-6 text-muted-foreground">{item}</p>)}</div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="clientes" className="scroll-mt-20 pt-14">
            <SectionHeading eyebrow="Memória central" title="Clientes e projetos" description="Um índice único para visualizar estado, documentos localizados, lacunas e próxima ação. Os originais permanecem no Drive." />
            <div className="grid gap-5 xl:grid-cols-2">
              {panel.clients.map((client) => (
                <Card key={client.id} className="overflow-hidden bg-white">
                  <CardHeader className="border-b">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <CardTitle className="font-sans text-xl">{client.name}</CardTitle>
                        <CardDescription className="mt-1">{client.relationship}</CardDescription>
                      </div>
                      <Badge variant="outline">{client.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl bg-surface-100 p-3"><FileSignature className="mb-2 size-4 text-brand-kobold" /><strong className="block">Propostas</strong><span className="mt-1 block leading-5 text-muted-foreground">{client.proposals}</span></div>
                      <div className="rounded-xl bg-surface-100 p-3"><FileCheck2 className="mb-2 size-4 text-brand-kobold" /><strong className="block">Contratos</strong><span className="mt-1 block leading-5 text-muted-foreground">{client.contracts}</span></div>
                      <div className="rounded-xl bg-surface-100 p-3"><ListTodo className="mb-2 size-4 text-brand-kobold" /><strong className="block">Briefings</strong><span className="mt-1 block leading-5 text-muted-foreground">{client.briefings}</span></div>
                      <div className="rounded-xl bg-surface-100 p-3"><MessageSquareText className="mb-2 size-4 text-brand-kobold" /><strong className="block">Conversas</strong><span className="mt-1 block leading-5 text-muted-foreground">{client.conversations}</span></div>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-brand-kobold">Próxima ação</p>
                      <p className="mt-2 text-sm font-medium leading-6">{client.next}</p>
                    </div>
                    <div className="rounded-xl border border-brand-sahara/50 bg-brand-arena/30 p-3">
                      <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-cotta"><AlertTriangle className="size-3.5" /> Atenção</p>
                      <p className="mt-1 text-xs leading-5">{client.alert}</p>
                    </div>
                    <p className="border-t pt-3 font-mono text-[10px] leading-5 text-muted-foreground">{client.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="campo-orbital" className="scroll-mt-20">
            <SectionHeading eyebrow="Síntese" title="Campo orbital" description="A distância mostra quanto cada frente exige da sua atenção. O detalhe operacional aparece nos projetos abaixo." />
            <OrbitalMap fronts={panel.orbitalFronts} />
          </section>

          <section id="projetos" className="scroll-mt-20 pt-14">
            <SectionHeading eyebrow="Contexto de trabalho" title="Projetos agora" description="Cada projeto reúne objetivo, situação, bloqueio e as tarefas que sustentam o próximo avanço." />
            <div className="grid gap-5 xl:grid-cols-2">
              {panel.projects.map((project) => (
                <Card key={project.name} className="bg-white">
                  <CardHeader className="border-b">
                    <div className="flex items-start justify-between gap-3"><CardTitle className="font-sans text-xl leading-6">{project.name}</CardTitle><Badge variant="outline">{project.status}</Badge></div>
                    <CardDescription className="pt-2 text-sm leading-6">{project.objective}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-kobold">Contexto</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{project.context || "Contexto resumido ainda não registrado."}</p></div>
                    <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-kobold">Próximas tarefas</p><div className="mt-2 space-y-2">{project.tasks.length ? project.tasks.map((task) => <p key={task} className="flex gap-2 rounded-lg bg-surface-100 p-3 text-sm leading-5"><CircleDot className="mt-0.5 size-4 shrink-0 text-brand-kobold" />{task}</p>) : <p className="text-sm text-muted-foreground">Nenhuma tarefa aberta registrada.</p>}</div></div>
                    <div className="rounded-lg border border-brand-sahara/50 bg-brand-arena/35 p-3"><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-cotta">Bloqueio</p><p className="mt-1 text-xs leading-5">{project.blocker}</p></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="tarefas" className="scroll-mt-20 pt-14">
            <SectionHeading eyebrow="Execução" title="Próximas tarefas consolidadas" description="Uma fila curta, ligada aos projetos — não um depósito de ideias." />
            <Card className="overflow-hidden bg-white"><CardContent className="p-0">
              {openTasks.map((task, index) => <article key={`${task.project}-${task.action}`} className="grid gap-3 border-b p-4 last:border-0 sm:grid-cols-[36px_minmax(0,1fr)_150px] sm:items-center">
                <span className="flex size-8 items-center justify-center rounded-full bg-surface-950 font-mono text-xs text-white">{index + 1}</span>
                <div><div className="mb-1 flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-kobold">{task.project}</span><Badge variant="outline">{task.status}</Badge></div><p className="text-sm font-medium leading-5">{task.action}</p><p className="mt-1 text-xs text-muted-foreground">Responsável: {task.owner}</p></div>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground sm:justify-end"><Clock3 className="size-3.5" />{task.deadline}</p>
              </article>)}
            </CardContent></Card>
          </section>

          <section id="captura" className="scroll-mt-20 py-14">
            <SectionHeading eyebrow="Entrada única" title="Adicionar contexto" description="Registre algo novo por texto ou áudio. Capturar não transforma automaticamente uma ideia em tarefa." />
            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
              <Card className="bg-white"><CardHeader><CardTitle className="font-sans text-xl">Escrever</CardTitle><CardDescription>Projeto, decisão, tarefa, prazo, pessoa ou bloqueio.</CardDescription></CardHeader><CardContent><CaptureForm /></CardContent></Card>
              <Card className="bg-white"><CardHeader><CardTitle className="flex items-center gap-2 font-sans text-xl"><AudioLines className="size-5 text-brand-kobold" /> Áudio</CardTitle><CardDescription>Envie pelo celular para a inbox da Isa.</CardDescription></CardHeader><CardContent><AudioUploadForm /></CardContent></Card>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><CheckCircle2 className="size-4 text-brand-midori" /> A Isa organiza o contexto; você confirma mudanças de prioridade, prazo ou compromisso.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
