import { NextResponse } from "next/server";

const labels: Record<string, string> = {
  q1: "1. Cobrar pelo meu trabalho", q2: "2. Vender o que faço", q3: "3. Dinheiro",
  q4: "4. Crescer profissionalmente", q5: "5. Aparecer e ser reconhecida",
  q6: "6. Liderar ou orientar", q7: "7. Delegar e confiar", q8: "8. Ensinar o que sei",
  q9: "9. Escolher especialidade ou público", q10: "10. Dizer não",
  q11: "11. Troca justa", q12: "12. Deu mais do que recebeu", q13: "13. Decisão profissional difícil",
  q14: "14. Trabalho que gera orgulho", q15: "15. Limite para crescer", q16: "16. O que deseja despertar nas pessoas",
  q17_valores: "17. Valores escolhidos", q18: "18. Três valores mais importantes",
  q19: "19. Princípio principal", q20a: "20a. Quero construir um trabalho que",
  q20b: "20b. Quero crescer sem abrir mão de", q20c: "20c. Uma relação profissional justa precisa",
  q20d: "20d. Neste momento, preciso aprender a",
};

export async function POST(request: Request) {
  const formId = process.env.FORMSPREE_LORRANA_FORM_ID?.trim() || "mqerelkl";

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Resposta inválida." }, { status: 400 });
  }

  if (body._gotcha) return NextResponse.json({ ok: true });

  const submission = Object.fromEntries(
    Object.entries(body)
      .filter(([key, value]) => key !== "_gotcha" && typeof value === "string")
      .map(([key, value]) => [labels[key] ?? key, value]),
  );

  const endpoint = formId.startsWith("http") ? formId : `https://formspree.io/f/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...submission, _subject: "Exame de crenças e motores — Lorrana" }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Formspree recusou a submissão:", response.status, details);
      return NextResponse.json({ error: "O serviço não confirmou o recebimento." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Falha ao contatar o Formspree:", error);
    return NextResponse.json({ error: "Não foi possível alcançar o serviço de envio." }, { status: 502 });
  }
}
