/// <reference types="cypress" />

import payLoad from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/excluir/payLoad.json'
import seedTestExcluirConta from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/excluir/excluir-conta.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/excluir-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Excluir Conta Bancária', { tags: '@contasBancarias' }, () => {
    var contaBancaria = Utils.getPayloadPorAmbiente(payLoad)

    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Realiza cadastro de contas bancárias via api', () => {
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

    context('Excluir Conta Corrente', () => {
      it('Realizar exclusão', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.contaCorrente)
      })

      it('Validar exclusão na listagem', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestExcluirConta.contaCorrente)
      })
    })

    context('Excluir cartão de crédito', () => {
      it('Do tipo Cartão de crédito', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.cartaoCredito)
      })

      it('Validar exclusão na listagem', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestExcluirConta.cartaoCredito)
      })
    })

    context('Excluir conta Tesouraria', () => {
      it('Do tipo Conta Tesouraria', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.contaTesouraria)
      })

      it('Validar exclusão na listagem de contas bancárias', function () {
        cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarDashboard(seedTestExcluirConta.contaTesouraria)
      })
    })
  })
})
