/// <reference types="cypress" />

import payLoadLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/lancamentos/realizar-lancamentos.json'
import seedTestLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/lancamentos/lancamentos.json'
import testDescription from './bdd-description/lancamentos.description.js'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Livro Caixa | Lançamentos', { tags: '@livroCaixa' }, () => {
    var lancamento = Utils.getPayloadPorAmbiente(payLoadLivroCaixa)

    var dataAtual = Utils.getDate()
    var bodyLancamentoEntradaDedutivel1 = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel)
    var bodyLancamentoEntradaDedutivel2 = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel2)
    var bodyLancamentoEntradaDedutivel3 = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel3)
    var bodyLancamentoSaidaDedutivel = Utils.replacer('dataSubstituicao', dataAtual, lancamento.saidaDedutivel)
    var bodylancamentoSaidaDedutivel2 = Utils.replacer('dataSubstituicao', dataAtual, lancamento.saidaDedutivel2)
    var bodyLancamentoSaidaNaoDedutivel = Utils.replacer('dataSubstituicao', dataAtual, lancamento.saidaNaoDedutivel)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Realizar lançamentos no Livro Caixa via API', () => {
      it('Lançamentos do tipo entrada', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel1, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel2, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel3, 'login_cenarios')
      })

      it('Lancamentos do tipo Saida', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaDedutivel, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodylancamentoSaidaDedutivel2, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaNaoDedutivel, 'login_cenarios')
      })
    })

    context('Validar os lançamento no Livro Caixa', () => {
      it('Ao selecionar produtor', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.lancamentoProdutor)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.produtor)
      })

      it('Ao filtrar pelo produtor', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroProdutor)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroProdutor)
      })

      it('Ao filtrar pela data', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroData)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroData)
      })

      it('Ao filtrar pela conta', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarConta)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroConta)
      })

      it('Ao filtrar pela fazenda', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarFazenda)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroFazenda)
      })

      it('Ao filtrar por pessoa', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
         .descriptionHtml(testDescription.filtroPessoa)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroPessoa)
      })

      it('Ao filtrar pelo tipo Saída', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroEntradaSaida)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivelSaida)
      })

      it('Ao filtrar pelo tipo Entrada', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroEntradaSaida)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivelEntrada)
      })

      it('Ao filtrar por Origem', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
         .descriptionHtml(testDescription.filtrarOrigem)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroOrigem)
      })

      it('Ao filtrar não dedutivel e tornar os lançamento em visíveis', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
         .descriptionHtml(testDescription.filtrarDedutiveisNaoDedutiveis)
        
        LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivel)
      })

      it('Exportar livro caixa do produtor selecionado', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
         .descriptionHtml(testDescription.exportarLivroCaixa)
        
        LivroCaixa.exportar(seedTestLivroCaixa.exportar)
      })
    })
  })
})
