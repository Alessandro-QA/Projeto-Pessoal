/// <reference types="cypress" />

import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import pagamentoGuarani from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-moeda-estrangeira/pagamento-guarani.json'
import pagamentoDolar from '../../../../fixtures/financeiro/agenda-financeira/registrar-pagamento-moeda-estrangeira/pagamento-dolar.json'
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

          Documentos.cadastrar(pagamentoGuarani.ct1)
        })

        it('CT2 - Não deve registrar pagamento rápido', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(pagamentoGuarani.ct2)
        })

        it('CT3 - Não deve registrar pagamento em lote', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberLote(pagamentoGuarani.ct3)
        })

        it('CT4 - Deve registrar pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberTitulo(pagamentoGuarani.ct4)
        })

        it('CT5 - Deve validar pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.validarPagosRecebidos(pagamentoGuarani.ct5)
        })
      })

      context('Dólar', () => {
        it('CT1 - Deve cadastrar documento para pagamento', function () {
          cy.allure().severity('normal').startStep('test content')

          Documentos.cadastrar(pagamentoDolar.ct1)
        })

        it('CT2 - Não deve registrar pagamento rápido', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(pagamentoDolar.ct2)
        })

        it('CT3 - Não deve registrar pagamento em lote', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberLote(pagamentoDolar.ct3)
        })

        it('CT4 - Deve registrar pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarReceberTitulo(pagamentoDolar.ct4)
        })

        it('CT5 - Deve validar pagamento', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.validarPagosRecebidos(pagamentoDolar.ct5)
        })
      })
    })
  })
})
