/// <reference types="cypress" />

const seedTestEditarConta = require('../../../../fixtures/financeiro/contas-bancarias/editar/editar-conta.json')
const ContaBancaria = require('../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js')
const Utils = require('../../../../support/utils/utils.js')
const testDescription = require('./bdd-descprition/editar.description.js')
const dayjs = require('dayjs')

describe('Financeiro', { tags: '@financeiro' }, () => {
  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Edição de Conta - Conta Corrente', () => {

      const nomeEditado = Utils.getNumeric(5)
      const today = dayjs().format('DD/MM/YYYY')
      const agencia = Utils.getNumeric(4)
      const agenciaDigito = Utils.getNumeric(1)
      const conta = Utils.getNumeric(5)
      const contaDigito = Utils.getNumeric(1)

      it('CT1 - Deve editar conta bancária - Conta Corrente', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct1)

        seedTestEditarConta.contaCorrente.nomeContaEditado = seedTestEditarConta.contaCorrente.nomeContaEditado + nomeEditado
        seedTestEditarConta.contaCorrente.dataSaldoInicial = today
        seedTestEditarConta.contaCorrente.agencia = agencia
        seedTestEditarConta.contaCorrente.agenciaDigito = agenciaDigito
        seedTestEditarConta.contaCorrente.numeroConta = conta
        seedTestEditarConta.contaCorrente.contaDigito = contaDigito

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaCorrente)
      })

      it('CT2 - Deve validar na listagem a conta editada - Conta Corrente', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct2)

        ContaBancaria.validarCadastro(seedTestEditarConta.contaCorrente)
      })
    })

    context('Edição de Conta - Cartão de Crédito', () => {

      const nomeEditado = Utils.getNumeric(5)

      it('CT3 - Deve editar conta bancária - Cartão de Crédito', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct3)

        seedTestEditarConta.cartaoCredito.nomeContaEditado = seedTestEditarConta.cartaoCredito.nomeContaEditado + nomeEditado

        ContaBancaria.cadastroEditar(seedTestEditarConta.cartaoCredito)
      })

      it('CT4 - Deve validar na listagem a conta editada - Cartão de Crédito', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct4)

        ContaBancaria.validarCadastro(seedTestEditarConta.cartaoCredito)
      })
    })

    context('Edição de Conta - Conta Tesouraria', () => {

      const nomeEditado = Utils.getNumeric(5)
      const today = dayjs().format('DD/MM/YYYY')

      it('CT5 - Deve editar conta bancária - Conta Tesouraria', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct5)

        seedTestEditarConta.contaTesouraria.nomeContaEditado = seedTestEditarConta.contaTesouraria.nomeContaEditado + nomeEditado
        seedTestEditarConta.contaTesouraria.dataSaldoInicial = today

        ContaBancaria.cadastroEditar(seedTestEditarConta.contaTesouraria)
      })

      it('CT6 - Deve validar na listagem a conta editada - Conta Tesouraria', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct6)

        ContaBancaria.validarCadastro(seedTestEditarConta.contaTesouraria)
      })
    })
  })
})