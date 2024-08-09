/// <reference types="cypress" />

import payLoad from '../../../../fixtures/financeiro/contas-bancarias/excluir/payLoad.json'
import seedTestExcluirConta from '../../../../fixtures/financeiro/contas-bancarias/excluir/excluir-conta.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/excluir-conta-bancaria.description.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {

  var contaBancaria = Utils.getPayloadPorAmbiente(payLoad)

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    contaBancaria.contaCorrente.nome = Utils.getAlphaNumeric(10)
    contaBancaria.cartaoCredito.nome = Utils.getAlphaNumeric(10)
    contaBancaria.contaTesouraria.nome = Utils.getAlphaNumeric(10)

    context('Criar as contas via API para fazer a exclusão', () => {
      seedTestExcluirConta.contaCorrente.nomeConta = contaBancaria.contaCorrente.nome

      it('Deve cadastrar conta bancária via API - Todos os Tipos', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct1)

        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })
    })

    context('Exclusão de Conta - Conta Corrente', () => {
      seedTestExcluirConta.contaCorrente.nomeConta = contaBancaria.contaCorrente.nome

      it('Deve excluir conta bancária - Conta Corrente', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct2)

        ContaBancaria.excluir(seedTestExcluirConta.contaCorrente)
      })

      it('Deve validar exclusão na listagem - Conta Corrente', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct3)

        ContaBancaria.validarExclusao(seedTestExcluirConta.contaCorrente)
      })
    })

    context('Exclusão de Conta - Cartão de Crédito', () => {
      seedTestExcluirConta.cartaoCredito.nomeConta = contaBancaria.cartaoCredito.nome

      it('Deve excluir conta bancária - Cartão de Crédito', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct4)

        ContaBancaria.excluir(seedTestExcluirConta.cartaoCredito)
      })

      it('Deve validar exclusão na listagem - Cartão de Crédito', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct5)

        ContaBancaria.validarExclusao(seedTestExcluirConta.cartaoCredito)
      })
    })

    context('Exclusão de Conta - Conta Tesouraria', () => {
      seedTestExcluirConta.contaTesouraria.nomeConta = contaBancaria.contaTesouraria.nome

      it('Deve excluir conta bancária - Conta Tesouraria', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct6)

        ContaBancaria.excluir(seedTestExcluirConta.contaTesouraria)
      })

      it('Deve validar exclusão na listagem - Conta Tesouraria', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct7)

        ContaBancaria.validarExclusao(seedTestExcluirConta.contaTesouraria)
      })
    })
  })
})
