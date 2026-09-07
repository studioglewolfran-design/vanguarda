"use client"

import { FormEvent, useEffect, useState } from "react"
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react"

const STORAGE_KEY = "briefing-profissional-v01"

const sections = [
  {
    eyebrow: "Parte 1 de 4",
    title: "Momento e direção",
    description: "Começamos pelo que está acontecendo agora e pelo que precisa ser preservado.",
    fields: [
      ["q1", "Como você descreveria seu momento profissional hoje?"],
      ["q2", "O que gostaria que estivesse diferente nos próximos seis a doze meses?"],
      ["q3", "O que ainda lhe faz bem no trabalho e precisa ser preservado em qualquer mudança?"],
      ["q4", "Como seria uma rotina profissional mais leve, boa e possível para você?"],
    ],
  },
  {
    eyebrow: "Parte 2 de 4",
    title: "Trabalho e operação",
    description: "Agora olhamos para serviço, valor, clientes, rotina e renda de forma aproximada.",
    fields: [
      ["q5", "Quais serviços ou atividades você realiza hoje?"],
      ["q6", "Quais trazem mais satisfação, retorno financeiro e desgaste?"],
      ["q7", "Em que parte do seu trabalho você acredita entregar mais valor?"],
      ["q8", "O que clientes, colegas ou parceiros costumam elogiar, pedir ou indicar?"],
      ["q9", "Que experiência você gostaria que as pessoas tivessem ao trabalhar com você?"],
      ["q10", "Como as oportunidades ou os clientes chegam até você hoje?"],
      ["q11", "O que faz com que retornem, indiquem ou continuem acompanhando seu trabalho?"],
      ["q12", "Quais são, aproximadamente, seus dias e horas de trabalho, volume de atendimentos, faixa de preço e limite mínimo de renda?"],
      ["q13", "Onde existem períodos ociosos, sobrecarga ou dependência excessiva de você?"],
    ],
  },
  {
    eyebrow: "Parte 3 de 4",
    title: "Reconhecimento e prioridade",
    description: "Esta parte separa percepção, obstáculo, desejo e prioridade real.",
    fields: [
      ["q14", "Pelo que você gostaria de ser reconhecida profissionalmente?"],
      ["q15", "As pessoas já percebem esse valor? Que evidências você tem?"],
      ["q16", "O que sua comunicação mostra bem e o que ainda não consegue mostrar?"],
      ["q17", "Você sente que atrai as pessoas certas para o trabalho e a rotina que deseja? Por quê?"],
      ["q18", "Qual é o maior obstáculo hoje? Conte uma situação concreta."],
      ["q19", "O que você já tentou mudar e o que aconteceu?"],
      ["q20", "Se nada mudar nos próximos doze meses, qual será o impacto?"],
      ["q21", "Escolha e ordene até três prioridades: serviço/experiência, recorrência, comunicação de valor, posicionamento, rotina, seleção de clientes, preço e margem, nova renda, ensino ou outra."],
      ["q22", "Se pudesse resolver apenas um problema agora, qual escolheria?"],
    ],
  },
  {
    eyebrow: "Parte 4 de 4",
    title: "Condições e validação",
    description: "Fechamos com os limites reais e com seu retorno sobre este briefing piloto.",
    fields: [
      ["q23", "O que você não pode ou não quer mudar neste momento?"],
      ["q24", "Quanto tempo, energia e investimento consegue dedicar nos próximos três meses sem aumentar sua sobrecarga?"],
      ["q25", "Que tipo de ajuda espera receber agora?"],
      ["q26", "Quanto tempo você levou para responder?"],
      ["q27", "De 0 a 10, quão claras foram as perguntas?"],
      ["q28", "Alguma pergunta pareceu repetitiva, invasiva ou difícil de entender?"],
      ["q29", "O que faltou perguntar para compreender melhor seu momento?"],
      ["q30", "Você preferiria responder por formulário, áudio ou conversa? Por quê?"],
    ],
  },
] as const

type Answers = Record<string, string>

function Question({ name, label, value, onChange }: { name: string; label: string; value: string; onChange: (name: string, value: string) => void }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[15px] font-medium leading-6 text-surface-900">{label}</span>
      <textarea name={name} value={value} onChange={(event) => onChange(name, event.target.value)} rows={4} placeholder="Escreva aqui…" className="w-full resize-y rounded-2xl border border-surface-200 bg-white px-4 py-3.5 text-base leading-6 text-surface-900 shadow-sm outline-none transition placeholder:text-surface-400 focus:border-brand-bleu focus:ring-4 focus:ring-brand-atmos/20" />
    </label>
  )
}

export function BriefingProfissionalForm() {
  const [step, setStep] = useState(0)
  const [identity, setIdentity] = useState({ nome: "", profissao: "" })
  const [answers, setAnswers] = useState<Answers>({})
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState("")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setIdentity(parsed.identity ?? { nome: "", profissao: "" })
        setAnswers(parsed.answers ?? {})
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    if (identity.nome || identity.profissao || Object.keys(answers).length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ identity, answers }))
    }
  }, [identity, answers])

  function goTo(nextStep: number) {
    setStep(nextStep)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    setError("")
    try {
      const response = await fetch("/api/briefing-profissional", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...identity, ...answers, versao: "0.1", _gotcha: new FormData(event.currentTarget).get("_gotcha")?.toString() ?? "" }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error || "Não foi possível confirmar o envio.")
      localStorage.removeItem(STORAGE_KEY)
      setStatus("success")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (submissionError) {
      setStatus("error")
      setError(submissionError instanceof Error ? submissionError.message : "Não foi possível enviar agora.")
    }
  }

  if (status === "success") {
    return (
      <main className="flex min-h-dvh items-center bg-[#f7f5f0] px-5 py-12">
        <section className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-7 text-center shadow-[0_20px_60px_rgba(16,16,16,0.08)]">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-brand-atmos text-surface-950"><Check aria-hidden size={27} /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-kobold">Resposta recebida</p>
          <h1 className="mt-3 text-3xl font-semibold text-surface-950">Obrigada, {identity.nome}.</h1>
          <p className="mt-4 leading-7 text-surface-600">Suas respostas serão lidas como ponto de partida para uma conversa. Nenhuma direção será definida sem validar a leitura com você.</p>
        </section>
      </main>
    )
  }

  const current = sections[step]

  return (
    <main className="min-h-dvh bg-[#f7f5f0] px-4 py-6 sm:px-6 sm:py-10">
      <form onSubmit={submit} className="mx-auto w-full max-w-2xl">
        <header className="mb-6 rounded-[2rem] bg-surface-950 px-6 py-7 text-white shadow-[0_18px_50px_rgba(16,16,16,0.12)] sm:px-8">
          <div className="mb-7 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-surface-400"><span>Studio Gle Wolfran</span><span>Versão piloto 0.1</span></div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-atmos">Direcionamento profissional</p>
          <h1 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em]">Compreender antes de propor um caminho.</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-6 text-surface-300">Este briefing não é um teste. Ele ajuda a separar seu momento atual, o que deseja mudar e o que precisa ser preservado.</p>
          <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-surface-700" aria-label={`Etapa ${step + 1} de 4`}><div className="h-full rounded-full bg-brand-atmos transition-all" style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
        </header>

        <section className="rounded-[2rem] bg-white px-5 py-7 shadow-[0_18px_50px_rgba(16,16,16,0.07)] sm:px-8">
          {step === 0 ? (
            <div className="mb-9 grid gap-5 border-b border-surface-100 pb-8 sm:grid-cols-2">
              <label className="text-sm font-medium text-surface-800">Nome<input required value={identity.nome} onChange={(event) => setIdentity((value) => ({ ...value, nome: event.target.value }))} className="mt-2 w-full rounded-xl border border-surface-200 px-4 py-3 text-base outline-none focus:border-brand-bleu focus:ring-4 focus:ring-brand-atmos/20" /></label>
              <label className="text-sm font-medium text-surface-800">Profissão ou área<input required value={identity.profissao} onChange={(event) => setIdentity((value) => ({ ...value, profissao: event.target.value }))} className="mt-2 w-full rounded-xl border border-surface-200 px-4 py-3 text-base outline-none focus:border-brand-bleu focus:ring-4 focus:ring-brand-atmos/20" /></label>
            </div>
          ) : null}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-kobold">{current.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold text-surface-950">{current.title}</h2>
          <p className="mt-3 text-[15px] leading-6 text-surface-600">{current.description}</p>
          <div className="mt-8 space-y-8">{current.fields.map(([name, label]) => <Question key={name} name={name} label={label} value={answers[name] ?? ""} onChange={(field, value) => setAnswers((currentAnswers) => ({ ...currentAnswers, [field]: value }))} />)}</div>
          {step === 3 ? <><input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />{status === "error" ? <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error} Suas respostas continuam salvas neste aparelho.</div> : null}</> : null}
          <div className="mt-9 flex gap-3 border-t border-surface-100 pt-6">
            {step > 0 ? <button type="button" onClick={() => goTo(step - 1)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-surface-200 px-4 font-medium text-surface-700"><ArrowLeft size={18} /> Voltar</button> : null}
            {step < 3 ? <button type="button" onClick={() => goTo(step + 1)} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-surface-950 px-5 font-semibold text-white">Continuar <ArrowRight size={18} /></button> : <button type="submit" disabled={status === "sending"} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-surface-950 px-5 font-semibold text-white disabled:opacity-60">{status === "sending" ? <><LoaderCircle className="animate-spin" size={18} /> Enviando…</> : <>Enviar respostas <ArrowRight size={18} /></>}</button>}
          </div>
          <p className="mt-4 text-center text-xs text-surface-400">As respostas ficam salvas neste aparelho enquanto você preenche.</p>
        </section>
      </form>
    </main>
  )
}
