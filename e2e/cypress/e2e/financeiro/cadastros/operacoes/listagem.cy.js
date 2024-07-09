/// <reference types="cypress" />

import seedTestOperacoes from '../../../../fixtures/financeiro/cadastros/operacoes/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import Operacoes from '../../../../support/commands/financeiro/cadastros/operacoes.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var seedOperacao = Utils.getPayloadPorAmbiente(seedTestOperacoes)

  describe('Cadastros', () => {
    context('Operações', { tags: '@operacoes' }, () => {
      it('Deve filtrar por caixa de Pesquisa - Palavra chave"', { retries: { runMode: 1, openMode: 1, }, }, function () {

        cy.allureDescriptionHtml(testDescription.pesquisa).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.campoPesquisar)
      })

      it('Deve filtrar por Tipo de Operação - Entrada', function () {
        
        cy.allureDescriptionHtml(testDescription.tipoOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.tipoDaOperacao.entrada)
      })

      it('Deve filtrar por Tipo de Operação - Saída', function () {
        
        cy.allureDescriptionHtml(testDescription.tipoOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.tipoDaOperacao.saida)
      })


      it('Deve filtrar por Finalidade da Operação - Normal', function () {
        
        cy.allureDescriptionHtml(testDescription.finalidadeOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.normal)
      })

      it('Deve filtrar por Finalidade da Operação - Complementar', function () {
      
        cy.allureDescriptionHtml(testDescription.finalidadeOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.complementar)
      })

      it('Deve filtrar por Finalidade da Operação - Ajuste', function () {
        
        cy.allureDescriptionHtml(testDescription.finalidadeOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.ajuste)
      })

      it('Deve filtrar por Finalidade da Operação - Devolução', function () {
        
        cy.allureDescriptionHtml(testDescription.finalidadeOperacao).allureSeverity('normal')

        Operacoes.validarListagem(seedOperacao.finalidadeDaOperacao.devolucao)
      })
    })
  })
})
