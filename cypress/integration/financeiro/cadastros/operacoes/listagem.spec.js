/// <reference types="cypress" />

import seedTestOperacoes from '../../../../fixtures/funcionalidades/financeiro/cadastros/operacoes/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import Operacoes from '../../../../support/commands/funcionalidades/financeiro/cadastros/operacoes.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Operações', { tags: '@operacoes' }, () => {

    var seedOperacao = Utils.getPayloadPorAmbiente(seedTestOperacoes)

    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Listagem', () => {
      describe('Filtrar por Campo de Pesquisa', { tags: '@operacoes' }, () => {
        it('Palavra chave"', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.pesquisa)

          Operacoes.validarListagem(seedOperacao.campoPesquisar)
        })
      })

      describe('Filtrar por Tipo de Operação', { tags: '@operacoes' }, () => {
        it('Entrada', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.tipoOperacao)

          Operacoes.validarListagem(seedOperacao.tipoDaOperacao.entrada)
        })

        it('Saída', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.tipoOperacao)

          Operacoes.validarListagem(seedOperacao.tipoDaOperacao.saida)
        })
      })

      describe('Filtrar por Finalidade da Operação', { tags: '@operacoes' }, () => {
        it('Normal', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.finalidadeOperacao)

          Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.normal)
        })

        it('Complementar', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.finalidadeOperacao)

          Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.complementar)
        })

        it('Ajuste', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.finalidadeOperacao)

          Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.ajuste)
        })

        it('Devolução', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.finalidadeOperacao)

          Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.devolucao)
        })
      })
    })
  })
})
