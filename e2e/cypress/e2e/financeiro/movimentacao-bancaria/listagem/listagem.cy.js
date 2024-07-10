/// <reference types="cypress" />

import seedTestListagemMovimentacao from '../../../../fixtures/financeiro/movimentaca-bancaria/listagem/validar-listagem.json'
import { validarListagem } from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescritpion from './bdd-description/listagem.description.js'
const dayjs = require('dayjs')


describe('Financeiro', { tags: '@financeiro' }, () => {

  describe('Movimentações Bancárias', { tags: '@movimentacoesBancarias' }, () => {

    const today = dayjs().format('DD/MM/YYYY')
    const oneMonthAgo = dayjs().subtract(1, 'month').format('DD/MM/YYYY')
    const fiveMonthAgo = dayjs().subtract(5, 'month').format('DD/MM/YYYY')

    context('Listagem', () => {
      context('Validar filtros da listagem', () => {

        it('Deve filtrar por Empresa/Pessoa', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescritpion.filtroEmpresa)

          validarListagem(seedTestListagemMovimentacao.movimentacaoEmpresa)
        })

        it('Deve filtrar por Conta', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescritpion.filtroConta)

          seedTestListagemMovimentacao.movimentacaoContaBancaria.filtroDataInicio = oneMonthAgo
          seedTestListagemMovimentacao.movimentacaoContaBancaria.filtroDataFim = today
          validarListagem(seedTestListagemMovimentacao.movimentacaoContaBancaria)
        })

        it('Deve filtrar por Data', { retries: { runMode: 1, openMode: 1, }, }, function () {
          // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescritpion.filtroData)

          seedTestListagemMovimentacao.movimentacaoData.filtroDataInicio = fiveMonthAgo
          seedTestListagemMovimentacao.movimentacaoData.filtroDataFim = today
          validarListagem(seedTestListagemMovimentacao.movimentacaoData)
        })
      })
    })
  })
})
