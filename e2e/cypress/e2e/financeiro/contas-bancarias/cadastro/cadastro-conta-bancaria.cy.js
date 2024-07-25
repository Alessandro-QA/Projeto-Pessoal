/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/cadastro/contas-bancarias.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'

describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
  context('Cadastro de Conta - Corrente', () => {
    it('Deve validar a obrigatoriedade dos campos ao cadastrar conta bancária - Conta Corrente', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct1)

      ContaBancaria.obrigatoriedadeContaCorrente(seedTestContaBancaria.contaCorrente)
    })

    it('Deve cadastrar conta bancária - Conta Corrente', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct2)

      ContaBancaria.cadastroEditar(seedTestContaBancaria.contaCorrente)
    })

    it('Deve validar na listagem o cadastro - Conta Corrente', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct3)

      ContaBancaria.validarCadastro(seedTestContaBancaria.contaCorrente)
    })
  })

  context('Cadastro de Conta - Cartão de Crédito', () => {
    it('Deve validar a obrigatoriedade dos campos ao cadastrar conta bancária - Cartão de Crédito', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct4)

      ContaBancaria.obrigatoriedadeContaCartaoCredito(seedTestContaBancaria.cartaoCredito)
    })

    it('Deve cadastrar conta bancária - Cartão de Crédito', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct5)

      ContaBancaria.cadastroEditar(seedTestContaBancaria.cartaoCredito)
    })

    it('Deve validar na listagem o cadastro - Cartão de Crédito', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct6)

      ContaBancaria.validarCadastro(seedTestContaBancaria.cartaoCredito)
    })
  })

  context('Cadastro de Conta - Tesouraria', () => {
    it('Deve validar a obrigatoriedade dos campos ao cadastrar conta bancária - Tesouraria', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct7)

      ContaBancaria.obrigatoriedadeContaTesouraria(seedTestContaBancaria.contaCorrente)
    })

    it('Deve cadastrar conta bancária - Conta Tesouraria', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct8)

      ContaBancaria.cadastroEditar(seedTestContaBancaria.contaTesouraria)
    })

    it('Deve validar na listagem o cadastro - Conta Tesouraria', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct9)

      ContaBancaria.validarCadastro(seedTestContaBancaria.contaTesouraria)
    })
  })
})
