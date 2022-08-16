/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/cadastro/contas-bancarias.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Cadastro de Conta', { tags: '@contasBancarias' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Do tipo Conta Bancaria', () => {
      it('Cadastro de conta corrente', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaCorrente)

        ContaBancaria.cadastro(seedTestContaBancaria.contaCorrente)
      })

      it('Deve validar na listagem o cadastro da conta Bancária', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestContaBancaria.contaCorrente)
      })
    })

    context('Do tipo Cartão de Crédito', () => {
      it('Cadastro de cartão de crédito', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.cartaoCredito)

        ContaBancaria.cadastro(seedTestContaBancaria.cartaoCredito)
      })

      it('Deve validar na listagem o cadastro do cartão de crédito', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestContaBancaria.cartaoCredito)
      })
    })

    context('Do tipo Conta Tesouraria', () => {
      it('Cadastro', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaTesouraria)

        ContaBancaria.cadastro(seedTestContaBancaria.contaTesouraria)
      })

      it('Deve validar na listagem o cadastro da conta Tesouraria', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestContaBancaria.contaTesouraria)
      })
    })
  })
})
