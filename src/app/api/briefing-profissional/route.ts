import { NextResponse } from "next/server"

const questions = [
  "Momento profissional", "Mudança desejada", "O que preservar", "Rotina mais leve", "Serviços e atividades",
  "Satisfação, retorno e desgaste", "Maior valor entregue", "Elogios, pedidos e indicações", "Experiência desejada",
  "Origem das oportunidades", "Retorno e indicação", "Retrato da operação e renda", "Ociosidade, sobrecarga e dependência",
  "Reconhecimento desejado", "Evidências de percepção", "Comunicação atual", "Pessoas certas", "Maior obstáculo",
  "Tentativas anteriores", "Impacto em doze meses", "Três prioridades", "Um problema prioritário", "Limites da mudança",
  "Tempo, energia e investimento", "Ajuda esperada", "Tempo de resposta", "Clareza das perguntas", "Perguntas problemáticas",
  "O que faltou", "Formato preferido",
]

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_BRIEFING_PROFISSIONAL_FORM_ID?.trim() || process.env.FORMSPREE_LORRANA_FORM_ID?.trim() || "mqerelkl"
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Resposta inválida." }, { status: 400 })
  }
  if (body._gotcha) return NextResponse.json({ ok: true })
  if (typeof body.nome !== "string" || !body.nome.trim() || typeof body.profissao !== "string" || !body.profissao.trim()) {
    return NextResponse.json({ error: "Informe nome e profissão." }, { status: 400 })
  }
  const submission: Record<string, string> = {
    Nome: body.nome.trim(),
    "Profissão ou área": body.profissao.trim(),
    "Versão do briefing": typeof body.versao === "string" ? body.versao : "0.1",
  }
  questions.forEach((label, index) => {
    const value = body[`q${index + 1}`]
    if (typeof value === "string" && value.trim()) submission[`${index + 1}. ${label}`] = value.trim()
  })
  const endpoint = formId.startsWith("http") ? formId : `https://formspree.io/f/${formId}`
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...submission, _subject: `Briefing profissional v0.1 — ${body.nome}` }),
      cache: "no-store",
    })
    if (!response.ok) return NextResponse.json({ error: "O serviço não confirmou o recebimento." }, { status: 502 })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Falha ao enviar briefing profissional:", error)
    return NextResponse.json({ error: "Não foi possível alcançar o serviço de envio." }, { status: 502 })
  }
}
