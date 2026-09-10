# Guia de aplicação de UI — Studio Gle Wolfran

**Estado:** esboço inicial do Design System em uso para novas telas.  
**Atualizado:** 10/09/2026.

## Fonte de verdade atual

Para decisões visuais de novas páginas, usar em conjunto:

- [`/direcao/styleguide`](../../src/app/direcao/styleguide/page.tsx), como referência visual aplicada;
- [`PALETA-OFICIAL.md`](PALETA-OFICIAL.md), como referência cromática;
- [`DIRECAO-VISUAL-PROVISORIA.md`](DIRECAO-VISUAL-PROVISORIA.md), como contexto de linguagem.

O material visual da plataforma Alpha e o `docs/UI-PLAN.md` são referências
legadas de produto. Não devem orientar automaticamente a estética das novas
páginas públicas.

## Princípios de aplicação

- O conteúdo lidera. A interface dá ritmo, orientação e respiro.
- Documento, briefing e alinhamento devem parecer documentos web: título,
  metadados, índice curto, seções e linhas finas. Não começar com hero de
  landing page, slogan ou chamada genérica.
- Base clara dominante: Papel frio (`#F3F3F2`) e Mineral (`#DDE0E2`).
- Usar uma cor profunda por contexto: Vinho mineral (`#512334`) ou Ameixa
  (`#4B354D`). Eucalipto (`#596862`) e Azul ardósia (`#526A7A`) entram como
  apoio editorial, não como decoração simultânea.
- Taupe frio (`#8A8588`) sustenta linhas e divisores; Chocolate frio
  (`#493735`) cria matéria e profundidade quando necessário.
- Raio padrão de 4 px. Cantos arredondados maiores só quando houver uma função
  clara de acolhimento ou interação.

## Tipografia

- Títulos e navegação: Inter Tight, com a transformação em caixa alta já
  definida pelo sistema.
- Corpo: Inter, com leitura confortável e frases concretas.
- Índices, estados e metadados: JetBrains Mono, em escala pequena mas legível.

## Cabeçalho público

O cabeçalho público deve ser simples: wordmark “Studio Gle Wolfran” e um link
de contato básico. O Studio OS é uma ferramenta de uso interno e não aparece
como chamada pública no cabeçalho.

## Regra de revisão

Antes de criar uma nova variação, consultar este guia e o styleguide atual.
Quando uma decisão deixar de ser hipótese, atualizar primeiro este documento ou
a `PALETA-OFICIAL.md`; depois aplicar nas páginas.
