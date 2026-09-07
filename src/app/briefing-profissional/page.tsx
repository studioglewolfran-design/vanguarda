import type { Metadata } from "next"

import { BriefingProfissionalForm } from "./briefing-profissional-form"

export const metadata: Metadata = {
  title: "Briefing de direcionamento profissional — Studio Gle Wolfran",
  description: "Uma conversa estruturada para compreender momento, trabalho, prioridades e possibilidades profissionais.",
  robots: { index: false, follow: false },
}

export default function BriefingProfissionalPage() {
  return <BriefingProfissionalForm />
}
