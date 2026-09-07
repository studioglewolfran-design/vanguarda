import type { Metadata } from "next"
import Link from "next/link"

import { SectionHeading } from "@/components/studio/section-heading"
import { DirectionWorkspace } from "@/components/studio/direction-workspace"

export const metadata: Metadata = {
  title: "Direção",
}

export default function DirectionPage() {
  return (
    <div className="mx-auto max-w-[1500px] px-4 py-7 sm:px-7 lg:px-10 lg:py-10">
      <SectionHeading
        eyebrow="Missões e diretrizes"
        title="Direção"
        description="Um espaço privado para organizar respostas, comparar evidências e transformar reflexão em decisões suficientemente claras para o próximo movimento."
      />
      <DirectionWorkspace />
      <footer className="mt-14 flex items-center justify-between border-t border-surface-300 pt-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-surface-500">Studio OS · Alpha 0.1</p>
        <Link href="/os" className="text-xs font-semibold">Voltar à visão geral →</Link>
      </footer>
    </div>
  )
}
