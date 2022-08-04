/// <reference types="cypress" />

import payLoadDocumento from '../../../../fixtures/funcionalidades/financeiro/agenda-financeira/registrar-pagamento-recebimento/pay-load-documento.json'
import seedTestAgendaFinanceira from '../../../../fixtures/funcionalidades/financeiro/agenda-financeira/registrar-pagamento-recebimento/registrar-pagamento-recebimento.json'
import testDescription from './bdd-description/registrar-pagamento-recebimento.description.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Agenda Financeira | Registrar Pagamento/Recebimento via Listagem', { tags: '@agendaFinanceira'}, () => {
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

    context('Realizar cadastro de documentos via API', () => {
      it('Do tipo Pagamento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento3000, 'login_cenarios')
      })

      it('Do tipo Recebimento', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento3001, 'login_cenarios')
      })
    })

    context('Pagamento e Recebimento', () => {
      it('Registrar Pagamento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.pagamento)
        
        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.pagamento)
      })

      it('Registrar Recebimento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.recebimento)

        AgendaFinanceira.pagarPelaAgenda(seedTestAgendaFinanceira.recebimento)
      })
    })
  })
})
