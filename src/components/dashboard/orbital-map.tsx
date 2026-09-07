"use client"

import { useState } from "react"
import { ArrowRight, CircleDot, Orbit } from "lucide-react"
import type { OrbitalFront } from "@/lib/isa/operational-panel"

const positions = ["left-[50%] top-[31%]", "left-[67%] top-[43%]", "left-[37%] top-[68%]", "left-[76%] top-[67%]", "left-[23%] top-[41%]", "left-[49%] top-[85%]", "left-[82%] top-[28%]", "left-[17%] top-[72%]", "left-[48%] top-[8%]"]

const orbitLabels = { alta: "Gravidade alta", movimento: "Em movimento", incubacao: "Incubação e espera" }

export function OrbitalMap({ fronts }: { fronts: OrbitalFront[] }) {
  const [selectedId, setSelectedId] = useState(fronts[0]?.id ?? "")
  const selected = fronts.find((front) => front.id === selectedId) ?? fronts[0]

  if (!selected) return <div className="rounded-2xl border bg-white p-6 text-sm text-muted-foreground">Nenhuma frente registrada no campo orbital.</div>

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-full border bg-white shadow-sm">
        <div className="absolute left-1/2 top-1/2 size-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-kobold/40" />
        <div className="absolute left-1/2 top-1/2 size-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-surface-300" />
        <div className="absolute left-1/2 top-1/2 size-[83%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-surface-400" />

        <span className="absolute left-1/2 top-[30%] -translate-x-1/2 rounded-full bg-white px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-kobold">gravidade alta</span>
        <span className="absolute left-1/2 top-[17%] -translate-x-1/2 rounded-full bg-white px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">em movimento</span>
        <span className="absolute left-1/2 top-[4.5%] -translate-x-1/2 rounded-full bg-white px-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">incubação e espera</span>

        <div className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[19%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-surface-950 bg-surface-950 text-center text-white shadow-lg">
          <Orbit className="mb-1 size-4 text-brand-atmos" />
          <strong className="font-sans text-xs sm:text-sm">Gle</strong>
          <span className="hidden text-[9px] text-surface-400 sm:block">direção + energia</span>
        </div>

        {fronts.map((front, index) => {
          const active = selectedId === front.id
          return (
            <button
              key={front.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedId(front.id)}
              className={`absolute z-20 max-w-[112px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2.5 py-1.5 text-center text-[9px] font-semibold leading-tight shadow-sm transition hover:scale-105 sm:max-w-[150px] sm:px-3 sm:py-2 sm:text-xs ${positions[index % positions.length]} ${active ? "border-surface-950 bg-surface-950 text-white" : "border-surface-300 bg-white text-foreground hover:border-brand-kobold"}`}
            >
              {front.title}
            </button>
          )
        })}
      </div>

      <aside className="flex min-h-72 flex-col rounded-2xl border bg-white p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-kobold">Frente selecionada</p>
        <h3 className="mt-4 font-sans text-xl font-semibold leading-tight">{selected.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border px-2.5 py-1 text-[10px] font-semibold">{orbitLabels[selected.orbit]}</span>
          <span className="rounded-full bg-brand-antar/50 px-2.5 py-1 text-[10px] font-semibold text-brand-kobold">{selected.domain}</span>
        </div>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">{selected.why}</p>
        <div className="mt-auto border-t pt-4">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"><CircleDot className="size-3" /> Próximo movimento</p>
          <p className="mt-2 text-sm font-medium leading-6">{selected.next}</p>
        </div>
      </aside>

      <div className="xl:col-span-2 grid gap-3 rounded-2xl bg-surface-950 p-4 text-white sm:grid-cols-3 sm:p-5">
        {[
          ["Distância", "Quanto mais perto do núcleo, mais atenção pede agora."],
          ["Movimento", "Uma frente pode se aproximar, afastar, pausar ou concluir."],
          ["Autonomia", "A Isa sugere a mudança de órbita; você confirma a direção."],
        ].map(([title, body]) => (
          <div key={title} className="flex gap-3 rounded-xl border border-surface-700 p-3">
            <ArrowRight className="mt-0.5 size-4 shrink-0 text-brand-atmos" />
            <p className="text-xs leading-5 text-surface-300"><strong className="block text-white">{title}</strong>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
