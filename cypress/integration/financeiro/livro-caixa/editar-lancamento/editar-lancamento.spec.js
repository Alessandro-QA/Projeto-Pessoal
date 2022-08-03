/// <reference types="cypress" />

import payLoadLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/editar-lancamento/payload-lancamento.json'
import seedTestLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/editar-lancamento/editar-lancamento.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/editar-lancamento.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Livro Caixa | Editar Lançamento', { tags: '@livroCaixa'}, () => {
    var lancamento = Utils.getPayloadPorAmbiente(payLoadLivroCaixa)

    var dataAtual = Utils.getDate()
    var bodyEntrada = Utils.replacer('dataSubstituicao', dataAtual, lancamento.entradaDedutivel)
    var bodySaida = Utils.replacer('dataSubstituicao', dataAtual, lancamento.saidaDedutivel)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
        Authenticate.logout()
    })

    context('Realizar lançamento no Livro Caixa via API', () => {
      it('Lançamentos do tipo entrada', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyEntrada, 'login_cenarios')
      })

      it('Lancamentos do tipo saída', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodySaida, 'login_cenarios')
      })
    })

    context('Editar lançamentos', () => {
      it('Do tipo entrada', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.editar)

        LivroCaixa.adicionarEditarLancamento(seedTestLivroCaixa.entrada)
      })

      it('Do tipo Saída', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.editar)

        LivroCaixa.adicionarEditarLancamento(seedTestLivroCaixa.saida)
      })
    })
  })
})
