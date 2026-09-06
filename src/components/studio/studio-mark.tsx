import Link from "next/link"

import { cn } from "@/lib/utils"

export function StudioMark({ compact = false, inverted = false, href = "/" }: { compact?: boolean; inverted?: boolean; href?: string }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-brand-atmos">
      <span className={cn("grid size-10 place-items-center rounded-full border text-[10px] font-semibold tracking-[0.08em] transition-transform group-hover:rotate-6", inverted ? "border-white/30 text-white" : "border-surface-950 text-surface-950")}>
        S—GW
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className={cn("block font-sans text-[13px] font-semibold tracking-[0.12em]", inverted ? "text-white" : "text-surface-950")}>Studio Gle Wolfran</span>
          <span className={cn("mt-1 block text-[10px] uppercase tracking-[0.22em]", inverted ? "text-surface-400" : "text-surface-600")}>Estratégia · direção · sistemas</span>
        </span>
      ) : null}
    </Link>
  )
}
