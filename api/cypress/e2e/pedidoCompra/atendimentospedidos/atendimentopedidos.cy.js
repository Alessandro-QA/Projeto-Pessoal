/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/atendimentopedidos/atendimentopedidos/atendimentopedidos.description.js')

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/AtendimentoPedidos - Atendimento Pedidos`, () => {
            it('CT1 - Atendimento Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/atendimentopedidos/atendimentopedidos/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/AtendimentoPedidos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                        })
                })
            })

            it('CT2 - Validar Descrição', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('pedidoCompra/atendimentopedidos/atendimentopedidos/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/AtendimentoPedidos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty

                            // Verifica se algum item possui uma das descrições esperadas
                            const descricoesEsperadas = ['Soja', '2,4 - D 98%']
                            const descricaoPresente = response.body.some(item => descricoesEsperadas.includes(item.materialDescricao))
                            
                            expect(descricaoPresente).to.be.true
                        })
                })
            })

            it('CT3 - Validar MaterialId', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('pedidoCompra/atendimentopedidos/atendimentopedidos/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/AtendimentoPedidos`, params)
                        .then((response) => {

                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty

                            // Verifica se todos os itens possuem o materialId esperado
                            response.body.forEach((item) => {
                                // Validação do materialId
                                expect(item).to.have.property('materialId').that.equals(params.materialId)
                            })
                        })
                })
            })

            it('CT4 - Validar MaterialId e PrincipioAtivoId', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('pedidoCompra/atendimentopedidos/atendimentopedidos/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/AtendimentoPedidos`, params)
                        .then((response) => {

                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty

                            // Verifica se todos os itens possuem o materialId e principioAtivoId esperados
                            response.body.forEach((item) => {

                                // Validação dos principioAtivoIds
                                item.principioAtivo.forEach((principio) => {
                                    expect(principio).to.have.property('principioAtivoId').that.equals(params.principioAtivoId)
                                })
                            })
                        })
                })
            })

            it('CT5 - Validar FornecedorDescricao', () => {
                cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal')

                cy.fixture('pedidoCompra/atendimentopedidos/atendimentopedidos/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/AtendimentoPedidos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)
  
                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty

                            // Verifica se todos os itens possuem o fornecedorDescricao esperado
                            response.body.forEach((item) => {
                                // Validação do fornecedorDescricao nos pedidos
                                item.pedidos.forEach((pedido) => {
                                    expect(pedido).to.have.property('fornecedorDescricao').that.equals(params.fornecedorDescricao)
                                })
                            })
                        })
                })
            })
        })
    })
})
