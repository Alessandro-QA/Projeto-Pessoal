/// <reference types="cypress" />

import seedTest from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-pago-por-agenda-financeira.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Cenário de Teste', () => {
  describe('Documentos | Documento pago pela Agenda Financeira', { tags: '@documentos' }, () => {
    var dataAtual = Utils.getDate()
    var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, seedTest.documento)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar documento por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
    })

    it('Validar documento na Agenda Financeira', function () {
      cy.allure().severity('normal').startStep('test content')

      AgendaFinanceira.validarDashboard(seedTest.agendaFinanceira)
    })

    it('Pagar documento pela Agenda Financeira', function () {
      cy.allure().severity('critical').startStep('test content')

      AgendaFinanceira.pagarPelaAgenda(seedTest.agendaFinanceira)
    })

    it('Confirmar se gerou Movimentação Bancária', function () {
      cy.allure().severity('critical').startStep('test content')

      Movimentacao.validarDashboard(seedTest.movimentacaoBancaria)
    })

    it('Confirmar se gerou Livro Caixa', function () {
      cy.allure().severity('critical').startStep('test content')

      LivroCaixa.validarDashboard(seedTest.lancamentoLivroCaixa)
    })
  })
})
