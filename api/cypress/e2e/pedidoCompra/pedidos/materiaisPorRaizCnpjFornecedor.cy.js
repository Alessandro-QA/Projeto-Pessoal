/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/materiaisPorRaizCnpjFornecedor/materiaisPorRaizCnpjFornecedor.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Pedidos/MateriaisPorRaizCnpjFornecedor - Obtém materiais por EmpresaId`, () => {

            it('CT1 - Obtém materiais por EmpresaId', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/materiaisPorRaizCnpjFornecedor/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/MateriaisPorRaizCnpjFornecedor`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verifica se a resposta é um array
                            expect(response.body).to.be.an('array')

                            // Verifica se cada item na resposta tem a estrutura esperada
                            response.body.forEach(item => {
                                expect(item).to.have.property('material')
                                expect(item.material).to.have.property('descricao').that.is.a('string')
                                expect(item).to.have.property('unidadeMedida')
                                expect(item).to.have.property('classificacao')
                                expect(item).to.have.property('pedidos').that.is.an('array')
                                
                            })
                        })
                })
            })
        })
    })
})
