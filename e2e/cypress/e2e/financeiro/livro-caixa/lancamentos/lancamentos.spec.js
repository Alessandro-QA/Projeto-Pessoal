/// <reference types="cypress" />

import payLoadLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/lancamentos/realizar-lancamentos.json'
import seedTestLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/lancamentos/lancamentos.json'
import testDescription from './bdd-description/lancamentos.description.js'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
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

  describe('Livro Caixa', { tags: '@livroCaixa' }, () => {
    context('Lançamentos', () => {
      context('Filtragem', () => {
        it('Deve realizar lançamentos no Livro Caixa via API - Entrada', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel1, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel2, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel3, 'login_cenarios')
        })

        it('Deve realizar lançamentos no Livro Caixa via API - Saida', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaDedutivel, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodylancamentoSaidaDedutivel2, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaNaoDedutivel, 'login_cenarios')
        })

        it('Deve trazer livro caixa ao selecionar Produtor', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.lancamentoProdutor)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.produtor)
        })

        it('Deve filtrar pelo Produtor', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroProdutor)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroProdutor)
        })

        it('Deve filtrar pela Data', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroData)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroData)
        })

        it('Deve filtrar pela Conta', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroConta)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroConta)
        })

        it('Deve filtrar pela Fazenda', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroFazenda)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroFazenda)
        })

        it('Deve filtrar por Pessoa', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroPessoa)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroPessoa)
        })

        it('Deve filtrar pelo tipo Saída', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroEntradaSaida)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivelSaida)
        })

        it('Deve filtrar pelo tipo Entrada', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroEntradaSaida)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivelEntrada)
        })

        it('Deve filtrar por Origem', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarOrigem)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroOrigem)
        })

        // Filtrar por não dedutível e clica no card lateral "Não Dedutivel", para tornar o lançamento visivel
        it('Deve filtrar por Não Dedutivel e tornar os lançamentos visíveis', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarDedutiveisNaoDedutiveis)

          LivroCaixa.validarLancamentos(seedTestLivroCaixa.filtroDedutivel)
        })
      })

      context('Exportação', () => {
        it('Deve exportar livro caixa do produtor selecionado', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.exportarLivroCaixa)

          LivroCaixa.exportar(seedTestLivroCaixa.exportar)
        })
      })
    })
  })
})
