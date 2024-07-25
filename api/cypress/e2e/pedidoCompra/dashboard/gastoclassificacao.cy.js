/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/gastoclassificacao/gastoclassificacao.description')

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Dashboard/GastoClassificacao - Dashboard Gastos por Classificação`, () => {
            it('CT1 - Gastos por Categoria com parâmetros padrão', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/gastoclassificacao/paramsCt1.json').then((params) => {
                    // Faz a requisição com os parâmetros especificados
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/GastoClassificacao`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica se a resposta é um array e não está vazia
                            expect(response.body).to.be.an('array').that.is.not.empty

                            // Verifica cada categoria retornada no array
                            response.body.forEach((categoria) => {
                                // Validar propriedades sem exibir os valores
                                expect(categoria).to.have.property('nomeCategoria').that.is.a('string')
                                expect(categoria).to.have.property('valorMateriais').that.is.a('number')
                                expect(categoria).to.have.property('porcentagem').that.is.a('number')
                            })
                        })
                })

                it('CT2 - Gastos por Categoria com FazendaId e SafraId', () => {
                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.fixture('pedidoCompra/dashboard/gastoclassificacao/paramsCt2.json').then((params) => {
                        // Faz a requisição com os parâmetros especificados
                        cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/GastoClassificacao`, params)
                            .then((response) => {
                                // Verifica o status code da resposta
                                expect(response.status).to.equal(200)

                                // Verifica se a resposta é um array e não está vazia
                                expect(response.body).to.be.an('array').that.is.not.empty

                                // Verifica se contém exatamente uma categoria 'Defensivos' com os valores esperados
                                const categoriaDefensivos = response.body.find(categoria => categoria.nomeCategoria === 'Defensivos')
                                expect(categoriaDefensivos).to.exist
                                expect(categoriaDefensivos).to.have.property('valorMateriais').that.is.a('number')
                                expect(categoriaDefensivos).to.have.property('porcentagem').that.is.a('number')
                            })
                    })
                })
            })
        })
    })
})
