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

        LivroCaixa.adicionarEditarLancamento(seedTestLancamento.entradaDedutivel)
      })

      it('Validar detalhes do Lançamento', function () {
        LivroCaixa.validarDetalhes(seedTestLancamento.entradaDedutivel)
      })

      it('Não dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.entradaNaoDedutivel)

        LivroCaixa.adicionarEditarLancamento(seedTestLancamento.entradaNaoDedutivel)
      })

      it('Validar detalhes do Lançamento', function () {
        LivroCaixa.validarDetalhes(seedTestLancamento.entradaNaoDedutivel)
      })
    })

    context('Do tipo Saída', () => {
      it('Dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.saidaDedutivel)

        LivroCaixa.adicionarEditarLancamento(seedTestLancamento.saidaDedutivel)
      })

      it('Validar detalhes do Lançamento', function () {
        LivroCaixa.validarDetalhes(seedTestLancamento.saidaDedutivel)
      })

      it('Não dedutível', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.saidaNaoDedutivel)

        LivroCaixa.adicionarEditarLancamento(seedTestLancamento.saidaNaoDedutivel)
      })

      it('Validar detalhes do Lançamento', function () {
        LivroCaixa.validarDetalhes(seedTestLancamento.saidaNaoDedutivel)
      })
    })
  })
})
