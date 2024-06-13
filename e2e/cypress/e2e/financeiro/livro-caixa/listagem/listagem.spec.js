/// <reference types="cypress"/>

import payLoadLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/listagem/lancamentos.json'
import seedTestLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/listagem/listagem-livro-caixa.json'
import testDescription from './bdd-description/listagem.description.js'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var lancamento = Utils.getPayloadPorAmbiente(payLoadLivroCaixa)

  var dataAtual = Utils.getDate()
  var bodyLancamentoEntradaDedutivel = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel)
  var bodyLancamentoSaidaNaoDedutivel = Utils.replacer('dataSubstituicao', dataAtual, lancamento.saidaNaoDedutivel)
  var bodyLancamentoEntradaDedutivel2 = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel2)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })
  describe('Livro Caixa', { tags: '@livroCaixa' }, () => {
    context('Listagem', () => {
      context('Validação da tela de listagem do Livro Caixa', () => {
        it('Deve cadastrar lançamentos de Livro Caixa Via API', function () {
          cy.log('Lançamento - Entrada e dedutível')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel2, 'login_cenarios')

          cy.log('Lançamento - Entrada e não dedutível para o ano 2021')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaNaoDedutivel, 'login_cenarios')

          cy.log('Lançamento - Saida e dedutível para o ano 2021')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.saidaDedutivel, 'login_cenarios')

          cy.log('Lançamento - Saida e não dedutível')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaNaoDedutivel, 'login_cenarios')
        })

        it('Deve validar listagem sem aplicar filtros', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.semFiltro)

          LivroCaixa.validarListagem(seedTestLivroCaixa.semFiltro)
        })

        it('Deve validar listagem após selecionar um produtor', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtroProdutor)

          LivroCaixa.validarListagem(seedTestLivroCaixa.filtrarProdutor)
        })

        it('Deve validar listagem apos selecionar um período', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.fitlroPeriodo)

          LivroCaixa.validarListagem(seedTestLivroCaixa.filtrarAno)
        })
      })
    })
  })
})
