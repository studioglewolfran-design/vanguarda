# Painel Operacional — Studio Gle Wolfran

**Fonte de verdade para projetos, tarefas, decisões e bloqueios do negócio.**  
**Última consolidação:** 10/09/2026

> Este painel registra o estado atual, não todo o histórico. Informações
> detalhadas permanecem nos documentos vinculados. Ideias não são tratadas como
> compromissos até serem priorizadas. A atualização de 04/09/2026 prevalece
> quando houver conflito com o histórico detalhado de 24/08 mantido abaixo.

**Síntese para decisão:** [`CLAREZA-MESTRA.md`](CLAREZA-MESTRA.md)  
**Inventário e autoridade das fontes:**
[`fontes/MAPA-DE-FONTES.md`](fontes/MAPA-DE-FONTES.md)
**Export do Claude:**
[`fontes/claude/INVENTARIO-E-ACHADOS.md`](fontes/claude/INVENTARIO-E-ACHADOS.md)

## 1. Prioridades atuais

1. **Caixa:** cobrar os R$ 1.000 combinados com Dr. Luan e mapear entradas e
   saídas urgentes.
2. **Parceria com Joelson Oliveira — 13/09:** estruturar oferta, preço, lista
   de interessados, roteiro e processo comercial do curso.
3. **Lorrana:** finalizar o briefing modelo de direcionamento profissional,
   enviar a versão-piloto e iniciar a descoberta com base nas respostas.
4. **Dr. Luan:** fechar escopo, contrato, valores e regras para trabalhos
   futuros, inclusive possível viagem a São Paulo.
5. **ÓticaMila:** concluir a entrega e preparar uma apresentação que reforce o
   valor percebido, com possibilidade de upsell coerente.
6. **Experiência Dr. Luan — 25/09:** desenhar a experiência completa, preparar a
   apresentação para participantes e colaboradores e formalizar o contrato com
   Maria Clara, além de fechar orçamento, responsabilidades e remuneração.
7. **Delegação:** fechar as definições do workflow para Bruno executar sem
   depender de instruções fragmentadas.
8. **Posicionamento:** registrar o que deixa de ser serviço principal e o que
   passa a compor o núcleo estratégico do Studio.
9. **Comunicação Gle Wolfran:** iniciar em 08/09/2026 uma rotina contínua de
   conteúdo intencional, conectada ao ICP provisório e usada para aprender com
   o briefing padrão; isso não reabre social media como serviço principal.

**Leitura operacional:** o gargalo atual não é falta de ideias. Muitas frentes
dependem de decisões comerciais centralizadas em Gleide: escopo, preço,
contrato, cobrança, priorização e delegação. A Isa deve proteger a transição da
execução recorrente de conteúdo para estratégia, direção criativa,
posicionamento, lançamentos, experiências e articulação de parceiros.

### Atualização de projeto — retomada do núcleo e oportunidade de piloto no salão — 09/09/2026

- **Fato:** o grupo do projeto iniciado no hackathon retomou a conversa. Renato
  confirmou que está dentro, e Lauro declarou disponibilidade mínima de uma
  hora diária para trabalhar na iniciativa.
- **Decisão provisória do grupo:** faz sentido convidar Camila, que participou
  da divisão original do time, para avaliar uma possível contribuição. O
  contato, o interesse e o papel dela ainda precisam ser confirmados; sua
  ausência anterior não deve ser interpretada.
- **Hipótese de validação:** a ferramenta pode ser testada fora do setor de
  educação, começando por clientes de Gleide no salão. Dentistas foram citados
  como outra possibilidade, mas permanecem uma adjacência a validar, sem
  ampliar automaticamente o foco do Studio.
- **Oportunidade:** existe potencial de criar uma solução real para o salão,
  gerar um case e avaliar comercialização futura. Isso ainda não define produto,
  sociedade, remuneração ou compromisso comercial com o salão.
- **Próximo menor movimento:** marcar uma call de alinhamento e sair dela com
  um problema específico do salão, a menor versão testável da ferramenta,
  papéis, disponibilidade, critério de sucesso e autorização para o piloto.
- **A confirmar:** relação exata com o projeto do hackathon, nome e contato de
  Camila, escopo da ferramenta, titularidade/autoria, uso do case, custos,
  remuneração e eventual comercialização.

### Atualização visual — referência Atlas/Overlens — 09/09/2026

- Gleide trouxe como referência a tipografia, as linhas finas e o uso graduado de cor do Atlas/Overlens.
- **Decisão:** Inter Tight foi escolhida para títulos e 4 px passa a ser o raio padrão. O sistema foi atualizado; 10 px fica reservado a exceções e 20 px não será usado.
- **Aplicação:** a nova direção visual será usada apenas nas páginas criadas a partir de agora. As telas já existentes do Studio ficam preservadas até uma revisão específica.

### Atualização de presença pública — 09/09/2026

- **Informação confirmada:** o perfil do Studio no Instagram é
  `@studioglewolfran`; o perfil profissional pessoal de Gleide é
  `@glewolfran`.
- **Aplicação:** os dois perfis foram incluídos como acessos separados na
  página pública de links `/links`.

### Atualização operacional — publicação da alpha — 07/09/2026

- **Decisão/ação:** a alpha do Studio foi publicada na Vercel no projeto
  `studio-ai-alpha`, usando a branch `codex/studio-platform-alpha` e dados
  demonstrativos.
- **URL pública:**
  `https://studio-ai-alpha-s-gw.vercel.app/`.
- **Estado:** a home pública está acessível e o Studio OS já reconhece a
  configuração do Supabase, encaminhando visitantes sem sessão para o login.
- **Configuração:** foram registradas as variáveis públicas do Supabase, o
  endereço de produção e `STUDIO_OS_DATA_MODE=demo`; a chave de serviço não foi
  usada.
- **Próximo passo:** testar cadastro/login com uma conta autorizada e, se for
  necessário usar URLs de Preview, autorizar esses endereços no Supabase Auth.
- **Atualização técnica:** a versão mais recente do código foi validada e
  sincronizada com a branch `codex/studio-platform-alpha` no commit `faca99c`.
- **Limite de segurança:** documentos, dossiês, transcrições e dados reais
  continuam fora do GitHub e da Vercel. A migração para uso remoto depende de
  persistência privada no Supabase, com isolamento e permissões revisados.

### Atualização operacional — domínio próprio — 09/09/2026

- **Informação confirmada:** a fatura da Wix registra o pagamento do domínio
  `studioglewolfran.com.br` em 30/06/2026, com período de cobertura de
  13/07/2026 a 13/07/2027.
- **Estado:** o domínio está pago e não há indicação de expiração iminente.
  A configuração DNS foi corrigida e a Vercel passou a mostrar os domínios
  raiz e `www` como **Valid Configuration**, ambos vinculados à produção.
- **Diagnóstico DNS:** a captura inicial do painel Wix mostrou três registros A
  antigos e o CNAME de `www` apontando para `cdn3.wixdns.net`. Após a correção,
  os servidores autoritativos Wix passaram a publicar `216.198.79.1` para o
  domínio raiz e `1e085fdcae6084a6.vercel-dns-017.com` para `www`.
- **Validação externa:** a Vercel mostra raiz e `www` como válidos; os
  resolvedores públicos Cloudflare e Google já retornam os novos registros.
  A tela antiga da Wix ainda aparece em uma sessão de navegador por cache DNS
  local, sem indicar falha na configuração atual.
- **Validação final:** o domínio foi aberto com sucesso pelo celular em
  09/09/2026, confirmando que o endereço público já serve a aplicação na
  Vercel. O cache antigo permanece restrito a algumas sessões locais.

### Atualização operacional — briefing padrão publicado — 07/09/2026

- **URL pública:** `https://studio-ai-alpha-topaz.vercel.app/briefing-direcionamento`.
- **Estado:** rota pública validada como briefing reutilizável, sem nome ou
  dados pré-preenchidos da primeira respondente; contém identificação inicial,
  7 etapas e resposta estruturada para análise posterior.
- **Captura:** variável de produção configurada para o formulário Formspree
  exclusivo fornecido por Gleide.
- **Próximo passo:** enviar o convite pelo WhatsApp e usar a primeira resposta
  para validar o instrumento.
- **Finalidade futura da data de nascimento — 10/09/2026:** Gleide deseja
  preservar esse campo para uma possível leitura comportamental. Leituras como
  Human Design são possibilidade futura; dados adicionais de nascimento só
  deverão ser pedidos quando a leitura existir, com finalidade e consentimento
  explícitos e sem tratá-la como diagnóstico científico.

### Atualização operacional — revisão do briefing padrão — 07/09/2026

- **Decisão/ação:** revisar o formulário após o teste do Formspree, removendo
  qualquer reaproveitamento do rascunho antigo da primeira aplicação e tornando
  obrigatórios identificação, data de nascimento e todas as respostas.
- **Instrumento:** a versão revisada mistura respostas abertas, escala,
  escolha única e seleção múltipla para evitar um questionário inteiramente
  descritivo.
- **Direção visual:** aplicar a paleta provisória já encontrada nos materiais do
  Studio — papel, quase preto vinho, vinho/bordô, azul e dourado — com cantos
  discretos e sem preencher a página inteira de rosa. Referência em
  [`marca/PALETA-PROVISORIA.md`](marca/PALETA-PROVISORIA.md).
- **Estado:** publicado no mesmo link do briefing padrão; ainda aguarda nova
  validação de preenchimento antes do envio definitivo.

### Atualização operacional — refinamento do instrumento — 07/09/2026

- **Decisão/ação:** simplificar o cabeçalho do briefing para uma única frase em
  destaque e numerar visualmente as perguntas.
- **Ajuste de coleta:** dias, horas e clientes atendidos passam a usar respostas
  numéricas; quando a pessoa selecionar “Outro caminho” de chegada de clientes,
  deverá especificar qual é esse caminho.
- **Ajuste de experiência:** dias, horas e clientes atendidos passam a ser
  respondidos por alternativas visuais, sem campo numérico com setas.
- **Estado:** revisão v0.5 publicada no link público padrão; o título da página
  foi ajustado para não repetir “Studio Gle Wolfran” na prévia do link.

### Atualização operacional — revisão final e teste do briefing — 08/09/2026

- **Ajuste de clareza:** a pergunta sobre apoio agora se conecta explicitamente
  à prioridade escolhida, separando a escolha do foco do tipo de ajuda desejada.
- **Ajuste de coleta:** “Outra frente” passou a abrir um campo obrigatório para
  especificação, com a mesma proteção já existente para “Outro caminho”.
- **Ajuste de experiência:** a escala de 1 a 5 recebeu rótulos intermediários
  claros; a versão interna do formulário passou para v0.6 e o rascunho v0.5 é
  descartado ao abrir a nova versão.
- **Validação:** a produção foi publicada novamente e uma submissão totalmente
  fictícia retornou `200`/`ok: true` pelo endpoint público, confirmando o
  recebimento pelo Formspree.
- **Estado:** o instrumento está pronto para ser enviado; falta apenas Gleide
  retomar o contato com a pessoa convidada e compartilhar o link.

### Atualização de direção — 06/09/2026

- **Decisão operacional:** concentrar energia em um foco estratégico: diagnóstico para profissionais e marcas pessoais, com design de experiências — incluindo noivas — como frente associada. Conteúdo deve conduzir para o diagnóstico, não voltar a ser serviço recorrente padrão.
- **Decisão comercial:** o questionário de Motor Moral será um aprofundamento pago e separado; não entra como bônus.
- **Ideia em teste:** criar uma leitura visual de força das ideias na plataforma, considerando recorrência, novas nuances, conexões, aderência ao foco, evidência e divergência. A primeira alpha é local e não transforma capturas em compromissos.
- **Decisão de arquitetura:** ISA permanece como inteligência interna. Ela só poderá se tornar marca externa após validação com Gleide e clientes dentro da experiência interna; essa validação não autoriza lançamento, rebranding ou oferta externa automaticamente.
- **Workflow ISA:** cada conversa que alterar materialmente o estado do Studio receberá um recibo em `docs/ISA-ATUALIZACOES.md`, distinguindo o que foi registrado, o que já está refletido no OS e o que ainda aguarda ação.
- **Direção visual provisória:** enquanto não existir logo tipográfico ou símbolo aprovado, a interface usará apenas “Studio Gle Wolfran” em caixa de frase. Não haverá monograma, símbolo ou subtítulo nas páginas.
- **Decisão de validação:** Gle Wolfran entra no OS como marca autoral e piloto interno — não como cliente comercial — para testar a leitura do repertório visual e a experiência da plataforma antes de aplicar aprendizados em relações externas.
- **Arquitetura interna:** agentes, skills, scripts, processos e playbooks passam a ser organizados no módulo Sistema. A área de Clientes terá cartões com visão essencial e dobra para contexto, preservando respiro visual.
- **Captação no OS:** o módulo interno `/os/captacao` mostra o estado de leads,
  dados faltantes, próximos passos e a fronteira entre automação e decisão
  humana. Ele lê registros locais; o modo Preview preserva dados reais.

### Atualização de direção — 07/09/2026

- **Ideia em exploração:** criar um repertório de empreendedores criativos,
  mentores e práticas para apoiar a metodologia e as estratégias do Studio.
  O primeiro registro-piloto é Matt Gray, a partir de uma captura fornecida por
  Gleide; a leitura permanece como hipótese e não altera o foco, a identidade
  ou as ofertas atuais.
- **Arquitetura de registro:** cada referência deverá separar origem, observação,
  princípio possível, conexão com o Studio, limite e teste de validação.
  Detalhamento em [`isa/REPERTORIO-DIRECAO.md`](isa/REPERTORIO-DIRECAO.md).

### Atualização de comunicação — 07/09/2026

- **Decisão:** o perfil Gle Wolfran será usado para comunicação intencional,
  autoral e consistente, conectada ao ICP provisório de profissionais/marcas
  pessoais e empresas em funcionamento nos territórios de beleza e wellness,
  até que novas entrevistas tragam evidências para refiná-lo.
- **Compromisso:** iniciar a publicação em 08/09/2026 e manter continuidade;
  cadência exata e calendário permanecem **A confirmar**.
- **Instrumento:** o briefing padrão será reutilizado com diferentes
  profissionais e melhorado progressivamente a partir das respostas, sem
  substituir a conversa ao vivo.
- **Referência:** Founder OS/Matt Gray contribui como hipótese de arquitetura
  de comunicação — problema reconhecível, sistema próprio, aplicação, prova e
  entrada seletiva — sem importar promessa, estética, nomadismo ou escala não
  validada.
- **Detalhamento:** [`isa/ESTRATEGIA-COMUNICACAO-GLE-WOLFRAN-V0.1.md`](isa/ESTRATEGIA-COMUNICACAO-GLE-WOLFRAN-V0.1.md).

### Clarificação de comunicação — 09/09/2026

- **Decisão provisória:** a presença no Instagram precisa ser intencional e
  articulada entre os dois perfis, sem duplicar conteúdo. `@glewolfran` será a
  porta de entrada autoral, enquanto `@studioglewolfran` funcionará como base
  de sustentação com casos, ofertas e estrutura.
- **Estado:** testar primeiro o conteúdo em `@glewolfran`; a cadência, a rotina
  do perfil do Studio e os sinais de conversão ainda serão validados.

### Instrumento de criação de conteúdo — 09/09/2026

- **Ação concluída:** criada a skill global `conteudo-autoral`, disponível no
  Codex para organizar, idear, estruturar, escrever, adaptar e revisar peças de
  conteúdo.
- **Critério:** a skill prioriza conteúdo autoral e estratégico, protege
  evidências e privacidade e mantém a distinção provisória entre os dois
  perfis; ela não publica nem agenda conteúdo automaticamente.

### Instrumento de criação das artes — 10/09/2026

- **Ação concluída:** criada a skill global `artes-conteudo-studio` para
  transformar copy aprovada em direção visual e artes revisáveis para
  carrosséis e Stories.
- **Critério contra paralisia:** a skill escolhe uma direção principal com base
  no sistema atual, limita alternativas e não devolve decisões de cor, fonte ou
  estilo que já estejam resolvidas nas fontes do Studio.
- **Limites:** não altera copy ou identidade, não usa imagens privadas ou de
  terceiros sem autorização e não publica ou agenda automaticamente.
- **Local:** `C:\Users\glewo\.codex\skills\artes-conteudo-studio\`.

### Clarificação da estratégia de conversão — 09/09/2026

- **Direção confirmada:** a skill não deve apenas criar conteúdo; deve organizar
  a estratégia de comunicação para converter os serviços do Studio.
- **Oferta de entrada em validação:** a **Sessão de Clareza v0.1** é a primeira
  oferta a ser conduzida pela comunicação. A entrada pública continua sendo
  reconhecimento, mapa inicial e conversa de direção; a contratação depende de
  aderência, escopo, capacidade e condições confirmadas.
- **Continuidade:** posicionamento, experiência, sistema de design ou
  acompanhamento só entram depois, por proposta separada e quando fizer sentido.

### Skill de alinhamento e recebimento — 09/09/2026

- **Ação concluída:** criada a skill global `alinhamento-direcao` para verificar
  se ideias, ofertas, preços, parcerias e próximos movimentos respeitam o foco,
  os valores, os princípios, a capacidade e a reciprocidade justa do Studio.
- **Lembrete de valor:** quando surgir desconforto em cobrar ou receber, a
  skill deve traduzir a trava em critérios concretos de troca, sem confundir
  dinheiro com valor pessoal e sem pressionar uma aceitação desalinhada.
- **Distinção:** isso pertence à camada interna de direção/decisão; voz da marca
  continua responsável por expressar valor para o público.

### Copy da landing da Sessão de Clareza — 09/09/2026

- **Ação concluída:** criada a copy-base v0.1 da landing da Sessão de Clareza,
  conectando a tensão do primeiro carrossel à leitura estratégica da oferta.
- **Conversão:** a página conduz para um mapa inicial e possível conversa de
  direção; não oferece checkout, diagnóstico automático ou contratação sem
  leitura de contexto.
- **A confirmar:** nome público, promessa final, CTA, investimento, condição de
  pagamento, duração, número de encontros, formato da devolutiva, capacidade de
  retorno e política de privacidade.
- **Documento:**
  [`ofertas/LANDING-DIAGNOSTICO-AUTORAL-COPY-V0.1.md`](ofertas/LANDING-DIAGNOSTICO-AUTORAL-COPY-V0.1.md).

### Correção de nomenclatura da primeira oferta — 10/09/2026

- **Correção confirmada por Gleide:** “Diagnóstico Autoral” não era o nome da
  oferta. Naquele momento, o nome comercial ainda não estava definido.
- **Estado histórico:** até a decisão registrada abaixo, “oferta de diagnóstico”
  ou “diagnóstico” eram apenas descrições funcionais; o antigo rótulo de
  trabalho não deveria ser apresentado como nome.
- **Preservação:** os nomes dos arquivos existentes permanecem provisoriamente
  para não quebrar referências; isso não lhes dá valor de nomenclatura oficial.

### Nome da primeira oferta — 10/09/2026

- **Decisão:** a primeira oferta passa a se chamar **Sessão de Clareza**.
- **Função:** organizar o momento, identificar uma prioridade e definir um
  próximo movimento possível. Um diagnóstico mais profundo pode surgir depois,
  com contexto, escopo e proposta próprios.
- **A confirmar:** promessa final, duração, formato, investimento, capacidade e
  papel definitivo da landing na jornada.

### Hipótese de entrada gratuita para lead frio — 09/09/2026

- **Percepção de Gleide:** a Sessão de Clareza pode gerar atrito
  excessivo como destino principal da bio para pessoas ainda frias.
- **Hipótese alinhada:** usar na bio um mapa gratuito, curto e com resultado
  imediato; manter a Sessão de Clareza como oferta paga de meio de jornada,
  apresentada depois de reconhecimento, contexto ou conversa.
- **Promessa em exploração:** identificar qual dimensão do negócio está
  colocando mais pressão sobre a marca e oferecer um primeiro movimento
  objetivo para teste, sem fingir que a ferramenta gratuita substitui o
  diagnóstico completo.
- **Estado:** alinhado com ajuste; **a confirmar** antes de alterar a bio,
  reescrever a landing ou produzir a ferramenta.
- **Próxima decisão:** definir exatamente o resultado gratuito, seu nome e como
  ele conduz a uma conversa sem transformar o Studio em diagnóstico automático.

### Hipótese de dor para validação — 09/09/2026

- **Hipótese:** profissionais ou empresas que cresceram e alcançaram algum
  reconhecimento podem estar com a operação sobrecarregada, deixando pouco
  espaço para cuidar da própria marca. Nesse contexto, a marca passa a
  carregar uma expectativa excessiva de atrair clientes e aumentar faturamento,
  enquanto o desejo mais profundo pode ser recuperar paz, liberdade e o estilo
  de vida desejado.
- **Leitura atual:** a cadeia é coerente com sinais de sobrecarga decisória e
  operacional já observados em casos do Studio, mas ainda não está validada
  como dor principal do ICP de beleza e wellness.
- **Próximo teste:** investigar, com linguagem dos próprios profissionais, o
  que cresceu, o que hoje depende deles, qual atenção a marca não recebe, o que
  esperam que a marca resolva e que mudança de vida realmente desejam.

### Primeira peça de comunicação — 09/09/2026

- **Decisão de teste:** o primeiro carrossel do `@glewolfran` partirá da frase
  “Quando o negócio cresce, a marca passa a carregar expectativas que deveriam
  estar distribuídas entre operação, experiência, comunicação e modelo de
  negócio.”
- **Direção:** fonte grande central, diferenciação em relação ao visual de
  tendência, imagens e texturas inspiradas no repertório do Pinterest e uma
  jornada visual que conduza da pressão à clareza e ao espaço.
- **Estado:** primeira composição visual concluída em 6 telas, no formato 4:5,
  com direção editorial tipográfica e percurso da pressão ao respiro. A versão
  usa provisoriamente no slide 6 “O que sua marca está tentando sustentar
  sozinha hoje?”. Aprovação visual e publicação ainda aguardam Gleide.
- **Entregável:** [`../entregaveis/conteudo-social/2026-09-10-primeiro-carrossel/`](../entregaveis/conteudo-social/2026-09-10-primeiro-carrossel/).
- **Desdobramento:** a estratégia v0.1 organiza a função dos dois perfis, a
  jornada até a Sessão de Clareza, o papel dos Stories e o primeiro teste em
  [`isa/ESTRATEGIA-CONTEUDO-INSTAGRAM-STORIES-V0.1.md`](isa/ESTRATEGIA-CONTEUDO-INSTAGRAM-STORIES-V0.1.md).
- **Ajuste de Gleide:** o carrossel deve ter 6 slides, com fechamento em forma
  de pergunta sobre o que está sendo cobrado da marca e pertence à estrutura
  do negócio. **DIREÇÃO** permanece apenas como CTA provisório na legenda e nos
  Stories.
- **Segunda revisão:** os slides 1 a 5 permanecem aprovados; o slide 6 passa a
  perguntar qual expectativa colocada sobre a marca deveria ser sustentada pelo
  negócio inteiro. A estratégia foi reforçada com tese sistêmica, critérios de
  voz, tradução das referências, primeiro ciclo editorial e fluxo após o CTA.

### Atualização visual e verbal — 07/09/2026

- **Preferência confirmada:** interfaces e apresentações do Studio devem partir
  do repertório visual de Gleide no Pinterest e das aplicações já produzidas,
  em vez de adotar uma estética tecnológica genérica.
- **Decisão:** a frase “encontrar forma” foi rejeitada como mensagem pública por
  não comunicar problema ou benefício com clareza.
- **Hipótese aplicada:** a segunda versão de `/direcao` usa papel, vinho,
  respiro editorial, tensão tipográfica, enquadramento e gesto orgânico; a
  página continua em validação e não define a identidade final.
- **Fonte de verdade:** [`marca/DIRECAO-VISUAL-PROVISORIA.md`](marca/DIRECAO-VISUAL-PROVISORIA.md).

### Clarificação visual — 08/09/2026

- **Preferência confirmada:** Gleide quer páginas limpas e elegantes, mas sem
  aparência comum ou genérica.
- **Tradução provisória:** poucos elementos, respiro, hierarquia clara e
  acabamento preciso, com uma escolha autoral concentrada por seção. “Clean”
  não deve virar vazio; “diferente” não deve virar difícil de usar.
- **Estado:** registrado como critério de validação da direção visual; ainda não
  promove a paleta, a tipografia ou qualquer elemento visual a decisão final.
- **Detalhamento:** [`marca/DIRECAO-VISUAL-PROVISORIA.md`](marca/DIRECAO-VISUAL-PROVISORIA.md).

### Refinamento essencialista — 08/09/2026

- **Preferência confirmada:** a versão discreta foi a melhor entre as opções.
- **Rejeições:** dobras coloridas, ilustrações abstratas artificiais, excesso de
  vermelho e tipografia serifada.
- **Direção provisória:** páginas com poucos elementos, tipografia sans limpa,
  vinho restrito a detalhes e espaço reservado para futura imagem autoral.
- **Estado:** aplicado localmente na página `/direcao`; a imagem própria e a
  aprovação final da direção continuam aguardando.
- **Detalhamento:** [`marca/DIRECAO-VISUAL-PROVISORIA.md`](marca/DIRECAO-VISUAL-PROVISORIA.md).

### Regra de concisão — 08/09/2026

- **Preferência confirmada:** Gleide considera que as páginas estão longas e
  com informação demais para a leitura pública.
- **Direção provisória:** uma mensagem principal por vez, poucas seções e texto
  apenas o necessário para orientar a próxima ação; detalhes devem sair da
  página principal.
- **Referências:** [Studio Blanche](https://www.blanchestudio.co.uk/) e [Keren
  Elise](https://kerenelise.co.nz/) foram usadas para observar ritmo e economia
  de texto.
- **Estado:** aplicado localmente na `/direcao`; a regra deve orientar novas
  páginas.
- **Detalhamento:** [`marca/DIRECAO-VISUAL-PROVISORIA.md`](marca/DIRECAO-VISUAL-PROVISORIA.md).

### Correção de origem cromática — 08/09/2026

- **Preferência confirmada:** `#C9A26B` e `#315E7C` não representam bem a vibe
  de Gleide.
- **Distinção:** essas cores vieram de materiais anteriores da plataforma e do
  diagnóstico; não eram preferências pessoais confirmadas.
- **Evidência disponível:** o repertório do Pinterest concentra neutros,
  marrons, caramelo, ferrugem, terracota, vinho e oliva; azul é ocasional.
- **Estado:** registrado; nenhum token técnico foi alterado. A nova paleta
  depende de uma comparação específica baseada nas referências do Pinterest.
- **Detalhamento:** [`marca/DIRECAO-VISUAL-PROVISORIA.md`](marca/DIRECAO-VISUAL-PROVISORIA.md).

### Extração cromática do Pinterest — 08/09/2026

- **Observação:** as 15 capturas concentram papel, mineral, taupe, carvão,
  tinta, chocolate, caramelo e terracota; vinho e oliva aparecem como acentos.
- **Hipótese:** base neutra silenciosa com uma única assinatura profunda por
  tela, comparando chocolate e vinho.
- **Estado:** paleta provisória extraída e documentada; ainda não aplicada aos
  tokens nem validada como paleta final.
- **Detalhamento:** [`isa/curadoria-visual/PALETA-PINTEREST-PROVISORIA.md`](isa/curadoria-visual/PALETA-PINTEREST-PROVISORIA.md).

### Sistema cromático vivo — 08/09/2026

- **Preferência confirmada:** Gleide organiza naturalmente ferramentas e coisas
  por famílias de cor e se reconhece em mudanças de clima — leve, provocativo,
  sexy e natural — acompanhadas por mudanças de forma e textura.
- **Interpretação:** a identidade pode precisar de um núcleo neutro estável e
  atmosferas cromáticas móveis, em vez de uma única paleta rígida.
- **Limite:** o Pinterest mostra fases e passeios cromáticos, mas não fornece
  datas suficientes para afirmar uma cronologia real.
- **Estado:** hipótese estrutural registrada e aplicada em uma página de teste
  em `/direcao/cores`; nenhum tema ou token global foi alterado.
- **Detalhamento:** [`isa/curadoria-visual/SISTEMA-CROMATICO-VIVO.md`](isa/curadoria-visual/SISTEMA-CROMATICO-VIVO.md).

### Correção fria do passeio cromático — 08/09/2026

- **Preferência confirmada:** Gleide aprovou a lógica dos climas, mas rejeitou
  as cores da primeira aplicação por parecerem outonais.
- **Direção de teste:** branco frio, gelo, verde mineral, magenta, violeta,
  vinho frio, ameixa, preto azulado e cobalto.
- **Estado:** refletido em `/direcao/cores`; continua provisório porque a
  coloração pessoal ainda depende de validação por drapeamento.
- **Correção de processo:** a análise foi separada da aplicação em
  `/direcao/paleta`, mostrando primeiro as cores observadas e depois o filtro
  provisório da coloração pessoal.
- **Preferência confirmada:** Gleide ama as cores do Pinterest; a paleta do
  Studio deve apenas esfriar os subtons, sem abandonar a matéria terrosa.
- **Ajuste refletido:** a proposta agora usa papel e taupe frios, carvão, tinta,
  chocolate frio, vinho mineral, ameixa, eucalipto e azul ardósia.
- **Desdobramento refletido:** `/direcao/paleta` agora mostra proporções,
  combinações e funções de uso. A regra provisória é uma cor profunda dominante
  e apenas um acento por tela.
- **Preferência confirmada:** Gleide prefere o preto azulado `#0D1B2A` ao azul
  ardósia; variações profundas próximas serão comparadas antes da escolha.
- **Decisão superada:** Gleide rejeitou a escolha isolada de `#091722` após vê-la
  aplicada no conjunto.
- **Novo teste:** a seção 2 de `/direcao/paleta` agora apresenta dez paletas
  completas; proporções e usos ficam suspensos até a seleção das favoritas.
- **Visualização recuperada:** a paleta anterior de dez cores, com o azul
  ardósia `#526A7A`, voltou ao início da seção 2 para comparação direta.
- **Decisão:** Gleide aprovou a paleta original de dez cores como paleta oficial
  do Studio. As demais variações ficam como estudos não escolhidos.
- **Escopo:** a decisão está documentada em
  [`marca/PALETA-OFICIAL.md`](marca/PALETA-OFICIAL.md); tokens globais e telas
  existentes serão migrados gradualmente, com contraste verificado.
- **Próximo artefato:** UI styleguide navegável em `/direcao/styleguide`, com
  fundamentos, tipografia, ações, componentes e regras de uso da paleta oficial.

### Fonte visual consolidada para novas páginas — 10/09/2026

- **Decisão:** novas páginas públicas devem usar o esboço inicial do UI
  Styleguide e a paleta oficial, não a estética legada da plataforma Alpha.
- **Aplicação:** papel e mineral como base; vinho, ameixa, eucalipto, ardósia e
  chocolate entram por função, com respiro editorial, linhas finas e raio
  padrão de 4 px.
- **Cabeçalho público:** wordmark “Studio Gle Wolfran” e contato básico. O
  Studio OS permanece como ferramenta de uso interno e não aparece como CTA
  público.
- **Fonte de verdade:** [`marca/GUIA-APLICACAO-UI-V0.1.md`](marca/GUIA-APLICACAO-UI-V0.1.md).

### Atualização técnica — camada privada para dados reais — 07/09/2026

- **Implementado no código:** workspace privado, papéis `owner`/`editor`/`viewer`,
  políticas RLS, auditoria de alterações, validação de payloads e preparação do
  primeiro espaço autenticado.
- **Migration aplicada:** as quatro tabelas, nove políticas RLS e quatro funções
  de acesso foram aplicadas no projeto Supabase `vanguarda` e verificadas.
- **Ainda pendente:** criar o workspace da Gleide, validar o isolamento com
  usuários distintos e importar registros revisados para `studio_records`.
- **Regra:** dados reais continuam fora do GitHub e da Vercel até a validação
  das políticas e do primeiro teste de isolamento.

### Atualização técnica — modo local sem login — 07/09/2026

- **Decisão/ação:** a versão local usa `STUDIO_OS_AUTH_MODE=disabled` para
  permitir exploração rápida do `/os` sem autenticação.
- **Limite:** essa opção só funciona fora de produção; a Vercel continua
  exigindo login. O modo local sem login deve permanecer restrito a dados
  demonstrativos ou arquivos locais sem conteúdo real sensível.

### Atualização operacional — curso de mechas do Joelson — 08/09/2026

- **Correção de vínculo:** a Masterclass acontecerá no Fine Hair Salon como
  local da realização, mas a oferta continua sendo uma parceria de Gleide, como
  lançadora estrategista, com o profissional Joelson Oliveira, com Adriel
  envolvido conforme o escopo a confirmar.
- **Parceria:** Gleide esclareceu que esta é uma parceria e que atua como
  lançadora estrategista, responsável por posicionamento, lançamento,
  captação e processo comercial da primeira edição.
- **Entrega informada:** turma limitada a no máximo 4 participantes, 2 modelos
  para as demonstrações, alimentação e brinde ao final. A capacidade atual foi
  confirmada e prevalece sobre materiais históricos que falavam em máximo de 3.
- **Formato confirmado:** esta edição será um estágio observacional, sem mão na
  massa. A estrutura mínima pode apresentar acompanhamento da rotina,
  diagnóstico, decisões técnicas, execução demonstrada, finalização e troca,
  sem prometer prática pelas alunas.
- **Captação:** as quatro mulheres ainda não conhecem a Masterclass. O sinal
  anterior foi apenas a manifestação de interesse em fazer um curso com Joelson
  quando surgisse uma oportunidade; nenhuma foi tratada como pronta para fechar,
  reservada ou inscrita.
- **Primeira resposta:** Fran recebeu a apresentação da oferta e respondeu
  positivamente à pergunta sobre avançar para os detalhes da reserva. Isso
  sinaliza interesse mais aquecido, mas ainda não confirma inscrição ou vaga
  reservada.
- **Novo lead:** Vanessa Franco entrou em contato pelo Direct do Instagram do
  Joelson, na conta voltada a cabeleireiros. A origem é inbound; o conteúdo da
  conversa e a intenção exata de Vanessa ainda precisam ser registrados antes
  de classificá-la como interessada em reservar.
- **Próximo passo:** concluir o primeiro ciclo de contatos, registrar o
  contexto de cada pessoa e alinhar com Joelson a colaboração em conteúdos e
  novas reuniões de decisão. O objetivo imediato é fechar a oferta, preparar
  as respostas comerciais e acompanhar as quatro vagas sem presumir inscrição.
- **Colaboração necessária:** Gleide precisa da participação de Joelson para
  criar conteúdos de autoridade e convite, validar a apresentação técnica e
  realizar novas reuniões de alinhamento com os envolvidos. Pauta, datas e
  responsabilidades dessas reuniões ainda estão **A confirmar**.
- **Oferta atual:** investimento confirmado para a primeira turma em R$ 2.800
  parcelado ou R$ 2.389 à vista; a quantidade de parcelas ainda precisa ser
  definida. Horário, duração, conteúdo, responsáveis por
  cada parte, materiais, certificado, pagamento, abordagem e remuneração de
  Gleide continuam pendentes. Há intenção de vídeo com Tainá, ainda não uma
  entrega confirmada.
- **Direção de copy:** nome provisório **Masterclass Avançada em Mechas**;
  destacar abertura de fundo, mechas criativas além da morena iluminada e
  técnica à mão livre/free hands. O modelo de referência recebido foi usado
  somente para organizar a estrutura, não para importar dados da outra oferta.
- **Documentação:** a primeira edição será tratada como piloto documentado,
  com registro de decisões, ações, contatos, conversões, tempo de Gleide,
  ocorrências e aprendizados para a próxima turma. A remuneração e os limites
  de responsabilidade de Gleide ainda precisam ser formalizados.
- **Ferramenta:** foi criada a página privada `/os/projetos/curso-mechas-joelson`
  para construir a copy, estruturar a oferta e classificar as possíveis alunas.
  O salvamento é local, sem Formspree.
- **Acompanhamento compartilhável:** foi criada a página pública
  `/curso-mechas-13` com a copy-base do estágio e uma lista local de possíveis
  alunas. Os nomes não são publicados por padrão; o botão de compartilhamento
  gera um link com uma cópia dos dados no fragmento da URL, que não deve ser
  tratado como confidencial.
- **Publicação:** a página foi publicada em
  `https://studio-ai-alpha-topaz.vercel.app/curso-mechas-13`.
- **Interface atualizada:** a copy em construção e o acompanhamento local estão
  em dobras separadas, com cartões e campos de cantos menores para facilitar a
  leitura e o uso rápido.
- **Lista inicial:** quatro possíveis alunas foram carregadas localmente a
  partir da imagem enviada, todas ainda como sinais não qualificados. Nenhuma
  foi tratada como pronta, reservada ou inscrita; a lista não foi embutida na
  publicação.
- **Lista ampliada:** Vanessa Franco foi identificada como novo lead inbound,
  vindo do Direct do Instagram do Joelson. Ela deve ser registrada separada da
  lista inicial até que o contexto e o interesse demonstrado sejam recuperados.
- **Busca histórica:** foram recuperados materiais de 2025 e versões de 2026
  com a estrutura, os temas e as faixas de investimento. Não foi localizada
  uma ata ou decisão final específica para 13/09; as versões divergem entre um
  ou dois dias, horários e preços. Esses pontos permanecem **A confirmar** com
  Joelson/Naty.
- **Limite:** o curso deve permanecer separado da renovação contratual da Fine
  Hair e não deve ser apresentado publicamente como conectado à empresa.
  Nenhuma mensagem ou cobrança foi enviada nesta atualização.
- **Detalhamento:** [`clientes/curso-mechas-joelson-v0.1.md`](clientes/curso-mechas-joelson-v0.1.md).
- **Copy editável:** [`clientes/curso-mechas-joelson-copy.md`](clientes/curso-mechas-joelson-copy.md).

## 2. Alertas e prazos

| Alerta | Projeto | Prazo | Situação |
|---|---|---:|---|
| Curso de mechas de Joelson: oferta, entrega e processo comercial ainda precisam ser estruturados | Parceria Joelson Oliveira | 13/09/2026 | Urgente |
| Ensaio/experiência precisa de escopo, narrativa, orçamento e equipe | Dr. Luan | 25/09/2026 | Urgente |
| PIX combinado ainda não foi cobrado ou recebido | Dr. Luan | Imediato | Entrada de caixa |
| Situação financeira apertada, com dívida de cartão e falta de limite | Studio | Imediato | Risco financeiro |
| Confirmar com Adriel o formato das capturas do salão para Maria Clara orçar | Eventos / Salão | A confirmar | Próxima ação de Gleide |
| Entrega final e estratégia de upsell ainda pendentes | ÓticaMila | A confirmar | Camila aguarda Gleide |
| Perguntas e fluxo de briefing precisam ser definidos antes da execução | Studio / Bruno | A confirmar | Bloqueio de delegação |
| Lorrana aguarda briefing e definições | Lorrana | A confirmar | Aguardando Gleide |
| Keterin aguarda agendamento sobre o produto que deseja lançar | Keterin | A confirmar | Aguardando Gleide |

## 3. Projetos ativos

### Contexto estratégico herdado de 24/08

1. **Fine Hair:** confirmar vencimento e preparar proposta enxuta de renovação
   do site.
2. **Luan Nogueira:** fechar a entrega da permuta antes de propor um novo
   projeto remunerado.
3. **Diagnóstico de Marca:** validar a operação existente e colocar a oferta em
   venda.
4. **Ótica Mila:** criar com Ramon uma última direção mantendo o conceito
   “Ótica Mila”, obter direcionamento claro de Camila e formalizar o projeto.
5. **Mascavo:** aprofundar a pesquisa e definir o escopo da proposta de branding.

O modelo de hub avança em paralelo, sem bloquear as três prioridades comerciais.

Em 24/08/2026, Gleide decidiu iniciar a estruturação do Studio como um negócio
dirigido por ela e operado com apoio de agentes de IA, seguindo as missões M12 a
M18 da Vanguarda. A trilha está registrada em
`docs/direcao-negocio/README.md`. Mercado, ICP, problema e oferta permanecem
como hipóteses até validação; o Diagnóstico de Marca é um possível veículo de
validação, ainda não uma decisão definitiva.

Na M12, Gleide confirmou **reciprocidade justa** como motor moral dominante.
Uma revisão posterior distinguiu **cooperação** como modo relacional,
**crescimento paciente, autêntico e em ritmo próprio** como princípio de
crescimento e **autonomia** como valor transversal. Essa estrutura passa a
orientar a definição dos limites, do modelo de colaboração e das futuras
decisões de mercado e oferta.

Gleide também definiu como recusas éticas trabalhar conscientemente, com base
em conhecimento direto ou evidência verificável, para pessoas ou marcas
corruptas/criminosas ou participar de iniciativas destinadas
a manipular, enganar ou explorar seres vivos. Como incompatibilidades
relacionais, definiu má-fé, recusa persistente à escuta, microgestão constante e
invasão recorrente de espaço, privacidade, tempo ou limites. Comportamentos
corrigíveis devem ser primeiro tratados por alinhamento explícito.

A etapa M12 foi considerada estrategicamente concluída em 24/08/2026. A M13,
Mapa de Mercados, foi iniciada com wellness, beleza, saúde e experiências como
territórios de investigação, ainda sem escolha definitiva de mercado ou nicho.
Em 24/08/2026, a análise da M12 também foi consolidada em um PDF imprimível com
arquitetura moral, crenças, autossabotagem, limites, tensões, implicações para o
Studio e uma bússola prática para decisões.
As missões M12 a M18 foram separadas em documentos próprios. Auditorias
anteriores de mercado, público e negócio foram localizadas e agrupadas como
fontes para M13 a M17, com decisões superadas e lacunas de validação sinalizadas.

Na pesquisa da M13, negócios premium de beleza e cuidado com operação física
obtiveram a melhor combinação preliminar de acesso, evidência e aderência ao
Studio. O recorte foi inicialmente recomendado como mercado de entrada para um
ciclo de 90 dias. A recomendação foi depois ampliada
para incorporar odontologia estética/HOF ao mesmo território de transformação
estética; experiências e comunidades foram reclassificadas como
capacidades/ofertas, não como mercados autônomos.

Gleide acrescentou que odontologia estética de alto padrão, incluindo facetas,
estética do sorriso e HOF, deve ser considerada uma fatia importante do
território de beleza e transformação estética. A M13 foi refinada para incluir
esse recorte como segunda porta de entrada, mantendo tratamento regulatório,
clínico e de dados próprio. Outros especialistas de saúde permanecem como
adjacência.

Para simplificar o primeiro ciclo, Gleide decidiu em 24/08/2026 focar por 90
dias apenas em **A1 — operações e marcas pessoais premium de beleza e cuidado**,
começando pela rede acessível em Ariquemes/Rondônia. A Fine Hair será laboratório
do negócio físico; profissionais do salão, Lorrana e a rede de Gleide serão
fontes para marca pessoal, hoje o tipo de cliente da área a que ela tem mais
acesso. Odontologia estética/HOF permanece estacionada como adjacência futura,
não descartada.
Em 24/08/2026, a M13 foi consolidada em um PDF imprimível com arquitetura dos
mercados, evidências internas e externas, matriz de atratividade, decisão de
foco, método de TAM/SAM/SOM e plano de validação.

Na M14, a Fine Hair foi classificada como caso de alto alinhamento cultural,
estético e relacional, por buscar posicionamento premium, valorizar experiência
e conceder autonomia a Gleide. Não representa integralmente o ICP por apresentar
fragilidade financeira, dificuldades operacionais, colaboração insuficiente e
baixo investimento atual em aprendizado de gestão. O ICP deverá preservar a
confiança e o valor dado à experiência, acrescentando capacidade de pagamento,
colaboração ativa e disposição para implementar.

Para a validação de marca pessoal em beleza, Gleide identificou Joelson,
Lorrana e Kattlen, profissional de sobrancelhas, como pessoas acessíveis.
Em 05/09/2026, Gleide confirmou que os registros Katleen e Kattlen se referem à
mesma pessoa. As pastas existentes serão preservadas como fontes de um único
dossiê; Ketleen e Kathleen permanecem como variações de busca até confirmar a
grafia oficial.
Joelson também é proprietário da Fine Hair, mostrando sobreposição entre marca
do negócio e marca do fundador. O padrão comum relatado é buscar posicionamento
mais intencional, melhoria do serviço e da experiência, comunicação de valor,
mais recorrência e possibilidades adicionais de renda. Esse padrão tornou A1b
o candidato principal de ICP: profissionais experientes de
beleza com clientela ativa que desejam construir uma marca mais intencional,
melhorar serviço e experiência, comunicar valor, aumentar recorrência e ampliar
possibilidades de renda. Ensino é uma possibilidade de expansão, não o centro
obrigatório do ICP. Prioridade, urgência e disposição de pagamento ainda
precisam ser validadas.

Gleide confirmou esse ICP inicial em 24/08/2026. Após perceber que a primeira
versão havia enfatizado ensino em excesso, corrigiu a formulação e o roteiro. A
M14 agora investiga serviço, experiência, comunicação, recorrência, renda e
ensino com o mesmo cuidado antes de avançar para problema e oferta.
Também foi criado um roteiro padrão e imprimível de descoberta, separado da
adaptação específica da Lorrana, para ser reutilizado nas entrevistas do A1.

### Alertas herdados de 24/08

| Alerta | Projeto | Prazo | Situação |
|---|---|---:|---|
| Reunião com Adriel sobre a experiência “Dia da Noiva” | Dia da Noiva | 28/07/2026, 10h | Realizada |
| Projeto parado aguardando retorno e aprovação da logo | Ótica Mila | A confirmar | Bloqueado |
| Proposta acordada por WhatsApp, sem contrato assinado | Ótica Mila | A confirmar | Risco de formalização |
| Escopo e proposta do processo completo de branding ainda não definidos | Mascavo | A confirmar | Em definição |
| Registro da marca “Gle Wolfran” ainda precisa ser encaminhado | Studio | A confirmar | Pendente |
| Renovação do site pode estar próxima | Fine Hair | A confirmar | Urgente |
| Contrato de maio de 2025 não foi assinado e já não representa o papel atual de Gleide | Fine Hair | A confirmar | Urgente para formalização |
| Permuta ainda sem fechamento claro | Luan Nogueira | A confirmar | Requer alinhamento |
| Landing e formulário precisam de teste completo | Diagnóstico de Marca | A confirmar | Pendente |
| CNPJ/MEI aparecia como pendência em documento anterior | Studio | A confirmar | Informação possivelmente desatualizada |

### Histórico detalhado dos projetos

### 3.1 Fine Hair — renovação do site

**Objetivo:** evitar descontinuidade do site e apresentar uma solução mais
moderna e valiosa.

**Situação atual:**

- O site atual foi criado anteriormente como bônus.
- Há indicação de que a renovação está próxima.
- Gleide conversou com Ramon sobre uma possível reformulação.
- Foi considerada uma oferta rápida de repaginação, separada de um Brand System
  completo.
- A Fine Hair é cliente fixa e a relação evoluiu significativamente desde 2025.
- Não foi localizado contrato assinado da relação Studio ↔ Fine Hair. Foi
  recuperada uma proposta-base de presença digital de 2025, tratada em fontes
  antigas como contrato.
- A proposta antiga indicava “6 meses”, mas registrava o período de 15/06/2025 a
  15/11/2025, que corresponde a cinco meses; a divergência nunca foi formalizada.
- O investimento previsto era de R$ 2.200 por mês, com pagamento mensal
  antecipado e cancelamento mediante aviso de 30 dias, sem multa.
- O export do Notion marca parcelas de R$ 2.200 de maio a setembro de 2025 como
  recebidas e a de outubro como agendada. Esses registros são evidência
  contábil interna, não conferência bancária nem prova de contrato assinado.
- O escopo antigo acumulava direção estratégica, social media, até 12 posts,
  copy, design, agendamento, stories, uma ou duas captações presenciais,
  roteiros, relatórios, eventos, treinamento, suporte por WhatsApp e site
  institucional como bônus.
- O papel atual de Gleide está documentado como **arquiteta da marca**: trabalha
  através da casa, desenhando a inteligência estratégica da marca, sem ocupar a
  posição de funcionária ou departamento interno de marketing.
- O trabalho atual alcança estratégia de marca, sistema de comunicação,
  direção de conteúdo, experiência, comunidade, parcerias e plataforma de
  ativação, além de demandas pontuais de execução e coordenação.
- Gleide decidiu que não quer mais assumir produção e publicação recorrente de
  conteúdo. Permanecerá responsável pela direção estratégica e pela comunicação,
  delegando social media e audiovisual.
- Antes da nova proposta e do contrato, Gleide precisa negociar o novo modelo
  de trabalho em reunião com Adriel e Joelson.
- A reunião com Adriel e Joelson deverá acontecer aproximadamente uma semana
  após a Expoari, considerando o ritmo frenético do período. A data exata
  permanece a confirmar.
- Na reunião, Gleide pretende adotar uma postura de escuta, fazendo as perguntas
  necessárias durante a conversa sem conduzir previamente as respostas.
- Depois de ouvir Adriel e Joelson, Gleide formalizará uma proposta de novo
  contrato, com posicionamento mais categórico sobre seu papel, limites e
  responsabilidades.

**Dossiê documental:** [`clientes/fine-hair.md`](clientes/fine-hair.md)

**Próximas ações:**

- [ ] Confirmar data de vencimento.
- [ ] Confirmar domínio, hospedagem, plataforma e acessos.
- [ ] Definir escopo mínimo da reformulação.
- [ ] Definir responsabilidades de Gleide e Ramon.
- [ ] Definir prazo e preço.
- [ ] Enviar proposta antes do vencimento.
- [ ] Localizar e revisar o contrato não assinado de maio de 2025.
- [x] Recuperar o conteúdo e as condições centrais da proposta de 2025.
- [ ] Inventariar entregas recorrentes, projetos extraordinários e atividades
      que não pertencem ao novo escopo.
- [ ] Definir no novo contrato o papel de direção estratégica e arquitetura de
      marca, evitando enquadramento como operação geral de marketing.
- [ ] Separar mensalidade estratégica, projetos adicionais, execução delegada e
      custos de terceiros.
- [ ] Preparar e realizar reunião de negociação com Adriel e Joelson sobre o
      novo papel, limites, responsabilidades e modelo de contratação,
      aproximadamente uma semana após a Expoari.
- [ ] Preparar perguntas abertas para a reunião, preservando o encontro como
      espaço de escuta antes de apresentar soluções.
- [ ] Após a reunião, formalizar proposta e novo contrato com escopo, limites e
      responsabilidades explícitos.
- [ ] Decidir se os especialistas serão contratados diretamente pela Fine Hair
      ou coordenados e faturados pelo Studio.
- [ ] Definir aprovações, canais, prazos de resposta, revisões, propriedade
      intelectual, créditos, acessos, confidencialidade e encerramento.
- [ ] Submeter a minuta final a revisão jurídica antes da assinatura.

**Responsáveis potenciais:** Gleide e Ramon.  
**Bloqueio:** informações técnicas, data de renovação, contrato anterior,
escopo atual e condições comerciais ainda não consolidados.
**Risco:** relação contínua e ampliada sem contrato assinado que reflita o papel
atual de Gleide.

---

### 3.1.1 Curso de mechas — Joelson Oliveira

**Objetivo:** organizar uma turma pontual confirmada para 13/09/2026 e validar
interesse real antes de confirmar inscrições.

**Situação atual:** há pessoas a contatar, mas a temperatura de cada sinal é
desconhecida. Naty será consultada para recuperar o contexto das conversas.
Data, local, envolvidos, alimentação, brinde, capacidade máxima de 4
participantes e investimento foram informados como definidos. Horário, duração,
conteúdo, quantidade de parcelas, pagamento e demais itens incluídos ainda estão
**A confirmar**.

**Próxima ação:** usar a ficha própria do curso para alinhar Naty, fechar a
oferta mínima com Joelson e os envolvidos da parceria e abordar as quatro
mulheres com um primeiro convite, sem presumir prontidão de compra.

**Dossiê operacional:** [`clientes/curso-mechas-joelson-v0.1.md`](clientes/curso-mechas-joelson-v0.1.md)

**Estado:** novo sinal comercial; aguardando contexto dos contatos e definição
da entrega.

---

### 3.2 Luan Nogueira — branding, produto e plataforma

**Objetivo:** concluir corretamente a permuta atual e avaliar um novo projeto
remunerado de marca/ecossistema.

**Situação atual:**

- Em 20/08/2026, surgiu uma nova possibilidade de parceria pontual: Luan
  produzirá oito mulheres para a fotografia de uma campanha, e Gleide pretende
  propor uma experiência de salão para as participantes.
- Adriel informou uma estimativa de aproximadamente **R$ 480 por pessoa**, o
  que representa **R$ 3.840 para oito participantes**. O valor permanece como
  referência preliminar até a confirmação do pacote, dos custos incluídos e
  das condições comerciais.
- A proposta interna **Tarde Romãs**, localizada na pasta comercial da Fine
  Hair, será usada como referência operacional. Nela, o coquetel integra a
  jornada com welcome drink, espumante, sucos e finger food durante a
  permanência, além de brinde coletivo, foto do grupo e coleta antecipada de
  restrições alimentares. Para a campanha de Luan, formato, fornecedores,
  quantidades e inclusão desses custos nos R$ 480 permanecem **A confirmar**.
- Para o registro audiovisual da ação, foi indicada uma estimativa preliminar
  de **R$ 400 para videomaker**. Escopo, duração da cobertura, quantidade de
  vídeos, edição e prazo de entrega permanecem **A confirmar**.
- A call com Maria Clara foi positiva. Ela confirmou que participará da
  experiência de 25/09 sem cobrança neste primeiro caso, para conhecer o
  formato e avaliar sua participação futura. A gratuidade é uma condição
  pontual da participação de Maria; não transforma o evento inteiro em teste
  gratuito nem define a remuneração dos próximos projetos.
- Gleide esclareceu que a experiência de 25/09 já é **um evento valendo**, em
  operação real, e não apenas um ensaio para decidir se a ideia existe. Ele
  também servirá para documentar aprendizados e construir prova do formato.
  A frente de curadoria de experiências para negócios continua em validação
  comercial, mas o caso de 25/09 deve ser tratado com escopo, padrão, custos,
  responsabilidades e critérios de resultado próprios.
- Em 10/09/2026, Bruno descreveu uma hipótese mais concreta para a solução de
  colaboração em eventos. Por evento, o gestor receberia: ficha do evento com
  data, local, cliente, entradas e saídas; definição de quem faz o quê, o que
  cada fornecedor entrega, custo e data; contrato de cada fornecedor gerado a
  partir do escopo; e, em uma etapa posterior ligada ao Revelio, checklist com
  contagem regressiva e avisos de prazo com valor e cláusula.
- A lista também inclui uma página para o cliente acompanhar o evento sem
  depender de perguntas no WhatsApp. A leitura provisória é de um centro de
  coordenação do evento que transforma escopo, responsabilidades, contratos e
  acompanhamento em uma referência compartilhada. Isso ainda não define nome,
  produto vendável, público pagante ou arquitetura técnica.
- O recorte inicial mais nítido é organizar a operação do gestor por evento;
  Revelio, alertas e contagem regressiva ficam fora do primeiro recorte. A
  relação entre essa ferramenta, a curadoria de experiências do Studio e a
  colaboração com Bruno permanece **A confirmar**.
- Gleide esclareceu que, neste primeiro momento, seu papel seria atuar como
  gestora/curadora das experiências entre empresas: compreender a oportunidade,
  articular as partes, desenhar a jornada e acompanhar a realização. Isso não
  implica assumir a responsabilidade técnica pela construção, manutenção ou
  evolução do sistema. A divisão entre gestão da experiência, responsabilidade
  pelo sistema, operação e comissão ainda precisa ser confirmada com Bruno.
- Em 09/09/2026, Bruno pediu três definições numéricas para conseguir montar a
  lógica comercial: como dividir o valor dos eventos entre ele e Gleide, qual a
  ordem de grandeza a cobrar a partir do segundo evento e qual valor Maria Clara
  cobraria como filmmaker. As duas primeiras ainda são propostas a serem
  escolhidas por Gleide. Sobre Maria, o piloto de 25/09 foi aceito sem cobrança;
  a estimativa preliminar de R$ 400 para videomaker não foi confirmada como
  orçamento dela, e o pacote recorrente do salão ainda depende de cotação.
- Em 09/09/2026, Bruno separou uma segunda frente: ele construiria uma
  plataforma para vender a outros gestores; Gleide seria a primeira cliente,
  usaria a plataforma gratuitamente nos próprios eventos e também indicaria
  clientes. A proposta mencionada foi comissão de 30% nos primeiros 12 meses e
  10% depois, enquanto o cliente indicado permanecesse ativo, sujeita a
  conversa posterior.
- Essa comissão de indicação da plataforma não define, por si só, o rateio das
  experiências que Gleide gerir. O trecho não estabelece qual entrega Bruno
  fará dentro de cada experiência nem o que justificaria uma participação fixa
  no valor do evento. A remuneração da plataforma, o rateio do serviço de
  experiência e eventual taxa técnica por evento precisam ser tratados como
  camadas separadas.
- A pergunta comercial de Gleide passou a ser como faturar a curadoria de
  experiências. A hipótese mais alinhada é separar: (a) fee do Studio pelo
  desenho estratégico, curadoria, direção e padrão de qualidade; (b) fee de
  gestão/produção quando Gleide assumir orçamento, fornecedores e realização;
  (c) custos diretos da experiência, pagos ou reembolsados à parte; e (d) um
  eventual bônus por resultado, somente quando houver métrica e regra explícitas.
  Comissão sobre a plataforma do Bruno não substitui esses honorários.
- A leitura de Gleide de que o mercado está migrando de produto/serviço isolado
  para experiência e pertencimento foi registrada como **tese de mercado em
  exploração**, não como fato universal. Para vender, a experiência precisa ser
  ligada a um objetivo observável da empresa — preferência, experimentação,
  relacionamento, conteúdo, leads, conversão ou recorrência — e não apenas a
  uma entrega bonita ou a um padrão abstrato de alto luxo.
- **A confirmar antes de precificar:** comprador principal, objetivo comercial,
  escopo da direção, nível de responsabilidade na produção, padrão de qualidade,
  custos diretos, métrica de sucesso, forma de divisão entre empresas e
  participação específica de Bruno ou de qualquer fornecedor.
- Gleide identificou como prioridade proteger suas ideias, repertórios, acessos
  e relações. A regra operacional passa a ser compartilhar apenas o necessário
  para cada finalidade, registrar autoria e versão dos materiais, separar o
  briefing operacional do método/repertório e formalizar confidencialidade,
  autoria, uso de dados e direitos de comercialização quando houver troca de
  material sensível.
- Foi criado o documento de alinhamento [`ALINHAMENTO-EXPERIENCIAS-PLATAFORMA-BRUNO-V0.1.md`](parcerias-colaboradores/ALINHAMENTO-EXPERIENCIAS-PLATAFORMA-BRUNO-V0.1.md), reunindo o contexto extraído por Gleide sobre as atribuições de eventos, o desenho do evento de 25/09, a separação entre serviço de ativação e plataforma, a diretriz financeira e a proteção de repertório e acessos. Ele é base de conversa e não substitui contrato.
- A versão compartilhável desse alinhamento foi publicada em
  **https://www.studioglewolfran.com.br/alinhamento-experiencias**. A página
  apresenta apenas o necessário para alinhar participantes e colaboradores;
  detalhes sensíveis, repertório completo e contratos permanecem nos documentos
  restritos do Studio.
- Em 10/09/2026, Bruno enviou uma primeira versão do que ele considera o
  combinado por escrito. O documento confirma a separação entre a experiência
  dirigida por Gleide e a plataforma técnica construída por Bruno, propõe uso
  gratuito para Gleide e comissão por indicações, e detalha módulos do sistema,
  incluindo ficha do evento, equipe, convidados, contratos, checklist, alertas
  e páginas de acompanhamento.
- O texto recebido é uma proposta de alinhamento do Bruno, não um acordo já
  aceito por Gleide. Permanecem pendentes, entre outros pontos: gratuidade de
  todos no dia 25, inclusão do checklist no primeiro piloto apesar de ele ter
  sido associado anteriormente ao Revelio, remuneração de Gleide e Bruno,
  destino do saldo após os custos, escopo da plataforma, dados e direitos de
  imagem, autoria, propriedade, manutenção e a divisão do projeto Alquimia.
- **Próximo menor movimento:** Gleide revisar e responder o documento por
  partes, começando pela ficha e pelos contratos necessários ao dia 25, sem
  aceitar como definitivos os pontos financeiros, de propriedade ou de escopo
  que ainda estão escritos apenas como proposta.
- Gleide esclareceu que a parceria com Bruno na camada de **design e gestão da
  ativação de marca** ainda não está definida. O combinado atualmente claro é
  outro: Bruno desenvolve a plataforma para outros gestores; Gleide ajuda a
  pesquisar e validar, é a primeira usuária, utiliza o sistema gratuitamente
  nos próprios eventos e pode receber comissão por indicações. Isso não define
  participação de Bruno no valor das experiências nem atribui a ele uma função
  automática na concepção ou gestão da ativação.
- O entendimento de Gleide sobre a parceria é usar o próprio negócio e sua rede
  crescente de fornecedores, salões, cerimonialistas e outros gestores como
  ambiente de piloto para construir, pesquisar e validar o sistema com Bruno,
  com possibilidade de comercialização posterior para outros gestores. Esse é
  um entendimento de arquitetura do projeto, ainda dependente de acordo sobre
  escopo, autoria, manutenção, dados, suporte, comercialização e remuneração.
- **Design de experiência/ativação de marca** é uma oferta própria de Gleide,
  pela marca Gle Wolfran/Studio: exige pesquisa, curadoria, repertório,
  desenho da jornada, padrão de qualidade e, conforme o caso, coordenação de
  colaboradores. O sistema pode ser uma ferramenta utilizada nessa oferta, mas
  não é a oferta em si. Como a entrega de Bruno nessa camada ainda não foi
  definida, não há base para estabelecer percentual sobre o faturamento do
  serviço.
- A gestão dos contratos e eventos poderá aproveitar os sistemas construídos no
  hackathon por Bruno, conforme validação de acesso, autoria, escopo e uso.
- Também será avaliada uma frente de vídeos para o salão, com verba total de
  **R$ 1.500**, não necessariamente destinada apenas à filmagem. A frequência
  (semanal ou quinzenal), o que cabe no pacote, a edição e a distribuição dessa
  verba dependem do orçamento de Maria Clara e permanecem **A confirmar**.
- Há um vídeo pendente de finalização por Maria Clara, com metade do valor já
  paga por Gleide. Entrega, prazo e eventual saldo permanecem **A confirmar**.
- A parceria audiovisual do piloto foi confirmada, mas ainda é necessário
  definir entrega de cada parte, benefício para as marcas, uso das imagens,
  créditos, responsabilidades, custos e registro da participação sem cobrança.
- O trabalho começou como permuta por serviço clínico.
- No histórico do Claude, Gleide descreveu em 04/04/2026 uma dívida inicial de
  R$ 20 mil e, em 22/04/2026, afirmou que o projeto era “100% permuta”, com as
  fases E e F ainda não acordadas. Esses registros confirmam a origem do vínculo,
  mas não comprovam o saldo atual nem os termos aceitos por Luan.
- A investigação revelou oportunidades maiores: marca pessoal, educação,
  comunidade, produto e plataforma.
- Fernando confirmou interesse em participar do projeto.
- Vitor Lobo foi o primeiro profissional com quem Gleide conversou sobre o
  projeto e também demonstra interesse em colaborar.
- Gleide informou Fernando e Vitor de que ambos estão a par das conversas.
- Como ainda não havia acordo firmado e Vitor apresenta dificuldade de
  disponibilidade e continuidade, Gleide retomou a conversa com Fernando para
  não depender de um único colaborador.
- A reunião com Vitor Lobo foi realizada em 29/07/2026.
- Vitor se colocou verbalmente como colaborador do projeto ao falar da equipe
  como “eu, você e Fernando” e propor a formação imediata de um grupo para
  desenvolver ideias e mapear o que cada pessoa pode trazer.
- Ele defendeu que a solução ideal seja estruturada pelos três em conjunto,
  depois que Gleide ouvir Luan e validar dores, prioridades e oportunidades.
- Vitor declarou estar novamente disponível e sugeriu disponibilidade imediata
  para uma conversa de alinhamento; isso ainda precisa ser confirmado na prática,
  considerando o histórico recente de dificuldade de continuidade.
- Como contribuição inicial, Vitor se dispôs a transformar o material discutido
  em um fluxograma/fluxo visual, enxugando e complementando possibilidades.
- Vitor sugeriu uma abordagem comercial em etapas: primeiro ouvir Luan e
  apresentar oportunidades, sem antecipar preço; depois organizar solução,
  responsabilidades e proposta com Gleide e Fernando.
- Ele demonstrou abertura a modelos de remuneração que combinem orçamento de
  projeto e participação em receitas futuras, mas os percentuais citados foram
  apenas exemplos hipotéticos, não um acordo.
- Vitor manifestou preocupação com transparência, proteção de ideias e
  compartilhamento de materiais ainda não finalizados, após experiências
  anteriores de possível cópia. Regras de confidencialidade, autoria e acesso
  precisam ser acordadas antes do desenvolvimento conjunto.
- Gleide reconhece que o interesse simultâneo de Vitor e Fernando fortalece sua
  posição para negociar e valida a oportunidade de negócio identificada na
  marca de Luan.
- Por se tratar do primeiro trabalho de Gleide com esses profissionais, ela
  decidiu assumir explicitamente a liderança e a direção do projeto. Os papéis
  de Vitor e Fernando serão definidos de acordo com o escopo da proposta, e não
  apenas com base nas possibilidades levantadas ou no interesse inicial.
- Gleide identificou a necessidade de uma função específica de gestão do
  projeto, distinta da liderança e da direção. Ainda não está claro se Vitor ou
  Fernando possuem perfil, disponibilidade e interesse para assumi-la.
  Fernando é a hipótese inicial de melhor aderência, mas isso permanece
  **A confirmar** e não constitui convite ou atribuição de responsabilidade.
- Em 04/08/2026, Gleide explicitou que precisa de apoio para sustentar cadência,
  organização e continuidade do projeto. A intenção não é transferir a
  liderança estratégica ou a relação com o cliente, mas dividir a
  responsabilidade operacional com um profissional capaz de converter sua
  direção em plano, prazos, acompanhamento e cobranças. Essa necessidade deverá
  ser comunicada com transparência a Vitor e Fernando e considerada na definição
  dos papéis; o responsável pela gestão do projeto permanece **A confirmar**.
- Gleide está preparando um esboço para conversar com Luan na segunda-feira.
  O material não será uma proposta formal: servirá para alinhar a visão de
  Gleide sobre o ecossistema da marca, com base na fase de pesquisa já
  realizada.
- A apresentação de alinhamento de visão para Luan foi criada em 31/07/2026,
  com nove slides e notas de condução. Ela apresenta a visão integrada do
  ecossistema, a sobrecarga causada por decisões fragmentadas, os quatro
  fundamentos do método sem revelar seu nome, perguntas de validação e o
  convite para escolher o primeiro movimento.
- Uma versão ampliada da apresentação foi concluída em 31/07/2026, com 13
  slides. O termo principal passou a ser **universo de marca e negócio**, e a
  narrativa agora explicita a mudança de leitura após o DeepZoom, a diferença
  entre valor existente e percepção de marca, a lente multidisciplinar de
  Gleide e os riscos de uma expansão sem sustentação.
- A pesquisa levantou, como hipóteses a validar com Luan, três pontos críticos:
  dependência do negócio em sua presença, baixa visibilidade sobre gestão e
  operação e comunicação fragmentada sem narrativa central. Esses pontos serão
  apresentados como perguntas, não como diagnósticos ou conclusões fechadas.
- A apresentação foi ampliada para a versão v03 em 31/07/2026, incorporando o
  DeepZoom completo. Foram acrescentados: síntese visual entre ativos, tensões
  e direção; mapa sistêmico da marca Luan Nogueira; e sequência visual de
  prioridades em agora, próximo e depois.
- Um roteiro completo de condução da reunião foi criado em 01/08/2026. O
  documento detalha objetivo, parâmetro de sucesso, tom de voz, arquitetura da
  conversa, fala sugerida para os 16 slides, perguntas de aprofundamento,
  respostas a reações prováveis, registros necessários e três cenários de
  fechamento.
- Em 02/08/2026, Gleide decidiu simplificar a condução da apresentação com base
  nos fundamentos do pitch. A direção recomendada utiliza dez slides essenciais
  do deck existente e mantém os demais como apoio, preservando mais tempo para
  escuta e decisão.
- Em 03/08/2026, Gleide decidiu abrir a reunião com perguntas de reconexão e
  atualização, antes de apresentar os slides, porque houve um intervalo
  significativo desde a última conversa. A apresentação será adaptada ao que
  Luan relatar sobre seu momento, prioridades e mudanças recentes.
- Em 03/08/2026, foi criado um documento operacional único com as perguntas de
  reconexão, banco de perguntas por tema, roteiro simplificado dos slides,
  falas sobre possibilidades futuras, permuta, investimento, hackathon,
  fechamento e espaços para registro da reunião.
- Em 03/08/2026, foi concluída uma apresentação minimalista de dez slides para
  a reunião com Luan. O deck abre com perguntas de reconexão e organiza a
  conversa em leitura integrada de marca e negócio, mapa do universo, risco de
  expansão sem estrutura, horizontes de produto/comunidade/experiências,
  contribuição de Gleide, método, validação e próximo passo. Permuta,
  investimento e autorização para uso no hackathon permanecem nas notas de
  condução, sem poluir a apresentação visual.
- A reunião com Luan em 03/08/2026 confirmou que o bloqueio atual combina falta
  de tempo, ausência de orçamento previsível, excesso de possibilidades e falta
  de acompanhamento contínuo. Luan afirmou que responde melhor a uma direção
  categórica, com prioridade, valor estimado, prazo e cobrança de continuidade.
- Luan confirmou como objetivo reduzir progressivamente a dependência da
  atividade clínica por meio de receitas ligadas à própria autoridade. Curso
  digital e produto físico continuam como possibilidades desejadas, mas ainda
  não houve escolha formal da primeira frente.
- A clínica permanece como principal motor financeiro. Luan mencionou, apenas
  como referências orais ainda não validadas, aproximadamente R$ 90 mil mensais
  na clínica e R$ 30 mil em um mês com curso presencial.
- A gestão de pessoas, a delegação e o acompanhamento operacional são hoje as
  atividades que mais consomem energia de Luan. O atendimento clínico consome
  mais tempo, mas ele prefere a atividade técnica à gestão operacional.
- Laila exerce uma função gerencial de fato e também participa da operação dos
  cursos, vendas, cobrança e relacionamento com alunos. A relação descrita é
  informal e baseada em parceria e reciprocidade. Luan considera concentrá-la
  na gerência e contratar outra pessoa para cuidar continuamente dos cursos;
  essa mudança permanece **A confirmar**.
- A hipótese recomendada após a escuta é começar por um ciclo remunerado de
  definição estratégica e viabilidade: validar números e ativos, comparar
  curso/mentoria, produto e demais caminhos, escolher uma frente e entregar um
  plano de 90 dias com orçamento, responsáveis e acompanhamento. Essa hipótese
  ainda precisa ser aceita por Luan.
- Em 03/08/2026, Gleide consolidou como direção para a futura proposta um
  primeiro ciclo centrado na dor operacional explicitada por Luan. O ciclo
  deverá mapear a operação, identificar gargalos e dependências, organizar
  prioridades, papéis e acompanhamento e preparar a estrutura mínima para a
  expansão. Curso online e produto permanecem como etapas posteriores
  possíveis, condicionadas à validação do primeiro ciclo; a sequência ainda
  não foi aprovada por Luan.
- Em 04/08/2026, foi concluído um relatório técnico de percepções estratégicas
  para alinhamento com Vitor e Fernando. O documento separa evidências,
  percepções, hipóteses e pendências; detalha o sistema atual, o diagnóstico
  operacional preliminar, riscos, informações faltantes, possíveis entregáveis
  e a arquitetura recomendada para um primeiro ciclo de 90 dias. Arquivo:
  `docs/Relatorio_Percepcoes_Estrategicas_Reuniao_Luan_03-08-2026.docx`.
- No final da reunião surgiram demandas imediatas de comunicação: material da
  parceria com a OAB, conteúdo para a TV da clínica, “revistinha” e vídeos
  institucionais. Elas devem ser dimensionadas separadamente e não integram
  automaticamente o futuro escopo estratégico.
- As demandas de comunicação foram detalhadas em três entregas: revista
  institucional com informações sobre serviços; vídeo para a TV da recepção,
  combinando animação, fala de Luan e slides de serviços, com reaproveitamento
  nas redes sociais; e reformulação da comunicação da parceria com a OAB em
  Reels ou carrossel. Gleide havia se referido a “duas ações”, portanto o
  agrupamento final permanece **A confirmar**.
- Qualquer divulgação de preços, descontos ou condições promocionais da clínica
  deverá passar por verificação das regras profissionais aplicáveis antes da
  publicação.
- A reunião foi sintetizada em `docs/ATA-REUNIAO-LUAN-03-08-2026.md`.
- O mapa sistêmico organiza, como hipótese de arquitetura a validar, seis
  frentes conectadas pela marca Luan Nogueira: clínica LNI, educação e método,
  produtos, reputação e narrativa, conteúdo e comunidade, e operação e gestão.
- A leitura estratégica recuperada do DeepZoom identifica como tese central um
  descompasso entre a robustez técnica e narrativa já existente e a operação de
  marca. Entre os ativos estão excelência técnica, história singular,
  reputação regional e audiência; entre as tensões, narrativa latente,
  posicionamento duplo, presença visual sem assinatura, canais fragmentados e
  dependência do fundador.
- Antes de avançar na composição da equipe, Gleide pretende informar Fernando
  de que Vitor retomou o contato e continua interessado, contextualizar que o
  afastamento anterior ocorreu por questões pessoais e confirmar se Fernando
  se sente confortável com uma possível colaboração entre os três.
- Fernando foi informado sobre o retorno e o interesse de Vitor. Respondeu que
  não vê problema na colaboração entre os três e que será um prazer trabalhar
  com ele.
- Fernando também ponderou que o projeto ainda não ganhou corpo suficiente para
  atribuição de funções e recomendou que Gleide se reúna primeiro com Luan.
- Para a reunião com Luan, Fernando recomendou que Gleide siga um roteiro,
  recapitule brevemente o que já havia sido conversado e procure encerrar o
  encontro com os próximos passos claramente definidos. As soluções devem ser
  apresentadas como sugestões caso Luan tenha dúvidas, sem substituir a escuta.
- Gleide informou a Fernando que preparará um esboço de condução da reunião para
  compartilhar com ele e Vitor.
- Gleide consultou Fernando sobre a conveniência de criar agora um grupo com os
  três para preparar a reunião e as etapas seguintes. **Aguardando resposta de
  Fernando.**
- Como direção em construção, Gleide imagina usar a apresentação a Luan também
  como uma demonstração aplicada de seu método **Ler, Escolher, Construir e
  Ativar**. O método funcionaria como estrutura central para organizar a leitura
  do ecossistema e explicar como o projeto pode avançar, sem transformar o
  encontro em proposta formal ou aula metodológica.
- Gleide refinou o objetivo central da reunião: provocar em Luan uma mudança de
  percepção sobre o próprio negócio. A apresentação deve ajudá-lo a reconhecer
  que ações isoladas e inconsistentes são sintomas de uma visão fragmentada e
  da sobrecarga de decisões típica do profissional empreendedor, e revelar que
  sua marca pode ser compreendida como um ecossistema pessoal completo e
  integrado.
- A autoridade de Gleide para conduzir essa leitura parte tanto da pesquisa
  realizada com Luan quanto de sua própria trajetória lidando com essa carga de
  decisões em negócios próprios e de clientes.
- O efeito desejado é que Luan perceba que nunca havia visto seu negócio com
  esse grau de integração, reconheça valor na leitura de Gleide e manifeste
  curiosidade genuína sobre o que pode ser construído a partir dela. Essa
  curiosidade deverá ser convertida em autorização para um próximo passo, sem
  antecipar escopo ou proposta formal.
- A escolha busca preservar a autoria, a direção e a reputação de Gleide, que
  estarão diretamente associadas ao projeto. Também permitirá que Vitor e
  Fernando compreendam desde o início de onde parte a direção, como as decisões
  serão construídas e qual modelo de negócio Gleide pretende desenvolver e
  escalar.
- A reunião presencial com Luan foi confirmada para **03/08/2026, às 11h**.
- Ainda não há prioridade validada pelo cliente nem novo orçamento aprovado.
- Em 01/08/2026, Gleide identificou como necessidade imediata mapear todas as
  funções de gestão exigidas pelo universo de marca e negócio de Luan, partindo
  de uma empresa de serviços, passando por serviços de cuidado e odontologia e
  chegando aos seus diferentes micro-universos.
- O mapa poderá apoiar o dimensionamento da operação, a precificação do projeto
  ou uma futura discussão de valuation, mas sua finalidade exata permanece
  **A confirmar** e não deve ser tratada como decisão tomada.
- Gleide quer traduzir a leitura empresarial para perguntas mais simples e
  acessíveis a Luan, evitando linguagem excessivamente consultiva.
- Gleide considera apresentar no hackathon da Vanguarda, em 28/08/2026, o
  projeto de Luan como possível aplicação de seu pitch. A participação do caso,
  o nível de identificação e qualquer uso de dados ou materiais dependerão de
  autorização explícita de Luan.
- Gleide pretende informar Luan de que conhece alguns dos estrategistas digitais
  presentes no evento e poderá mencionar nomes ou referências relevantes, sem
  apresentar essa proximidade como parceria, validação ou compromisso ainda
  inexistente.
- Gleide quer tratar na reunião da regularização da permuta atual, estimando o
  valor dos serviços já prestados por ambas as partes e buscando uma compensação
  justa antes de iniciar qualquer novo escopo.
- Como possibilidades ainda não decididas para eventual saldo estão pagamento
  parcelado ou remuneração futura vinculada a resultados. A forma jurídica,
  tributária, a base de cálculo, os riscos e as garantias precisam ser definidos
  antes de qualquer acordo; não há decisão de sociedade ou participação
  societária.
- A nova fase deverá ser explicitamente remunerada. Luan precisa compreender na
  reunião que a construção do universo exigirá investimento, embora escopo,
  valor e condições sejam apresentados somente depois da escuta e do
  dimensionamento.
- Gleide quer conduzir o projeto com leveza, generosidade e prosperidade, sem
  abrir mão de rigor, qualidade, limites, remuneração justa e formalização. Esse
  princípio não implica ausência de prazos, responsabilidades ou governança.
- Gleide quer apresentar brevemente a hipótese de uma frente de produtos
  inspirada na lógica de marcas como Rhode: território claro, portfólio inicial
  enxuto, produtos de uso recorrente, forte coerência entre fundador, narrativa,
  comunidade e experiência. Não há produto definido nem decisão de lançamento.
- Também serão mencionadas como possibilidades a construção de comunidade e a
  realização futura de experiências ou eventos de wellness com parceiros. Essas
  frentes permanecem hipóteses e dependem de aderência à marca, interesse de
  Luan, pesquisa de público, viabilidade operacional, econômica, sanitária e
  contratual.

**Próximas ações:**

- [x] Enviar uma sondagem inicial às pacientes/modelos indicadas para a
      campanha, consultando a disponibilidade para 17/09/2026.
- [ ] Após o aceite inicial, enviar briefing completo com data, local, duração,
      preparação, produção oferecida, uso de imagem e canal para dúvidas.
- [ ] Providenciar autorização específica de uso de imagem e voz antes do
      ensaio, separada de qualquer consentimento clínico.
- [ ] Desenhar a experiência completa de 25/09, com objetivo, jornada,
      roteiro, duração, pontos de contato, padrão de qualidade e capacidade
      operacional.
- [ ] Criar um dossiê datado do caso de 25/09, distinguindo premissas,
      decisões, hipóteses a validar, autoria de Gleide e contribuições de cada
      colaborador.
- [ ] Preparar a apresentação da experiência para participantes e
      colaboradores, deixando claros o que acontecerá, o que cada pessoa fará,
      preparação, horários, entregas e uso de imagem.
- [ ] Elaborar e formalizar o contrato com Maria Clara depois de fechar o
      desenho da experiência, registrando escopo, entregáveis, direitos de uso,
      créditos, responsabilidades, custos e a condição excepcional de não
      cobrança nesta primeira participação.
- [ ] Apresentar a Bruno a separação entre: serviço autoral de design/gestão da
      ativação; piloto de construção e validação do sistema; e eventual atuação
      técnica dele no evento de 25/09.
- [ ] Confirmar com Adriel o que está incluído nos R$ 480 por pessoa e se existe
      condição específica para o grupo de oito participantes.
- [ ] Definir com Luan data, perfil das participantes, cronograma da produção,
      contrapartidas, direitos de uso das imagens, créditos e responsabilidades.
- [ ] Orçar o coquetel para oito participantes, com margem operacional, e
      confirmar se alimentação e bebidas estão incluídas nos R$ 480 por pessoa.
- [ ] Tornar transparentes para Luan e para o salão o custo e o valor da
      experiência; Gleide decidiu não assumir gratuitamente essa entrega.
- [ ] Avaliar com Bruno Lujan uma estrutura comercial para a experiência, sem
      presumir sua participação até alinhar papel e condições.
- [ ] Confirmar orçamento e entregáveis do videomaker estimado em R$ 400.
- [x] Alinhar com Maria Clara a participação na experiência de 25/09; ela aceitou
      participar sem cobrança neste primeiro caso, como condição pontual para
      conhecer o formato.
- [ ] Confirmar com Adriel como podem funcionar as capturas do salão, incluindo
      frequência e quantidade de vídeos, para Maria Clara preparar o orçamento.
- [ ] Pedir a Maria Clara duas possibilidades para o salão — semanal e
      quinzenal — discriminando captação, edição, quantidade de vídeos e o que
      cabe na verba total de R$ 1.500.
- [ ] Confirmar a finalização, o prazo e o saldo do vídeo pendente de Maria
      Clara, considerando que metade já foi paga.
- [ ] Listar o que foi prometido na permuta.
- [ ] Listar o que já foi entregue.
- [ ] Definir o que falta para encerrar a permuta.
- [ ] Estimar e documentar o valor dos serviços clínicos recebidos e dos serviços
      estratégicos e criativos já prestados por Gleide.
- [ ] Propor um termo de encerramento da permuta com valores reconhecidos,
      compensação, eventual saldo e forma de quitação claramente definidos.
- [ ] Realizar reunião presencial com Luan em 03/08/2026, às 11h, e validar sua
      prioridade atual.
- [x] Finalizar o esboço de alinhamento de visão para a conversa de segunda-feira
      com Luan, sem apresentá-lo como proposta formal.
- [ ] Incluir no roteiro uma retomada do alinhamento anterior, perguntas para
      validar mudanças de prioridade e um fechamento com próximos passos.
- [x] Estruturar roteiro simplificado da apresentação com gancho, problema,
      evidências, visão, demonstração, oportunidades, autoridade, escuta e
      fechamento comercial.
- [x] Inverter a abertura do roteiro para começar por escuta, sintetizar o que
      mudou e somente depois apresentar a leitura construída na pesquisa.
- [x] Consolidar perguntas e roteiro da reunião em documento Word para uso
      durante o encontro.
- [ ] Construir a narrativa da reunião como passagem da visão fragmentada para
      a visão sistêmica do ecossistema pessoal de Luan.
- [ ] Definir uma pergunta de fechamento que converta a curiosidade de Luan em
      autorização explícita para estruturar a próxima etapa.
- [ ] Estruturar o esboço da apresentação pelas etapas Ler, Escolher, Construir
      e Ativar, mostrando a aplicação do método ao caso de Luan sem revelar
      excessivamente os bastidores proprietários.
- [ ] Compartilhar com os potenciais colaboradores os princípios do método, o
      papel de direção de Gleide e os critérios de tomada de decisão antes de
      distribuir responsabilidades.
- [ ] Após a resposta de Fernando, decidir se o grupo com Vitor será criado
      antes da reunião com Luan ou somente depois dela.
- [ ] Separar a permuta do novo escopo remunerado.
- [ ] Definir o MVP de maior valor.
- [ ] Validar com Luan quais funções de gestão já existem, quem responde por
      cada uma, quais indicadores são acompanhados e onde há dependência direta
      do fundador.
- [ ] Pedir autorização a Luan antes de utilizar seu nome, sua história, dados,
      imagens, diagnóstico ou materiais do projeto no hackathon da Vanguarda.
- [ ] Após a validação, transformar o mapa funcional em desenho mínimo de
      governança, sem confundir funções necessárias com departamentos ou novas
      contratações.
- [ ] Validar com Luan se produtos, comunidade e experiências wellness ainda
      representam desejos reais e qual dessas frentes teria maior verdade e
      energia no momento atual.
- [ ] Se produtos avançarem, definir primeiro problema, público, categoria,
      produto-herói, modelo de fabricação, regularização, margem, canal e teste
      mínimo antes de desenvolver uma linha.
- [ ] Se comunidade ou eventos avançarem, validar propósito, público, parceiro,
      formato-piloto, responsabilidades, custos, riscos e critério de sucesso.
- [ ] Preparar opções de escopo e investimento.
- [ ] Definir equipe e divisão financeira somente após validação do cliente.
- [x] Conversar com Vitor e registrar interesse, disponibilidade declarada,
      possíveis contribuições e limites iniciais da colaboração.
- [ ] Confirmar se Vitor produzirá o fluxograma/fluxo visual mencionado e
      combinar formato e prazo.
- [ ] Após ouvir Luan, realizar alinhamento entre Gleide, Vitor e Fernando para
      definir solução, responsabilidades, disponibilidade real e proposta.
- [ ] Comunicar a Vitor e Fernando que Gleide exercerá a liderança e direção do
      projeto e que funções, autonomia e participação serão definidas conforme
      o escopo validado com Luan.
- [ ] Avaliar com Vitor e Fernando experiência, interesse e disponibilidade
      para gestão de projeto; validar especialmente a possível aderência de
      Fernando antes de atribuir a função.
- [x] Informar Fernando sobre o interesse atual de Vitor e confirmar se ele se
      sente confortável com a possibilidade de colaboração entre os três.
- [ ] Definir no escopo quem será responsável por cronograma, acompanhamento de
      tarefas, dependências, registros, reuniões e comunicação operacional.
- [ ] Definir confidencialidade, compartilhamento de ideias, autoria, créditos
      e acesso aos materiais antes de iniciar a cocriação.
- [ ] Evitar definir sobreposição, divisão de trabalho ou remuneração entre
      Vitor e Fernando antes de validar o novo escopo com Luan.

**Responsável pela relação, liderança e direção:** Gleide.  
**Profissionais interessados em colaborar:** Fernando Ostlund e Vitor Lobo.  
**Bloqueio:** escopo original e prioridade atual do cliente ainda indefinidos.

**Documento relacionado:**  
[`parcerias-colaboradores/profissional-c-fernando-ostlund/resumo.md`](parcerias-colaboradores/profissional-c-fernando-ostlund/resumo.md)

**Dossiê documental:** [`clientes/luan-nogueira.md`](clientes/luan-nogueira.md)

#### Oportunidade derivada do hackathon — ferramenta aplicada ao salão

Esta frente apareceu na conversa do grupo em 09/09/2026 e ainda não deve ser
tratada como parte confirmada do escopo de Luan. A hipótese é usar uma
ferramenta criada ou iniciada no contexto do hackathon para resolver uma dor
real de um salão atendido por Gleide, com possibilidade posterior de case e
comercialização. A conexão com o projeto Luan permanece **A confirmar**.

**Núcleo reengajado:** Gleide, Renato e Lauro. Camila é uma possível integrante
do piloto, condicionada a convite e aceite. Sobrenomes, papéis e condições de
participação permanecem **A confirmar**.

**Próximas ações:**

- [ ] Marcar call de alinhamento do grupo.
- [ ] Definir o primeiro problema do salão a ser investigado.
- [ ] Descrever a menor versão testável da ferramenta e o critério de sucesso.
- [ ] Convidar Camila para avaliar interesse, disponibilidade e contribuição.
- [ ] Confirmar com o salão autorização, acesso, dados necessários e formato
      do piloto.
- [ ] Separar claramente piloto, case, custos e eventual oferta comercial.

---

### 3.3 Diagnóstico de Marca

**Objetivo:** transformar a estrutura já criada em uma oferta vendável e fonte
de caixa.

**Situação atual:**

- Existem landing pages.
- Existe formulário de pré-briefing.
- Existem dossiês e entregável web de exemplo.
- Existe uma esteira inicial de entrada.
- O estado atual de publicação e funcionamento precisa ser verificado.

**Próximas ações:**

- [ ] Confirmar qual landing é a versão definitiva.
- [ ] Testar formulário e recebimento dos dados.
- [ ] Definir preço, prazo e limites da entrega.
- [ ] Definir forma de pagamento.
- [ ] Publicar ou validar a URL pública.
- [ ] Criar rotina simples de prospecção.
- [ ] Realizar a primeira venda antes de ampliar a infraestrutura.

**Responsável:** Gleide.  
**Bloqueio:** estado técnico e comercial atual não verificado.

**Pasta relacionada:**  
[`../diagnostico-marca`](../diagnostico-marca)

---

### 3.4 Mascavo — reestruturação e branding

**Objetivo:** reestruturar a Mascavo, hoje associada a casa de massas e tortas,
com maior foco em massas no estilo bistrô e produtos prontos/congelados para
consumo em casa.

**Situação atual:**

- Eda, irmã de Gleide, quer reestruturar o negócio.
- Eda já respondeu a um briefing inicial.
- O direcionamento preliminar combina café e massas no mesmo lugar, com massas
  como foco principal.
- O público desejado inclui classe B e pessoas que buscam alimentação saudável.
- A visão de expansão inclui aumentar o consumo de massas e produtos congelados
  em casa.
- Eda considera mudar o nome e se incomoda com os complementos atuais de
  “Mascavo”.
- Relacionamento com clientes e credibilidade são ativos percebidos da marca.
- Gleide pretende conduzir a pesquisa e estruturar um processo completo de
  branding.
- Gleide quer atuar principalmente na direção estratégica do projeto, articulando
  especialistas do hub para as frentes de execução.
- Gleide enviou a apresentação em PDF e dois áudios para Eda em 28/07/2026.
- A abordagem definida é não pressionar: se houver interesse, Eda retomará a
  conversa. Gleide poderá contextualizar pessoalmente que o material visual foi
  criado para facilitar a comunicação.

**Próximas ações:**

- [x] Criar apresentação inicial com duas direções possíveis e oferta centrada
      em direção estratégica.
- [x] Enviar apresentação e áudios para Eda.
- [ ] Consolidar e analisar o briefing já respondido.
- [ ] Definir perguntas complementares e lacunas de pesquisa.
- [ ] Planejar pesquisa de mercado, concorrência, público e categoria.
- [ ] Delimitar o escopo do processo completo de branding.
- [ ] Separar o que será conduzido por Gleide do que será delegado.
- [ ] Definir especialistas, responsabilidades, custos e disponibilidade antes
      de fechar a proposta.
- [ ] Explicar na proposta que automações e design serão executados por
      especialistas do hub criativo, sob direção de Gleide.
- [ ] Definir prazo, investimento, etapas e entregáveis.

**Responsável pela direção, estratégia e pesquisa:** Gleide.  
**Cliente:** Eda.  
**Especialistas de automação e design:** A confirmar.  
**Aguardando:** interesse e retorno espontâneo de Eda.  
**Bloqueio:** escopo, equipe, custos, prazo e investimento ainda não definidos.

---

### 3.5 Ótica Mila — identidade de marca

**Objetivo:** concluir a identidade de marca em parceria com Ramon.

**Situação atual:**

- Gleide e Ramon estão conduzindo o projeto juntos.
- A proposta foi enviada por WhatsApp em 20/04/2026. Ela oferecia Identidade
  Visual por R$ 2.900 ou Branding Estratégico por R$ 4.800 após desconto de
  R$ 500 do diagnóstico.
- Em 19/05/2026, Gleide registrou no Claude que Camila havia escolhido a opção
  de R$ 2.900 e que possuía essa confirmação no WhatsApp. A conversa direta de
  08/05 contém “então fechou”, mas a resposta comercial de Camila está em áudio.
- Em 08/09/2026, Gleide informou que entende o acerto como o pacote de
  R$ 2.900 acrescido de R$ 500 do diagnóstico, total aproximado de R$ 3.400.
  Porém, a proposta localizada afirma que os R$ 500 seriam descontados apenas
  do Branding Estratégico, não somados à Identidade Visual. Em 10/09/2026,
  Camila confirmou por WhatsApp o entendimento de Gleide de que o diagnóstico
  foi tratado à parte; a divergência documental permanece para formalização.
- Os itens considerados no acerto são o óculos de sol, o brinco e o último
  óculos com lente. Os valores individuais, o saldo restante, a data/forma de
  pagamento e o repasse referente à parte do design ainda precisam ser
  conferidos por escrito.
- O Notion registra a oportunidade como “Fechado”. O pacote escolhido e o
  entendimento operacional do valor estão identificados; a quitação integral,
  a divisão do design, os valores individuais das peças e os termos finais
  ainda não estão formalizados por escrito.
- Não foi localizado contrato assinado.
- Gleide enviou dúvidas sobre a logo para Camila em 27/07/2026.
- Camila respondeu em 29/07/2026 e pediu que o conceito **Ótica Mila** seja
  mantido, em vez de “Oti Camila”, direção que Gleide havia considerado.
- Gleide alinhou com Ramon a criação de uma última direção mantendo o nome
  **Ótica Mila**, que foi apresentada e aprovada por Camila.
- A direção aprovada foi consolidada no pacote v1, com arquivos finais e manual
  de uso preparados para a entrega.
- Ajustes eventuais ficam limitados à conferência final dos arquivos e não
  reabrem a direção visual aprovada sem novo alinhamento.
- Gleide suspeita que o briefing possa ter sido respondido com apoio de IA.
  Essa percepção ainda não foi validada e não deve ser tratada como fato.
- A proposta contém percentuais de resultado sem fonte visível; essas
  afirmações não devem ser reutilizadas como promessas factuais.
- O objetivo desta etapa é fazer uma entrega de marca e manual especialmente
  bem apresentada, consolidando o valor percebido e abrindo espaço para uma
  nova venda coerente, sem misturar a nova oferta com o escopo original antes
  da entrega.
- Em 08/09/2026, Gleide informou que a apresentação de marca foi aprovada.
  A etapa atual passa a ser finalizar os arquivos da identidade e criar o
  manual, preservando as decisões visuais já aprovadas.
- Este projeto é distinto de uma proposta anterior de ativação: **Fine Hair ×
  Studio Gle Wolfran — Salão como Plataforma — ÓticaMila × Ray-Ban Meta**,
  prevista para 02/05/2026. A proposta desenhava uma jornada entre as marcas:
  produção no salão, estação para experimentar o produto com orientação,
  registro da reação da cliente usando o produto, coquetel, conteúdo e
  relatório de resultados, com Camila como rosto da ativação.
- A versão v2 tratava ÓticaMila como marca-fundadora: estratégia, concepção e
  direção criativa entrariam como investimento do Studio no formato-piloto, e
  a marca arcaria apenas com custos diretos de execução a cotar. Não foi
  localizado registro que confirme a realização da ativação, o fechamento dos
  custos ou a entrega dos conteúdos. Portanto, ela é evidência de uma proposta
  concreta de experiência, não de um produto validado ou de uma venda
  concluída.
- **Fontes históricas:** [proposta piloto ÓticaMila](https://docs.google.com/document/d/1Qvkc96fKljRkPWKCeq9T9JjB1EaWwYPgvYcp9BZqsyU/edit) e [versão v2](https://docs.google.com/document/d/1V6jAgTeUDRvsCjzjqcVxy8agycLzANjhltK0J-mVD8w/edit).

**Dossiê documental:** [`clientes/otica-mila.md`](clientes/otica-mila.md)

**Próximas ações:**

- [x] Receber retorno de Camila sobre o conceito do nome.
- [x] Acompanhar o desenvolvimento e consolidar a direção aprovada mantendo
      “Ótica Mila”.
- [x] Apresentar a direção e obter aprovação da apresentação de marca.
- [x] Registrar que a apresentação foi aprovada.
- [x] Finalizar os arquivos da identidade e criar o manual de uso v1.
- [ ] Formalizar escopo, entregáveis, prazos, valores, revisões e aprovações em
      contrato ou instrumento equivalente antes de ampliar o trabalho.
- [x] Alinhar com Ramon a finalização dos arquivos após a aprovação.

**Responsáveis pela execução:** Gleide e Ramon.  
**Aguardando:** conferência da entrega financeira e aceite formal do
encerramento; alinhamento com Camila caso surjam ajustes nos arquivos.  
**Bloqueio:** formalização contratual e financeira ainda pendente.  
**Risco:** projeto em execução sem contrato assinado.

**Atualização de entrega — 08/09/2026:** apresentação de marca aprovada e
pacote v1 preparado em `05_Entregaveis-Finais`, com manual PDF, logotipos em
PNG transparente, símbolo, paleta SVG, fonte, texturas, aplicação de
referência e arquivo editável. A entrega financeira e o aceite formal do
encerramento ainda precisam ser conferidos separadamente.

**Atualização financeira — 10/09/2026:** Camila confirmou por WhatsApp o
entendimento de que a Identidade Visual foi combinada por R$ 2.900 e o
diagnóstico por R$ 500, além de reconhecer o óculos de sol, o brinco e o último
óculos com lente como itens do acerto. Saldo restante, valores individuais e
data/forma de pagamento permanecem aguardando registro final.

---

### 3.6 Hub de colaboradores

**Objetivo:** distribuir esforços, ampliar capacidade de entrega e liberar tempo
de Gleide, fortalecendo também as trajetórias individuais dos participantes.

**Tese atual:**

> O Studio Gle Wolfran é um hub criativo founder-led que articula profissionais
> independentes para construir marcas, compartilhar esforços e gerar reputação
> coletiva sem apagar trajetórias individuais.

**Princípios definidos:**

- Gleide preserva sua trajetória e mantém a decisão final.
- O Studio possui núcleo recorrente e rede ampliada.
- Não há exclusividade presumida.
- A equipe pode mudar conforme o projeto.
- Participação financeira acompanha contribuição e responsabilidade.
- Trabalho interno do Studio precisa ter limite e reconhecimento.
- Cada integrante deve preservar tempo para o próprio negócio.
- O Studio fortalece intencionalmente a marca individual dos participantes.
- Autoria, créditos, cases e oportunidades devem ser claros.

**Pessoas mapeadas:**

| Pessoa | Posição provisória | Situação |
|---|---|---|
| Ana Ramos | Candidata ao núcleo associado | Interesse demonstrado; funções e disponibilidade a definir |
| Ramon Blackpass | Candidato ao núcleo associado | Interesse demonstrado; funções e disponibilidade a definir |
| Fernando Ostlund | Rede ampliada / parceiro do projeto Luan | Interesse confirmado no projeto; escopo e remuneração pendentes |
| Vitor Lobo | Rede ampliada / potencial parceiro do projeto Luan | Interesse reafirmado em reunião de 29/07; propôs cocriação com Gleide e Fernando e declarou disponibilidade; constância, papel e condições ainda a validar |
| Bruno Lujan | Potencial parceiro técnico | O alinhamento inicial evoluiu para uma colaboração real na oportunidade Alquimia Científica. Em 05/09, Gleide registrou insatisfação com atrasos, ampliação contínua do trabalho antes de decisões simples e repetição de um padrão percebido no hackathon. Ela considera que sua própria flexibilidade pode ter contribuído. Compatibilidade operacional, capacidade de fechamento e resposta a limites permanecem **A confirmar**; isso ainda não constitui decisão de encerrar a parceria. |

**Próximas ações:**

- [ ] Consolidar o briefing do modelo de colaboração.
- [ ] Definir diferença entre núcleo e rede ampliada.
- [ ] Mapear capacidades, interesses e disponibilidade de Ana e Ramon.
- [ ] Definir responsabilidades que Gleide entregará com autonomia.
- [ ] Separar trabalho de cliente, trabalho do Studio e trabalho de marca pessoal.
- [ ] Desenhar participação financeira por projeto.
- [ ] Definir crédito, autoria e uso de portfólio.
- [ ] Criar proposta de piloto de 90 dias.
- [ ] Conversar com Bruno Lujan para esclarecer projeto, capacidades técnicas,
      apoio com agentes e possível estruturação comercial das experiências.
- [ ] Formalizar, antes de compartilhar repertório sensível ou ampliar o piloto,
      as contribuições de Gleide e Bruno, autoria/propriedade do sistema,
      confidencialidade, dados, suporte, comercialização e encerramento.
- [ ] Antes de ampliar a parceria com Bruno, alinhar por escrito autoridade de
      decisão, prazos de revisão, critério de encerramento e regra de que novas
      ideias não reabrem automaticamente uma entrega já aprovada.
- [ ] Preparar conversa conjunta com Ana e Ramon.
- [ ] Formalizar acordo antes do primeiro projeto conjunto.

**Documentos relacionados:**  
[`parcerias-colaboradores`](parcerias-colaboradores)

---

### 3.7 Plataforma e Brand System do Studio

**Objetivo:** organizar e tornar navegáveis as diretrizes e ativos do Studio.

**Situação atual:**

- Briefing, PRD e UI Plan existentes.
- Infraestrutura Next.js e Design System existentes.
- Em 05/09/2026, Gleide decidiu criar uma plataforma única sob a marca Studio
  Gle Wolfran, conectando site público, Studio OS, portais de clientes, Brand
  Systems e laboratório de produtos.
- A versão Alpha 0.1 foi implementada no `studio-ai`: home pública, shell
  autenticado do `/os`, seis módulos operacionais e páginas estruturais dos
  demais espaços.
- O Studio OS já lê projetos, clientes, prioridades, alertas e decisões das
  fontes operacionais existentes. Portais, Brand Systems e Laboratório ainda
  são estruturas de produto, não fluxos completos.
- O nome Isa foi removido da superfície nova. **Studio Gle Wolfran** atua como
  marca-mãe, **S—GW** como assinatura compacta e **Studio OS** como descritor
  provisório da operação interna.
- Parte dos documentos utiliza conceitos antigos e precisa de atualização.
- Gleide apresentou como hipótese inicial para a identidade visual uma direção
  autoral e editorial, com monograma caligráfico, traços finos, papel e
  impressões táteis, transparências e marcas de construção manual. As cores da
  referência não estão definidas e deverão ser reinterpretadas. Uma primeira
  exploração visual foi gerada em 02/08/2026; ainda não constitui logo aprovada
  nem desenho final para registro.

**Decisão atual:** importante, mas não deve bloquear geração de receita.

**Próximas ações futuras:**

- [x] Atualizar a arquitetura inicial da plataforma e registrar as camadas de
      marca em `docs/PLATAFORMA-STUDIO-GLE-WOLFRAN.md`.
- [x] Criar a primeira experiência navegável integrada.
- [ ] Recriar o backlog de desenvolvimento a partir da nova arquitetura.
- [ ] Validar com Gleide a home, os nomes das áreas e a hierarquia do Studio OS.
- [ ] Definir o primeiro fluxo completo a implementar.
- [ ] Modelar organizações, papéis e isolamento de dados antes de abrir portais.
- [ ] Preparar deploy.

---

### 3.8 Aplicação Vanguarda — base técnica

**Objetivo:** servir como repositório-base para aplicações web do Studio.

**Situação atual:**

- Next.js, TypeScript, Tailwind, Supabase, shadcn/ui e Storybook configurados.
- Autenticação, banco e storage possuem implementação inicial.
- O fluxo completo de autenticação ainda precisa de validação.
- O Git contém trabalho local não consolidado.

**Decisão atual:** manter como infraestrutura; não tratar como prioridade
comercial imediata.

---

### 3.9 Estrutura MDI — Método Design Invisível

**Objetivo:** transformar o conhecimento e os prompts do Modelo Vanguarda em um
método autoral claro, aplicável e comunicável, preservando a profundidade nos
bastidores sem tornar a experiência do cliente excessivamente complexa.

**Situação atual:**

- O MDI é o método-mãe autoral do Studio.
- Gleide definiu sua missão autoral: **“Eu desenho o invisível para que nossa
  atenção deixe de alimentar distrações e passe a construir, conscientemente,
  a realidade que desejamos viver.”** A formulação conecta o MDI, sua atuação
  em direção estratégica e artística e o propósito de orientar escolhas para
  além de ganhos exclusivamente materiais.
- Gleide definiu **Ler, Escolher, Construir e Ativar** como fundamentos do MDI,
  e não apenas como etapas operacionais. Ler expressa sua forma recorrente de
  experienciar a vida — observando sinais, relações, padrões, símbolos e
  camadas —, enquanto Escolher, Construir e Ativar possuem igual natureza
  fundadora na transformação da leitura em direção, forma e movimento.
- Gleide decidiu reposicionar sua atuação profissional: reduzir progressivamente
  a execução direta e concentrar seu melhor rendimento nas funções de
  **direção estratégica e direção artística**, alinhadas ao seu mapa integrado
  do MDI. Essa decisão deverá ser explicitada na apresentação a Luan como parte
  da lógica de composição da equipe e do papel de liderança de Gleide.
- **Mapa Integrado do MDI** é o nome de trabalho proposto para o arquivo-fonte
  privado que reúne informações amplas sobre Gleide, seus padrões, repertório,
  decisões, método, forças e critérios de atuação. A arquitetura, os níveis de
  acesso e o conteúdo permitido nesse arquivo ainda precisam ser definidos.
- A concentração de informações pessoais nesse arquivo cria uma necessidade de
  governança e segurança cibernética. Gleide quer aprender a proteger suas
  informações e as de sua família; isso deve ser tratado como uma frente de
  sustentação do novo modelo de vida e negócio, sem pressupor proteção absoluta.
- Os quatro fundamentos também podem organizar uma jornada de aplicação, mas
  nenhum deve ser tratado como princípio superior aos demais.
- Em **Construir**, o objeto principal não é necessariamente um sistema: é o
  futuro que a pessoa ou o negócio deseja alcançar, materializado conforme o
  caso em uma ideia, negócio, marca, projeto, produto ou experiência. O sistema
  é organizado e também pode ser construído como infraestrutura coerente para
  sustentar esse futuro.
- Em **Ativar**, o que foi construído entra em movimento no mundo, produz
  relações, aprendizado e efeitos que alimentam novas leituras e escolhas.
- A origem pessoal dessa lente inclui experiências de vida, negócios próprios e
  de clientes, mapa astral e outras leituras simbólicas. Na aplicação
  profissional, essas fontes devem ser traduzidas em pesquisa, critérios,
  estratégia e direção, sem serem confundidas com evidência técnica ou promessa
  comercial.
- Foi definido que os 28 prompts do Modelo Vanguarda serão usados como base
  para estruturar o método.
- As primeiras três ou quatro diretrizes já foram iniciadas.
- A estrutura consolidada das etapas, entregáveis e pontos de decisão ainda não
  foi definida.
- O Relatório Mestre v0.1, de 17/07/2026, ainda não incorpora as formulações
  recentes sobre **Ler, Escolher, Construir e Ativar**, leitura sistêmica de
  ecossistemas, visão fragmentada/sobrecarga decisória, aplicação ao caso Luan
  e governança da direção com colaboradores.
- Um novo Relatório Mestre v0.2 foi criado em 31/07/2026, preservando a v0.1
  como registro histórico. A nova versão incorpora os fundamentos recentes,
  explicita hipóteses e decisões abertas e documenta o caso Luan como aplicação
  em desenvolvimento.

**Próximas ações:**

- [ ] Localizar e reunir os 28 prompts e as diretrizes já desenvolvidas.
- [ ] Agrupar os prompts em macrofases compreensíveis.
- [ ] Identificar decisões, atividades, evidências e entregáveis de cada fase.
- [ ] Separar o que fica nos bastidores do que será apresentado ao cliente.
- [x] Atualizar o Relatório Mestre para a versão 0.2, preservando a genealogia e
      incorporando as formulações recentes do método.
- [ ] Formalizar Ler, Escolher, Construir e Ativar como os quatro fundamentos do
      MDI e esclarecer como também funcionam como jornada de aplicação.
- [ ] Decidir se Ler, Escolher, Construir e Ativar substitui, contém ou convive
      com o ciclo anterior Revelar, Organizar, Traduzir e Sustentar.
- [ ] Documentar o projeto Luan como primeiro estudo de caso explícito de leitura
      sistêmica de um ecossistema pessoal e mudança de percepção do cliente.
- [ ] Definir os pontos de direção de Gleide e os pontos de execução delegável.
- [ ] Definir a arquitetura segura do Mapa Integrado do MDI, separando conteúdo
      profissional, pessoal sensível e dados familiares, com acessos e cópias de
      segurança apropriados.
- [ ] Criar uma trilha prática de segurança cibernética pessoal e familiar,
      começando por inventário de dados, contas críticas, autenticação forte,
      recuperação e backups.
- [ ] Incluir segurança cibernética como requisito da operação com agentes,
      antes de ampliar acesso a documentos estratégicos ou dados de clientes.
- [ ] Validar uma versão inicial do método no projeto Mascavo.

**Responsável pela direção e autoria:** Gleide.  
**Status:** estruturação pendente.  
**Prioridade:** projeto interno; deve apoiar as entregas comerciais sem bloqueá-las.

---

### 3.10 Dia da Noiva — experiência e parcerias

**Objetivo:** melhorar a experiência oferecida às noivas antes e durante o “Dia
da Noiva”, incorporando cuidado, preparação e percepção de alto padrão.

**Situação atual:**

- Gleide e Adriel discutiram o projeto em reunião realizada em 28/07/2026.
- Foram levantados vários pontos para melhorar a experiência, ainda a consolidar.
- Gleide sugeriu substituir ou reduzir a compra de produtos importados por uma
  parceria local com uma clínica de estética de alto padrão que possua linha
  própria de skincare.
- A parceria considerada envolve a marca **Sal Seuticals** e a clínica
  **Rosique e Captian**, nomes/grafia a confirmar antes de qualquer contato ou
  material externo.
- Segundo a informação trazida por Gleide, Dra. Samela Rosique é fundadora da
  Sal Seuticals e sócia da clínica.

**Hipótese de experiência:**

- Entregar à noiva, com antecedência, uma caixa-presente visualmente cuidadosa.
- Incluir produtos de skincare e outros mimos para a preparação da pele.
- Avaliar a inclusão de voucher de desconto ou procedimento-presente na clínica.
- Usar a parceria para transmitir cuidado, qualidade, elegância e conexão com
  negócios locais.

**Próximas ações:**

- [ ] Consolidar os pontos discutidos na reunião com Adriel.
- [ ] Desenhar a jornada atual e a jornada desejada da noiva.
- [ ] Definir objetivo, momento de entrega e conteúdo mínimo da caixa.
- [ ] Validar com Adriel interesse, orçamento e viabilidade da proposta.
- [ ] Confirmar nomes, posicionamento, produtos e canais oficiais da potencial
      parceira.
- [ ] Estruturar uma proposta de parceria antes de realizar contato.
- [ ] Definir responsabilidades, custos, contrapartidas e uso das marcas.
- [ ] Testar a experiência em pequena escala antes de adotá-la como padrão.

**Responsáveis pela concepção:** Gleide e Adriel.  
**Potencial parceira:** Sal Seuticals / Clínica Rosique e Captian, a confirmar.  
**Status:** descoberta e desenho da experiência.  
**Bloqueio:** proposta, viabilidade, orçamento e interesse da parceira ainda não
validados.

---

### 3.11 Lorrana — direcionamento profissional

**Objetivo:** compreender o momento, a experiência, os limites e as possibilidades
profissionais de Lorrana antes de recomendar um novo caminho.

**Situação atual:**

- Em 20/08/2026, Gleide teve uma conversa inicial e superficial com Lorrana,
  cabeleireira de salão com grande experiência em cortes e penteados.
- Lorrana relatou sentir-se um pouco perdida e desejar uma rotina mais leve.
- A possibilidade de oferecer cursos ou estágios de corte surgiu como hipótese,
  não como decisão ou compromisso.
- Gleide decidiu usar a conversa com Lorrana como um primeiro diagnóstico
  aplicado. O roteiro deve investigar serviço, experiência, recorrência,
  comunicação, posicionamento, rotina e renda com o mesmo peso; ensino permanece
  apenas como uma possibilidade a ser validada.
- Ainda faltam informações sobre serviço, experiência do cliente, aquisição e
  recorrência, comunicação, rotina, renda, vínculo com o salão, disponibilidade
  e objetivos pessoais.
- O diagnóstico inicial foi revisado para funcionar como conversa guiada. Ele
  combina escuta subjetiva com um retrato aproximado da operação, sem pressupor
  que ensino, marca, rotina ou qualquer outra frente seja a solução central.
- Em 24/08/2026, foi criado o formulário mobile do Exame de crenças e motores,
  com rascunho salvo no aparelho e envio ao Formspree por uma rota do servidor.
  O endpoint Formspree foi conectado em 24/08/2026, aceitou uma submissão
  técnica de verificação e confirmou o processamento da entrega para o e-mail
  do Studio. O formulário foi publicado na Vercel em 24/08/2026 e a página
  pública foi validada após a correção do middleware. A submissão pelo endereço
  de produção e o recebimento no Formspree foram confirmados por Gleide.
- Após o teste em produção, Gleide decidiu preservar o Exame de crenças e
  motores como uma ferramenta do seu método, ainda a ser aperfeiçoada, em vez
  de tratá-lo como o formulário específico de Lorrana. Um novo formulário de
  direcionamento profissional, com perguntas diferentes, deverá ser criado
  separadamente para ela.
- Em 05/09/2026, Gleide decidiu que o briefing de direcionamento profissional
  não será exclusivo de Lorrana. Ele será um modelo do Studio, validado primeiro
  com ela e depois com outros profissionais antes de ser tratado como ferramenta
  consolidada.
- Em 06/09/2026, a arquitetura dos briefings foi organizada em duas entradas:
  convite assistido com briefing profundo para Lorrana e mapa inicial curto para
  captação pelo Instagram. A página pública é uma hipótese de entrada para
  conversa, não uma oferta publicada, e ainda requer decisões de nome, retorno,
  capacidade, privacidade e retenção.
- Em 06/09/2026, Gleide corrigiu o estágio de Lorrana: houve aproximação,
  perguntas iniciais e reuniões marcadas, mas a conversa de direção não
  aconteceu. Ela passa a ser piloto metodológico em pré-descoberta. O próximo
  passo é retomar o contato e, havendo aceite, pesquisar apenas contexto público
  e setorial para preparar a escuta; Motor Moral não integra este piloto.
- Em 07/09/2026, foi criada a rota separada `/lorrana/briefing`, convertendo o
  roteiro padrão de descoberta no briefing-piloto específico de Lorrana. O
  formulário mantém rascunho local, envia a resposta em blocos estruturados e
  registra o estado inicial “Aguardando leitura do agente”; o Exame permanece
  separado.

**Próximas ações:**

- [x] Criar diagnóstico inicial de direcionamento.
- [ ] Retomar o contato com Lorrana e confirmar se este ainda é um momento
      possível para conversar, sem antecipar uma solução.
- [x] Publicar na Vercel e validar uma resposta de teste em produção.
- [x] Definir a versão v0.1 do briefing modelo de direcionamento profissional.
- [x] Criar e publicar no código o briefing modelo como formulário separado em
      `/lorrana/briefing` e validar a URL de produção antes do envio.
- [ ] Com aceite, preparar pesquisa pública e setorial que gere perguntas para
      a conversa, sem inferir informações privadas ou intenção.
- [ ] Revisar e aperfeiçoar o Exame de crenças e motores como ferramenta do método.
- [ ] Realizar conversa de aprofundamento após as respostas.
- [ ] Separar necessidades de rotina, carreira e negócio.
- [ ] Validar a hipótese de educação com potenciais participantes antes de
      estruturar uma oferta completa.
- [ ] Se houver aderência, desenhar um piloto pequeno e de baixo risco.

**Documento relacionado:**
[`Briefing de direcionamento — Lorrana`](briefings/briefing-direcionamento-lorrana.md)
· [`Arquitetura de entrada e diagnóstico v0.1`](briefings/ARQUITETURA-DE-ENTRADA-E-DIAGNOSTICO-V0.1.md)

**Dossiê documental:** [`clientes/lorrana.md`](clientes/lorrana.md)

**Status:** descoberta inicial.  
**Bloqueio:** contexto insuficiente para recomendar formato, prazo ou investimento.

## 4. Próximas ações consolidadas

| Prioridade | Ação | Projeto | Responsável | Prazo | Status |
|---:|---|---|---|---|---|
| 1 | Confirmar vencimento e acessos do site | Fine Hair | Gleide | A confirmar | Pendente |
| 2 | Definir oferta enxuta com Ramon | Fine Hair | Gleide + Ramon | A confirmar | Pendente |
| 3 | Publicar e enviar o briefing modelo de direcionamento profissional | Lorrana | Gleide | A confirmar | Em andamento |
| 4 | Mapear prometido, entregue e pendente | Luan | Gleide | A confirmar | Pendente |
| 5 | Conversar com Luan e validar prioridade | Luan | Gleide | A confirmar | Pendente |
| 6 | Testar landing e formulário | Diagnóstico | Gleide | A confirmar | Pendente |
| 7 | Colocar oferta em venda | Diagnóstico | Gleide | A confirmar | Pendente |
| 8 | Consolidar briefing da colaboração | Hub | Gleide + Codex | A confirmar | Em andamento |
| 9 | Preparar piloto do núcleo | Hub | Gleide | Após briefing | Pendente |
| 10 | Finalizar arquivos e manual v1 da Ótica Mila | Ótica Mila | Gleide + Ramon | A confirmar | Concluído |
| 11 | Formalizar o projeto acordado por WhatsApp | Ótica Mila | Gleide + Ramon | Antes de ampliar o trabalho | Pendente |
| 12 | Consolidar briefing e definir pesquisa | Mascavo | Gleide | A confirmar | Pendente |
| 13 | Definir escopo, equipe e proposta de branding | Mascavo | Gleide | A confirmar | Pendente |
| 14 | Definir a estrutura inicial do MDI a partir dos 28 prompts | MDI | Gleide + Codex | A confirmar | Pendente |
| 15 | Encaminhar o registro da marca “Gle Wolfran” | Studio | Gleide | A confirmar | Pendente |
| 16 | Consolidar a jornada e os pontos da reunião | Dia da Noiva | Gleide + Adriel | A confirmar | Pendente |
| 17 | Estruturar hipótese da caixa e proposta de parceria | Dia da Noiva | Gleide + Adriel | A confirmar | Pendente |
| 18 | Reconstruir escopo e contrato da relação contínua | Fine Hair | Gleide + Codex | A confirmar | Em andamento |
| 19 | Estruturar formulário de feedback para clientes do Studio | Studio | Gleide + Codex | A confirmar | Em andamento |
| 20 | Consolidar a direção aprovada e preparar o pacote final | Ótica Mila | Ramon, com direção de Gleide | A confirmar | Concluído |
| 21 | Alinhar interesse e disponibilidade com Vitor Lobo | Luan / Hub | Gleide | 29/07/2026, 15h | Agendado |
| 22 | Aprofundar o momento profissional após as respostas | Lorrana | Gleide | A confirmar | Pendente |
| 23 | Processar e indexar os cinco pacotes do export do Claude | Memória do Studio | Gleide + Codex | 05/09/2026 | Concluído |
| 24 | Confirmar se a mensagem/proposta para Ruan sobre Alquimia Científica foi enviada | Oportunidade / Ruan | Gleide | A confirmar | Pendente |

## 5. Aguardando terceiros

| Pessoa | Assunto | Projeto | Próxima verificação |
|---|---|---|---|
| Fine Hair | Informações de renovação e interesse em reformulação | Fine Hair | A confirmar |
| Luan Nogueira | Prioridade, interesse e orçamento para nova fase | Luan | Após fechamento da permuta |
| Pacientes/modelos convidadas | Interesse e disponibilidade para o ensaio de 17/09/2026 | Campanha Luan Nogueira | Aguardar respostas aos convites enviados em 24/08/2026 |
| Ana Ramos | Funções, disponibilidade e expectativa | Hub | Após proposta inicial do núcleo |
| Ramon Blackpass | Funções, disponibilidade e expectativa | Hub | Após proposta inicial do núcleo |
| Fernando Ostlund | Escopo e participação no projeto | Luan | Após validação do cliente |
| Camila | Direcionamento claro e aprovação após a última proposta | Ótica Mila | Após nova apresentação |
| Eda | Interesse em aprofundar o projeto após receber PDF e áudios | Mascavo | Sem cobrança ativa |
| Lorrana | Respostas ao briefing de direcionamento profissional | Lorrana | Após o envio do briefing |
| Maria Clara | Informações do salão para preparar orçamento de captação e vídeos | Eventos / Salão | Após confirmação de Gleide com Adriel |

## 5.1 Compromissos agendados

| Data e hora | Compromisso | Pauta / projeto | Status |
|---|---|---|---|
| 28/07/2026, 10h | Reunião com Adriel | Dia da Noiva | Realizada |
| 29/07/2026, 15h | Reunião com Vitor Lobo | Projeto Luan e possível colaboração | Agendada |
| 31/07/2026, horário a confirmar | Aula de revisão e correção de pitch na Vanguarda | Pitch do Studio Gle Wolfran | Agendada |
| 28/08/2026, horário a confirmar | Hackathon da Vanguarda | Possível pitch com aplicação ao universo de Luan, sujeito a autorização | Agendado |

## 6. Decisões tomadas

- O Studio será tratado como uma marca empresarial founder-led.
- Gleide mantém a decisão final enquanto o Studio carregar seu nome e reputação.
- O modelo desejado é um hub com núcleo recorrente e rede ampliada.
- Não existe decisão de sociedade com colaboradores.
- Não há necessidade atual de mudar o nome Studio Gle Wolfran.
- A liberdade de trabalhar com outros profissionais deve ser recíproca.
- O Studio deve fortalecer também a reputação individual dos participantes.
- Fernando pertence inicialmente à rede ampliada, vinculado ao projeto Luan.
- Fine Hair, Luan e Diagnóstico precedem o desenvolvimento do Brand System.
- Na Mascavo, Gleide conduzirá a pesquisa e a direção estratégica; automações e
  design serão delegados a especialistas do hub, ainda a definir.
- Os 28 prompts do Modelo Vanguarda serão a base de estruturação do MDI, mas
  serão sintetizados em uma experiência mais simples para o cliente.
- Na Mascavo, não haverá pressão por resposta após o envio do material; a
  continuidade depende da manifestação de interesse de Eda.
- Na Fine Hair, Gleide deixará a produção e a publicação recorrente para atuar
  em direção estratégica e comunicação; social media e audiovisual serão
  delegados e contratados separadamente.
- A nova proposta da Fine Hair será construída somente após a reunião de escuta
  com Adriel e Joelson e deverá estabelecer de forma categórica o papel, os
  limites e as responsabilidades de Gleide.
- A ISA mantém o nome **Inteligência Sistêmica Autoral**.
- **Isa não será exibida como nome ou marca da interface externa da plataforma por enquanto.**
  Ela ocupa a camada interna de inteligência, memória e orquestração. Só poderá
  se tornar marca externa após validação com Gleide e clientes dentro da
  experiência interna, sem lançamento automático.
- O briefing de direcionamento profissional será um modelo reutilizável do
  Studio, validado primeiro com Lorrana e depois com outros profissionais.
- Os prompts da R1-Direção serão a base da skill de diagnóstico de clientes;
  permanecem organizados junto aos materiais das missões da Vanguarda.
- A organização do Drive em `01_CLIENTES` passa a reunir todos os clientes no
  mesmo nível; projetos finalizados ficam em `01_CLIENTES/99_ARQUIVADOS`.
- O MMPI é um método experimental desenvolvido com uma prima, não um cliente;
  seus materiais ficam em `06_DESENVOLVIMENTO-APRENDIZAGEM/Experimentos`.
- O `studio-ai` será o centro de inteligência e navegação dos clientes e
  projetos. Os arquivos originais permanecem no Drive e serão referenciados por
  índices e dossiês, evitando duplicação e versões conflitantes.

## 7. Decisões pendentes

- Arquitetura de comunicação entre `@glewolfran` e `@studioglewolfran`,
  incluindo função, tipo de conteúdo e chamada para ação de cada perfil.

- Modelo de remuneração do núcleo.
- Critérios de participação nos resultados.
- Responsabilidades permanentes de Ana e Ramon.
- Regras para trabalho interno do Studio.
- Tempo protegido para as marcas pessoais.
- Termos jurídicos e contratuais.
- Escopo e preço da Fine Hair.
- Fechamento da permuta de Luan.
- Critério de valoração dos serviços já trocados na permuta de Luan e forma de
  quitação de eventual saldo.
- Uso de parcelamento, remuneração variável ou participação em resultados na
  nova relação com Luan, incluindo base de cálculo, prazo, prestação de contas,
  piso de remuneração e tratamento jurídico-tributário.
- Prioridade comercial do novo projeto de Luan.
- Situação atual do CNPJ/MEI.
- Escopo, equipe, prazo e investimento da proposta Mascavo.
- Possível mudança de nome da Mascavo.
- Forma de regularização contratual do projeto Ótica Mila.
- Estratégia, titularidade e classes para o registro da marca “Gle Wolfran”.
- Formato, orçamento e parceiro da experiência “Dia da Noiva”.
- Conteúdo, antecedência de entrega e contrapartidas da caixa-presente.
- Escopo recorrente, remuneração, duração e limites do novo contrato Fine Hair.
- Modelo de contratação, remuneração e responsabilidade pelos especialistas que
  executarão conteúdo e outras entregas da Fine Hair.
- Canal, frequência, responsáveis e regras para alertas de prazo e andamento
  enviados aos colaboradores.
- Papel, disponibilidade e eventual divisão de responsabilidades entre Vitor
  Lobo e Fernando Ostlund no projeto Luan.
- Relação canônica entre **Isa** e **MDI**: o nome Inteligência Sistêmica
  Autoral está confirmado, mas ainda precisa ser decidido se Isa permanece como
  assistente/orquestradora, torna-se o método ou passa a nomear o sistema maior
  que contém o MDI.
- Arquitetura de marca da plataforma unificada: decidir entre **Studio Gle
  Wolfran** como nome integral da experiência e **S-GW** como assinatura curta,
  nome de produto ou camada de interface. A retirada de Isa da superfície está
  confirmada; o novo nome da plataforma ainda não.
- A eventual externalização da Isa somente será considerada após validação com
  Gleide e clientes dentro da experiência interna. Depois disso, ainda serão
  necessárias pesquisa de disponibilidade nominal, domínio e marca, definição
  da relação com Studio Gle Wolfran e MDI e uma decisão explícita de lançamento.

## 8. Ideias não priorizadas

- **Curadoria de Repertório Visual (ISA):** em 05/09/2026, foram analisadas as
  15 capturas das pastas do Pinterest e criados o dossiê navegável
  `docs/isa/curadoria-visual/dossie-visual-isa-v2.html`, o registro rastreável
  `docs/isa/curadoria-visual/EVIDENCIAS-E-REFERENCIAS.md` e a leitura
  `docs/isa/curadoria-visual/LEITURA-SIMBOLICA-V2.md`. A v2 acrescenta análise
  fonte a fonte, fases do repertório, contraprovas, matriz visual e a hipótese
  transversal de "dar contorno ao vivo". Arquétipos permanecem lentes
  culturais e hipóteses; nenhuma preferência, identidade ou regra de design
  system foi definida. **Regra confirmada:** qualquer mudança futura no código
  do output deverá criar uma nova versão numerada e preservar integralmente a
  anterior. Em seguida foi criada a análise específica da pasta `Meu Estilo`,
  em `docs/isa/curadoria-visual/analise-estilo-isa-v1.html` e
  `docs/isa/curadoria-visual/ANALISE-ESTILO-V1.md`, com linhas, proporções,
  cores, padrões e arquétipos provisórios. **Próxima ação: validar as hipóteses
  com Gleide antes de qualquer adoção.**
- **Design system inicial do Studio:** criado por Gleide em 05/09/2026 a partir
  da última leitura de repertório; ainda requer consolidação de nome, escopo e
  aplicação na plataforma.
- **Plataforma unificada / Studio OS:** hipótese de reunir o sistema operacional
  do Studio, os módulos hoje desenvolvidos no `studio-ai`, áreas autenticadas e
  futuros portais em uma única aplicação na Vercel. Nome em avaliação: Studio
  Gle Wolfran e/ou S-GW. A ideia ainda não foi promovida a prioridade do backlog.
- **Sistema futuro de agentes de direção:** em 06/09/2026, Gleide citou a
  Outboxers Society como referência de arquitetura para uma possível coleção de
  skills. A hipótese do Studio é mais específica: orquestrar captação, pesquisa
  pública, entrevista, síntese e expansão em casos reais. Não há produto,
  catálogo, promessa, base proprietária ou decisão de venda; a validação deve
  começar internamente nos pilotos atuais.
- Agente operacional para alertar colaboradores sobre prazos e solicitar
  atualizações de andamento dos projetos.
- Plataforma própria para cursos.
- Plataforma multi-tenant de Brand Systems.
- Migração completa dos ativos do Studio.
- CRM mais sofisticado.
- Sociedade futura com integrantes do núcleo.

## 8.1 Aprendizados operacionais

- Muitos clientes do Studio amam o que fazem, mas vivem rotinas profissionais
  intensas e estressantes.
- Materiais visuais, curtos e concretos podem facilitar a comunicação e reduzir
  a carga de abstração para clientes acelerados.
- Esse padrão deve orientar a forma de apresentar ideias, sem ser tratado como
  diagnóstico individual ou justificativa para pressionar decisões.
- Formulários são instrumentos de coleta, mas não substituem uma conversa ao
  vivo para captar linguagem, contradições, critérios de escolha e contexto.
- Respostas possivelmente produzidas com apoio de IA devem ser tratadas como
  material inicial, não como evidência suficiente de clareza estratégica.
- Gleide não abre mão de uma conversa ao vivo com o cliente antes de consolidar
  decisões centrais do projeto.

## 8.2 Organização por ciclos e céu do dia

- Gleide quer incluir no sistema de organização uma camada de observação da
  fase da Lua e do céu astrológico do dia.
- Essa camada funcionará como referência reflexiva e simbólica, sem substituir
  compromissos, prazos, evidências ou prioridades operacionais.
- Estrutura inicial sugerida para o registro diário: fase lunar; signo da Lua;
  movimentos ou aspectos relevantes; pergunta de observação; tradução possível
  para o ritmo de trabalho.

## 9. Inbox

Informações novas que ainda não puderem ser classificadas com segurança devem
ser registradas aqui e revisadas posteriormente.

- **Em recuperação — organização do Drive:** Gleide solicitou a recuperação da
  pasta `FineHair` e de materiais relacionados que desapareceram após a
  reorganização de `01_CLIENTES`. Não fazer novas movimentações nessa área até
  os itens reaparecerem e serem conferidos.

- **A confirmar — Ruan / Alquimia Científica:** foi localizado em 05/09/2026 um
  texto final de abordagem estratégica, com análise do site e oportunidade de
  apresentação ao proprietário. A existência do arquivo não confirma envio,
  aceite, proposta formal nem compromisso.
- **Aguardando contexto — empresa de instalação de insulfilm:** uma conhecida
  abordada no salão relatou interesse em marcar conversa para o marido, dono de
  empresa em ampliação de loja. Nome, cidade, canal público, decisor e abertura
  direta ainda não foram confirmados; não iniciar pesquisa individual nem
  proposta antes desses dados. Detalhes em
  `docs/leads/empresa-insulfilm-indicacao-v0.1.md`.
- **A confirmar — COE Orofacial:** a minuta arquivada registra saldo de
  R$ 1.460 e não contém assinaturas; uma conversa de maio registra a lembrança
  de R$ 1.500. Confirmar pagamento, aceite e entrega final antes de tratar o
  valor como recebível.
- **A confirmar — Casa Mestre Cuca:** a cliente pediu encerramento em junho e a
  pasta está arquivada, mas o contrato da equipe Aurea localizado possui 2 de 3
  assinaturas, com assinatura de Gleide pendente. Confirmar acerto e entrega
  final, sem reabrir o projeto comercial.
- **Fonte processada — Claude:** os cinco pacotes foram abertos e indexados em
  05/09/2026. Foram recuperadas 152 conversas, 15 projetos e memórias com corte
  em 23/07/2026. O material serve como histórico; decisões de agosto/setembro e
  fontes diretas prevalecem. Detalhes em
  `docs/fontes/claude/INVENTARIO-E-ACHADOS.md`.

## 10. Protocolo de atualização

Ao receber informação nova:

1. Identificar o projeto, pessoa ou decisão relacionada.
2. Classificar como informação, ideia, decisão, compromisso, bloqueio ou item
   aguardando terceiro.
3. Atualizar o estado atual e a próxima ação.
4. Não criar prazo, responsável ou compromisso que não tenha sido informado.
5. Marcar incertezas como **A confirmar**.
6. Manter no painel apenas o necessário para decisão e execução.
7. Vincular documentos detalhados em vez de duplicar conteúdo extenso.
