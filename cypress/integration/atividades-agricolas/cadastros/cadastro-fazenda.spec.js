/// <reference types="cypress" />

import seedTestFazenda from '../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-fazenda.json'
import Fazenda from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/fazenda/fazenda.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/fazenda.description.js'

context('Funcionalidade', () => {
  describe('Atividades Agricolas | Cadastro de Fazenda', { tags: '@cadastro' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    // Teste de cadastro de uma nova fazenda
    it('Deve cadastrar uma fazenda', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.fazenda)

      Fazenda.cadastro(seedTestFazenda)
    })

    // Validação da Dashboard de fazenda
    it('Deve validar a Dashboard de fazenda', function () {
      cy.allure().severity('minor').startStep('test content')

      Fazenda.validarDashboard(seedTestFazenda)
    })
  })
})
