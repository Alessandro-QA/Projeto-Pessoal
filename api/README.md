# Testes de API - 

## Informações Gerais

- **Projeto**: Testes de APIS Gerais

# Comentários do Package JSON

## Informações Gerais

- **name**: Nome do projeto.
- **version**: Versão inicial do projeto.
- **private**: Indica que o projeto é privado e não deve ser publicado no npm.
- **description**: Descrição breve do projeto.

## Scripts

- **cypress:open**: Abre a interface do Cypress para execução de testes interativos.
- **cypress:run:spec**: Executa um conjunto específico de testes do Cypress no navegador Chrome.
- **cypress:run:allure**: Executa todos os testes do Cypress no navegador Chrome / Envia os Resultados Para o Allure Report / Ignora Falhas de Testes para mesclar erros de Pipeline
- **allure:generate**: Gera relatórios de teste usando Allure.
- **allure:open**: Gera e abre o relatório Allure.
- **eslint**: Executa o linter ESLint no diretório Cypress.
- **teamsReport**: Envia relatórios de teste para Microsoft Teams. * ATUALMENTE DESCONTINUADO E NÂO UTILIZADO

## Dependências de Desenvolvimento

- **@testing-library/cypress**: Biblioteca de utilitários de teste para Cypress.
- **cypress**: Framework de teste end-to-end Cypress.
- **cypress-eslint-preprocessor**: Plugin Cypress para ESLint.
- **cypress-msteams-reporter**: Plugin Cypress para relatórios no Microsoft Teams
- **cypress-plugin-api**: Plugin Cypress para testes de API.
- **cypress-plugin-steps**: Plugin Cypress para documentação de etapas de teste.
- **eslint**: Linter ESLint.

## Dependências

- **dayjs**: Biblioteca de manipulação de datas.
- **allure-cypress**: Plugin Allure para Cypress.
- **ms-teams-webhook**: Biblioteca para envio de notificações para Microsoft Teams.
- **save-dev**: Ferramenta para salvar dependências como desenvolvimento
