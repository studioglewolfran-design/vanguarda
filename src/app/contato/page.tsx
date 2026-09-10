import type { Metadata } from "next"
import Link from "next/link"
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react"

import { PublicHeader } from "@/components/studio/public-header"

export const metadata: Metadata = {
  title: "Contato",
  description: "Canais de contato do Studio Gle Wolfran, em Ariquemes, Rondônia.",
}

const contactLinks = [
  {
    label: "E-mail",
    value: "studioglewolfran@gmail.com",
    href: "mailto:studioglewolfran@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "(69) 98457-6800",
    href: "https://wa.me/5569984576800",
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: "@studioglewolfran",
    href: "https://www.instagram.com/studioglewolfran",
    icon: Instagram,
  },
] as const

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F2] text-[#151419]">
      <PublicHeader />

      <div className="mx-auto max-w-[var(--content-width)] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8A8588]/40 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#526A7A]">
          <span>Studio Gle Wolfran</span>
          <span>Ariquemes · Rondônia</span>
        </div>
      </div>

      <article className="mx-auto max-w-[var(--content-width)] px-5 pb-24 sm:px-8">
        <header className="grid gap-8 border-b border-[#8A8588]/55 py-14 sm:py-20 lg:grid-cols-[minmax(0,760px)_180px] lg:justify-between lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">Contato</p>
            <h1 className="mt-5 max-w-3xl font-sans text-4xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl">Vamos conversar.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#596862]">Escolha o canal que fizer mais sentido para você.</p>
          </div>
          <aside className="border-l-2 border-[#596862] pl-5 text-sm leading-6 text-[#596862] lg:mt-2">
            <p className="font-semibold text-[#151419]">Direção, marcas e experiências.</p>
            <p className="mt-2">A partir de Ariquemes, Rondônia.</p>
          </aside>
        </header>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,760px)_180px] lg:justify-between lg:gap-16">
          <section aria-labelledby="canais" className="py-12 sm:py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">Canais</p>
            <h2 id="canais" className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Canais de contato</h2>

            <div className="mt-8 border-y border-[#8A8588]/55 bg-[#DDE0E2]">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 border-b border-[#8A8588]/40 py-5 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#596862] focus-visible:ring-inset"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-[4px] border border-[#4B354D]/35 text-[#4B354D] transition group-hover:border-[#512334] group-hover:text-[#512334]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#596862]">{label}</span>
                    <span className="mt-1 block break-words text-base text-[#151419] transition group-hover:text-[#512334]">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <aside className="border-t border-[#4B354D] bg-[#4B354D] py-12 pl-6 text-[#F3F3F2] sm:py-16 lg:border-t-0 lg:border-l-0 lg:pl-8">
            <MapPin className="size-5 text-[#F4C3CC]" aria-hidden="true" />
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#DDE0E2]">Localização</p>
            <address className="mt-4 not-italic text-base leading-7 text-[#F3F3F2]">
              Av. Canaã, 2689<br />
              Setor 3<br />
              Ariquemes — RO<br />
              CEP 76870-417
            </address>
          </aside>
        </div>
      </article>

      <footer className="border-t border-[#8A8588]/40 bg-[#DDE0E2] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-[var(--content-width)] flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#596862]">
          <Link href="/" className="text-[#151419] transition hover:text-[#512334]">Studio Gle Wolfran</Link>
          <span>Ariquemes · Rondônia · 2026</span>
        </div>
      </footer>
    </main>
  )
}
