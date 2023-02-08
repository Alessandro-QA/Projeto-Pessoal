/// <reference types="cypress" />

import seedTestCiclo from '../../../fixtures/atividades-agricolas/cadastros/fixture-ciclo.json'
import Ciclo from '../../../support/commands/atividades-agricolas/cadastros/ciclo/ciclo.js'
import Authenticate from '../../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/ciclo.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Ciclo', () => {
      // Teste de cadastro de um novo ciclo de milho
      it('Deve cadastrar um ciclo de milho', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.ciclo)

        Ciclo.cadastrar(seedTestCiclo)
      })

      // Validação da Dashboard de ciclo
      it('Deve validar a Dashboard de ciclo', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('minor').startStep('test content')

        Ciclo.validarDashboard(seedTestCiclo)
      })
    })
  })
})
