/// <reference types="cypress" />

import seedTestCiclo from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-ciclo.json'
import Ciclo from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/ciclo/ciclo.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/ciclo.description.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Ciclo - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  // Teste de cadastro de um novo ciclo de milho
  it('Deve cadastrar um ciclo de milho', function () {
    cy.allure().severity('normal').startStep('test content')
      .descriptionHtml(testDescription.ciclo)

    Ciclo.cadastrar(seedTestCiclo)
  })

  // Validação da Dashboard de ciclo
  it('Deve validar a Dashboard de ciclo', function () {
    cy.allure().severity('minor').startStep('test content')

    Ciclo.validarDashboard(seedTestCiclo)
  })
})
