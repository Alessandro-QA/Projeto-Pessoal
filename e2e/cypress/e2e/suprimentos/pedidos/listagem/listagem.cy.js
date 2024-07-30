/// <reference types="cypress" />

import seedTest from '../../../../fixtures/suprimentos/pedidos/listagem/listagem.json'
import Utils from '../../../../support/utils/utils.js'
import Pedidos from '../../../../support/commands/suprimentos/listagem.js'
//import testDescription from './bdd-description/cadastro-recebimento-pedido.description.js'

const dayjs = require('dayjs');

// Cadastro, Edição e Exclusão de Pedido com Recebimento
describe('Suprimentos', { tags: '@suprimentos' }, () => {

    describe('Pedidos', { tags: '@pedidos' }, () => {
        describe('Listagem', { tags: '@listagem' }, () => {

            context('Listagem de Pedidos - Validação dos filtros', () => {

                it('Deve Listar todos os Pedidos Sem Filtro', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')
                    Pedidos.listagem(seedTest.semFiltro)
                })

                it('Deve Listar todos os Pedidos filtrados por Safra', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')
                    Pedidos.listagem(seedTest.filtroSafra)
                })

                it('Deve Listar todos os Pedidos filtrados por Fazenda', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')
                    Pedidos.listagem(seedTest.filtroFazenda)
                })
                it('Deve Listar todos os Pedidos filtrados por Empresa', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')
                    Pedidos.listagem(seedTest.filtroEmpresa)
                })

                it('Deve Fazer uma Busca por String Entre os Pedidos', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')
                    Pedidos.listagem(seedTest.pesquisa)
                })

                it.only('Deve Listar todos os Pedidos filtrados por Data', function () {
                    //cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')

                    Pedidos.listagem(seedTest.filtroData)
                })
            })
        })
    })
})
