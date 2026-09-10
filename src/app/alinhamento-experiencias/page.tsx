import type { Metadata } from "next"
import Link from "next/link"
import { Check, LockKeyhole } from "lucide-react"

import { PublicHeader } from "@/components/studio/public-header"

export const metadata: Metadata = {
  title: "Alinhamento · experiências e plataforma",
  description:
    "Documento de alinhamento sobre a experiência de 25/09, o serviço de ativação de marca e a plataforma para gestores de eventos.",
}

const eventSteps = [
  ["01", "Desenhar", "Objetivo, jornada, papéis, ritmo e padrão de qualidade."],
  ["02", "Apresentar", "O que vai acontecer e o que cada pessoa fará."],
  ["03", "Formalizar", "Entregas, custos, responsabilidades, créditos e uso de imagem."],
  ["04", "Aprender", "O que funciona e o que pode virar requisito do sistema."],
] as const

const protectionPoints = [
  "Cada pessoa recebe o que precisa para sua função.",
  "Briefing operacional e repertório estratégico permanecem separados.",
  "Materiais são datados, versionados e identificados por finalidade.",
  "Contatos e acessos não são transferidos automaticamente entre frentes.",
] as const

export default function AlignmentExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-surface-950">
      <PublicHeader />

      <div className="mx-auto max-w-[var(--content-width)] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-surface-950/10 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-surface-500">
          <span>Documento de alinhamento</span>
          <span>10.09.2026 · v0.1 · em elaboração</span>
        </div>
      </div>

      <article className="mx-auto max-w-[var(--content-width)] px-5 pb-24 sm:px-8">
        <header className="grid gap-8 border-b border-surface-950/15 py-14 sm:py-20 lg:grid-cols-[minmax(0,760px)_180px] lg:justify-between lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">Experiências · plataforma · parceria</p>
            <h1 className="mt-5 max-w-3xl font-sans text-4xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl">O que estamos construindo juntos</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-surface-600">Um ponto de partida comum para a experiência de 25/09, o serviço de ativação de marca e o sistema para gestores de eventos.</p>
          </div>
          <aside className="border-l-2 border-brand-atmos pl-5 text-sm leading-6 text-surface-600 lg:mt-2">
            <p className="font-semibold text-surface-950">Este documento não é um contrato.</p>
            <p className="mt-2">Ele organiza o entendimento atual antes da formalização das parcerias e das entregas.</p>
          </aside>
        </header>

        <div className="grid gap-16 lg:grid-cols-[180px_minmax(0,760px)] lg:gap-16">
          <nav aria-label="Nesta página" className="pt-10 lg:sticky lg:top-8 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-surface-500">Nesta página</p>
            <div className="mt-4 grid gap-2 text-sm text-surface-600">
              <Link href="#contexto" className="transition hover:text-surface-950">01 · Contexto</Link>
              <Link href="#frentes" className="transition hover:text-surface-950">02 · Frentes</Link>
              <Link href="#25-setembro" className="transition hover:text-surface-950">03 · 25/09</Link>
              <Link href="#troca" className="transition hover:text-surface-950">04 · Troca</Link>
              <Link href="#protecao" className="transition hover:text-surface-950">05 · Proteção</Link>
              <Link href="#proximo-passo" className="transition hover:text-surface-950">06 · Próximo passo</Link>
            </div>
          </nav>

          <div>
            <section id="contexto" className="border-b border-surface-950/10 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">01 · Contexto</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Evento não é uma coisa só.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-surface-700">
                <p>Quando falamos em eventos, estamos falando de compreender um objetivo, pesquisar possibilidades, fazer curadoria, desenhar uma jornada, organizar responsabilidades e acompanhar a realização.</p>
                <p>Essa capacidade será oferecida por Gle Wolfran/Studio como um serviço de design e gestão de ativações de marca. Ela envolve repertório, julgamento, colaboradores e um padrão de qualidade cuidado do começo ao fim.</p>
                <p className="border-l-2 border-brand-atmos pl-5 font-medium text-surface-950">O sistema pode apoiar esse trabalho. Ele não é o trabalho em si.</p>
              </div>
            </section>

            <section id="frentes" className="border-b border-surface-950/10 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">02 · Frentes</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Uma parceria, dois projetos diferentes.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-surface-600">Separar as camadas deixa a colaboração mais leve e evita que uma contrapartida seja confundida com outra.</p>

              <div className="mt-8 grid gap-4">
                <article className="border border-surface-950 bg-surface-950 p-6 text-white sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/15 pb-5">
                    <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">Design e gestão da ativação de marca</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-atmos">Serviço do Studio</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-surface-300">Uma oferta própria de Gleide: pesquisa, curadoria, repertório, conceito, jornada, colaboradores, padrão de qualidade e gestão da ativação quando esse escopo for contratado.</p>
                </article>

                <article className="border border-surface-950/15 bg-white p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-surface-950/10 pb-5">
                    <h3 className="font-sans text-2xl font-medium tracking-[-0.04em]">Sistema para gestores de eventos</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-kobold">Projeto em construção</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-surface-700">Uma ferramenta para organizar clientes, fornecedores, escopos, contratos e operação. Bruno entra com a construção técnica; Gleide entra com contexto, pesquisa, testes, validação, acessos e uso como primeira cliente.</p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-kobold">Uso gratuito e comissão pertencem à lógica da plataforma.</p>
                </article>
              </div>
            </section>

            <section id="25-setembro" className="border-b border-surface-950/10 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">03 · 25 de setembro</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Uma experiência real, com premissas ainda abertas.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-surface-600">O evento já está valendo. O que ainda está em validação é o desenho da experiência, não a importância de realizá-la.</p>

              <ol className="mt-8 border-y border-surface-950/15">
                {eventSteps.map(([number, title, description]) => (
                  <li key={number} className="grid gap-3 border-b border-surface-950/10 py-5 last:border-b-0 sm:grid-cols-[48px_160px_1fr] sm:items-baseline">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-brand-kobold">{number}</span>
                    <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                    <p className="text-sm leading-6 text-surface-600">{description}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-surface-600">Maria Clara participa sem cobrança nesta primeira experiência para conhecer o formato. Essa condição é pontual e não define o preço do serviço ou dos próximos projetos.</p>
            </section>

            <section id="troca" className="border-b border-surface-950/10 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">04 · Diretriz de troca</p>
              <div className="mt-5 border-l-4 border-brand-atmos bg-[#e8f7f9] px-6 py-6 sm:px-8 sm:py-7">
                <h2 className="max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Cada ganho acompanha o que cada pessoa escolhe entregar.</h2>
                <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-surface-700">
                  <p>A divisão financeira não será definida automaticamente por proximidade, origem da ideia ou uso da mesma ferramenta.</p>
                  <p>Ela será alinhada ao escopo, dedicação, responsabilidade, risco, custos assumidos, valor criado e participação na operação.</p>
                  <p className="font-semibold text-surface-950">Nenhum percentual de Bruno na ativação será definido antes de entendermos qual entrega ele deseja assumir nela.</p>
                </div>
              </div>
            </section>

            <section id="protecao" className="border-b border-surface-950/10 py-12 sm:py-16">
              <div className="flex items-start gap-4">
                <div className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-brand-kobold/30 text-brand-kobold"><LockKeyhole className="size-4" aria-hidden="true" /></div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">05 · Proteção</p>
                  <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Colaborar também é cuidar da autoria.</h2>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-surface-600">O projeto precisa de abertura suficiente para acontecer e de limites suficientes para preservar o repertório, os acessos e a autonomia do Studio.</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {protectionPoints.map((point) => (
                  <li key={point} className="flex gap-3 border-t border-surface-950/10 pt-4 text-sm leading-6 text-surface-700">
                    <Check className="mt-1 size-4 shrink-0 text-brand-kobold" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="proximo-passo" className="py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">06 · Próximo passo</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Primeiro, desenhar. Depois, apresentar. Então, formalizar.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-surface-600">O próximo movimento é consolidar a experiência do dia 25 e apresentar o desenho a participantes e colaboradores. Com os papéis compreendidos, fazemos o contrato com Maria Clara e registramos o que pode virar requisito do sistema.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-surface-950/10 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-surface-500">
                <span>Documento vivo</span>
                <span>·</span>
                <span>Versão 0.1</span>
                <span>·</span>
                <span>Studio Gle Wolfran</span>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="border-t border-surface-950/10 bg-white px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-[var(--content-width)] flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-surface-500">
          <Link href="/" className="text-surface-950 transition hover:text-brand-kobold">Studio Gle Wolfran</Link>
          <span>Manaus · 2026</span>
        </div>
      </footer>
    </main>
  )
}
