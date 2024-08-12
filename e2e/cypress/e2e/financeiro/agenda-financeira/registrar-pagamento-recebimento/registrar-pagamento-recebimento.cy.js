/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/registrar-pagamento-recebimento.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento.description.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Utils from '../../../../support/utils/utils.js'
import dayjs from 'dayjs'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = dayjs().add(1, 'day').format("YYYY-MM-DDTHH:mm:ssZ")
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumento)

  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)
  
  var bodyDocumento3000 = Utils.replacer('numero', Utils.getAlphaNumeric(10), bodyDocumento.documento3000)
  var bodyDocumento3001 = Utils.replacer('numero', Utils.getAlphaNumeric(10), bodyDocumento.documento3001)

  describe('Agenda Financeira', { tags: '@agendaFinanceira' }, () => {
    context('Pagamento via Listagem', () => {
      it('Deve cadastrar documentos via API - Pagamento', function () {

        cy.allureDescriptionHtml(testDescription.pagamento).allureSeverity('normal')
      
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento3000, 'login_cadastro')
        // Oculta o #api-view para continuar na página Atual
        cy.hideApiView();
      })

      it('Deve registrar Pagamento', function () {

        cy.allureDescriptionHtml(testDescription.pagamento).allureSeverity('normal')

        seedTestAgendaFinanceira.pagamento.numeroDocumento = bodyDocumento3000.numero
        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.pagamento)
      })
    })

    context('Recebimento via Listagem', () => {
      it('Deve cadastrar documentos via API- Recebimento', function () {

        cy.allureDescriptionHtml(testDescription.recebimento).allureSeverity('normal')

        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, bodyDocumento3001, 'login_cadastro')

        // Oculta o #api-view para continuar na página Atual
        cy.hideApiView();
      })

      it('Deve registrar Recebimento', function () {

        cy.allureDescriptionHtml(testDescription.recebimento).allureSeverity('normal')

        seedTestAgendaFinanceira.recebimento.numeroDocumento = bodyDocumento3001.numero
        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.recebimento)
      })
    })
  })
})
