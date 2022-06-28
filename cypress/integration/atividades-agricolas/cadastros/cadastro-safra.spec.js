/// <reference types="cypress" />

import seedTestSafra from '../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-safra.json'
import Safra from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/safra/safra.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/safra.description.js'

context('Funcionalidade', () => {
  describe('Atividades Agricolas | Cadastro de Safra', { tags: '@cadastro' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    // Teste de cadastro de uma nova safra
    it('Deve cadastrar uma safra', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.safra)

      Safra.cadastro(seedTestSafra)
    })

    // Validação da dashboard de safra
    it('Deve validar a Dashboard de safra', function () {
      cy.allure().severity('minor').startStep('test content')

      Safra.validarDashboard(seedTestSafra)
    })
  })
})
