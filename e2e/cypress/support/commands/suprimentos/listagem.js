/// <reference types="cypress" />

import locatorPedidos from '../../locators/suprimentos/pedidos/locators-pedidos.js'

const url = '/suprimentos/pedidos'
const locatorTituloPagina = locatorPedidos.dashboard.titulo
const tituloPagina = 'Pedidos'

class Pedidos {
    /**
     * Realiza Listagem des pedidos
     * @param {} seedTest
     * */
    listagem(seedTest) {

        cy.intercept('POST', '/api/pedido-compra/v1/Pedidos/Listagem').as('listaPedidos')
        cy.intercept('DELETE', '/api/pedido-compra/v1/Pedidos/**').as('deletePedido')

        // Navegar para Pedidos
        cy.location('pathname').then((currentPath) => {
            if (currentPath !== url) {
                cy.log('Navegar para Pedidos')
                cy.navegarPara(url, locatorTituloPagina, tituloPagina)
                cy.wait('@listaPedidos', { timeout: 20000 })
            }
            cy.log(currentPath)
            cy.desabilitarPopUpNotificacao()
        })

        // Verificar se o elemento de filtros existe e está visível
        cy.document().then((doc) => {
            const filtersElement = doc.querySelector('#root-cnx-page-filter-cnx-container-filters-div-cnx-container-filters')

            if (filtersElement && !filtersElement.hidden && filtersElement.offsetHeight > 0) {
                // Elemento de filtros existe e está visível
                cy.log('Os filtros já estão visíveis')
            } else {
                // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
                cy.log('Abrir filtros porque não estão visíveis')
                cy.getVisible(locatorPedidos.dashboard.botaoExpandirFiltros).click()
            }

            //Limpar Filtros
            cy.get('#root-cnx-page-filter-cnx-container-filters-div-cnx-container-filters > .el-button').click({ force: true })
        })

        if (seedTest.safra) {
            // selecionar safra
            cy.getVisible(locatorPedidos.dashboard.selectSafra).click({ force: true })
                .type(seedTest.safra)
                .contains(seedTest.safra).click({ force: true })
        }

        if (seedTest.fazenda) {
            // selecionar fazenda
            cy.getVisible(locatorPedidos.dashboard.selectFazenda).click({ force: true })
                .type(seedTest.fazenda)
                .contains(seedTest.fazenda).click({ force: true })
        }

        if (seedTest.empresa) {
            // selecionar empresa
            cy.getVisible(locatorPedidos.dashboard.selectEmpresa).click({ force: true })
                .type(seedTest.empresa)
                .contains(seedTest.empresa).click({ force: true })
        }

        if (seedTest.pesquisa) {
            // pesquisar por Numero Pedido
            cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
                .clear().type(seedTest.pesquisa)
        }

        if (seedTest.dataInicio) {
            // pesquisar por Data
            cy.getVisible(locatorPedidos.dashboard.dataInicio)
                .clear().type(seedTest.dataInicio)
            cy.getVisible(locatorPedidos.dashboard.dataFinal)
                .clear().type(seedTest.dataFinal)
                .type('{enter}')
        }



        // Esperar a requisição de Consulta ser realizada e Armazenar o Response
        cy.wait('@listaPedidos', { timeout: 20000 }).then((interception) => {
            // Verificar o status da resposta
            expect(interception.response.statusCode).to.eq(200)

            // Armazena o response
            cy.wrap(interception.response.body).as('responsePedido')
        })

        cy.get('@responsePedido').then((responsePedido) => {

            cy.log(responsePedido)
            seedTest.cardPedidos = responsePedido

            // Formatar a data para DD/MM/YYYY
            const formatDate = (date) => {
                const [year, month, day] = date.split('T')[0].split('-')
                return `${day}/${month}/${year}`
            }

            const formatCNPJ = (cnpj) => {
                return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
            }

            // Função para formatar o status e retornar a classe correspondente
            const formatStatus = (status) => {
                switch (status) {
                    case 1:
                        return { text: "Aguardando Entrega", class: "line--item-status-wait" }
                    case 2:
                        return { text: "Entrega Parcial", class: "line--item-status-partialDelivery" }
                    case 3:
                        return { text: "Entrega Total", class: "line--item-status-fullDelivery" }
                    case 4:
                        return { text: "Finalizado", class: "line--item-status-finished" }
                    default:
                        return { text: "Status Desconhecido", class: "line--item-status-unknown" }
                }
            }

            // Iterar sobre os dados do response e validar as linhas
            responsePedido.forEach((item, index) => {
                cy.get(locatorPedidos.dashboard.cardPedidos).eq(index).within(() => {
                    cy.get(locatorPedidos.dashboard.cardPedido.codigo).should('contain', item.codigo)
                    cy.get(locatorPedidos.dashboard.cardPedido.data).should('contain', formatDate(item.data))
                    cy.get(locatorPedidos.dashboard.cardPedido.fazenda).should('contain', item.fazendaDescricao)
                    cy.get(locatorPedidos.dashboard.cardPedido.safra).should('contain', item.safraDescricao)
                    cy.get(locatorPedidos.dashboard.cardPedido.fornecedor).should('contain', item.fornecedorDescricao)
                    cy.get(locatorPedidos.dashboard.cardPedido.cnpj).should('contain', formatCNPJ(item.fornecedorDocumentoPrincipal))

                    if (item.numeroPedidoFornecedor !== null) {
                        cy.get('.line--item-provider_number .line--text').should('contain', item.numeroPedidoFornecedor)
                    } else {
                        cy.get('.line--item-provider_number .line--text').should('be.empty')
                    }

                    // Validação do status
                    const statusInfo = formatStatus(item.statusPedido)
                    cy.get(`.line--item-status .${statusInfo.class}`).should('contain', statusInfo.text)
                })
            })

        })
        /*
    
        // pesquisar por Numero Pedido
        cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
            .clear().type(seedTest.numeroPedidoFornecedor)
    
        cy.wait('@listaPedidos', { timeout: 20000 })
    
        cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')
    
        // Selecionar todos os <div class="line--wrapper"> dentro da <section>
        cy.get('section.list')
            .find('div.line--wrapper').each(($wrapper) => {
                // Verificar se o número do fornecedor está presente dentro do <div class="line--wrapper">
                cy.wrap($wrapper)
                    .find('div.line--item-provider_number .line--text')
                    .invoke('text')
                    .then((text) => {
                        if (text.trim() === seedTest.numeroPedidoFornecedor) {
                            // Se encontrar o número do fornecedor, clicar no <div class="line--wrapper">
                            cy.wrap($wrapper).click()
                        }
                    })
            })
    
    
        cy.wait('@getPedido', { timeout: 30000 })
    
        cy.getVisible(locatorPedidos.detalhesPedido.botaoExcluir).click()
        cy.getVisible('button.el-button--primary').click()
    
        // Esperar a requisição DELETE ser realizada e validar a resposta
        cy.wait('@deletePedido', { timeout: 20000 }).then((interception) => {
            // Verificar o status da resposta
            expect(interception.response.statusCode).to.eq(200)
        })
    
        cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
            .clear()
    
        cy.wait('@listaPedidos', { timeout: 20000 })
    
        cy.get(locatorPedidos.detalhesPedido.botaoExcluir)
            .should('not.exist')
    
            */
    }
}

export default new Pedidos()
