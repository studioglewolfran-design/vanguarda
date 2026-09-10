import Link from "next/link"

import { StudioMark } from "@/components/studio/studio-mark"

export function PublicHeader() {
  return (
    <header className="relative z-20 border-b border-[#8A8588]/35 bg-[#F3F3F2]/90 backdrop-blur-xl">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#493735] via-[#512334] to-[#596862]" />
      <div className="mx-auto flex h-20 max-w-[var(--content-width)] items-center justify-between px-5 sm:px-8">
        <StudioMark />
        <Link href="/contato" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#512334] transition hover:text-[#4B354D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#596862] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F3F3F2]">
          Contato
        </Link>
      </div>
    </header>
  )
}
