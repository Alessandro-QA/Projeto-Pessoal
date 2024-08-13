/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/registrar-pagamento-recebimento-lote.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento-lote.description.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Utils from '../../../../support/utils/utils.js'
import dayjs from 'dayjs'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumento)

  const dataAtual = dayjs().add(1, 'day').format("YYYY-MM-DDTHH:mm:ssZ")

  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)
  
  var numDoc1 = Utils.getAlphaNumeric(10)
  var numDoc2 = Utils.getAlphaNumeric(10)
  var numDoc3 = Utils.getAlphaNumeric(10)
  var numDoc4 = Utils.getAlphaNumeric(10)

  var bodyDocumento100 = Utils.replacer('numero', numDoc1, bodyDocumento.documento100)
  var bodyDocumento101 = Utils.replacer('numero', numDoc2, bodyDocumento.documento101)
  var bodyDocumento102 = Utils.replacer('numero', numDoc3, bodyDocumento.documento102)
  var bodyDocumento103 = Utils.replacer('numero', numDoc4, bodyDocumento.documento103)

  seedTestAgendaFinanceira.pagamentoLote.cardsAgenda[0].cardNumeroDocumento = numDoc1
  seedTestAgendaFinanceira.pagamentoLote.cardsAgenda[1].cardNumeroDocumento = numDoc2

  seedTestAgendaFinanceira.recebimentoLote.cardsAgenda[0].cardNumeroDocumento = numDoc3
  seedTestAgendaFinanceira.recebimentoLote.cardsAgenda[1].cardNumeroDocumento = numDoc4

  describe('Agenda Financeira', { tags: '@agendaFinanceira' }, () => {
    context('Pagamento em Lote', () => {
      it('Deve cadastrar documentos via API - Pagamento', function () {

        cy.allureDescriptionHtml(testDescription.pagamentoLote).allureSeverity('normal')
       
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento100, 'login_cadastro')
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento101, 'login_cadastro')
      })

      it('Deve realizar pagamento em lote', { retries: { runMode: 1, openMode: 1, }, }, function () {

        cy.allureDescriptionHtml(testDescription.pagamentoLote).allureSeverity('normal')

        AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.pagamentoLote)
      })

      it('Deve validar títulos pagos', { retries: { runMode: 1, openMode: 1, }, }, function () {

        cy.allureDescriptionHtml(testDescription.pagamentoLote).allureSeverity('normal')

        AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.pagamentoLote)
      })

    })

    context('Recebimento em Lote', () => {
      it('Deve cadastrar documentos via API - Recebimento', function () {

        cy.allureDescriptionHtml(testDescription.recebimentoLote).allureSeverity('normal')

        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento102, 'login_cadastro')
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento103, 'login_cadastro')
      })

      it('Deve realizar recebimento em lote', { retries: { runMode: 1, openMode: 1, }, }, function () {

        cy.allureDescriptionHtml(testDescription.recebimentoLote).allureSeverity('normal')

        AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.recebimentoLote)
      })

      it('Deve validar títulos recebidos', { retries: { runMode: 1, openMode: 1, }, }, function () {

        cy.allureDescriptionHtml(testDescription.recebimentoLote).allureSeverity('normal')

        AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.recebimentoLote)
      })
    })
  })
})
