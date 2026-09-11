"use client"

import { useState } from "react"

const storageKey = "studio-gle-wolfran:acordo-experiencias-notes"

export function AlignmentNotes() {
  const [notes, setNotes] = useState(() => {
    if (typeof window === "undefined") return ""

    return window.localStorage.getItem(storageKey) ?? ""
  })

  const updateNotes = (value: string) => {
    setNotes(value)
    window.localStorage.setItem(storageKey, value)
  }

  return (
    <section aria-labelledby="anotacoes" className="border border-[#526A7A]/45 bg-[#DDE0E2] p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#526A7A]">Espaço de trabalho</p>
          <h2 id="anotacoes" className="mt-2 font-sans text-2xl font-medium tracking-[-0.04em] text-[#151419]">Anotações de acompanhamento</h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#596862]">Salvo neste navegador</span>
      </div>
      <textarea
        value={notes}
        onChange={(event) => updateNotes(event.target.value)}
        placeholder="Registre decisões, pendências ou observações da próxima conversa."
        className="mt-5 min-h-40 w-full resize-y rounded-[4px] border border-[#8A8588]/60 bg-[#F3F3F2] px-4 py-3 text-base leading-7 text-[#151419] outline-none transition placeholder:text-[#8A8588] focus:border-[#512334] focus:ring-2 focus:ring-[#512334]/20"
      />
      <p className="mt-3 text-sm leading-6 text-[#596862]">Use este campo como rascunho durante a conversa. O que virar decisão deve ser incorporado à próxima versão do acordo.</p>
    </section>
  )
}
