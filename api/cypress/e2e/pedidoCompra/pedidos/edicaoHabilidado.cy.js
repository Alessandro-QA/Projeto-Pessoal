/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/edicaoHabilidado/edicaoHabilidado.description')

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/EdicaoHabilitada - Obtém o status do pedido para edição pelo ID`, () => {

            it('CT1 - Obtém o status do pedido para edição pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/edicaoHabilidado/paramsCt1.json').then((params) => {
                    const pedidoId = params.pedidoId; 
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/${pedidoId}/EdicaoHabilitada`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body).to.have.property('success').to.be.true
                            expect(response.body).to.have.property('data').to.be.true
                        });
                });

            });
        });
    });
});
