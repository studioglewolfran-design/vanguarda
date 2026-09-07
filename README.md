# Studio AI

Aplicacao interna do Studio Gle Wolfran, construida com Next.js e Supabase.
Ela nasceu do template tecnico Vanguarda.

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| UI | React 19 |
| Estilizacao | Tailwind CSS 4 |
| Auth | Supabase Auth |
| Banco de dados | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Runtime | Node.js v25.6.0 |
| Package Manager | npm 11.8.0 |

## Pre-requisitos

- Node.js >= 25
- npm >= 11
- Conta no [Supabase](https://supabase.com)

## Setup local

```bash
# 1. Entre no projeto
cd studio-ai

# 2. Instale as dependencias
npm install

# 3. Configure as variaveis de ambiente
cp .env.example .env.local
# Preencha .env.local com suas credenciais do Supabase

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Estrutura do workspace

```
studio-ai/
├── src/
│   ├── app/          # App Router (pages, layouts, rotas)
│   ├── components/   # Componentes React reutilizaveis
│   ├── lib/          # Utilitarios e configuracoes (supabase client)
│   └── types/        # Tipos TypeScript
├── public/           # Assets estaticos
├── docs/             # Documentacao viva, backlog e estado operacional
├── entregaveis/      # Arquivos finais locais por cliente (fora do Git)
├── tmp/              # Renders e arquivos intermediarios (fora do Git)
├── output/           # Artefatos gerados localmente (fora do Git)
├── Inner Atlas/      # Projeto independente, com Git proprio
├── .env.example      # Template de variaveis de ambiente
├── AGENTS.md         # Contexto e convencoes para agentes
├── CLAUDE.md         # Contexto compativel com Claude Code
└── TASKS.md          # Tracking rapido de marcos
```

## Decisoes tecnicas

As convencoes tecnicas estao em `AGENTS.md` e `CLAUDE.md`. Para localizar ou
criar documentos, consulte `docs/README.md`. O backlog de desenvolvimento esta
em `docs/BACKLOG.md` e os marcos resumidos em `TASKS.md`.
