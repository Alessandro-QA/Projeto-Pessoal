/// <reference types="cypress"/>

import payLoadLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/listagem/lancamentos.json'
import seedTestLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/listagem/listagem-livro-caixa.json'
import testDescription from './bdd-description/listagem.description.js'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Livro Caixa | Listagem do Livro Caixa', { tags: '@livroCaixa'}, () => {
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

    context('Realizar as movimentações de livro Caixa Via Api', () => {
      it('Movimentações via Api', function () {
        // Movimentação do tipo Entrada e dedutível
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoEntradaDedutivel2, 'login_cenarios')

        // Movimentação do tipo Entrada e não dedutível para o ano 2021
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaNaoDedutivel, 'login_cenarios')

        // Movimentação do tipo Saida e dedutível para o ano 2021
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.saidaDedutivel, 'login_cenarios')

        // Movimentação do tipo Saida e não dedutível
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyLancamentoSaidaNaoDedutivel, 'login_cenarios')
      })
    })

    context('Validar todas as movimentações na tela de listagem de movimentações no Livro Caixa', () => {
      it('Validar listagem sem aplicar filtros', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.semFiltro)

        LivroCaixa.validarListagem(seedTestLivroCaixa.semFiltro)
      })

      it('Validar listagem apos selecionar um produtor', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroProdutor)

        LivroCaixa.validarListagem(seedTestLivroCaixa.filtrarProdutor)
      })

      it('Validar listagem apos selecionar um período', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.fitlroPeriodo)

        LivroCaixa.validarListagem(seedTestLivroCaixa.filtrarAno)
      })
    })
  })
})
