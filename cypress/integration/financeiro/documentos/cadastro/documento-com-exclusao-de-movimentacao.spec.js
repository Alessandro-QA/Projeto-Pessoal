/// <reference types="cypress" />

import seedTestAgenda from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/agendas-financeiras.json'
import seedTestLivroCaixa from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/lancamentos-livro-caixa.json'
import seedTestMovimentacao from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/movimentacoes-bancarias.json'
import seedTestResultadoSafra from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/resultado-da-safra.json'
import { excluir } from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import ResultadoSafra from '../../../../support/commands/funcionalidades/resultados-safra/resultado-safra.js'
import payloadDocumentos from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/documentos.json'
import seedExcluirDocumento from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-com-exclusao-de-movimentacao/excluirDocumentos.json'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Cenário de Teste', () => {
  describe('Documentos | Cadastro de documento com exclusão de movimentação', { tags: '@documentos' }, () => {

    var dataAtual = Utils.getDate()
    var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

    var bodyDocumento2000 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento2000)
    var bodyDocumento2001 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento2001)
    var bodyDocumento2002 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento2002)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar documentos por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento2000, 'login_cenarios')
      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento2001, 'login_cenarios')
      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento2002, 'login_cenarios')
    })

    it('Validar titulos na Agenda Financeira (A Pagar)', function () {
      cy.allure().severity('normal').startStep('test content')

      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2000)
      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2001)
      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2002)
    })

    it('Pagar título na Agenda Financeira', function () {
      cy.allure().severity('critical').startStep('test content')

      AgendaFinanceira.pagarPelaAgenda(seedTestAgenda.aPagar.agendaFinanceira2000)
      AgendaFinanceira.pagarPelaAgenda(seedTestAgenda.aPagar.agendaFinanceira2001)
      AgendaFinanceira.pagarPelaAgenda(seedTestAgenda.aPagar.agendaFinanceira2002)
    })

    it('Validar títulos pagos', function () {
      cy.allure().severity('normal').startStep('test content')

      AgendaFinanceira.validarDashboard(seedTestAgenda.pago.agendaFinanceira2000)
      AgendaFinanceira.validarDashboard(seedTestAgenda.pago.agendaFinanceira2001)
      AgendaFinanceira.validarDashboard(seedTestAgenda.pago.agendaFinanceira2002)
    })

    it('Validar movimentação bancária', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.validarListagem(seedTestMovimentacao.movimentacaoBancaria2000)
      Movimentacao.validarListagem(seedTestMovimentacao.movimentacaoBancaria2001)
      Movimentacao.validarListagem(seedTestMovimentacao.movimentacaoBancaria2002)
    })

    it('Validar lançamentos no Livro Caixa', function () {
      cy.allure().severity('critical').startStep('test content')

      LivroCaixa.validarDashboard(seedTestLivroCaixa.lancamentoLivroCaixa)
    })

    it('Validar resultado da safra - Dashboard', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedTestResultadoSafra.resultadoDaSafraDashboard)
    })

    it('Validar resultado da safra - Analítica', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedTestResultadoSafra.resultadoDaSafraAnalitica)
    })

    it('Excluir movimentação bancária - 2000', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.excluir(seedTestMovimentacao.movimentacaoBancaria2000)
    })
    it('Excluir movimentação bancária - 2001', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.excluir(seedTestMovimentacao.movimentacaoBancaria2001)
    })

    it('Excluir movimentação bancária - 2002', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.excluir(seedTestMovimentacao.movimentacaoBancaria2002)
    })

    it('Validar exclusão da movimentação bancária', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.validarExclusao(seedTestMovimentacao.movimentacaoBancaria2000)
    })

    it('Validar exclusão no livro caixa', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarExclusao(seedTestLivroCaixa.exclusaoLivroCaixa)
    })

    it('Validar status dos títulos na Agenda Financeira (A Pagar)', function () {
      cy.allure().severity('normal').startStep('test content')

      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2000)
      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2001)
      AgendaFinanceira.validarDashboard(seedTestAgenda.aPagar.agendaFinanceira2002)
    })

    it('Validar se exclusão refletiu no resultado da safra - Dashboard', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedTestResultadoSafra.resultadoDaSafraDashboard)
    })

    it('Validar se exclusão refletiu no resultado da safra - Analítica', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedTestResultadoSafra.resultadoDaSafraAnalitica)
    })

    it('Excluir documento 2000', function () {
      cy.allure().severity('critical').startStep('test content')

      excluir(seedExcluirDocumento.documento2000)
    })
    it('Excluir documento 2001', function () {
      cy.allure().severity('critical').startStep('test content')

      excluir(seedExcluirDocumento.documento2001)
    })
    it('Excluir documento 2002', function () {
      cy.allure().severity('critical').startStep('test content')

      excluir(seedExcluirDocumento.documento2002)
    })

    it('Validar se exclusão refletiu no resultado da safra - Dashboard', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedTestResultadoSafra.exclusaoResultadoDaSafraDashboard)
    })

    it('Validar se exclusão refletiu no resultado da safra - Analítica', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedTestResultadoSafra.exclusaoResultadoDaSafraAnalitica)
    })
  })
})
