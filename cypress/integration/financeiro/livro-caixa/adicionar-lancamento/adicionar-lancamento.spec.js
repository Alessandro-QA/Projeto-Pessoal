/// <reference types="cypress" />

import seedTestLancamento from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/adicionar-lancamentos/adicionar-lancamento.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/adicionar-lancamento.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Livro Caixa | Adicionar Lançamento', { tags: '@livroCaixa'}, () => {
    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
        Authenticate.logout()
    })

    context('Do tipo Entradas', () => {
      it('Dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.entradaDedutivel)

        LivroCaixa.adicionarLancamento(seedTestLancamento.entradaDedutivel)
      })

      it('Validar lançamento na tela de Lançamento', function () {
        LivroCaixa.validarLancamento(seedTestLancamento.entradaDedutivel)
      })

      it('Não dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.entradaNaoDedutivel)

        LivroCaixa.adicionarLancamento(seedTestLancamento.entradaNaoDedutivel)
      })

      it('Validar lançamento na tela de Lançamento', function () {
        LivroCaixa.validarLancamento(seedTestLancamento.entradaNaoDedutivel)
      })
    })

    context('Do tipo Saída', () => {
      it('Dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.saidaDedutivel)

        LivroCaixa.adicionarLancamento(seedTestLancamento.saidaDedutivel)
      })

      it('Validar lançamento na tela de Lançamento', function () {
        LivroCaixa.validarLancamento(seedTestLancamento.saidaDedutivel)
      })

      it('Não dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.saidaNaoDedutivel)

        LivroCaixa.adicionarLancamento(seedTestLancamento.saidaNaoDedutivel)
      })

      it('Validar lançamento na tela de Lançamento', function () {
        LivroCaixa.validarLancamento(seedTestLancamento.saidaNaoDedutivel)
      })
    })
  })
})
