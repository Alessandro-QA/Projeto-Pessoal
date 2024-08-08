/// <reference types="cypress" />

import payLoad from '../../../../fixtures/financeiro/contas-bancarias/excluir/payLoad.json'
import seedTestExcluirConta from '../../../../fixtures/financeiro/contas-bancarias/excluir/excluir-conta.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/excluir-conta-bancaria.description.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var contaBancaria = Utils.getPayloadPorAmbiente(payLoad)

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Exclusão de Conta - Conta Corrente', () => {
      it('Deve cadastrar conta bancária via API - Conta Corrente', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct1)

        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Conta Corrente', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct2)

        ContaBancaria.excluir(seedTestExcluirConta.contaCorrente)
      })

      it.skip('Deve validar exclusão na listagem - Conta Corrente', function () {
        //cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct3)

        ContaBancaria.validarListagem(seedTestExcluirConta.contaCorrente)
      })
    })

    context('Exclusão de Conta - Cartão de Crédito', () => {
      it('Deve cadastrar conta bancária via API - Cartão de Crédito', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct4)

        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Cartão de Crédito', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct5)

        ContaBancaria.excluir(seedTestExcluirConta.cartaoCredito)
      })

      it.skip('Deve validar exclusão na listagem - Cartão de Crédito', function () {
        //cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct6)

        ContaBancaria.validarListagem(seedTestExcluirConta.cartaoCredito)
      })
    })
    context('Exclusão de Conta - Conta Tesouraria', () => {
      it('Deve cadastrar conta bancária via API - Conta Tesouraria', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct7)

        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })

      it('Deve excluir conta bancária - Conta Tesouraria', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct8)

        ContaBancaria.excluir(seedTestExcluirConta.contaTesouraria)
      })

      it.skip('Deve validar exclusão na listagem - Conta Tesouraria', function () {
        //cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct9)

        ContaBancaria.validarListagem(seedTestExcluirConta.contaTesouraria)
      })
    })
  })
})
