import { FlaskConical, ScanSearch, TestTubeDiagonal, UsersRound } from "lucide-react"
import { PublicAreaPage } from "@/components/studio/public-area-page"

export default function ProductLabPage() {
  return <PublicAreaPage eyebrow="Pesquisa aplicada" title="Laboratório de produtos" lead="O espaço onde métodos, ferramentas e novas ofertas podem ser interrogados antes de receber escala, promessa ou identidade definitiva." statement="Nem toda boa ideia deve virar produto. Primeiro observamos se ela resolve algo importante de maneira repetível." accent="sand" items={[
    { number:"01", title:"Problema", description:"Investigar uma tensão real antes de presumir que já conhecemos a solução.", status:"Método contínuo", icon:ScanSearch },
    { number:"02", title:"Hipótese", description:"Formular valor, público e mecanismo de forma explícita e contestável.", status:"Em operação", icon:FlaskConical },
    { number:"03", title:"Protótipo", description:"Construir a menor experiência capaz de produzir aprendizado confiável.", status:"Próxima etapa", icon:TestTubeDiagonal },
    { number:"04", title:"Validação", description:"Testar com pessoas reais antes de investir em nome, escala ou infraestrutura definitiva.", status:"Planejado", icon:UsersRound },
  ]} />
}
