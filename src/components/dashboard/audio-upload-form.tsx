"use client"

import { useActionState, useEffect, useRef } from "react"
import { AudioLines, Upload } from "lucide-react"

import { uploadAudio, type AudioState } from "@/app/dashboard/capture-actions"
import { Button } from "@/components/ui/button"

const initialState: AudioState = { status: "idle", message: "" }

export function AudioUploadForm() {
  const [state, action, pending] = useActionState(uploadAudio, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <label className="group flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-brand-bleu/60 bg-brand-antar/30 p-5 text-center transition hover:bg-brand-antar/55">
        <AudioLines className="mb-3 size-8 text-brand-kobold" aria-hidden="true" />
        <span className="text-sm font-semibold">Gravar ou escolher áudio</span>
        <span className="mt-1 text-xs leading-5 text-muted-foreground">No celular, toque aqui para usar as opções de áudio disponíveis. Até 25 MB.</span>
        <input name="audio" type="file" accept="audio/*" capture className="sr-only" required />
      </label>
      <Button type="submit" disabled={pending} variant="outline" className="w-full rounded-full">
        <Upload aria-hidden="true" /> {pending ? "Recebendo…" : "Enviar para a inbox"}
      </Button>
      {state.message ? <p role="status" className={state.status === "error" ? "text-sm text-destructive" : "text-sm text-brand-midori"}>{state.message}</p> : null}
    </form>
  )
}
