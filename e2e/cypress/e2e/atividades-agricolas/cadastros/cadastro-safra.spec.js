/// <reference types="cypress" />

import seedTestSafra from '../../../fixtures/atividades-agricolas/cadastros/fixture-safra.json'
import Safra from '../../../support/commands/atividades-agricolas/cadastros/safra/safra.js'
import Authenticate from '../../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/safra.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Safra', () => {
      // Teste de cadastro de uma nova safra
      it('Deve cadastrar uma safra', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.safra)

        Safra.cadastro(seedTestSafra)
      })

      // Validação da dashboard de safra
      it('Deve validar a Dashboard de safra', function () {
        // // cy.allure().severity('minor').startStep('test content')

        Safra.validarDashboard(seedTestSafra)
      })
    })
  })
})
