/// <reference types="cypress" />

import payLoadLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/editar-lancamento/payload-lancamento.json'
import seedTestLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/editar-lancamento/editar-lancamento.json'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/editar-lancamento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
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

  describe('Livro Caixa', { tags: '@livroCaixa' }, () => {
    context('Edição de Lançamento', () => {
      context('Do tipo Entrada', () => {
        it('Deve realizar lançamento no Livro Caixa via API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodyEntrada, 'login_cenarios')
        })

        it('Deve editar o lançamento', function () {
          // cy.allure().severity('critical').startStep('test content')
            //.descriptionHtml(testDescription.editar)

          LivroCaixa.adicionarEditarLancamento(seedTestLivroCaixa.entrada)
        })
      })
      context('Do tipo Saida', () => {
        it('Deve realizar lançamento no Livro Caixa via API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', bodySaida, 'login_cenarios')
        })

        it('Deve editar o lançamento', function () {
          // cy.allure().severity('critical').startStep('test content')
            //.descriptionHtml(testDescription.editar)

          LivroCaixa.adicionarEditarLancamento(seedTestLivroCaixa.saida)
        })
      })
    })
  })
})
