/// <reference types="cypress" />

import seedTestLancamento from '../../../../fixtures/financeiro/livro-caixa/adicionar-lancamentos/adicionar-lancamento.json'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/adicionar-lancamento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Livro Caixa', { tags: '@livroCaixa' }, () => {
    context('Adição de Lançamento', () => {
      context('Do tipo Entrada', () => {
        it('Dedutível', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.entradaDedutivel)

          LivroCaixa.adicionarEditarLancamento(seedTestLancamento.entradaDedutivel)
        })

        it('Validar detalhes do Lançamento - Dedutível', function () {
          LivroCaixa.validarDetalhes(seedTestLancamento.entradaDedutivel)
        })
      })
      context('Do tipo Entrada', () => {
        it('Não dedutível', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.entradaNaoDedutivel)

          LivroCaixa.adicionarEditarLancamento(seedTestLancamento.entradaNaoDedutivel)
        })

        it('Validar detalhes do Lançamento - Não dedutível', function () {
          LivroCaixa.validarDetalhes(seedTestLancamento.entradaNaoDedutivel)
        })
      })

      context('Do tipo Saída', () => {
        it('Dedutível', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.saidaDedutivel)

          LivroCaixa.adicionarEditarLancamento(seedTestLancamento.saidaDedutivel)
        })

        it('Validar detalhes do Lançamento - Dedutível', function () {
          LivroCaixa.validarDetalhes(seedTestLancamento.saidaDedutivel)
        })
      })
      context('Do tipo Saída', () => {
        it('Não dedutível', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.saidaNaoDedutivel)

          LivroCaixa.adicionarEditarLancamento(seedTestLancamento.saidaNaoDedutivel)
        })

        it('Validar detalhes do Lançamento - Não dedutível', function () {
          LivroCaixa.validarDetalhes(seedTestLancamento.saidaNaoDedutivel)
        })
      })
    })
  })
})
