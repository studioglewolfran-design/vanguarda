import Link from "next/link"

import { StudioMark } from "@/components/studio/studio-mark"

export function PublicFooter() {
  return (
    <footer className="bg-surface-950 text-white">
      <div className="mx-auto grid max-w-[var(--content-width)] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <StudioMark inverted />
          <p className="mt-7 max-w-md text-sm leading-6 text-surface-400">Direção estratégica e sistemas de marca para transformar complexidade em movimento coerente.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs text-surface-300">
          <Link href="/os" className="hover:text-white">Studio OS</Link>
          <Link href="/portais" className="hover:text-white">Portais</Link>
          <Link href="/brand-systems" className="hover:text-white">Brand Systems</Link>
          <Link href="/laboratorio" className="hover:text-white">Laboratório</Link>
        </div>
      </div>
      <div className="border-t border-surface-800 px-5 py-5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-surface-500">Studio Gle Wolfran · Manaus · 2026</div>
    </footer>
  )
}
