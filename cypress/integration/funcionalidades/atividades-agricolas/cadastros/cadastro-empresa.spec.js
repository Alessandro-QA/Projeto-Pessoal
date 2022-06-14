/// <reference types="cypress" />

import seedTestEmpresa from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-empresa.json'
import Empresa from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/empresa/empresa.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Empresa - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste de cadastro de uma nova empresa
  it('Deve cadastrar uma empresa', function () {
    cy.allure().severity('critical').startStep('test content')

    Empresa.cadastro(seedTestEmpresa)
  })

  // Validação da Dashboard de empresa
  it('Deve validar a Dashboard de empresa', function () {
    cy.allure().severity('minor').startStep('test content')

    Empresa.validarDashboard(seedTestEmpresa)
  })
})
