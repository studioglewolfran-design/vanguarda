import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { StudioMark } from "@/components/studio/studio-mark"
import { publicNavigation } from "@/lib/studio/navigation"

export function PublicHeader() {
  return (
    <header className="relative z-20 border-b border-surface-950/10 bg-surface-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[var(--content-width)] items-center justify-between px-5 sm:px-8">
        <StudioMark />
        <nav aria-label="Navegação pública" className="hidden items-center gap-7 lg:flex">
          {publicNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-medium text-surface-600 transition hover:text-surface-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/os" className="inline-flex h-10 items-center gap-2 rounded-full bg-surface-950 px-4 text-xs font-semibold text-white transition hover:bg-surface-800">
          Entrar no OS <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
