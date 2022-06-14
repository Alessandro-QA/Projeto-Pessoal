/// <reference types="cypress" />

import seedTest from '../../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-duas-categorias-pago-por-agenda.json'
import LivroCaixa from '../../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import AgendaFinanceira from '../../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import Utils from '../../../../../support/utils/utils.js'

describe('CENÁRIO > Documentos | Cadastro de documento com 2 categorias pago pela Agenda Financeira - ', { tags: '@documentos' }, () => {
  var dataAtual = Utils.getDate()
  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, seedTest.documento)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  before(function () {
    Utils.setAccessTokenFromLocalStorage()
  })

  after(() => {
    cy.logout()
  })

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

    Movimentacao.validarDashboard(seedTest.movimentacaoBancaria)
  })

  it('Confirmar se gerou Livro Caixa', function () {
    cy.allure().severity('critical').startStep('test content')

    LivroCaixa.validarDashboard(seedTest.lancamentoLivroCaixa)
  })

  it('Exportar o CSV do Livro Caixa', function () {
    cy.allure().severity('normal').startStep('test content')

    LivroCaixa.exportar(seedTest.lancamentoLivroCaixa)
  })
})
