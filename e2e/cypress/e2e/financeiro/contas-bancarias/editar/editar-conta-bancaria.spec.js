/// <reference types="cypress" />

import payLoadContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/editar/pay-load.json'
import seedTestEditarConta from '../../../../fixtures/financeiro/contas-bancarias/editar/editar-conta.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-descprition/editar.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var contaBancaria = Utils.getPayloadPorAmbiente(payLoadContaBancaria)

  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Edição de Conta - Conta Corrente', () => {
      it('Deve cadastrar conta bancária via API - Conta Corrente', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
      })

      it('Deve editar conta bancária - Conta Corrente', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaCorrente)
      })
    })

    context('Edição de Conta - Cartão de Crédito', () => {
      it('Deve cadastrar conta bancária via API - Cartão de Crédito', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
      })

      it('Deve editar conta bancária - Cartão de Crédito', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.cartaoCredito)
      })
    })

    context('Edição de Conta - Conta Tesouraria', () => {
      it('Deve cadastrar conta bancária via API - Conta Tesouraria', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })

      it('Deve editar conta bancária - Conta Tesouraria', function () {
        // cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaTesouraria)
      })
    })
  })
})
