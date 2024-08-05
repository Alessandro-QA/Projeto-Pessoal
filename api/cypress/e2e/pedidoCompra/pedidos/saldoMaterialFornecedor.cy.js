/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/saldoMaterialFornecedor/saldoMaterialFornecedor.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`POST - ${Cypress.env('pedidoCompra')}/Pedidos/SaldoMaterialFornecedor - Saldo do Material Fornecedor`, () => {

            it('CT1 - Saldo do Material', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/saldoMaterialFornecedor/paramsCt1.json').then((params) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/SaldoMaterialFornecedor`, params)
                        .then((response) => {
                         
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)

                            // Valida o corpo da resposta
                            expect(response.body.success).to.equal(true)

                            // Valida que data é um array
                            expect(response.body.data).to.be.an('array').that.is.not.empty

                            // Valida o primeiro item no array data
                            const dataItem = response.body.data[0]
                            expect(dataItem).to.have.property('saldo').that.is.a('number')
                            expect(dataItem).to.have.property('valorUnitario').that.is.a('number')
                            expect(dataItem).to.have.property('material').that.is.an('object')
                            expect(dataItem).to.have.property('unidadeMedida').that.is.an('object')
                            expect(dataItem).to.have.property('classificacao').that.is.an('object')
                            expect(dataItem).to.have.property('pedidos').that.is.an('array').that.is.not.empty

                            // Valida o primeiro item no array pedidos
                            const pedidoItem = dataItem.pedidos[0]
                            expect(pedidoItem).to.have.property('id').that.is.a('string')
                            expect(pedidoItem).to.have.property('codigo').that.is.a('number')
                            expect(pedidoItem).to.have.property('saldo').that.is.a('number')
                            expect(pedidoItem).to.have.property('valorUnitario').that.is.a('number')
                            expect(pedidoItem).to.have.property('valorUnitarioAlternativo').that.is.a('number')
                            expect(pedidoItem).to.have.property('empresa').that.is.null
                            expect(pedidoItem).to.have.property('cotacao').that.is.null
                        })
                })
            })
        })
    })
})
