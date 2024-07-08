/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/registrar-pagamento-recebimento.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento.description.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumento)

  var bodyDocumento3000 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento3000)
  var bodyDocumento3001 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento3001)

  // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
  const randomNumber = Math.floor(Math.random() * 1000000000); // Gera um número aleatório entre 0 e 999999999
  const numeroPagamento = randomNumber.toString(); // Transforma em string

  var bodyDocumento3000 = Utils.replacer('numero', numeroPagamento, documento.documento3000)

  // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
  const randomNumber2 = Math.floor(Math.random() * 1000000000); // Gera um número aleatório entre 0 e 999999999
  const numeroRecebimento = randomNumber2.toString(); // Transforma em string

  var bodyDocumento3001 = Utils.replacer('numero', numeroRecebimento, documento.documento3001)

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

        seedTestAgendaFinanceira.pagamento.numeroDocumento = numeroPagamento
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

        seedTestAgendaFinanceira.recebimento.numeroDocumento = numeroRecebimento
        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.recebimento)
      })
    })
  })
})
