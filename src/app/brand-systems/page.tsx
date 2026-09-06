import { BookOpenText, Boxes, GalleryVerticalEnd, History } from "lucide-react"
import { PublicAreaPage } from "@/components/studio/public-area-page"

export default function BrandSystemsPage() {
  return <PublicAreaPage eyebrow="Marcas vivas" title="Brand Systems" lead="Sistemas digitais para transformar fundamentos, linguagem e expressão visual em instrumentos cotidianos de decisão." statement="Um brand system não é o fim de um projeto. É a infraestrutura que permite à marca continuar coerente enquanto muda." accent="blue" items={[
    { number:"01", title:"Fundamentos", description:"Posicionamento, propósito, valores e critérios que sustentam todas as escolhas posteriores.", status:"Base existente", icon:Boxes },
    { number:"02", title:"Linguagem", description:"Voz, tom, vocabulário e exemplos para tornar a estratégia reconhecível em palavras.", status:"Em estruturação", icon:BookOpenText },
    { number:"03", title:"Expressão visual", description:"Tipografia, cor, composição, imagem e movimento relacionados a uma intenção explícita.", status:"Design system inicial", icon:GalleryVerticalEnd },
    { number:"04", title:"Evolução", description:"Decisões, versões e aprendizados registrados para o sistema crescer sem perder memória.", status:"Planejado", icon:History },
  ]} />
}
