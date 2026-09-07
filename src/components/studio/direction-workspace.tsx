"use client"

import { useEffect, useMemo, useState } from "react"
import { CheckCircle2, CircleDot, FileText, LockKeyhole, RotateCcw, Save } from "lucide-react"

type Status = "Não iniciada" | "Em andamento" | "Em validação" | "Concluída" | "A confirmar" | "Superada"

type DirectionItem = {
  id: string
  label: string
  title: string
  status: Status
  source: string
  context: string
  recorded: string
  questions: string[]
}

type Answer = {
  response: string
  evidence: string
  decision: string
  nextStep: string
  status: Status
  savedAt?: string
}

const storageKey = "studio-os-direction-answers-v1"

const missions: DirectionItem[] = [
  {
    id: "m12",
    label: "M12",
    title: "Motor Moral",
    status: "Concluída",
    source: "docs/direcao-negocio/M12-MOTOR-MORAL.md",
    context: "Reciprocidade justa, cooperação, crescimento paciente e autonomia já formam a base vigente.",
    recorded: "A missão consolidou limites éticos, critérios para trocas justas e a tensão entre colaboração e sustentabilidade financeira.",
    questions: [
      "Que tipo de troca precisa existir para que este trabalho seja bom para os dois lados?",
      "Quais limites, responsabilidades e sinais tornam essa troca justa na prática?",
      "O que eu quero preservar quando cobrar, vender, colaborar e delegar?",
    ],
  },
  {
    id: "m13",
    label: "M13",
    title: "Mapa de Mercados",
    status: "Em validação",
    source: "docs/direcao-negocio/M13-MAPA-DE-MERCADOS.md",
    context: "A1 foi escolhido como foco de entrada: operações e marcas pessoais premium de beleza e cuidado.",
    recorded: "As auditorias trouxeram wellness, saúde, moda e beleza como campo amplo; a missão reduziu o primeiro ciclo a A1, com foco local e validação de ticket, capacidade e pagamento ainda pendente.",
    questions: [
      "O que ainda é válido na escolha de A1 e o que precisa ser corrigido?",
      "Que evidências mostram acesso, dor, capacidade de pagamento e capacidade de entrega?",
      "Quais filtros mínimos, ticket e capacidade do Studio precisam ser confirmados?",
    ],
  },
  {
    id: "m14",
    label: "M14",
    title: "Definição do ICP",
    status: "Em validação",
    source: "docs/direcao-negocio/M14-DEFINICAO-DO-ICP.md",
    context: "O ICP inicial são profissionais experientes de beleza e cuidado, com clientela ativa e competência reconhecida.",
    recorded: "A Auditoria de Público apontou a distância entre competência real e expressão pública; a missão preservou esse sinal, mas abriu a investigação para serviço, experiência, recorrência e renda.",
    questions: [
      "Qual problema é prioritário para cada pessoa: comunicação, experiência, recorrência, renda, posicionamento ou ensino?",
      "Que frases, exemplos e consequências vieram de uma conversa real — e não apenas de uma hipótese?",
      "Existe disposição de investir, tempo para implementar e abertura para uma direção com autonomia?",
    ],
  },
  {
    id: "m15",
    label: "M15",
    title: "Ímã de Problemas",
    status: "Não iniciada",
    source: "docs/direcao-negocio/M15-IMA-DE-PROBLEMAS.md",
    context: "Há problemas candidatos, mas nenhum foi escolhido como dor central comprável.",
    recorded: "Os candidatos já registrados envolvem expressão pública, estética sem fundamento, fragmentação do fundador e dificuldade de compreender a entrega do Studio.",
    questions: [
      "Qual problema aparece com mais frequência e urgência nas conversas?",
      "Como a própria pessoa descreve esse problema sem usar a linguagem do Studio?",
      "O que ela perde ou não consegue construir enquanto o problema permanece?",
    ],
  },
  {
    id: "m16",
    label: "M16",
    title: "Tese de Valor",
    status: "Não iniciada",
    source: "docs/direcao-negocio/M16-TESE-DE-VALOR.md",
    context: "A capacidade de traduzir sinais, relações e complexidade existe, mas a tese ainda precisa ser consolidada.",
    recorded: "As formulações anteriores falam de fundamento antes de forma, coerência entre valor interno e expressão e curadoria humana; nenhuma foi escolhida como tese final.",
    questions: [
      "Que transformação mínima o Studio consegue produzir com alto controle?",
      "O que torna essa transformação diferente de criação visual, social media ou consultoria genérica?",
      "Que promessa seria bonita, mas ainda não está comprovada ou sob controle do Studio?",
    ],
  },
  {
    id: "m17",
    label: "M17",
    title: "Oferta",
    status: "Não iniciada",
    source: "docs/direcao-negocio/M17-OFERTA.md",
    context: "O Diagnóstico Autoral é o piloto mais próximo, mas escopo, preço, formato e prazo ainda são testes.",
    recorded: "A Auditoria de Negócio propôs cinco SKUs e o Programa Autoralidade, mas preços, arquitetura e portfólio foram tratados como históricos ou hipóteses após a recalibração.",
    questions: [
      "Qual é a única oferta que vale testar primeiro com o ICP escolhido?",
      "Qual transformação, formato, duração, participação do cliente e limite de escopo serão explícitos?",
      "Que preço e critério de sucesso tornam o teste comercial realista e justo?",
    ],
  },
  {
    id: "m18",
    label: "M18",
    title: "Direção Estratégica",
    status: "Em andamento",
    source: "docs/direcao-negocio/M18-DIRECAO-ESTRATEGICA.md",
    context: "A consolidação parcial precisa incorporar M15–M17 e a direção vigente de diagnóstico e experiências.",
    recorded: "A direção atual está parcialmente consolidada em M12–M14 e precisa incorporar a decisão mais recente: diagnóstico para profissionais e marcas pessoais, com experiências como frente associada.",
    questions: [
      "Qual direção é suficientemente clara para orientar os próximos 90 dias?",
      "O que deixa de ser serviço principal, mesmo que continue podendo aparecer como projeto oportunístico?",
      "Quais decisões continuam abertas e qual é a menor evidência necessária para fechá-las?",
    ],
  },
]

const guidelines: DirectionItem[] = [
  {
    id: "research-01",
    label: "01",
    title: "Auditoria de Mercado",
    status: "Em validação",
    source: "diretrizes/research/01-auditoria-mercado.md",
    context: "Pesquisa de julho sobre território, concorrência, diferenciação e a tese de fundamento antes de forma.",
    recorded: "A pesquisa defendeu fundamento antes de forma, brand system vivo, curadoria humana e experiências, mas tratou operação global e várias diferenciações como mais definidas do que estavam.",
    questions: [
      "O que desta pesquisa continua válido depois da decisão de foco local em A1?",
      "Quais ideias são diferenciais reais e quais são apenas linguagem aspiracional?",
      "Que hipótese de mercado precisa de evidência antes de voltar a orientar uma oferta?",
    ],
  },
  {
    id: "research-02",
    label: "02",
    title: "Auditoria de Público",
    status: "Em validação",
    source: "diretrizes/research/02-auditoria-publico.md",
    context: "Pesquisa que identificou profissionais consolidados e a tensão entre competência real e expressão pública.",
    recorded: "A pesquisa registrou dores e desejos ligados à expressão pública, coerência entre self real e self público e orgulho de aparecer; a própria auditoria reconheceu que faltava escuta sistemática.",
    questions: [
      "Quais respostas vieram de observação direta, propostas recusadas ou interpretação do Studio?",
      "A dor de expressão pública continua sendo a principal ou divide espaço com experiência, recorrência e renda?",
      "Que lacuna só uma conversa ao vivo consegue esclarecer?",
    ],
  },
  {
    id: "research-03",
    label: "03",
    title: "Auditoria de Negócio",
    status: "A confirmar",
    source: "diretrizes/research/03-auditoria-negocio.md",
    context: "Pesquisa de julho com SKUs, preços, recorrência e arquitetura que contém hipóteses depois revogadas.",
    recorded: "A lógica de calibrar a oferta ao nível de consciência é aproveitável; Vanguarda como guarda-chuva, Orbita como plataforma imediata e os cinco SKUs não são decisões vigentes.",
    questions: [
      "O que ainda serve como raciocínio econômico, sem tratar os cinco SKUs como catálogo vigente?",
      "Que parte da proposta pode ser testada agora com uma única oferta de diagnóstico?",
      "Quais trechos precisam ser marcados como superados: Vanguarda-guarda-chuva, Orbita ou preços anteriores?",
    ],
  },
  {
    id: "research-04",
    label: "04",
    title: "Benchmarking",
    status: "Não iniciada",
    source: "diretrizes/research/04-benchmarking-perguntas.md",
    context: "Questionário ainda em branco para transformar admiração em práticas observáveis, não em cópia.",
    recorded: "Não há respostas consolidadas neste arquivo. Ele pode ser preenchido depois que a direção central estiver mais clara, para evitar que referências aspiracionais conduzam a estratégia.",
    questions: [
      "Qual referência realmente elevou a barra — e qual detalhe específico merece ser estudado?",
      "O que eu gostaria de adaptar, o que devo evitar e qual é o limite entre referência e cópia?",
      "Que gap dói mais hoje e qual gap pode se transformar em contraste autoral?",
    ],
  },
]

const allItems = [...missions, ...guidelines]

const statuses: Status[] = ["Não iniciada", "Em andamento", "Em validação", "Concluída", "A confirmar", "Superada"]

function defaultAnswer(item: DirectionItem): Answer {
  return { response: "", evidence: "", decision: "", nextStep: "", status: item.status }
}

function formatSavedAt(value?: string) {
  if (!value) return "Ainda não salvo nesta sessão"
  return `Salvo em ${new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(value))}`
}

function statusTone(status: Status) {
  if (status === "Concluída") return "bg-brand-midori/10 text-brand-midori"
  if (status === "Em validação" || status === "A confirmar") return "bg-brand-arena text-brand-cotta"
  if (status === "Superada") return "bg-surface-200 text-surface-600"
  return "bg-brand-antar text-brand-kobold"
}

export function DirectionWorkspace() {
  const [track, setTrack] = useState<"missions" | "guidelines">("missions")
  const [activeId, setActiveId] = useState("m14")
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [hydrated, setHydrated] = useState(false)

  const items = track === "missions" ? missions : guidelines
  const activeItem = allItems.find((item) => item.id === activeId) ?? missions[2]
  const activeAnswer = answers[activeItem.id] ?? defaultAnswer(activeItem)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey)
      if (stored) setAnswers(JSON.parse(stored) as Record<string, Answer>)
    } catch {
      // A resposta local não deve bloquear a abertura da página.
    } finally {
      setHydrated(true)
    }
  }, [])

  const progress = useMemo(() => {
    const complete = allItems.filter((item) => (answers[item.id]?.status ?? item.status) === "Concluída").length
    const started = allItems.filter((item) => Boolean(answers[item.id]?.response?.trim() || answers[item.id]?.evidence?.trim() || answers[item.id]?.decision?.trim())).length
    return { complete, started, total: allItems.length }
  }, [answers])

  function updateAnswer(field: keyof Answer, value: string) {
    setAnswers((current) => ({ ...current, [activeItem.id]: { ...defaultAnswer(activeItem), ...current[activeItem.id], [field]: value } }))
  }

  function saveCurrent() {
    const now = new Date().toISOString()
    const next = { ...answers, [activeItem.id]: { ...activeAnswer, savedAt: now } }
    setAnswers(next)
    window.localStorage.setItem(storageKey, JSON.stringify(next))
  }

  function resetCurrent() {
    const next = { ...answers }
    delete next[activeItem.id]
    setAnswers(next)
    window.localStorage.setItem(storageKey, JSON.stringify(next))
  }

  function selectTrack(nextTrack: "missions" | "guidelines") {
    setTrack(nextTrack)
    setActiveId(nextTrack === "missions" ? "m14" : "research-01")
  }

  return (
    <div className="mt-8 space-y-7">
      <section className="overflow-hidden rounded-[1.75rem] bg-surface-950 p-6 text-white sm:p-8">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-atmos">Direção do negócio · alpha privada</p>
            <h2 className="mt-3 max-w-2xl font-sans text-3xl font-medium leading-tight">Responder, comparar e fechar no mesmo lugar.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-surface-300">As respostas ficam salvas apenas neste navegador. Elas começam como reflexão ou evidência e só viram decisão quando você confirma.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[[progress.complete, "Concluídas"], [progress.started, "Com resposta"], [progress.total, "Registros"]].map(([value, label]) => <div key={label} className="rounded-2xl bg-surface-900 p-4"><p className="font-mono text-3xl text-brand-atmos">{value}</p><p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-surface-400">{label}</p></div>)}
          </div>
        </div>
        <div className="mt-7 flex items-center gap-2 border-t border-surface-800 pt-5 text-xs text-surface-400"><LockKeyhole className="size-3.5 text-brand-atmos" /> Salvamento local · não envia respostas para fora do Studio OS</div>
      </section>

      <div className="grid gap-7 xl:grid-cols-[330px_1fr]">
        <aside className="space-y-4">
          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-surface-300 bg-white p-2">
            <button type="button" onClick={() => selectTrack("missions")} className={`rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${track === "missions" ? "bg-surface-950 text-white" : "text-surface-600 hover:bg-surface-100"}`}><span className="block font-mono text-[9px] uppercase tracking-[0.14em] opacity-60">Trilha</span>Missões</button>
            <button type="button" onClick={() => selectTrack("guidelines")} className={`rounded-xl px-3 py-3 text-left text-xs font-semibold transition ${track === "guidelines" ? "bg-surface-950 text-white" : "text-surface-600 hover:bg-surface-100"}`}><span className="block font-mono text-[9px] uppercase tracking-[0.14em] opacity-60">Pesquisa</span>Diretrizes</button>
          </div>
          <div className="rounded-[1.5rem] border border-surface-300 bg-white p-3">
            <div className="px-3 pb-3 pt-2"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-kobold">{track === "missions" ? "M12 a M18" : "Auditorias 01 a 04"}</p><p className="mt-2 text-xs leading-5 text-surface-500">Escolha um registro para responder e atualizar.</p></div>
            <div className="space-y-1">
              {items.map((item) => {
                const answer = answers[item.id]
                const currentStatus = answer?.status ?? item.status
                const hasResponse = Boolean(answer?.response?.trim() || answer?.evidence?.trim() || answer?.decision?.trim())
                return <button type="button" key={item.id} onClick={() => setActiveId(item.id)} className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition ${activeId === item.id ? "bg-brand-antar/60" : "hover:bg-surface-100"}`}><span className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg font-mono text-[10px] ${activeId === item.id ? "bg-brand-kobold text-white" : "bg-surface-100 text-surface-600"}`}>{item.label}</span><span className="min-w-0"><span className="flex items-center gap-2"><span className="truncate text-sm font-medium">{item.title}</span>{hasResponse ? <CheckCircle2 className="size-3.5 shrink-0 text-brand-midori" aria-label="Tem resposta salva" /> : null}</span><span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${statusTone(currentStatus)}`}>{currentStatus}</span></span></button>
              })}
            </div>
          </div>
        </aside>

        <section className="rounded-[1.75rem] border border-surface-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-5 border-b border-surface-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-brand-antar px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-kobold">{activeItem.label}</span><span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold ${statusTone(activeAnswer.status)}`}>{activeAnswer.status}</span></div><h2 className="mt-4 font-sans text-3xl font-medium leading-tight">{activeItem.title}</h2><p className="mt-2 text-xs text-surface-500">Fonte de contexto: {activeItem.source}</p></div><div className="flex items-center gap-2 text-xs text-surface-500"><FileText className="size-4 text-brand-kobold" />{formatSavedAt(activeAnswer.savedAt)}</div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2"><div className="rounded-2xl border border-brand-bleu/30 bg-brand-antar/25 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-kobold">Contexto já organizado</p><p className="mt-3 text-sm leading-6 text-surface-700">{activeItem.context}</p></div><div className="rounded-2xl border border-surface-300 bg-surface-100/70 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-surface-500">Material já localizado</p><p className="mt-3 text-sm leading-6 text-surface-700">{activeItem.recorded}</p></div></div>

          <div className="mt-7"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-kobold">Perguntas para esta etapa</p><ol className="mt-4 grid gap-3 md:grid-cols-3">{activeItem.questions.map((question, index) => <li key={question} className="rounded-xl bg-surface-100 p-4"><span className="font-mono text-[10px] text-brand-kobold">0{index + 1}</span><p className="mt-4 text-sm leading-5">{question}</p></li>)}</ol></div>

          <div className="mt-8 grid gap-5">
            <label className="block"><span className="text-sm font-semibold">Resposta / reflexão</span><span className="mt-1 block text-xs leading-5 text-surface-500">Escreva livremente. Pode ser uma resposta incompleta, uma lembrança ou uma formulação provisória.</span><textarea value={activeAnswer.response} onChange={(event) => updateAnswer("response", event.target.value)} rows={6} placeholder="O que você pensa ou percebe nesta etapa?" className="mt-3 w-full resize-y rounded-2xl border border-surface-300 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-surface-400 focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20" /></label>
            <div className="grid gap-5 md:grid-cols-2"><label className="block"><span className="text-sm font-semibold">Evidências e fontes</span><span className="mt-1 block text-xs leading-5 text-surface-500">Conversa, caso, frase, documento, comportamento ou dado que sustenta a leitura.</span><textarea value={activeAnswer.evidence} onChange={(event) => updateAnswer("evidence", event.target.value)} rows={5} placeholder="De onde isso vem? O que foi observado?" className="mt-3 w-full resize-y rounded-2xl border border-surface-300 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-surface-400 focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20" /></label><label className="block"><span className="text-sm font-semibold">Decisão ou hipótese</span><span className="mt-1 block text-xs leading-5 text-surface-500">Separe o que já foi escolhido do que ainda precisa ser testado.</span><textarea value={activeAnswer.decision} onChange={(event) => updateAnswer("decision", event.target.value)} rows={5} placeholder="O que fica decidido, hipótese ou a confirmar?" className="mt-3 w-full resize-y rounded-2xl border border-surface-300 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-surface-400 focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20" /></label></div>
            <div className="grid gap-5 md:grid-cols-[1fr_220px]"><label className="block"><span className="text-sm font-semibold">Próximo passo mínimo</span><span className="mt-1 block text-xs leading-5 text-surface-500">Uma ação observável que ajuda a fechar esta etapa.</span><textarea value={activeAnswer.nextStep} onChange={(event) => updateAnswer("nextStep", event.target.value)} rows={3} placeholder="Ex.: conversar com duas pessoas do ICP e registrar a linguagem usada." className="mt-3 w-full resize-y rounded-2xl border border-surface-300 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-surface-400 focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20" /></label><label className="block"><span className="text-sm font-semibold">Estado</span><span className="mt-1 block text-xs leading-5 text-surface-500">Atualiza apenas sua cópia local.</span><select value={activeAnswer.status} onChange={(event) => updateAnswer("status", event.target.value)} className="mt-3 h-12 w-full rounded-xl border border-surface-300 bg-white px-3 text-sm outline-none focus:border-brand-kobold focus:ring-4 focus:ring-brand-atmos/20">{statuses.map((status) => <option key={status}>{status}</option>)}</select></label></div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-surface-200 pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="flex items-center gap-2 text-xs leading-5 text-surface-500"><CircleDot className="size-3.5 text-brand-cotta" />Salvar registra a resposta neste navegador, sem criar compromisso automaticamente.</p><div className="flex gap-2"><button type="button" onClick={resetCurrent} className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-300 px-4 py-2.5 text-xs font-semibold text-surface-600 transition hover:bg-surface-100"><RotateCcw className="size-3.5" />Limpar</button><button type="button" onClick={saveCurrent} disabled={!hydrated} className="inline-flex items-center justify-center gap-2 rounded-xl bg-surface-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-brand-kobold disabled:cursor-not-allowed disabled:opacity-50"><Save className="size-3.5" />Salvar resposta</button></div></div>
        </section>
      </div>

      <p className="flex gap-2 rounded-xl bg-brand-arena/40 p-4 text-xs leading-5 text-surface-700"><CircleDot className="mt-0.5 size-3.5 shrink-0 text-brand-cotta" />A página organiza o trabalho, mas não substitui a confirmação humana: uma resposta pode continuar sendo hipótese, evidência ou decisão pendente.</p>
    </div>
  )
}
