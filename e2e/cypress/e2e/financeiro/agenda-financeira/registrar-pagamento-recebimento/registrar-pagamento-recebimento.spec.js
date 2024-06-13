/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento/registrar-pagamento-recebimento.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento.description.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumento)

  var bodyDocumento3000 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento3000)
  var bodyDocumento3001 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento3001)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })


  describe('Agenda Financeira', { tags: '@agendaFinanceira' }, () => {
    context('Pagamento via Listagem', () => {
      it('Deve cadastrar documentos via API - Pagamento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento3000, 'login_cenarios')
      })

      it('Deve registrar Pagamento', function () {
        // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.pagamento)

        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.pagamento)
      })
    })
    context('Recebimento via Listagem', () => {
      it('Deve cadastrar documentos via API- Recebimento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento3001, 'login_cenarios')
      })

      it('Deve registrar Recebimento', function () {
        // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.recebimento)

        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.recebimento)
      })
    })
  })
})
