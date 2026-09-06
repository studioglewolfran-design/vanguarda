import {
  Beaker,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Compass,
  FolderKanban,
  Handshake,
  LayoutDashboard,
  LibraryBig,
  MessageSquareQuote,
  Sparkles,
  Users,
} from "lucide-react"

export const osNavigation = [
  { href: "/os", label: "Visão geral", description: "Agora e próximos movimentos", icon: LayoutDashboard },
  { href: "/os/projetos", label: "Projetos", description: "Frentes, tarefas e bloqueios", icon: FolderKanban },
  { href: "/os/clientes", label: "Clientes", description: "Relações e histórico", icon: Users },
  { href: "/os/comercial", label: "Comercial", description: "Oportunidades e propostas", icon: ChartNoAxesCombined },
  { href: "/os/repertorio", label: "Repertório", description: "Referências e curadoria", icon: LibraryBig },
  { href: "/os/decisoes", label: "Decisões", description: "Escolhas, critérios e pendências", icon: MessageSquareQuote },
  { href: "/os/inteligencia", label: "Memória e inteligência", description: "Captura e síntese do Studio", icon: Sparkles },
] as const
export const platformAreas = [
  {
    href: "/os",
    eyebrow: "Operação interna",
    title: "Studio OS",
    description: "Projetos, clientes, decisões e conhecimento em um centro de comando vivo.",
    icon: BriefcaseBusiness,
    tone: "dark",
  },
  {
    href: "/portais",
    eyebrow: "Relação contínua",
    title: "Portais de clientes",
    description: "Espaços privados para contexto, entregas, aprovações e próximos movimentos.",
    icon: Handshake,
    tone: "light",
  },
  {
    href: "/brand-systems",
    eyebrow: "Marcas vivas",
    title: "Brand Systems",
    description: "Diretrizes que deixam de ser PDFs estáticos e passam a orientar decisões reais.",
    icon: BookOpen,
    tone: "blue",
  },
  {
    href: "/laboratorio",
    eyebrow: "Pesquisa aplicada",
    title: "Laboratório de produtos",
    description: "Hipóteses, protótipos e ferramentas testados antes de se tornarem ofertas.",
    icon: Beaker,
    tone: "sand",
  },
] as const

export const publicNavigation = [
  { href: "/", label: "Studio", icon: Building2 },
  { href: "/#abordagem", label: "Abordagem", icon: Compass },
  { href: "/brand-systems", label: "Brand Systems", icon: BookOpen },
  { href: "/laboratorio", label: "Laboratório", icon: Beaker },
] as const
