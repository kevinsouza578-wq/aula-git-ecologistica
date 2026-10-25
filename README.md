# EcoLogística — MVP digital

Projeto fictício desenvolvido para o **Desafio Prático: Startup em 60 Minutos**, do curso de Git e GitHub. A EcoLogística propõe uma forma simples de organizar rotas de entrega e compartilhar informações entre as áreas de logística, RH, empreendedorismo e sistemas.

## Proposta de valor

**Problema:** pequenas operações de entrega costumam registrar rotas em locais diferentes, o que dificulta o acompanhamento e a comunicação entre os responsáveis.

**Solução:** centralizar rotas em um arquivo estruturado e disponibilizá-las por uma API HTTP básica, permitindo consultas rápidas e futuras melhorias.

**Público-alvo:** pequenos negócios, equipes de entregas locais e startups de logística.

## Estrutura do projeto

| Arquivo | Área | Responsabilidade |
| --- | --- | --- |
| `README.md` | Empreendedorismo | Apresentar a startup, seus objetivos e sua proposta de valor |
| `politicas-remotas.md` | RH | Orientar o trabalho híbrido da equipe |
| `rotas-iniciais.json` | Logística | Registrar três rotas de exemplo |
| `app.js` | Sistemas | Disponibilizar uma API básica para consultar as rotas |

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado. O projeto não utiliza dependências externas.

```bash
node app.js
```

Abra `http://localhost:3000` no navegador. Endpoints disponíveis:

- `GET /` — identificação do projeto e lista de endpoints;
- `GET /health` — estado do serviço;
- `GET /rotas` — lista das três rotas cadastradas.

Para alterar a porta, defina a variável de ambiente `PORT` antes de executar.

## Fluxo de versionamento

1. Cada área deve ter suas alterações registradas em um commit descritivo.
2. A branch principal do projeto é `main`.
3. Novas funcionalidades devem ser desenvolvidas em branches `feature/*`.
4. Antes de integrar uma funcionalidade, abra um **Pull Request** para revisão.

> **Observação:** informações e rotas são demonstrativas, criadas para atividade acadêmica. Este MVP não utiliza cadastro real de clientes nem fornece cálculo de distância ou roteirização automática.
