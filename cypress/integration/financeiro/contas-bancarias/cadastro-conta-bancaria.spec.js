/// <reference types="cypress" />

import seedTestContaBancaria from '../../../fixtures/funcionalidades/financeiro/contas-bancarias/fixture-conta-bancaria.json'
import ContaBancaria from '../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Cadastro de Conta Bancária', { tags: '@contasBancarias' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })
    it('Deve cadastrar uma conta bancaria', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.html)

      ContaBancaria.cadastro(seedTestContaBancaria)
    })

    it('Deve pesquisar uma conta bancaria', function () {
      cy.allure().severity('minor').startStep('test content')

      ContaBancaria.validarDashboard(seedTestContaBancaria)
    })
  })
})
