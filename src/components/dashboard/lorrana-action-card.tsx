"use client"

import { Check, Copy, ExternalLink, Send } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function LorranaActionCard() {
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    const link = `${window.location.origin}/briefing-profissional`
    await navigator.clipboard.writeText(link)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="rounded-2xl border border-brand-atmos/70 bg-brand-antar/35 p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-atmos text-surface-950">
          <Send className="size-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-kobold">Ação prioritária</p>
          <h3 className="mt-2 font-sans text-xl font-semibold">Validar briefing modelo com Lorrana</h3>
          <p className="mt-2 text-sm leading-6 text-surface-700">
            Lorrana será a primeira aplicação do briefing profissional v0.1. O retorno dela ajudará a revisar o instrumento antes dos próximos pilotos.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a href="/briefing-profissional" target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-surface-950 px-4 text-sm font-semibold text-white transition hover:bg-surface-800">
          Abrir briefing piloto <ExternalLink className="size-4" aria-hidden="true" />
        </a>
        <Button type="button" variant="outline" onClick={copyLink} className="rounded-full border-surface-400 bg-white/70">
          {copied ? <Check className="size-4 text-brand-midori" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
          {copied ? "Link copiado" : "Copiar link"}
        </Button>
      </div>
    </div>
  )
}
