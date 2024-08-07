/// <reference types="cypress" />

import seedTest from '../../../../fixtures/suprimentos/pedidos/listagem/listagem.json'
import Pedidos from '../../../../support/commands/suprimentos/listagem.js'
import testDescription from './bdd-description/listagem.description.js'

const dayjs = require('dayjs')

// Cadastro, Edição e Exclusão de Pedido com Recebimento
describe('Suprimentos', { tags: '@suprimentos' }, () => {

    // Gerar a data de hoje e a data de uma semana atrás
    const today = dayjs().format('DD/MM/YYYY')
    const oneWeekAgo = dayjs().subtract(7, 'day').format('DD/MM/YYYY')
    const oneMonth = dayjs().subtract(30, 'day').format('DD/MM/YYYY')


    seedTest.filtroData.dataInicio = oneWeekAgo
    seedTest.filtroData.dataFinal = today

    seedTest.filtroMultiplos.dataInicio =oneMonth
    seedTest.filtroMultiplos.dataFinal = today

    describe('Pedidos', { tags: '@pedidos' }, () => {
        describe('Listagem', { tags: '@listagem' }, () => {

            context('Listagem de Pedidos - Validação dos filtros', () => {

                it('Deve Listar todos os Pedidos Sem Filtro', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemSemFiltro).allureSeverity('normal')
                    Pedidos.listagem(seedTest.semFiltro)
                })

                it('Deve Listar os Pedidos filtrados por Safra', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorSafra).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroSafra)
                })

                it('Deve Listar os Pedidos filtrados por Fazenda', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorFazenda).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroFazenda)
                })
                it('Deve Listar os Pedidos filtrados por Empresa', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorEmpresa).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroEmpresa)
                })

                it('Deve Fazer uma Busca por String Entre os Pedidos', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.buscaPorString).allureSeverity('normal')
                    Pedidos.listagem(seedTest.pesquisa)
                })

                it('Deve Listar os Pedidos filtrados por Data', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorData).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroData)
                })

                it('Deve Listar os Pedidos filtrados por Fornecedor', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorFornecedor).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroFornecedor)
                })

                it('Deve Listar os Pedidos filtrados por Status', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradoPorStatus).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroStatus)
                })

                it('Deve Listar os Pedidos filtrados por Múltiplos Filtros', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.listagemFiltradaPorMultiplosFiltros).allureSeverity('normal')
                    Pedidos.listagem(seedTest.filtroMultiplos)
                })

                it('Validar Mensagem de Nenhum Pedido Encontrado', { retries: { runMode: 2, openMode: 2, }, }, function () {
                    cy.allureDescriptionHtml(testDescription.validarMensagemNenhumPedidoEncontrado).allureSeverity('normal')
                    Pedidos.listagem(seedTest.buscaInvalida)
                })

            })
        })
    })
})
