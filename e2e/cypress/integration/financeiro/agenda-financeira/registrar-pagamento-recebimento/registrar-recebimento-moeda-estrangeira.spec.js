/// <reference types="cypress" />

import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import recebimentoGuarani from '../../../../fixtures/financeiro/agenda-financeira/registrar-recebimento-moeda-estrangeira/recebimento-guarani.json'
import recebimentoDolar from '../../../../fixtures/financeiro/agenda-financeira/registrar-recebimento-moeda-estrangeira/recebimento-dolar.json'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Agenda Financeira', { tags: '@agendaFinanceira' }, () => {
    describe('Pagamento em moeda estrangeira', () => {
      context('Guarani', () => {
        it('CT1 - Deve cadastrar documento para pagamento', function () {
          cy.allure().severity('normal').startStep('test content')

          Documentos.cadastrar(recebimentoGuarani.ct1)
        })

        it('CT2 - Não deve registrar Pagamento rápido', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(recebimentoGuarani.ct2)
        })

        it('CT3 - Não deve registrar Pagamento em lote', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberLote(recebimentoGuarani.ct3)
        })

        it('CT4 - Deve registrar Pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberTitulo(recebimentoGuarani.ct4)
        })

        it('CT5 - Deve validar Pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.validarPagosRecebidos(recebimentoGuarani.ct5)
        })
      })

      context('Dólar', () => {
        it('CT1 - Deve cadastrar documento para pagamento', function () {
          cy.allure().severity('normal').startStep('test content')

          Documentos.cadastrar(recebimentoDolar.ct1)
        })

        it('CT2 - Não deve registrar Pagamento rápido', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(recebimentoDolar.ct2)
        })

        it('CT3 - Não deve registrar Pagamento em lote', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberLote(recebimentoDolar.ct3)
        })

        it('CT4 - Deve registrar Pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberTitulo(recebimentoDolar.ct4)
        })

        it('CT5 - Deve validar Pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.validarPagosRecebidos(recebimentoDolar.ct5)
        })
      })
    })
  })
})
