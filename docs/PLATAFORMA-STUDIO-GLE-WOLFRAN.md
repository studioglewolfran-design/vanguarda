# Plataforma Studio Gle Wolfran

**Status:** arquitetura inicial implementada
**Versão:** Alpha 0.1
**Data:** 05/09/2026

## Tese

A plataforma conecta quatro experiências sob a marca-mãe **Studio Gle
Wolfran**. **S—GW** funciona como assinatura compacta. O nome Isa não aparece
na superfície da aplicação; funções de memória, síntese e organização são
apresentadas por sua utilidade.

## Arquitetura de experiência

```text
Studio Gle Wolfran
├── Site público                         /
├── Studio OS — operação interna         /os
│   ├── Projetos                         /os/projetos
│   ├── Clientes                         /os/clientes
│   ├── Comercial                        /os/comercial
│   ├── Repertório                       /os/repertorio
│   ├── Decisões                         /os/decisoes
│   └── Memória e inteligência           /os/inteligencia
├── Portais de clientes                  /portais
├── Brand Systems                        /brand-systems
└── Laboratório de produtos              /laboratorio
```

## O que já funciona

- Site público responsivo com narrativa, abordagem e mapa do ecossistema.
- Shell navegável e responsivo do Studio OS.
- Projetos, clientes, prioridades, alertas e decisões lidos das fontes
  operacionais existentes em `docs/`.
- Captura de texto e áudio acessível em Memória e inteligência.
- Redirecionamento da antiga rota `/dashboard` para `/os`, preservando o código
  anterior no repositório.
- Proteção inicial de `/os` por Supabase Auth quando as variáveis de ambiente
  estão configuradas.
- Páginas estruturais para Portais, Brand Systems e Laboratório de produtos.

## Limites desta versão

- Portais, Brand Systems e Laboratório apresentam arquitetura e estados; ainda
  não possuem persistência própria ou fluxos completos.
- O OS consome documentos do repositório no servidor. Uma alteração nesses
  documentos chega à produção após novo build/deploy.
- Busca global é apenas uma indicação de interface.
- O modelo multi-tenant e as políticas RLS por organização ainda não foram
  implementados.
- Não há identidade ou nome independente definido para um produto vendável.

## Próximas decisões de produto

1. Confirmar se **Studio OS** será o nome exibido ou um descritor provisório.
2. Definir quem acessa cada camada: Gleide, núcleo, rede ampliada e clientes.
3. Escolher o primeiro fluxo completo a transformar em produto: projeto,
   portal, Brand System ou diagnóstico.
4. Validar quais informações continuam em arquivos e quais passam ao banco.
5. Definir domínio principal e estratégia de subdomínios antes do deploy.

## Evolução proposta

### Alpha 0.2 — núcleo útil

- busca real;
- triagem da inbox;
- páginas detalhadas de projeto e cliente;
- estados vazios, erros e carregamento;
- teste completo de autenticação.

### Alpha 0.3 — relação com clientes

- organizações e membros no Supabase;
- autorização por papel e políticas RLS testadas;
- primeiro portal-piloto;
- entregas, aprovações e histórico.

### Beta — produto validável

- Brand System vivo para um cliente-piloto;
- onboarding e isolamento multi-tenant;
- versionamento e auditoria de mudanças;
- pesquisa de nome e disponibilidade somente para a proposta que demonstrar
  valor repetível.

## Regra de segurança

Unificação de interface não significa mistura de dados. Antes de liberar
qualquer área para clientes, todas as tabelas expostas deverão ter grants
mínimos, RLS habilitado e testes de permissão para leitura e escrita.

## Preview na Vercel

A branch `codex/studio-platform-alpha` está preparada para o primeiro teste
online com as seguintes proteções:

- `STUDIO_OS_DATA_MODE=demo` utiliza apenas projetos e clientes fictícios;
- na Vercel, o modo padrão também é `demo` enquanto outra fonte não for
  implementada explicitamente;
- `/os` é dinâmico e confirma a sessão no servidor além da verificação do
  middleware;
- captura de texto e áudio permanece desativada quando `VERCEL=1`;
- `.vercelignore` exclui documentos, exports, entregáveis, fontes privadas,
  arquivos locais de ambiente e configurações de agentes;
- nenhum arquivo de cliente compõe o commit de Preview.

Variáveis necessárias no ambiente **Preview** da Vercel:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL
STUDIO_OS_DATA_MODE=demo
```

Os IDs Formspree são opcionais para testar os formulários já existentes. A
`SUPABASE_SERVICE_ROLE_KEY` não é necessária nesta versão.
