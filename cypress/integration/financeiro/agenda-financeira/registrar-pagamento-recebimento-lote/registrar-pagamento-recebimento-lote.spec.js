/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/funcionalidades/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/funcionalidades/financeiro/agenda-financeira/registrar-pagamento-recebimento-lote/registrar-pagamento-recebimento-lote.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento-lote.description.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

// TODO: Aguardando data-cy entrarem no ambiente de QA
if ((Cypress.env('ambiente') === 'dev')) {
  context('Funcionalidade', () => {
    describe('Agenda Financeira | Registrar Pagamento/Recebimento em Lote', { tags: '@agendaFinanceira' }, () => {
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

      context('Realizar cadastro de documentos via API', () => {
        it('Do tipo Pagamento', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento100, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento101, 'login_cenarios')
        })

        it('Do tipo Recebimento', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento102, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento103, 'login_cenarios')
        })
      })

      context('Realizar Pagamento', () => {
        it('Em lote', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.pagamentoLote)

          AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.pagamentoLote)
        })

        it('Validar títulos pagos', { retries: { runMode: 1, openMode: 1, }, }, function () {
          AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.pagamentoLote)
        })
      })

      context('Realizar Recebimento', () => {
        it('Em lote', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.recebimentoLote)

          AgendaFinanceira.pagarReceberLote(seedTestAgendaFinanceira.recebimentoLote)
        })

        it('Validar títulos recebidos', { retries: { runMode: 1, openMode: 1, }, }, function () {
          AgendaFinanceira.validarPagosRecebidos(seedTestAgendaFinanceira.recebimentoLote)
        })
      })
    })
  })
}
