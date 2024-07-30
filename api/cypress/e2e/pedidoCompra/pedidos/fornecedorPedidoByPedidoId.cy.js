/// <reference types='Cypress' />

 const description = require('../../../fixtures/pedidoCompra/pedidos/fornecedorPedidoByPedidoId/fornecedorPedidoByPedidoId.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`POST - ${Cypress.env('pedidoCompra')}/Pedidos/FornecedorPedidoByPedidoId - Obtém pedido por ID`, () => {

            it('CT1 - Pedido para edição pelo ID', () => {
                 cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/fornecedorPedidoByPedidoId/paramsCt1.json').then((params) => {
                    const pedidoId = params.PedidoId
                    // Preparar o corpo da solicitação
                    const requestBody = [pedidoId] 
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/FornecedorPedidoByPedidoId`, requestBody)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Validar estrutura e conteúdo da resposta
                            const [fornecedor] = response.body 

                            expect(fornecedor).to.have.property('id').that.is.a('string')
                            expect(fornecedor).to.have.property('descricao').that.is.a('string')
                            expect(fornecedor).to.have.property('documentoPrincipal').that.is.a('string')
                        })
                })
            })
        })
    })
})
