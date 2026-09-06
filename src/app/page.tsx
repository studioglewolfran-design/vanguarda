import Link from "next/link"
import { ArrowDown, ArrowRight, Circle, MoveUpRight } from "lucide-react"

import { PublicFooter } from "@/components/studio/public-footer"
import { PublicHeader } from "@/components/studio/public-header"
import { platformAreas } from "@/lib/studio/navigation"

const principles = [
  ["01", "Ler antes de desenhar", "A forma nasce da compreensão do contexto, das pessoas e das tensões reais."],
  ["02", "Decidir antes de escalar", "Estratégia organiza escolhas para que crescimento não seja apenas acúmulo."],
  ["03", "Construir sistemas vivos", "Marcas precisam orientar ação — não repousar como documentos esquecidos."],
] as const

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-white text-surface-950">
      <PublicHeader />
      <main>
        <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-surface-950/10">
          <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#10101012_1px,transparent_1px),linear-gradient(to_bottom,#10101012_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute -right-40 top-1/2 -z-10 size-[600px] -translate-y-1/2 rounded-full border border-surface-950/15 sm:right-[-80px] lg:size-[760px]">
            <div className="absolute inset-[12%] rounded-full border border-surface-950/15" />
            <div className="absolute inset-[26%] rounded-full bg-brand-atmos/75" />
            <div className="absolute left-[14%] top-[18%] size-4 rounded-full bg-brand-cotta" />
            <div className="absolute bottom-[16%] right-[19%] size-9 rounded-full border border-surface-950 bg-brand-arena" />
          </div>
          <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-[var(--content-width)] flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-surface-600"><span className="h-px w-10 bg-surface-950" /> Hub criativo founder-led · Manaus</div>
            <div className="relative max-w-5xl py-20">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-brand-kobold">Estratégia · direção criativa · sistemas de marca</p>
              <h1 className="font-sans text-[clamp(3.4rem,8.7vw,8.6rem)] font-medium leading-[0.82] tracking-[-0.02em]">Dar contorno<br /><span className="ml-[0.7em] text-transparent [-webkit-text-stroke:1.5px_#101010]">ao que está vivo.</span></h1>
              <p className="mt-10 max-w-xl text-base leading-7 text-surface-700 sm:text-lg">Conectamos leitura estratégica, expressão e operação para marcas que já carregam densidade — mas precisam de um sistema à altura.</p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-surface-950/20 pt-5">
              <Link href="#plataforma" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]">Conhecer o ecossistema <ArrowDown className="size-4" /></Link>
              <p className="max-w-xs text-right font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-surface-500">Da memória do Studio à experiência entregue ao cliente</p>
            </div>
          </div>
        </section>

        <section id="abordagem" className="bg-surface-950 text-white">
          <div className="mx-auto max-w-[var(--content-width)] px-5 py-20 sm:px-8 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-atmos">Uma prática sistêmica</p><p className="mt-6 max-w-sm text-sm leading-6 text-surface-400">Não tratamos estratégia, estética e gestão como disciplinas isoladas. Uma marca coerente precisa que as três conversem.</p></div>
              <p className="max-w-4xl font-sans text-3xl font-medium leading-[1.04] sm:text-5xl lg:text-6xl">A marca é percebida na superfície. Sua força, porém, vem das decisões que ninguém vê.</p>
            </div>
            <div className="mt-20 grid border-t border-surface-800 md:grid-cols-3">
              {principles.map(([number, title, description], index) => (
                <article key={number} className={`py-8 md:px-7 ${index ? "border-t border-surface-800 md:border-l md:border-t-0" : ""}`}>
                  <span className="font-mono text-[10px] text-brand-atmos">{number}</span><h2 className="mt-12 font-sans text-xl font-medium">{title}</h2><p className="mt-4 text-sm leading-6 text-surface-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plataforma" className="mx-auto max-w-[var(--content-width)] px-5 py-20 sm:px-8 lg:py-32">
          <header className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-kobold">Plataforma Studio Gle Wolfran</p><h2 className="mt-5 font-sans text-4xl font-medium leading-none sm:text-6xl">Um sistema.<br />Quatro espaços.</h2></div>
            <p className="max-w-lg text-sm leading-6 text-surface-600 lg:justify-self-end">A mesma inteligência conecta o que o Studio pensa, o que opera, o que entrega e aquilo que ainda está aprendendo a construir.</p>
          </header>
          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {platformAreas.map((area, index) => {
              const Icon = area.icon
              const tones = { dark: "bg-surface-950 text-white border-surface-950", light: "bg-surface-100 text-surface-950 border-surface-300", blue: "bg-brand-antar text-surface-950 border-brand-bleu/30", sand: "bg-brand-arena/60 text-surface-950 border-brand-sahara/40" }
              return (
                <Link key={area.href} href={area.href} className={`group relative min-h-80 overflow-hidden rounded-[2rem] border p-7 transition duration-500 hover:-translate-y-1 sm:p-10 ${tones[area.tone]}`}>
                  <div className="flex items-start justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">0{index + 1} · {area.eyebrow}</span><span className="grid size-11 place-items-center rounded-full border border-current/20 transition-transform duration-500 group-hover:rotate-45"><MoveUpRight className="size-4" /></span></div>
                  <div className="absolute bottom-8 left-7 right-7 sm:bottom-10 sm:left-10 sm:right-10"><Icon className="mb-6 size-6 opacity-70" aria-hidden="true" /><h3 className="font-sans text-3xl font-medium sm:text-4xl">{area.title}</h3><p className="mt-4 max-w-md text-sm leading-6 opacity-65">{area.description}</p></div>
                  <Circle className="absolute -right-16 -top-16 size-48 stroke-[0.4] opacity-25" />
                </Link>
              )
            })}
          </div>
        </section>

        <section className="border-t border-surface-300 bg-brand-calla/35">
          <div className="mx-auto flex max-w-[var(--content-width)] flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-boreal">A plataforma começa por dentro</p><h2 className="mt-5 max-w-4xl font-sans text-4xl font-medium leading-[0.98] sm:text-6xl">Clareza operacional para produzir trabalho autoral.</h2></div>
            <Link href="/os" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-surface-950 px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-brand-boreal">Abrir Studio OS <ArrowRight className="size-4" /></Link>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
