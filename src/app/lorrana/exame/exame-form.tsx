"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, LoaderCircle } from "lucide-react";

const STORAGE_KEY = "exame-lorrana-v1";

const sections = [
  {
    eyebrow: "Parte 1 de 3",
    title: "Complete as frases",
    description: "Escreva a primeira resposta que parecer verdadeira. Não precisa elaborar demais.",
    fields: [
      ["q1", "Sobre cobrar pelo meu trabalho, eu acredito que…"],
      ["q2", "Sobre vender o que faço, eu acredito que…"],
      ["q3", "Sobre dinheiro, eu acredito que…"],
      ["q4", "Sobre crescer profissionalmente, eu acredito que…"],
      ["q5", "Sobre aparecer e ser reconhecida, eu acredito que…"],
      ["q6", "Sobre liderar ou orientar outras pessoas, eu acredito que…"],
      ["q7", "Sobre delegar tarefas e confiar em outras pessoas, eu acredito que…"],
      ["q8", "Sobre ensinar o que sei, eu acredito que…"],
      ["q9", "Sobre escolher uma especialidade ou um público, eu acredito que…"],
      ["q10", "Sobre dizer não a um cliente, colega ou oportunidade, eu acredito que…"],
    ],
  },
  {
    eyebrow: "Parte 2 de 3",
    title: "Observe suas escolhas",
    description: "Pense em situações reais. Se não souber responder, escreva “ainda não sei”.",
    fields: [
      ["q11", "Conte uma situação profissional em que você sentiu que a troca foi justa e boa para todos. O que tornou essa experiência positiva?"],
      ["q12", "Conte uma situação em que você sentiu que deu mais do que recebeu. O que gostaria que tivesse sido diferente?"],
      ["q13", "Quando precisa tomar uma decisão profissional difícil, o que costuma pesar mais: segurança, liberdade, reconhecimento, dinheiro, cuidado com as pessoas, aprendizado ou outra coisa? Por quê?"],
      ["q14", "Que tipo de trabalho faz você sentir orgulho de si mesma, mesmo quando ninguém está vendo?"],
      ["q15", "O que você não aceitaria fazer para crescer ou ganhar mais?"],
      ["q16", "O que você gostaria que as pessoas sentissem depois de trabalhar, aprender ou conviver profissionalmente com você?"],
    ],
  },
] as const;

const values = [
  "Autonomia", "Beleza", "Cuidado", "Cooperação", "Estabilidade", "Excelência",
  "Expressão", "Liberdade", "Reconhecimento", "Segurança", "Serviço", "Transformação",
];

const finalFields = [
  ["q18", "Entre as palavras escolhidas, quais são as três mais importantes? O que cada uma significa para você?"],
  ["q19", "Se tivesse que escolher uma delas como princípio principal para orientar suas decisões profissionais, qual seria? Por quê?"],
  ["q20a", "Quero construir um trabalho que…"],
  ["q20b", "Quero crescer sem abrir mão de…"],
  ["q20c", "Uma relação profissional justa precisa…"],
  ["q20d", "Neste momento, preciso aprender a…"],
] as const;

type Answers = Record<string, string>;

function TextQuestion({ name, label, value, onChange }: {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[15px] font-medium leading-6 text-surface-900">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        rows={4}
        placeholder="Escreva aqui…"
        className="w-full resize-none rounded-2xl border border-surface-200 bg-white px-4 py-3.5 text-base leading-6 text-surface-900 shadow-sm outline-none transition placeholder:text-surface-400 focus:border-brand-bleu focus:ring-4 focus:ring-brand-atmos/20"
      />
    </label>
  );
}

export function ExameForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [otherValue, setOtherValue] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers ?? {});
        setSelectedValues(parsed.selectedValues ?? []);
        setOtherValue(parsed.otherValue ?? "");
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length || selectedValues.length || otherValue) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, selectedValues, otherValue }));
    }
  }, [answers, selectedValues, otherValue]);

  const updateAnswer = (name: string, value: string) => {
    setAnswers((current) => ({ ...current, [name]: value }));
  };

  const toggleValue = (value: string) => {
    setSelectedValues((current) => {
      if (current.includes(value)) return current.filter((item) => item !== value);
      if (current.length >= 5) return current;
      return [...current, value];
    });
  };

  const goTo = (nextStep: number) => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const payload = {
      nome: "Lorrana",
      ...answers,
      q17_valores: [...selectedValues, ...(otherValue.trim() ? [`Outra: ${otherValue.trim()}`] : [])].join(", "),
      _gotcha: new FormData(event.currentTarget).get("_gotcha")?.toString() ?? "",
    };

    try {
      const response = await fetch("/api/exame-lorrana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Não foi possível confirmar o envio.");
      localStorage.removeItem(STORAGE_KEY);
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Não foi possível enviar agora.");
    }
  }

  if (status === "success") {
    return (
      <main className="flex min-h-dvh items-center bg-[#f7f5f0] px-5 py-12">
        <section className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-7 text-center shadow-[0_20px_60px_rgba(16,16,16,0.08)]">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full bg-brand-atmos text-surface-950"><Check aria-hidden size={27} /></div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-kobold">Resposta recebida</p>
          <h1 className="text-3xl font-semibold leading-tight text-surface-950">Obrigada, Lorrana.</h1>
          <p className="mt-4 leading-7 text-surface-600">Suas respostas foram enviadas para a Gleide e serão o ponto de partida para a conversa de vocês.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-[#f7f5f0] px-4 py-6 sm:px-6 sm:py-10">
      <form onSubmit={submit} className="mx-auto w-full max-w-xl">
        <header className="mb-6 rounded-[2rem] bg-surface-950 px-6 py-7 text-white shadow-[0_18px_50px_rgba(16,16,16,0.12)] sm:px-8">
          <div className="mb-7 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-surface-400">
            <span>Studio Gle Wolfran</span><span>15–25 min</span>
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-atmos">Para Lorrana</p>
          <h1 className="max-w-md text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em]">Exame de crenças e motores</h1>
          <p className="mt-5 max-w-lg text-[15px] leading-6 text-surface-300">Este não é um teste e não existem respostas certas. Responda com sinceridade — mesmo que a resposta ainda pareça incompleta.</p>
          <p className="mt-5 rounded-2xl border border-surface-700 bg-surface-900 px-4 py-3 text-sm leading-6 text-surface-200">
            O formulário tem <strong className="text-white">3 partes</strong>. Ao terminar cada uma, toque em continuar. As respostas só serão enviadas no final da parte 3.
          </p>
          <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-surface-700" aria-label={`Etapa ${step + 1} de 3`}>
            <div className="h-full rounded-full bg-brand-atmos transition-all duration-300" style={{ width: `${((step + 1) / 3) * 100}%` }} />
          </div>
        </header>

        <section className="rounded-[2rem] bg-white px-5 py-7 shadow-[0_18px_50px_rgba(16,16,16,0.07)] sm:px-8">
          {step < 2 ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-kobold">{sections[step].eyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold text-surface-950">{sections[step].title}</h2>
              <p className="mt-3 text-[15px] leading-6 text-surface-600">{sections[step].description}</p>
              <div className="mt-8 space-y-8">
                {sections[step].fields.map(([name, label]) => <TextQuestion key={name} name={name} label={label} value={answers[name] ?? ""} onChange={updateAnswer} />)}
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-kobold">Parte 3 de 3</p>
              <h2 className="mt-2 text-2xl font-semibold text-surface-950">Escolha consciente</h2>
              <p className="mt-3 text-[15px] leading-6 text-surface-600">Escolha até cinco palavras que você quer preservar no seu futuro profissional.</p>
              <fieldset className="mt-7">
                <legend className="sr-only">Valores profissionais</legend>
                <div className="grid grid-cols-2 gap-2.5">
                  {values.map((value) => {
                    const checked = selectedValues.includes(value);
                    return (
                      <label key={value} className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition ${checked ? "border-brand-bleu bg-brand-atmos/15 text-surface-950" : "border-surface-200 bg-white text-surface-700"}`}>
                        <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggleValue(value)} disabled={!checked && selectedValues.length >= 5} />
                        <span className={`flex size-5 shrink-0 items-center justify-center rounded-md border ${checked ? "border-brand-kobold bg-brand-kobold text-white" : "border-surface-300"}`}>{checked && <Check size={13} strokeWidth={3} />}</span>
                        {value}
                      </label>
                    );
                  })}
                </div>
                <p className="mt-3 text-sm text-surface-500">{selectedValues.length} de 5 escolhidas</p>
                <label className="mt-5 block text-sm font-medium text-surface-800">Outra palavra
                  <input value={otherValue} onChange={(event) => setOtherValue(event.target.value)} placeholder="Se quiser, escreva aqui" className="mt-2 w-full rounded-xl border border-surface-200 px-4 py-3 text-base outline-none focus:border-brand-bleu focus:ring-4 focus:ring-brand-atmos/20" />
                </label>
              </fieldset>
              <div className="mt-9 space-y-8">
                {finalFields.map(([name, label]) => <TextQuestion key={name} name={name} label={label} value={answers[name] ?? ""} onChange={updateAnswer} />)}
              </div>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <p className="mt-8 rounded-2xl bg-[#f7f5f0] p-4 text-sm leading-6 text-surface-600">Suas respostas serão usadas apenas como ponto de partida para uma conversa com a Gleide. Nenhuma conclusão será tomada sem falar com você.</p>
              {status === "error" && <div role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800">{error} Suas respostas continuam salvas neste aparelho. Tente novamente.</div>}
            </>
          )}

          <div className="mt-9 flex gap-3 border-t border-surface-100 pt-6">
            {step > 0 && <button type="button" onClick={() => goTo(step - 1)} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-surface-200 px-4 font-medium text-surface-700"><ArrowLeft size={18} /> Voltar</button>}
            {step < 2 ? (
              <button type="button" onClick={() => goTo(step + 1)} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-surface-950 px-5 font-semibold text-white">Ir para a parte {step + 2} <ArrowRight size={18} /></button>
            ) : (
              <button type="submit" disabled={status === "sending"} className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-surface-950 px-5 font-semibold text-white disabled:opacity-60">
                {status === "sending" ? <><LoaderCircle className="animate-spin" size={18} /> Enviando…</> : <>Enviar respostas <ArrowRight size={18} /></>}
              </button>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-surface-400">Suas respostas ficam salvas neste aparelho enquanto você preenche.</p>
        </section>
      </form>
    </main>
  );
}
