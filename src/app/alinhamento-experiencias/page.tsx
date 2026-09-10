import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ArrowRight, Check, LockKeyhole } from "lucide-react"

import { PublicFooter } from "@/components/studio/public-footer"
import { PublicHeader } from "@/components/studio/public-header"

export const metadata: Metadata = {
  title: "Alinhamento · experiências e plataforma",
  description:
    "Documento de alinhamento sobre a experiência de 25/09, o serviço de ativação de marca e a plataforma para gestores de eventos.",
}

const eventSteps = [
  ["01", "Desenhar", "Organizar objetivo, jornada, papéis, ritmo e padrão de qualidade."],
  ["02", "Apresentar", "Deixar participantes e colaboradores a par do que vai acontecer."],
  ["03", "Formalizar", "Confirmar entregas, custos, responsabilidades, créditos e uso de imagem."],
  ["04", "Aprender", "Registrar o que funciona para aprimorar a experiência e o sistema."],
] as const

const protectionPoints = [
  "Cada pessoa recebe o que precisa para sua função.",
  "Briefing operacional e repertório estratégico permanecem separados.",
  "Materiais são datados, versionados e identificados por finalidade.",
  "Contatos e acessos não são transferidos automaticamente entre frentes.",
] as const

export default function AlignmentExperiencesPage() {
  return (
    <main className="min-h-screen bg-surface-white text-surface-950">
      <PublicHeader />

      <section className="relative overflow-hidden border-b border-surface-950/10 bg-surface-950 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute -right-24 top-10 size-72 rounded-full border border-brand-atmos/30 sm:size-[30rem]" />
        <div className="relative mx-auto grid min-h-[min(680px,calc(100svh-80px))] max-w-[var(--content-width)] items-end gap-12 px-5 pb-16 pt-20 sm:px-8 sm:pb-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-atmos">Documento de alinhamento · 10.09.2026</p>
            <h1 className="mt-7 max-w-4xl font-sans text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">
              O que estamos construindo juntos
              <span className="mt-3 block text-surface-400">começa por deixar claro o que é cada coisa.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-surface-300 sm:text-xl">
              Um ponto de partida comum para a experiência de 25/09, o serviço de ativação de marca e o sistema para gestores de eventos.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#ponto-de-partida" className="inline-flex min-h-12 items-center gap-3 rounded-sm bg-white px-5 text-xs font-semibold uppercase tracking-[0.08em] text-surface-950 transition hover:bg-brand-atmos">
                Ler o alinhamento <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
              <span className="inline-flex min-h-12 items-center rounded-sm border border-white/20 px-5 font-mono text-[10px] uppercase tracking-[0.14em] text-surface-400">
                Primeira experiência real
              </span>
            </div>
          </div>

          <aside className="border-l border-brand-atmos/50 pl-6 lg:mb-2 lg:pl-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-atmos">Antes de avançar</p>
            <p className="mt-5 max-w-sm text-2xl leading-tight tracking-[-0.03em] text-white">
              As conversas foram importantes. Agora, o projeto precisa de um registro comum.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-surface-400">
              Muitas ideias surgiram de modo casual, sem gravação ou documento único. Este texto organiza o entendimento sem transformar premissas em decisões definitivas.
            </p>
          </aside>
        </div>
      </section>

      <section id="ponto-de-partida" className="border-b border-surface-950/10 bg-[#f7f6f1]">
        <div className="mx-auto grid max-w-[var(--content-width)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24 lg:py-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">01 · Ponto de partida</p>
            <h2 className="mt-5 max-w-md font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">
              Evento não é uma coisa só.
            </h2>
          </div>
          <div className="max-w-2xl space-y-6 text-lg leading-8 text-surface-700">
            <p>Quando falamos em eventos, estamos falando de compreender um objetivo, pesquisar possibilidades, fazer curadoria, desenhar uma jornada, organizar responsabilidades e acompanhar a realização.</p>
            <p>Essa capacidade será oferecida por Gle Wolfran/Studio como um serviço de design e gestão de ativações de marca. Ela envolve repertório, julgamento, colaboradores e um padrão de qualidade que precisa ser cuidado do começo ao fim.</p>
            <p className="border-l-2 border-brand-atmos pl-5 text-surface-950">O sistema pode apoiar esse trabalho. Ele não é o trabalho em si.</p>
          </div>
        </div>
      </section>

      <section id="duas-frentes" className="bg-surface-white">
        <div className="mx-auto max-w-[var(--content-width)] px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 border-b border-surface-950/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">02 · Duas frentes</p>
              <h2 className="mt-5 max-w-2xl font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Uma parceria, dois projetos diferentes.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-surface-600">Separar as camadas deixa a colaboração mais leve e evita que uma contrapartida seja confundida com outra.</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[1.5rem] border border-surface-950 bg-surface-950 p-7 text-white shadow-[8px_8px_0_#77C5D5] sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-atmos">Serviço do Studio</p>
              <h3 className="mt-8 font-sans text-3xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl">Design e gestão da ativação de marca</h3>
              <p className="mt-7 max-w-lg text-base leading-7 text-surface-300">Uma oferta própria de Gleide: pesquisa, curadoria, repertório, conceito, jornada, colaboradores, padrão de qualidade e gestão da ativação quando esse escopo for contratado.</p>
              <div className="mt-9 border-t border-white/15 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-surface-400">A autoria e a direção pertencem a Gle Wolfran/Studio.</div>
            </article>

            <article className="rounded-[1.5rem] border border-surface-950/15 bg-[#eef8fa] p-7 sm:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">Projeto em construção</p>
              <h3 className="mt-8 font-sans text-3xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl">Sistema para gestores de eventos</h3>
              <p className="mt-7 max-w-lg text-base leading-7 text-surface-700">Uma ferramenta para organizar clientes, fornecedores, escopos, contratos e operação. Bruno entra com a construção técnica; Gleide entra com contexto, pesquisa, testes, validação, acessos e uso como primeira cliente.</p>
              <div className="mt-9 border-t border-surface-950/15 pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-brand-kobold">Uso gratuito e comissão pertencem à lógica da plataforma.</div>
            </article>
          </div>
        </div>
      </section>

      <section id="25-setembro" className="border-y border-surface-950/10 bg-[#f7f6f1]">
        <div className="mx-auto grid max-w-[var(--content-width)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-24 lg:py-28">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">03 · 25 de setembro</p>
            <h2 className="mt-5 max-w-md font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Uma experiência real, com premissas ainda abertas.</h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-surface-600">O evento já está valendo. O que ainda está em validação é o desenho da experiência, não a importância de realizá-la.</p>
          </div>
          <div>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-surface-950/15 bg-surface-950/15 sm:grid-cols-2">
              {eventSteps.map(([number, title, description]) => (
                <article key={number} className="bg-white p-6 sm:p-7">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-brand-kobold">{number}</span>
                  <h3 className="mt-8 font-sans text-2xl font-medium tracking-[-0.04em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-surface-600">{description}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-surface-600">Maria Clara participa sem cobrança nesta primeira experiência para conhecer o formato. Essa condição é pontual e não define o preço do serviço ou dos próximos projetos.</p>
          </div>
        </div>
      </section>

      <section id="troca" className="bg-brand-atmos">
        <div className="mx-auto grid max-w-[var(--content-width)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-end lg:py-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-surface-950/70">04 · Diretriz de troca</p>
            <h2 className="mt-5 max-w-3xl font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Cada ganho acompanha o que cada pessoa escolhe entregar.</h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-surface-950/75">
            <p>A divisão financeira não será definida automaticamente por proximidade, origem da ideia ou uso da mesma ferramenta.</p>
            <p>Ela será alinhada ao escopo, dedicação, responsabilidade, risco, custos assumidos, valor criado e participação na operação.</p>
            <p className="font-semibold text-surface-950">Por isso, nenhum percentual de Bruno na ativação será definido antes de entendermos qual entrega ele deseja assumir nela.</p>
          </div>
        </div>
      </section>

      <section id="protecao" className="bg-surface-950 text-white">
        <div className="mx-auto grid max-w-[var(--content-width)] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:py-28">
          <div>
            <div className="grid size-12 place-items-center rounded-full border border-brand-atmos/50 text-brand-atmos"><LockKeyhole className="size-5" aria-hidden="true" /></div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-atmos">05 · Cuidado com o que é compartilhado</p>
            <h2 className="mt-5 max-w-md font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Colaborar também é cuidar da autoria.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-8 text-surface-300">O projeto precisa de abertura suficiente para acontecer e de limites suficientes para preservar o repertório, os acessos e a autonomia do Studio.</p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {protectionPoints.map((point) => (
                <li key={point} className="flex gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-surface-300">
                  <Check className="mt-1 size-4 shrink-0 text-brand-atmos" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="proximo-passo" className="bg-surface-white">
        <div className="mx-auto max-w-[var(--content-width)] px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-kobold">06 · Próximo passo</p>
            <h2 className="mt-5 font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Primeiro, desenhar. Depois, apresentar. Então, formalizar.</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-surface-600">O próximo movimento é consolidar a experiência do dia 25 e apresentar o desenho a participantes e colaboradores. Com os papéis compreendidos, fazemos o contrato com Maria Clara e registramos o que pode virar requisito do sistema.</p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-surface-950/10 pt-7">
            <Link href="#25-setembro" className="inline-flex items-center gap-3 rounded-sm bg-surface-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-brand-kobold">
              Ver a ordem do projeto <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-surface-500">Documento vivo · versão 0.1</span>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  )
}
