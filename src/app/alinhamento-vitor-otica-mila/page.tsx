import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Alinhamento de colaboração · Vitor Lobo e Ótica Mila",
  description:
    "Base de alinhamento entre Gleide Wolfran e Vitor Lobo para a finalização da marca Ótica Mila e uma possível ativação do rebranding.",
}

const projectPeople = [
  ["Gleide Wolfran", "Direção e relação", "Conduz a relação com a cliente, define a direção e aprova o escopo do Studio Gle Wolfran."],
  ["Vitor Lobo", "Colaboração a definir", "Pode aprofundar o estudo da marca, apoiar a organização dos arquivos e contribuir para o lançamento do rebranding."],
  ["Ramon", "Participação original", "A divisão de responsabilidades na finalização da identidade precisa ser confirmada antes da ampliação do trabalho."],
  ["Ótica Mila", "Cliente e marca", "Recebe a entrega original e poderá avaliar uma nova proposta de ativação ou lançamento."],
] as const

const timeline = [
  ["Agora", "Alinhamento com Vitor", "Confirmar interesse, disponibilidade, papel, entregáveis, valor e condição de pagamento."],
  ["Antes do estudo", "Acordo interno", "Separar a nova colaboração do escopo original e registrar responsabilidades, arquivos, créditos e limites de acesso."],
  ["Depois do acordo", "Estudo e preparação", "Aprofundar a leitura da Ótica Mila e organizar a entrega final de arquivos e manual conforme o escopo confirmado."],
  ["Após a entrega original", "Proposta para a cliente", "Apresentar, em instrumento próprio, a possibilidade de ativar ou lançar o rebranding sem prometer resultados não comprovados."],
  ["Se houver aceite", "Execução da nova etapa", "Definir cronograma, custos diretos, aprovações e participação de cada pessoa antes de começar."],
] as const

const pendingDecisions = [
  ["Interesse e disponibilidade", "Vitor confirma se quer participar desta etapa e em que formato consegue contribuir."],
  ["Escopo e entregáveis", "Definir o que entra no estudo da marca, na finalização dos arquivos, no manual e no lançamento."],
  ["Valor e pagamento", "Vitor precifica sua participação; o custo entra no orçamento do S-GW, com eventual prazo de pagamento combinado entre as partes."],
  ["Papéis e autoria", "Registrar a relação entre Gleide, Vitor, Ramon e a cliente, incluindo créditos, direitos de uso, arquivos e confidencialidade."],
  ["Nova proposta para a Ótica Mila", "Escolher entre uma ativação essencial e uma etapa ampliada somente depois de validar necessidade, escopo e orçamento."],
] as const

export default function AlignmentVitorOticaMilaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F3F3F2] text-[#151419]">
      <div aria-hidden="true" className="h-1.5 bg-gradient-to-r from-[#512334] via-[#4B354D] to-[#526A7A]" />

      <article className="mx-auto max-w-[var(--content-width)] px-5 pb-24 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8A8588]/45 py-4 font-mono text-xs uppercase tracking-[0.14em] text-[#526A7A]">
          <span>Alinhamento de colaboração · versão 0.1</span>
          <span>15.09.2026 · em consolidação</span>
        </div>

        <header className="grid gap-7 border-b border-[#8A8588]/55 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end lg:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">Gleide Wolfran · Studio Gle Wolfran · Vitor Lobo</p>
            <h1 className="mt-5 max-w-4xl font-sans text-4xl font-medium leading-[0.94] tracking-[-0.06em] sm:text-6xl">Ótica Mila: alinhamento para finalizar e lançar o rebranding.</h1>
          </div>
          <p className="border-l-2 border-[#526A7A] pl-5 text-base leading-7 text-[#526A7A]">Base de trabalho para uma possível colaboração paga na entrega final da marca e na ativação do seu novo momento.</p>
        </header>

        <section aria-label="Atualização desta versão" className="my-8 grid border-y border-[#512334]/45 py-5 sm:grid-cols-[190px_1fr] sm:gap-7">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#512334]">Atualização</p>
            <p className="mt-3 font-sans text-2xl font-medium tracking-[-0.04em]">O que está sendo proposto.</p>
          </div>
          <div>
            <p className="text-base leading-7 text-[#2C2D33]">A apresentação de marca da Ótica Mila foi aprovada e o pacote inicial foi preparado. Gleide considera propor uma nova etapa, separada do escopo original: a ativação da marca ou o lançamento do rebranding. Vitor apoiaria o estudo aprofundado da marca e a finalização/organização dos arquivos e do manual, com preço próprio e sem trabalho gratuito.</p>
            <p className="mt-4 border-t border-[#512334]/25 pt-4 font-mono text-xs leading-6 uppercase tracking-[0.1em] text-[#512334]">Natureza: alinhamento interno antes de qualquer nova proposta ou contratação.</p>
          </div>
        </section>

        <div className="grid gap-14 lg:grid-cols-[190px_minmax(0,760px)] lg:gap-16">
          <nav aria-label="Nesta página" className="pt-2 lg:sticky lg:top-8 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8A8588]">Nesta página</p>
            <div className="mt-4 grid gap-2 text-sm text-[#596862]">
              <Link href="#acordo" className="transition hover:text-[#512334]">01 · Acordo</Link>
              <Link href="#frentes" className="transition hover:text-[#512334]">02 · Frentes</Link>
              <Link href="#projeto" className="transition hover:text-[#512334]">03 · Ótica Mila</Link>
              <Link href="#cronograma" className="transition hover:text-[#512334]">04 · Caminho</Link>
              <Link href="#pendencias" className="transition hover:text-[#512334]">05 · Pendências</Link>
            </div>
          </nav>

          <div>
            <section id="acordo" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">01 · Partes e propósito</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Gleide e Vitor podem colaborar em uma nova etapa, com responsabilidades e troca financeira claras.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>Este documento organiza o ponto de partida entre Gleide Wolfran, pelo Studio Gle Wolfran, e Vitor Lobo para a continuidade possível da Ótica Mila.</p>
                <p>Ele não substitui o encerramento formal do projeto original, o acordo interno entre os colaboradores nem a proposta que poderá ser apresentada à cliente.</p>
              </div>
              <div className="mt-8 grid gap-7 border-t border-[#8A8588]/45 pt-6 sm:grid-cols-2">
                <div className="border-l-2 border-[#512334] pl-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#512334]">Princípio de troca</p>
                  <p className="mt-3 text-base leading-7 text-[#2C2D33]">O trabalho de Vitor será precificado e tratado como custo do S-GW. Um eventual prazo para pagamento precisa ser combinado; a colaboração não será presumida como gratuita.</p>
                </div>
                <div className="border-l-2 border-[#526A7A] pl-5">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#526A7A]">Limite de decisão</p>
                  <p className="mt-3 text-base leading-7 text-[#2C2D33]">Gleide preserva a direção do Studio, a relação com a cliente e a decisão final sobre o que será ofertado.</p>
                </div>
              </div>
            </section>

            <section id="frentes" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">02 · Frentes da colaboração</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Finalizar o que foi aprovado e criar uma passagem possível para a ativação.</h2>
              <div className="mt-8 grid gap-8 border-t border-[#8A8588]/45 pt-6 lg:grid-cols-2 lg:gap-12">
                <article className="border-l-2 border-[#512334] pl-5 sm:pl-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#512334]">Frente 01 · Entrega da marca</p>
                  <h3 className="mt-4 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Estudo, arquivos e manual</h3>
                  <div className="mt-5 space-y-4 text-base leading-7 text-[#2C2D33]">
                    <p>Vitor pode aprofundar a leitura da Ótica Mila e apoiar a organização dos arquivos finais e do manual, sempre a partir da direção aprovada e do escopo confirmado.</p>
                    <p>O formato exato, a divisão com Ramon, as revisões e o critério de aceite precisam ser definidos antes do início.</p>
                  </div>
                </article>

                <article className="border-l-2 border-[#526A7A] pl-5 sm:pl-6">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#526A7A]">Frente 02 · Nova oportunidade</p>
                  <h3 className="mt-4 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Ativação ou lançamento do rebranding</h3>
                  <div className="mt-5 space-y-4 text-base leading-7 text-[#2C2D33]">
                    <p>Depois de encerrar a etapa original, o Studio pode apresentar uma proposta própria para colocar a nova marca em circulação, com conceito, jornada, conteúdos ou outros pontos de contato conforme a necessidade real.</p>
                    <p>Vitor poderá contribuir na criação e na execução do que for contratado. A cliente, o preço, os custos diretos e os resultados não estão definidos.</p>
                  </div>
                </article>
              </div>
            </section>

            <section id="projeto" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">03 · Ótica Mila · ponto de partida</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">A nova etapa só começa com o ciclo original reconhecido e separado.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>A apresentação de marca foi aprovada e o pacote v1 foi preparado. Ainda é necessário formalizar o escopo original, os arquivos entregues, o aceite e o saldo antes de ampliar o trabalho.</p>
                <p>A ativação ou o lançamento do rebranding será uma nova proposta. Não deve ser usado para ocultar pendências antigas, misturar a compra pessoal de óculos ou transformar custos de colaboradores em promessa informal.</p>
              </div>
              <div className="mt-8 divide-y divide-[#8A8588]/45 border-y border-[#8A8588]/55">
                {projectPeople.map(([name, role, detail], index) => (
                  <article key={name} className="grid gap-3 py-5 sm:grid-cols-[minmax(140px,0.8fr)_minmax(160px,0.8fr)_minmax(0,1.8fr)] sm:items-baseline sm:gap-6">
                    <p className="font-sans text-xl font-medium tracking-[-0.03em]">{name}</p>
                    <p className={`font-mono text-xs uppercase tracking-[0.13em] ${index === 0 ? "text-[#512334]" : index === 1 ? "text-[#526A7A]" : "text-[#8A8588]"}`}>{role}</p>
                    <p className="text-base leading-7 text-[#526A7A]">{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="cronograma" className="border-b border-[#8A8588]/45 py-10 sm:py-14">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">04 · Caminho de trabalho</p>
                  <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Da conversa entre colaboradores à proposta para a cliente.</h2>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#526A7A]">Sequência a confirmar</span>
              </div>

              <ol className="relative mt-8 space-y-4 border-l-2 border-[#526A7A] pl-6 sm:pl-8">
                {timeline.map(([date, title, detail], index) => (
                  <li key={date} className="relative">
                    <span aria-hidden="true" className={`absolute -left-[2.15rem] top-1.5 size-3 rounded-full border-2 border-[#F3F3F2] ${index === 0 || index === 3 ? "bg-[#512334]" : "bg-[#526A7A]"}`} />
                    <article className="pb-3">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className={`font-mono text-xs uppercase tracking-[0.14em] ${index === 0 || index === 3 ? "text-[#512334]" : "text-[#526A7A]"}`}>{date}</span>
                        <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                      </div>
                      <p className="mt-2 text-base leading-7 text-[#526A7A]">{detail}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </section>

            <section id="pendencias" className="py-10 sm:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#512334]">05 · Pendências a decidir</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O que precisa de resposta antes de virar trabalho.</h2>
              <div className="mt-7 divide-y divide-[#8A8588]/45 border-y border-[#8A8588]/55">
                {pendingDecisions.map(([title, detail], index) => (
                  <div key={title} className="grid gap-3 py-5 sm:grid-cols-[44px_180px_1fr] sm:items-baseline">
                    <span className="font-mono text-xs tracking-[0.14em] text-[#526A7A]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                    <p className="text-base leading-7 text-[#596862]">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-7 border-t border-[#8A8588]/45 pt-6 sm:grid-cols-2">
                <div className="border-l-2 border-[#512334] pl-5 text-base leading-7 text-[#2C2D33]">
                  <p className="font-semibold text-[#512334]">Remuneração e custos</p>
                  <p className="mt-2">O Studio administra a proposta para a cliente e separa internamente fee, custo de Vitor, custos diretos e demais despesas. Nenhum valor é considerado aprovado antes da confirmação das partes.</p>
                </div>
                <div className="border-l-2 border-[#526A7A] pl-5 text-base leading-7 text-[#2C2D33]">
                  <p className="font-semibold text-[#526A7A]">Autoria, arquivos e acesso</p>
                  <p className="mt-2">O acesso aos materiais será limitado ao necessário. Créditos, direitos de uso, confidencialidade, arquivos editáveis e eventual uso do sistema do Vitor serão registrados antes da execução.</p>
                </div>
              </div>

              <div className="mt-14 max-w-sm border-t border-[#8A8588]/55 pt-4 text-sm leading-6 text-[#526A7A]">
                <p className="font-mono text-xs uppercase tracking-[0.13em] text-[#8A8588]">Natureza do documento</p>
                <p className="mt-2">Base de alinhamento em consolidação. Não substitui contrato, proposta comercial, aceite da cliente ou validação contábil/jurídica quando necessária.</p>
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
