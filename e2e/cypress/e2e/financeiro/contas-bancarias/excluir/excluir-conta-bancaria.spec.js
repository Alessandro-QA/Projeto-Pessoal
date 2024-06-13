/// <reference types="cypress" />

import payLoad from '../../../../fixtures/financeiro/contas-bancarias/excluir/payLoad.json'
import seedTestExcluirConta from '../../../../fixtures/financeiro/contas-bancarias/excluir/excluir-conta.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/excluir-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var contaBancaria = Utils.getPayloadPorAmbiente(payLoad)

  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })
  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Exclusão de Conta - Conta Corrente', () => {
      it('Deve cadastrar conta bancária via API - Conta Corrente', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Conta Corrente', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.contaCorrente)
      })

      it('Deve validar exclusão na listagem - Conta Corrente', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestExcluirConta.contaCorrente)
      })
    })

    context('Exclusão de Conta - Cartão de Crédito', () => {
      it('Deve cadastrar conta bancária via API - Cartão de Crédito', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Cartão de Crédito', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.cartaoCredito)
      })

      it('Deve validar exclusão na listagem - Cartão de Crédito', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestExcluirConta.cartaoCredito)
      })
    })
    context('Exclusão de Conta - Conta Tesouraria', () => {
      it('Deve cadastrar conta bancária via API - Conta Tesouraria', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Conta Tesouraria', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.excluir)

        ContaBancaria.excluir(seedTestExcluirConta.contaTesouraria)
      })

      it('Deve validar exclusão na listagem - Conta Tesouraria', function () {
        // // cy.allure().severity('minor').startStep('test content')

        ContaBancaria.validarListagem(seedTestExcluirConta.contaTesouraria)
      })
    })
  })
})
