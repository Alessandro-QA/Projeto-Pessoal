/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/registrar-pagamento-recebimento-lote.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento-lote.description.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumento)

  var bodyDocumento100 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento100)
  var bodyDocumento101 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento101)
  var bodyDocumento102 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento102)
  var bodyDocumento103 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento103)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })
  describe('Agenda Financeira', { tags: '@agendaFinanceira' }, () => {
    context('Pagamento em Lote', () => {
      it('Deve cadastrar documentos via API - Pagamento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento100, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento101, 'login_cenarios')
      })

      it('Deve realizar pagamento em lote', { retries: { runMode: 1, openMode: 1, }, }, function () {
        // cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.pagamentoLote)

        AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.pagamentoLote)
      })

      it('Deve validar títulos pagos', { retries: { runMode: 1, openMode: 1, }, }, function () {
        AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.pagamentoLote)
      })

    })

    context('Recebimento em Lote', () => {
      it('Deve cadastrar documentos via API - Recebimento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento102, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento103, 'login_cenarios')
      })

      it('Deve realizar recebimento em lote', { retries: { runMode: 1, openMode: 1, }, }, function () {
        // cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.recebimentoLote)

        AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.recebimentoLote)
      })

      it('Deve validar títulos recebidos', { retries: { runMode: 1, openMode: 1, }, }, function () {
        AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.recebimentoLote)
      })
    })
  })
})
