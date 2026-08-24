import type { Metadata } from "next";
import { ExameForm } from "./exame-form";

export const metadata: Metadata = {
  title: "Exame de crenças e motores — Lorrana",
  description: "Um espaço de reflexão sobre escolhas e futuro profissional.",
  robots: { index: false, follow: false },
};

export default function ExameLorranaPage() {
  return <ExameForm />;
}
