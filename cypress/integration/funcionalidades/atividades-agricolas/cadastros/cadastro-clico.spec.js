/// <reference types="cypress" />

import seedTestCiclo from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-ciclo.json'
import Ciclo from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/ciclo/ciclo.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Ciclo - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste de cadastro de um novo ciclo de milho
  it('Deve cadastrar um ciclo de milho', function () {
    cy.allure().severity('normal').startStep('test content')
    .description(markdown)

    Ciclo.cadastrar(seedTestCiclo)
  })

  // Validação da Dashboard de ciclo
  it('Deve validar a Dashboard de ciclo', function () {
    cy.allure().severity('minor').startStep('test content')

    Ciclo.validarDashboard(seedTestCiclo)
  })

  const markdown = `
  ---
  ### Funcionalidade: Cadastro de ciclo
  >**COMO** gestor da Fazenda
   **QUERO** cadastrar um ciclo de produção
   **PARA** gerenciar as culturas que irei trabalhar em uma safra específica

  ### Cenário: Cadastrar ciclo inexistente
  >**DADO** que o usuário esteja com o modal cadastro de ciclo aberto
   **QUANDO** os campos obrigatórios forem preenchidos
   **E** clicar no botão "Adicionar"
   **ENTÃO** o ciclo é cadastrado e o modal de cadastro será fechado

   ---
   `
})
