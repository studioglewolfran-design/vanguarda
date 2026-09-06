import { CheckCheck, FileText, MessagesSquare, Waypoints } from "lucide-react"
import { PublicAreaPage } from "@/components/studio/public-area-page"

export default function ClientPortalsPage() {
  return <PublicAreaPage eyebrow="Relação contínua" title="Portais de clientes" lead="Um lugar privado para cada relação: menos mensagens perdidas, mais contexto compartilhado e decisões que permanecem encontráveis." statement="A entrega não termina no arquivo. Ela continua na qualidade da relação e na clareza do próximo movimento." accent="pink" items={[
    { number:"01", title:"Contexto compartilhado", description:"Objetivo, escopo, pessoas e acordos reunidos sem expor a operação interna do Studio.", status:"Arquitetura inicial", icon:Waypoints },
    { number:"02", title:"Entregas vivas", description:"Apresentações, documentos e versões organizados por projeto e momento de decisão.", status:"Em desenho", icon:FileText },
    { number:"03", title:"Aprovações", description:"Decisões e retornos registrados com autoria, data e consequência para o trabalho.", status:"Hipótese", icon:CheckCheck },
    { number:"04", title:"Conversas com memória", description:"Perguntas e alinhamentos ligados ao contexto correto, sem depender apenas do WhatsApp.", status:"Hipótese", icon:MessagesSquare },
  ]} />
}
