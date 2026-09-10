import type { Metadata } from "next"
import Link from "next/link"

import { PublicHeader } from "@/components/studio/public-header"

export const metadata: Metadata = {
  title: "Alinhamento · experiências e plataforma",
  description:
    "Documento de alinhamento sobre a experiência de 25/09, o serviço de ativação de marca e a plataforma para gestores de eventos.",
}

const eventSteps = [
  ["01", "Desenhar", "Dar forma ao objetivo, à jornada, aos papéis, ao ritmo e ao padrão de qualidade."],
  ["02", "Apresentar", "Tornar visível para participantes e colaboradores o que está sendo proposto."],
  ["03", "Formalizar", "Registrar entregas, custos, responsabilidades, créditos e uso de imagem."],
  ["04", "Aprender", "Observar o que funciona e o que pode ser aprimorado nas próximas experiências."],
] as const

const projectPeople = [
  ["Luan Nogueira", "Marca a ser ativada", "A marca que será colocada em relação com as pessoas e com a experiência."],
  ["Fine Hair", "Marca, prestador e espaço", "Marca a ser ativada, prestador de serviços de cabelos e make e espaço onde a ativação vai acontecer."],
  ["Gleide", "Estrategista / designer e gestora", "Direção da experiência, organização do desenho e gestão da ativação."],
  ["Possíveis colaboradores", "A confirmar conforme o desenho", "Gráfica, buffet, filmmaker profissional e outros parceiros que possam ser necessários."],
] as const

const alignmentQuestions = [
  [
    "Quando você fala em plataforma, qual é exatamente o produto que está sendo construído agora?",
    "Preciso distinguir o que já existe, o que é hipótese e o que depende da validação do piloto.",
  ],
  [
    "Em quais partes dos próximos eventos você acredita que pode colaborar?",
    "Não estou definindo agora a sua atuação no dia 25. Quero entender como você se enxerga contribuindo em experiências futuras e que tipo de entrega gostaria de desenvolver.",
  ],
  [
    "O que você espera que eu pesquise, teste e valide para a plataforma — e por quanto tempo?",
    "Meu acesso ao contexto, aos fornecedores e a outros gestores é parte importante do piloto e precisa ter contorno.",
  ],
  [
    "Como ficam autoria, propriedade, uso do repertório e aproveitamento dos aprendizados do meu negócio?",
    "Quero colaborar com abertura sem transformar minhas ideias, contatos ou método em um recurso sem limite definido.",
  ],
  [
    "Como funcionam, na prática, o uso gratuito e a comissão por indicação?",
    "Precisamos definir base de cálculo, prazo, momento do pagamento, continuidade e o que acontece se a parceria mudar.",
  ],
  [
    "Como separamos um cliente que compra a plataforma de um cliente que contrata o serviço de experiência do Studio?",
    "Essa separação evita que uma indicação, uma venda de sistema e uma ativação sejam tratadas como a mesma relação comercial.",
  ],
  [
    "Quais decisões precisam ser tomadas antes do evento e quais podem ficar para depois do piloto?",
    "Nem toda premissa precisa virar compromisso agora, mas o que for compromisso precisa estar claro para todos.",
  ],
] as const

export default function AlignmentExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#F3F3F2] text-[#151419]">
      <PublicHeader />

      <div className="mx-auto max-w-[var(--content-width)] px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#8A8588]/40 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#526A7A]">
          <span>Documento de alinhamento</span>
          <span>10.09.2026 · v0.2 · em elaboração</span>
        </div>
      </div>

      <article className="mx-auto max-w-[var(--content-width)] px-5 pb-24 sm:px-8">
        <header className="border-b border-[#8A8588]/55 py-14 sm:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">Experiências · plataforma · parceria</p>
            <h1 className="mt-5 max-w-3xl font-sans text-4xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl">O que eu estou enxergando</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#596862]">Um registro da minha leitura sobre a experiência de 25/09, o serviço de ativação de marca e o sistema para gestores de eventos.</p>
          </div>
        </header>

        <div className="grid gap-16 lg:grid-cols-[180px_minmax(0,760px)] lg:gap-16">
          <nav aria-label="Nesta página" className="pt-10 lg:sticky lg:top-8 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8A8588]">Nesta página</p>
            <div className="mt-4 grid gap-2 text-sm text-[#596862]">
              <Link href="#contexto" className="transition hover:text-[#512334]">01 · Contexto</Link>
              <Link href="#frentes" className="transition hover:text-[#512334]">02 · Frentes</Link>
              <Link href="#25-setembro" className="transition hover:text-[#512334]">03 · 25/09</Link>
              <Link href="#troca" className="transition hover:text-[#512334]">04 · Troca</Link>
              <Link href="#perguntas" className="transition hover:text-[#512334]">06 · Perguntas</Link>
            </div>
            <div className="mt-10 border-l-2 border-[#512334] bg-[#DDE0E2] px-4 py-4 text-sm leading-6 text-[#493735]">
              <p className="font-semibold text-[#512334]">Este documento não é uma proposta comercial.</p>
              <p className="mt-2">É uma base de entendimento para que a conversa e os contratos partam de uma visão explicitada.</p>
            </div>
          </nav>

          <div>
            <section id="contexto" className="border-b border-[#8A8588]/40 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">01 · Contexto</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Antes de dividir qualquer coisa, precisamos nomear o que está sendo construído.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>Nas nossas conversas, a palavra “evento” foi carregando sentidos diferentes. Falamos sobre organizar fornecedores, criar experiências, atender empresas, construir uma plataforma e dividir ganhos — às vezes dentro da mesma conversa e de forma casual.</p>
                <p>Como esses alinhamentos não foram gravados nem reunidos em um documento único, é possível que uma ideia tenha parecido outra coisa dependendo do ponto de vista de quem ouviu. Este registro existe para tornar explícita a minha leitura antes de transformá-la em parceria, preço, contrato ou requisito de sistema.</p>
                <p>Quando eu falo em criar experiências, não estou falando apenas de executar um evento. Estou falando de compreender o momento de uma empresa, encontrar uma intenção, pesquisar referências, fazer escolhas, reunir pessoas e construir uma jornada que faça sentido para quem participa e para a marca que está se apresentando.</p>
                <p className="border-l-2 border-[#512334] pl-5 font-medium text-[#151419]">O evento é o lugar onde essa visão se manifesta. O sistema é uma possível ferramenta de apoio. As duas coisas não são o mesmo produto.</p>
              </div>
            </section>

            <section id="frentes" className="border-b border-[#8A8588]/40 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">02 · Frentes</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Eu enxergo duas frentes que podem se relacionar, mas não devem ser confundidas.</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#596862]">Abaixo está a minha visão de cada projeto. Não é ainda a descrição das tarefas de cada pessoa nem um acordo de divisão financeira.</p>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                <article className="flex h-full flex-col border border-[#512334] bg-[#512334] p-6 text-[#F3F3F2] sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F4C3CC]">Frente 01 · Serviço do Studio</p>
                  <h3 className="mt-6 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Design e gestão da ativação de marca</h3>
                  <div className="mt-6 space-y-5 border-t border-[#F3F3F2]/20 pt-5 text-base leading-7 text-[#DDE0E2]">
                    <p>Eu visualizo esta frente como uma oferta própria de Gle Wolfran/Studio. Ela nasce da minha capacidade de ler uma marca e o seu momento, pesquisar possibilidades, selecionar referências e transformar tudo isso em uma experiência com intenção.</p>
                    <p>Não é uma fórmula pronta para produzir eventos iguais. Cada ativação pode pedir uma narrativa, um ritmo, uma atmosfera, parceiros e formas de participação diferentes. O que permanece é o cuidado com a coerência entre a ideia, os pontos de contato, as pessoas envolvidas e a percepção final.</p>
                    <p>Também visualizo uma responsabilidade de direção: sustentar o padrão de qualidade, cuidar das escolhas e acompanhar a experiência até que ela faça sentido no mundo real. Conforme o escopo, essa oferta pode envolver outros colaboradores, conteúdo, produção e gestão.</p>
                  </div>
                </article>

                <article className="flex h-full flex-col border border-[#493735]/35 bg-[#DDE0E2] p-6 text-[#493735] sm:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#4B354D]">Frente 02 · Produto em construção</p>
                  <h3 className="mt-6 font-sans text-2xl font-medium leading-tight tracking-[-0.04em]">Sistema para gestores de eventos</h3>
                  <div className="mt-6 space-y-5 border-t border-[#493735]/20 pt-5 text-base leading-7 text-[#2C2D33]">
                    <p>Eu visualizo esta frente como um produto separado: uma ferramenta para organizar a parte operacional de quem já precisa conduzir eventos e relações com clientes, fornecedores e colaboradores.</p>
                    <p>O valor que enxergo está em tirar informações importantes da dispersão — escopos, contratos, entregas, custos, prazos e responsabilidades — e colocá-las em uma estrutura que ajude o gestor a acompanhar o trabalho com mais clareza.</p>
                    <p>Esse produto pode nascer a partir do meu próprio negócio como primeiro ambiente de observação e validação. Eu tenho contato com situações, fornecedores e profissionais que podem revelar necessidades reais. Mas o sistema precisa continuar sendo tratado como produto próprio, com limites claros sobre o que está sendo aprendido, usado e comercializado.</p>
                  </div>
                </article>
              </div>
            </section>

            <section id="25-setembro" className="border-b border-[#8A8588]/40 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#596862]">03 · 25 de setembro</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O dia 25 já é uma experiência real; o desenho ainda está sendo descoberto.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>O evento não é apenas uma demonstração da plataforma nem uma simulação de serviço. Ele é a primeira experiência real em que vou organizar e testar essas premissas diante de participantes e colaboradores.</p>
                <p>Por isso, algumas coisas já estão dadas — a data, as pessoas envolvidas e a intenção de realizar — enquanto outras ainda precisam ganhar forma. O piloto serve para observar o que precisa ser cuidado, o que precisa ser contratado e o que, eventualmente, pode virar aprendizado para o sistema.</p>
              </div>

              <ol className="mt-8 border-y border-[#8A8588]/55">
                {eventSteps.map(([number, title, description]) => (
                  <li key={number} className="grid gap-3 border-b border-[#8A8588]/40 py-5 last:border-b-0 sm:grid-cols-[48px_160px_1fr] sm:items-baseline">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#526A7A]">{number}</span>
                    <h3 className="font-sans text-xl font-medium tracking-[-0.03em]">{title}</h3>
                    <p className="text-sm leading-6 text-[#596862]">{description}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-[#596862]">Maria Clara participa sem cobrança nesta primeira experiência para conhecer o formato. Essa condição é pontual e não define o preço do serviço ou dos próximos projetos.</p>

              <div className="mt-10 border-t border-[#8A8588]/55 pt-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">Envolvidos no projeto</p>
                <h3 className="mt-4 max-w-2xl font-sans text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl">Quem dá forma a esta primeira experiência.</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {projectPeople.map(([name, role, detail]) => (
                    <article key={name} className="border border-[#8A8588]/45 bg-[#DDE0E2]/60 p-5">
                      <h4 className="font-sans text-xl font-medium tracking-[-0.03em]">{name}</h4>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#4B354D]">{role}</p>
                      <p className="mt-3 text-sm leading-6 text-[#596862]">{detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="troca" className="border-b border-[#8A8588]/40 py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">04 · Diretriz de troca</p>
              <div className="mt-5 border-l-4 border-[#596862] bg-[#DDE0E2] px-6 py-6 sm:px-8 sm:py-7">
                <h2 className="max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">Cada ganho acompanha o que cada pessoa escolhe entregar.</h2>
                <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-[#2C2D33]">
                  <p>A divisão financeira não será definida automaticamente por proximidade, origem da ideia ou uso da mesma ferramenta.</p>
                  <p>Ela precisa acompanhar o escopo, a dedicação, a responsabilidade, o risco, os custos assumidos, o valor criado e a participação na operação.</p>
                  <p>Por isso, eu não consigo definir um percentual de Bruno na ativação antes de entender qual entrega ele deseja assumir nela. A comissão pela venda da plataforma é uma conversa possível, mas pertence à lógica comercial do produto e precisa ser estruturada separadamente.</p>
                </div>
              </div>
            </section>

            <section id="perguntas" className="py-12 sm:py-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#512334]">06 · Perguntas para alinhar</p>
              <h2 className="mt-4 max-w-2xl font-sans text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">O que ainda não está redondo para mim.</h2>
              <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-[#2C2D33]">
                <p>Antes de formalizar a parceria, preciso conhecer melhor a visão de Bruno sobre a plataforma e sobre a possível participação dele nas experiências. Estas perguntas não são uma cobrança; são o contorno mínimo para que eu saiba o que estou aceitando, oferecendo e construindo.</p>
              </div>

              <ol className="mt-8 border-y border-[#8A8588]/55">
                {alignmentQuestions.map(([question, reason], index) => (
                  <li key={question} className="grid gap-4 border-b border-[#8A8588]/40 py-6 last:border-b-0 sm:grid-cols-[40px_1fr]">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-[#4B354D]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-sans text-xl font-medium leading-tight tracking-[-0.03em]">{question}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#596862]">{reason}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 max-w-2xl border-l-2 border-[#512334] pl-5 text-base font-medium leading-7 text-[#151419]">Com essas respostas, consigo separar o que é colaboração no evento, o que é construção e validação da plataforma e o que precisa virar contrato próprio.</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#8A8588]/40 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8A8588]">
                <span>Documento vivo</span>
                <span>·</span>
                <span>Versão 0.2</span>
                <span>·</span>
                <span>Studio Gle Wolfran</span>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="border-t border-[#8A8588]/40 bg-[#DDE0E2] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-[var(--content-width)] flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#596862]">
          <Link href="/" className="text-[#151419] transition hover:text-[#512334]">Studio Gle Wolfran</Link>
          <Link href="/contato" className="text-[#512334] transition hover:text-[#4B354D]">Contato</Link>
          <span>Ariquemes · Rondônia · 2026</span>
        </div>
      </footer>
    </main>
  )
}
