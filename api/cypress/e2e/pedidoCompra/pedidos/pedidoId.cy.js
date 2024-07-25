/// <reference types='Cypress' />
const description = require('../../../fixtures/pedidoCompra/pedidos/pedidosId/pedidosId.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Pedidos - Obtém pedido por ID`, () => {

            it('CT1 - Obtém o status do pedido para edição pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/pedidosId/paramsCt1.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/${params.PedidoId}`)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verificar que o pedido retornado tem o ID correto
                            expect(response.body).to.have.property('id').to.equal(params.PedidoId)

                            // Validar os outros campos do response
                            expect(response.body).to.have.property('codigo').that.is.a('number')
                            expect(response.body).to.have.property('data').that.is.a('string')
                            expect(response.body).to.have.property('dataEntrega').that.is.a('string')
                            expect(response.body).to.have.property('mesmoLocal').that.is.a('boolean')

                            // Validar o objeto fornecedor
                            expect(response.body).to.have.property('fornecedor').that.is.an('object')
                            expect(response.body.fornecedor).to.have.property('id').that.is.a('string')
                            expect(response.body.fornecedor).to.have.property('descricao').that.is.a('string')
                            expect(response.body.fornecedor).to.have.property('documentoPrincipal').that.is.a('string')

                            // Validar o objeto safra
                            expect(response.body).to.have.property('safra').that.is.an('object')
                            expect(response.body.safra).to.have.property('id').that.is.a('string')
                            expect(response.body.safra).to.have.property('descricao').that.is.a('string')

                            // Validar o objeto fazenda
                            expect(response.body).to.have.property('fazenda').that.is.an('object')
                            expect(response.body.fazenda).to.have.property('id').that.is.a('string')
                            expect(response.body.fazenda).to.have.property('descricao').that.is.a('string')

                            // Validar o objeto fazendaEntrega
                            expect(response.body).to.have.property('fazendaEntrega').that.is.an('object')
                            expect(response.body.fazendaEntrega).to.have.property('id').that.is.a('string')
                            expect(response.body.fazendaEntrega).to.have.property('descricao').that.is.a('string')

                            // Validar o objeto empresa
                            expect(response.body).to.have.property('empresa').that.is.an('object')
                            expect(response.body.empresa).to.have.property('id').that.is.a('string')
                            expect(response.body.empresa).to.have.property('descricao').that.is.a('string')

                            // Validar o objeto inscricaoEstadual dentro de empresa
                            expect(response.body.empresa).to.have.property('inscricaoEstadual').that.is.an('object')
                            expect(response.body.empresa.inscricaoEstadual).to.have.property('id').that.is.a('string')
                            expect(response.body.empresa.inscricaoEstadual).to.have.property('descricao').that.is.a('string')
                            expect(response.body.empresa.inscricaoEstadual).to.have.property('valor').that.is.a('string')
                            expect(response.body.empresa.inscricaoEstadual).to.have.property('isento').that.is.a('boolean')
                            expect(response.body.empresa.inscricaoEstadual).to.have.property('ativo').that.is.a('boolean')
                        })
                })
            })


        })
    })
})
