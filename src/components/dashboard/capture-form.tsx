"use client"

import { useActionState, useEffect, useRef } from "react"
import { Inbox, Send } from "lucide-react"

import { captureInbox, type CaptureState } from "@/app/dashboard/capture-actions"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const initialState: CaptureState = { status: "idle", message: "" }

export function CaptureForm() {
  const [state, action, pending] = useActionState(captureInbox, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={action} className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Inbox className="size-4 text-brand-kobold" aria-hidden="true" />
        Despeje aqui. O Studio organiza depois.
      </div>
      <Textarea name="capture" minLength={3} maxLength={3000} required
        placeholder="Uma ideia, algo que preciso lembrar, uma conversa, um prazo, uma preocupação…"
        className="min-h-28 resize-y border-surface-300 bg-white/70" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          Tipo
          <select name="kind" defaultValue="ideia"
            className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground">
            <option value="informação">Informação</option>
            <option value="ideia">Ideia</option>
            <option value="compromisso">Compromisso</option>
            <option value="bloqueio">Bloqueio</option>
            <option value="aguardando terceiro">Aguardando terceiro</option>
          </select>
        </label>
        <Button type="submit" disabled={pending} className="rounded-full px-5">
          <Send aria-hidden="true" /> {pending ? "Registrando…" : "Capturar"}
        </Button>
      </div>
      {state.message ? (
        <p role="status" className={state.status === "error" ? "text-sm text-destructive" : "text-sm text-brand-midori"}>
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
