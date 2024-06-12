/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/cadastro/contas-bancarias.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Cadastro de Conta - Corrente', () => {
      it('Deve cadastrar conta bancária - Conta Corrente', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaCorrente)

        ContaBancaria.cadastroEditar(seedTestContaBancaria.contaCorrente)
      })

      it('Deve validar na listagem o cadastro - Conta Corrente', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestContaBancaria.contaCorrente)
      })
    })
    context('Cadastro de Conta - Cartão de Crédito', () => {

      it('Deve cadastrar conta bancária - Cartão de Crédito', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.cartaoCredito)

        ContaBancaria.cadastroEditar(seedTestContaBancaria.cartaoCredito)
      })

      it('Deve validar na listagem o cadastro - Cartão de Crédito', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestContaBancaria.cartaoCredito)
      })
    })
    context('Cadastro de Conta - Tesouraria', () => {
      it('Deve cadastrar conta bancária - Conta Tesouraria', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaTesouraria)

        ContaBancaria.cadastroEditar(seedTestContaBancaria.contaTesouraria)
      })

      it('Deve validar na listagem o cadastro - Conta Tesouraria', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestContaBancaria.contaTesouraria)
      })
    })
  })
})
