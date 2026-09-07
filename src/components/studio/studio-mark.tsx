import Link from "next/link"

export function StudioMark({ compact = false, inverted = false, href = "/" }: { compact?: boolean; inverted?: boolean; href?: string }) {
  return (
    <Link href={href} className="inline-flex outline-none focus-visible:ring-2 focus-visible:ring-brand-atmos">
      <span className={`block font-medium tracking-[0.03em] ${compact ? "text-[12px]" : "text-[15px]"} ${inverted ? "text-white" : "text-surface-950"}`}>Studio Gle Wolfran</span>
    </Link>
  )
}
