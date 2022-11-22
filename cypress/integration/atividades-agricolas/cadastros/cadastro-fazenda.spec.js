/// <reference types="cypress" />

import seedTestFazenda from '../../../fixtures/atividades-agricolas/cadastros/fixture-fazenda.json'
import Fazenda from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/fazenda/fazenda.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/fazenda.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Fazenda', () => {
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
})
