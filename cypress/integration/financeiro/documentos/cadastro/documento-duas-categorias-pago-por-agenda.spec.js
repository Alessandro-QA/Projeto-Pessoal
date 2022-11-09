/// <reference types="cypress" />

import seedTest from '../../../../fixtures/financeiro/documentos/cadastro/documento-duas-categorias-pago-por-agenda.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import Utils from '../../../../support/utils/utils.js'
import testDescription from './bdd-description/documento-duas-categorias-pago-por-agenda.description'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'


describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(seedTest.documento)

  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })
  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {
      context('Com 2 categorias pago pela Agenda Financeira', () => {
        it('Cadastrar documento por API', function () {
          cy.allure().severity('normal').startStep('test content')

          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
        })

        it('Validar o documento na Agenda Financeira', function () {
          cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seedTest.agendaFinanceira)
        })

        it('Pagar o documento pela Agenda Financeira', function () {
          cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(seedTest.agendaFinanceira)
        })

        it('Confirmar se gerou Movimentação Bancária', function () {
          cy.allure().severity('critical').startStep('test content')

          Movimentacao.validarListagem(seedTest.movimentacaoBancaria)
        })

        it('Confirmar se gerou Livro Caixa', function () {
          cy.allure().severity('critical').startStep('test content')

          LivroCaixa.validarLancamentos(seedTest.lancamentoLivroCaixa)
        })

        it('Exportar o CSV do Livro Caixa', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.livroCaixa)

          LivroCaixa.exportar(seedTest.lancamentoLivroCaixa)
        })
      })
    })
  })
})
