/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/materialPorFornecedor/materialPorFornecedor.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Pedidos/MateriaisPorFornecedor - Obtém Material fornecedor por ID`, () => {

            it('CT1 - Obtém o status do pedido para edição pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/materialPorFornecedor/paramsCt1.json').then((params) => {
                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/MateriaisPorFornecedor`, { 
                        FornecedorId: params.FornecedorId, 
                        EmpresaId: params.EmpresaId 
                    })
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verificar que os materiais são do fornecedor correto
                            response.body.forEach(item => {
                                // Verifica a estrutura do objeto material
                                expect(item).to.have.property('material')
                                expect(item.material).to.have.property('id').to.be.a('string')
                                expect(item.material).to.have.property('descricao').to.be.a('string')
                                
                                // Verifica a estrutura do objeto unidadeMedida
                                expect(item).to.have.property('unidadeMedida')
                                expect(item.unidadeMedida).to.have.property('codigo').to.be.a('string')
                                expect(item.unidadeMedida).to.have.property('descricao').to.be.a('string')

                                // Verifica a estrutura do objeto classificacao
                                expect(item).to.have.property('classificacao')
                                expect(item.classificacao).to.have.property('codigo').to.be.a('string')
                                expect(item.classificacao).to.have.property('descricao').to.be.a('string')

                                // Verifica a estrutura do objeto pedidos
                                expect(item).to.have.property('pedidos').that.is.an('array')
                                item.pedidos.forEach(pedido => {
                                    expect(pedido).to.have.property('id').to.be.a('string')
                                    expect(pedido).to.have.property('codigo').to.be.a('number')
                                    expect(pedido).to.have.property('saldo').to.be.a('number')
                                    expect(pedido).to.have.property('valorUnitario').to.be.a('number')
                                })
                            })
                        })
                })
            })
        })
    })
})
