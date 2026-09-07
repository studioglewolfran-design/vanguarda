# Camada privada do Studio OS

Esta migração cria o primeiro limite de segurança para os dados reais:

- `studio_workspaces` separa o espaço operacional;
- `studio_workspace_members` define `owner`, `editor` e `viewer`;
- `studio_records` guarda registros estruturados em JSONB;
- `studio_audit_events` registra alterações feitas por usuários autenticados;
- RLS impede acesso anônimo e limita leitura/escrita ao workspace do usuário.

## Ordem segura de ativação

1. Aplicar `migrations/202609070001_secure_studio_workspaces.sql` no projeto
   Supabase correto.
2. Criar ou confirmar a conta da Gleide no Supabase Auth.
3. Entrar na aplicação com essa conta e criar o espaço privado em
   `/workspace-setup`.
4. Importar somente registros revisados para `studio_records` usando uma
   sessão autenticada de proprietária/editora.
5. Configurar `STUDIO_OS_DATA_MODE=supabase` na Vercel somente depois de
   existir o registro `operational_panel/default`.

O repositório nunca deve receber o painel, dossiês, transcrições, exports ou
qualquer chave `service_role`. A aplicação usa apenas a chave pública do
Supabase e as políticas RLS.

## Registros esperados pela aplicação

| `record_type` | `record_key` | Conteúdo |
| --- | --- | --- |
| `operational_panel` | `default` | Objeto compatível com `OperationalPanel` |
| `lead_pipeline` | `default` | Objeto compatível com `LeadPipeline` |

Se um registro estiver ausente ou inválido, a aplicação falha de forma
explícita; ela não volta silenciosamente para arquivos locais ou dados demo.
