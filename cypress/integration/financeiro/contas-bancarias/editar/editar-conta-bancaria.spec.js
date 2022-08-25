/// <reference types="cypress" />

import payLoadContaBancaria from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/editar/pay-load.json'
import seedTestEditarConta from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/editar/editar-conta.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-descprition/editar.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Editar', { tags: '@contasBancarias' }, () => {
    var contaBancaria = Utils.getPayloadPorAmbiente(payLoadContaBancaria)

    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro de contas bancárias via API', () => {
      it('Do tipo Conta Corrente', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
      })

      it('Do tipo Cartão de Crédito', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
      })

      it('Do tipo Conta Tesouraria', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })
    })

    context('Editar conta', () => {
      it('Do tipo conta Corrente', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaCorrente)
      })

      it('Do tipo Cartão de Crédito', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.cartaoCredito)
      })

      it('Do tipo Conta Tesouraria', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.conta)

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaTesouraria)
      })
    })
  })
})
