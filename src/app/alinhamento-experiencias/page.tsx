import type { Metadata } from "next"
import Link from "next/link"

import { AlignmentNotes } from "@/components/studio/alignment-notes"

export const metadata: Metadata = {
  title: "Acordo de trabalho · experiências e plataforma",
  description:
    "Registro de trabalho entre Gleide Wolfran e Bruno Lujan para a experiência-piloto de 25/09 e a validação da plataforma.",
}

const pilotPeople = [
  ["Gleide Wolfran", "Direção e gestão", "Vende, dirige e define o escopo da ativação pelo Studio Gle Wolfran."],
  ["Bruno Lujan", "Formalização, à distância", "Organiza ficha, contratos, termos de imagem, créditos e checklist do piloto."],
  ["Maria Clara", "Filmmaker", "Participa sem cobrança no primeiro caso para conhecer o formato."],
  ["Fine Hair", "Marca, serviço e espaço", "Marca a ser ativada, prestadora de cabelos e make e espaço da experiência."],
  ["Luan Nogueira", "Marca a ser ativada", "Marca colocada em relação com participantes, serviços e experiência."],
  ["Demais colaboradores", "Conforme escopo", "Fotografia, buffet, gráfica e outros parceiros entram com entrega e valor definidos."],
] as const

const timeline = [
  ["10.09", "Alinhamento de papéis", "A resposta escrita de Bruno consolida a separação entre ativação do Studio e plataforma técnica."],
  ["Até 16.09", "Ficha e contratos", "Gleide e Bruno preenchem a ficha do evento, confirmam entregas e preparam os documentos necessários."],
  ["25.09", "Experiência-piloto", "A ativação de Luan Nogueira e Fine Hair acontece como caso real de trabalho e aprendizagem."],
  ["Após cada experiência", "Leitura de validação", "Conversa de até 30 minutos para registrar o que falta, o que sobra e o que deve virar sistema."],
  ["Até 02.10", "Preço da formalização", "Bruno apresenta sua proposta de valor para entregas futuras, após medir o piloto."],
  ["31.12 ou 3 experiências", "Revisão da parceria", "Fim previsto do primeiro ciclo de validação. As partes decidem se e como a colaboração continua."],
] as const

const pendingDecisions = [
  ["Preço da experiência", "Definir a ordem de grandeza do serviço do Studio a partir da segunda experiência."],
  ["Remuneração de Maria", "Aguardar o valor para os próximos projetos e encaixá-lo no orçamento de cada caso."],
  ["Escopo do sistema", "Validar o que de fato foi útil no dia 25 antes de transformar a operação em produto."],
  ["Alquimia", "Construir uma divisão própria por escopo, execução, responsabilidade, custos e margem."],
] as const

export default function AlignmentExperiencesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F3F2] text-[#151419]">
      <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-[#512334] via-[#4B354D] to-[#526A7A]" />

      <article className="mx-auto max-w-[var(--content-width)] px-5 pb-24 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8A8588]/45 py-4 font-mono text-xs uppercase tracking-[0.14em] text-[#526A7A]">
          <span>Acordo de trabalho · versão 0.3</span>
          <span>10.09.2026 · em consolidação</span>
        </div>

        <header className="grid gap-7 border-b border-[#8A8588]/55 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">Gleide Wolfran · Studio Gle Wolfran · Bruno Lujan</p>
            <h1 className="mt-5 max-w-4xl font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Experiências e plataforma: acordo de trabalho em consolidação.</h1>
          </div>
          <p className="border-l-2 border-[#596862] pl-5 text-base leading-7 text-[#596862]">Base de entendimento para o piloto de 25/09, os contratos do projeto e o primeiro ciclo de validação da plataforma.</p>
        </header>

        <section aria-label="Atualização desta versão" className="my-8 grid overflow-hidden border border-[#512334]/35 bg-[#512334] text-[#F3F3F2] sm:grid-cols-[190px_1fr]">
          <div className="bg-[#493735] px-5 py-5 sm:px-6">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#F4C3CC]">Atualização</p>
            <p className="mt-3 font-sans text-2xl font-medium tracking-[-0.04em]">O que mudou nesta versão.</p>
          </div>
          <div className="px-5 py-5 sm:px-7">
            <p className="text-base leading-7 text-[#DDE0E2]">A colaboração de Bruno foi delimitada como uma entrega específica de formalização, e não como participação automática no faturamento da ativação. Também foram registrados os limites de validação, a proteção de método, repertório, contatos e dados, e a lógica de uso gratuito e comissão da plataforma.</p>
            <p className="mt-4 border-t border-[#F3F3F2]/20 pt-4 font-mono text-xs leading-6 uppercase tracking-[0.1em] text-[#F4C3CC]">Fonte: resposta escrita de Bruno Lujan ao alinhamento do Studio, documento “Bruno e Gle — parceria e projetos”, recebido em 10.09.2026.</p>
          </div>
        </section>

        <div className="grid gap-14 lg:grid-cols-[190px_minmax(0,760px)] lg:gap-16">
          <nav aria-label="Nesta página" className="pt-2 lg:sticky lg:top-8 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8A8588]">Nesta página</p>
            <div className="mt-4 grid gap-2 text-sm text-[#596862]">
              <Link href="#acordo" className="transition hover:text-[#512334]">01 · Acordo</Link>
              <Link href="#frentes" className="transition hover:text-[#512334]">02 · Frentes</Link>
              <Link href="#piloto" className="transition hover:text-[#512334]">03 · Piloto</Link>
              <Link href="#cronograma" className="transition hover:text-[#512334]">04 · Cronograma</Link>
              <Link href="#pendencias" className="transition hover:text-[#512334]">05 · Pendências</Link>
              <Link href="#anotacoes" className="transition hover:text-[#512334]">06 · Anotações</Link>
            </div>
          </nav>

          <div>
            <section id="acordo" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">01 · Partes e propósito</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O Studio e Bruno Lujan colaboram em frentes distintas, com responsabilidades próprias.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>Este documento consolida o entendimento de trabalho entre Gleide Wolfran, pelo Studio Gle Wolfran, e Bruno Lujan. Ele orienta a experiência-piloto de 25/09 e o primeiro ciclo de validação de uma plataforma para gestores de eventos.</p>
                <p>Ele não substitui os contratos individuais de cada projeto. Sempre que houver cliente, colaborador, custo, uso de imagem ou entrega específica, o escopo correspondente deverá ser registrado antes da execução.</p>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="border-l-4 border-[#512334] bg-[#DDE0E2] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#512334]">Princípio de troca</p>
                  <p className="mt-3 text-base leading-7 text-[#2C2D33]">Cada pessoa recebe pelo que assume e entrega. Não há percentual automático por proximidade, origem da ideia ou uso da mesma ferramenta.</p>
                </div>
                <div className="border-l-4 border-[#526A7A] bg-[#E7ECEB] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#526A7A]">Limite de decisão</p>
                  <p className="mt-3 text-base leading-7 text-[#2C2D33]">Gleide preserva a direção, o julgamento, a relação com o cliente e a decisão final nas ativações do Studio.</p>
                </div>
              </div>
            </section>

            <section id="frentes" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">02 · Frentes da colaboração</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Uma experiência do Studio e uma plataforma em validação.</h2>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                <article className="border border-[#151419] bg-[#151419] p-6 text-[#F3F3F2] sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#F4C3CC]">Frente 01 · Studio Gle Wolfran</p>
                  <h3 className="mt-5 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Design e gestão da ativação</h3>
                  <div className="mt-5 space-y-4 border-t border-[#F3F3F2]/20 pt-5 text-base leading-7 text-[#DDE0E2]">
                    <p>O cliente contrata o Studio. Gleide vende, dirige e define o escopo da experiência, incluindo direção estratégica, jornada, curadoria, padrão de qualidade e gestão quando contratada.</p>
                    <p>Bruno só entra como colaborador do Studio quando houver uma entrega específica acordada, com escopo e preço próprios. Não há participação automática no faturamento da ativação.</p>
                  </div>
                </article>

                <article className="border border-[#526A7A]/55 bg-[#526A7A] p-6 text-[#F3F3F2] sm:p-7">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#DDE0E2]">Frente 02 · Produto em validação</p>
                  <h3 className="mt-5 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Sistema para gestores de eventos</h3>
                  <div className="mt-5 space-y-4 border-t border-[#F3F3F2]/25 pt-5 text-base leading-7 text-[#F3F3F2]">
                    <p>Bruno constrói e mantém o código. Gleide testa o uso nas próprias experiências e participa de conversas de aprendizagem após cada caso, sem obrigação de pesquisa ou apresentação de contatos.</p>
                    <p>O ciclo inicial dura três experiências, contando o dia 25, ou até 31/12/2026. O que for útil pode virar sistema; o que não for útil não precisa continuar.</p>
                  </div>
                </article>
              </div>
            </section>

            <section id="piloto" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">03 · Experiência-piloto · 25 de setembro</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Um caso real de ativação, formalização e aprendizagem.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>A experiência de Luan Nogueira e Fine Hair acontece como projeto real do Studio. O piloto não reduz a responsabilidade de construir uma jornada coerente, apresentar os papéis e formalizar o que for necessário antes da realização.</p>
                <p>Nesta primeira edição, Gleide, Bruno e Maria Clara participam sem cobrança, como investimento deliberado para testar o formato. Essa condição é pontual e não define os valores dos próximos projetos.</p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {pilotPeople.map(([name, role, detail], index) => (
                  <article key={name} className={`border p-5 ${index === 0 ? "border-[#512334]/50 bg-[#F7E8EA]" : index === 1 ? "border-[#526A7A]/50 bg-[#E5ECEE]" : "border-[#8A8588]/45 bg-[#DDE0E2]/70"}`}>
                    <p className="font-sans text-xl font-medium tracking-[-0.03em]">{name}</p>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.13em] text-[#4B354D]">{role}</p>
                    <p className="mt-3 text-sm leading-6 text-[#596862]">{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="cronograma" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">04 · Cronograma de trabalho</p>
                  <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O que acontece agora, no piloto e depois dele.</h2>
                </div>
                <span className="border border-[#512334]/35 bg-[#F7E8EA] px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[#512334]">Linha do tempo viva</span>
              </div>

              <ol className="relative mt-8 space-y-4 border-l-2 border-[#526A7A] pl-6 sm:pl-8">
                {timeline.map(([date, title, detail], index) => (
                  <li key={date} className="relative">
                    <span aria-hidden="true" className={`absolute -left-[2.15rem] top-5 size-3 rounded-full border-2 border-[#F3F3F2] ${index === 0 ? "bg-[#512334]" : index === 2 ? "bg-[#4B354D]" : "bg-[#526A7A]"}`} />
                    <article className={`border p-5 ${index === 2 ? "border-[#4B354D] bg-[#4B354D] text-[#F3F3F2]" : "border-[#8A8588]/45 bg-[#DDE0E2]/75 text-[#151419]"}`}>
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className={`font-mono text-xs uppercase tracking-[0.14em] ${index === 2 ? "text-[#F4C3CC]" : "text-[#526A7A]"}`}>{date}</span>
                        <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                      </div>
                      <p className={`mt-3 text-base leading-7 ${index === 2 ? "text-[#DDE0E2]" : "text-[#596862]"}`}>{detail}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </section>

            <section id="pendencias" className="py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">05 · Pendências a decidir</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O que ainda precisa de resposta antes de virar contrato.</h2>
              <div className="mt-7 divide-y divide-[#8A8588]/45 border-y border-[#8A8588]/55">
                {pendingDecisions.map(([title, detail], index) => (
                  <div key={title} className="grid gap-3 py-5 sm:grid-cols-[44px_180px_1fr] sm:items-baseline">
                    <span className="font-mono text-xs tracking-[0.14em] text-[#526A7A]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                    <p className="text-base leading-7 text-[#596862]">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-l-4 border-[#512334] bg-[#F7E8EA] p-5 text-base leading-7 text-[#493735]">
                  <p className="font-semibold text-[#512334]">Autoria, dados e contatos</p>
                  <p className="mt-2">Método, repertório, marca, contatos e dados dos clientes de Gleide permanecem do Studio. Qualquer ideia específica que possa virar função do sistema deve ser consultada e registrada por escrito.</p>
                </div>
                <div className="border-l-4 border-[#526A7A] bg-[#E5ECEE] p-5 text-base leading-7 text-[#2C2D33]">
                  <p className="font-semibold text-[#526A7A]">Uso e indicação da plataforma</p>
                  <p className="mt-2">O Studio usa a versão padrão sem custo enquanto o sistema estiver no ar. Indicações feitas por escrito antes do fechamento geram a comissão proposta, em contrato próprio entre Gleide e Bruno.</p>
                </div>
              </div>

              <div className="mt-8">
                <AlignmentNotes />
              </div>

              <div className="mt-10 border-l-4 border-[#512334] bg-[#DDE0E2] px-6 py-5 text-base leading-7 text-[#493735] sm:px-8">
                <p className="font-semibold text-[#512334]">Natureza deste documento</p>
                <p className="mt-2">Este acordo registra a base de trabalho que está sendo consolidada. Cada experiência, indicação, entrega técnica e relação com cliente deverá ter seu próprio escopo e contrato antes de gerar obrigação para qualquer parte.</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="border-t border-[#8A8588]/45 bg-[#151419] px-5 py-7 text-[#DDE0E2] sm:px-8">
        <div className="mx-auto flex max-w-[var(--content-width)] flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.13em]">
          <Link href="/" className="text-[#F3F3F2] transition hover:text-[#F4C3CC]">Studio Gle Wolfran</Link>
          <Link href="/contato" className="text-[#DDE0E2] transition hover:text-[#F4C3CC]">Contato</Link>
          <span>Ariquemes · Rondônia · 2026</span>
        </div>
      </footer>
    </main>
  )
}
