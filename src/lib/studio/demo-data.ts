import type { OperationalPanel } from "@/lib/isa/operational-panel"

export const demoOperationalPanel: OperationalPanel = {
  lastConsolidation: "Ambiente demonstrativo",
  priorities: [
    "Validar a arquitetura de informação do Studio OS.",
    "Escolher o primeiro fluxo operacional a ser implementado por completo.",
    "Testar a navegação em celular e desktop.",
    "Definir os papéis de acesso ao ambiente interno e aos portais.",
    "Registrar dúvidas e fricções encontradas durante o teste.",
  ],
  alerts: [
    { title: "Dados apresentados neste Preview são demonstrativos", project: "Studio OS", deadline: "Durante a Alpha", status: "Contexto de teste" },
    { title: "Capturas e uploads permanecem desativados no Preview", project: "Memória", deadline: "Até integração com Supabase", status: "Proteção" },
  ],
  projects: [
    { name: "Projeto Aurora", objective: "Transformar uma prática autoral em uma marca clara e aplicável.", context: "O diagnóstico foi concluído e as escolhas centrais estão em validação.", tasks: ["Validar tese de posicionamento", "Selecionar territórios de expressão", "Preparar encontro de decisão"], blocker: "A promessa central ainda precisa de confirmação.", status: "Em direção" },
    { name: "Casa Horizonte", objective: "Organizar uma experiência de marca coerente entre espaço, serviço e comunicação.", context: "Há um repertório forte, mas a experiência ainda é percebida de forma fragmentada.", tasks: ["Sintetizar jornada atual", "Mapear momentos de assinatura", "Priorizar protótipos"], blocker: "Escopo da primeira entrega em definição.", status: "Em descoberta" },
    { name: "Brand System do Studio", objective: "Construir um sistema vivo para orientar criação e colaboração.", context: "A base visual e a arquitetura da plataforma estão disponíveis para teste.", tasks: ["Revisar nomenclaturas", "Validar componentes", "Definir conteúdo prioritário"], blocker: "A identidade ainda é uma hipótese em evolução.", status: "Alpha" },
    { name: "Laboratório de produtos", objective: "Testar ferramentas e métodos antes de transformá-los em ofertas.", context: "As hipóteses iniciais foram organizadas em uma área própria da plataforma.", tasks: ["Escolher uma hipótese", "Definir teste mínimo", "Convidar usuários-piloto"], blocker: "Problema prioritário ainda não selecionado.", status: "Incubação" },
  ],
  commitments: ["Revisão semanal", "Teste da plataforma", "Consolidação de feedback"],
  peopleWaiting: ["Pessoa-piloto A", "Parceiro criativo B"],
  waitingOn: ["Retorno sobre proposta demonstrativa"],
  decisions: [
    "Qual fluxo deve se tornar funcional primeiro?",
    "Quem poderá acessar a operação interna?",
    "Qual conteúdo pertence ao portal de cada cliente?",
  ],
  direction: ["Marca-mãe: Studio Gle Wolfran", "Plataforma interna: Studio OS", "Assinatura provisória: somente o nome do Studio"],
  orbitalFronts: [
    { id: "alpha", title: "Studio OS", orbit: "alta", domain: "plataforma", why: "Experiência em validação", next: "Coletar feedback" },
    { id: "portal", title: "Portal-piloto", orbit: "movimento", domain: "clientes", why: "Próxima hipótese de valor", next: "Definir cliente-piloto" },
  ],
  tasks: [
    { priority: "Alta", action: "Percorrer todas as áreas e registrar fricções", project: "Studio OS", owner: "Gleide", deadline: "Durante a Alpha", status: "Aberta" },
    { priority: "Alta", action: "Escolher o primeiro fluxo completo", project: "Produto", owner: "Gleide", deadline: "Após o teste", status: "A decidir" },
    { priority: "Média", action: "Validar os nomes das áreas", project: "Arquitetura", owner: "Studio", deadline: "Durante a Alpha", status: "Aberta" },
    { priority: "Média", action: "Planejar persistência no Supabase", project: "Infraestrutura", owner: "Studio", deadline: "Alpha 0.2", status: "Planejada" },
  ],
  clients: [
    { id: "aurora", name: "Projeto Aurora", relationship: "Direção estratégica", status: "Em direção", proposals: "1 versão", contracts: "Em definição", briefings: "Completo", conversations: "3 registros", source: "Dados demonstrativos", next: "Validar a tese de posicionamento.", alert: "Exemplo fictício; não representa cliente real." },
    { id: "horizonte", name: "Casa Horizonte", relationship: "Descoberta e experiência", status: "Em descoberta", proposals: "Ainda não", contracts: "Ainda não", briefings: "Em curso", conversations: "2 registros", source: "Dados demonstrativos", next: "Concluir a leitura da jornada atual.", alert: "Exemplo fictício; não representa cliente real." },
    { id: "piloto", name: "Portal-piloto", relationship: "Teste de produto", status: "A selecionar", proposals: "Não aplicável", contracts: "Não aplicável", briefings: "A criar", conversations: "Sem registros", source: "Dados demonstrativos", next: "Escolher uma relação adequada para o primeiro teste.", alert: "Não convidar cliente antes de validar permissões e isolamento." },
  ],
  clarity: {
    summary: "A Alpha testa se uma única plataforma consegue transformar contexto disperso em direção operacional legível.",
    stable: ["Studio Gle Wolfran é a marca-mãe.", "O OS é uma operação privada.", "Portais não expõem a memória interna."],
    confirmed: ["A nova superfície não utiliza um nome de assistente.", "O Preview usa apenas dados fictícios.", "Decisões permanecem humanas."],
    pending: ["Qual fluxo completo gera valor primeiro?", "Quais papéis de acesso serão necessários?", "Que partes devem migrar de arquivos para o banco?"],
  },
  isaUpdates: [
    { date: "Durante a Alpha", origin: "Teste demonstrativo", change: "O feedback relevante recebe um recibo de atualização.", status: "Refletido", location: "Memória e inteligência" },
  ],
}
