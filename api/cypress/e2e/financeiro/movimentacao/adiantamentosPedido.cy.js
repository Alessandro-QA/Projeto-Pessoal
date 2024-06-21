/// <reference types='Cypress' />

//const description = require('../../../fixtures/financeiro/movimentacao/cartao/cartao.description');

context('Financeiro', () => {
    context('Movimentacao', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Movimentacao/AdiantamentosPedido - Traz as Movimentações de Origem daquele Pedido`, () => {

            it('CT1 - Obtém as Movimentações do Pedido Informado', () => {

               // cy.allureDescriptionHtml(description.Ct1).allureSeverity('minor')

                cy.fixture('financeiro/movimentacao/adiantamentosPedido/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/AdiantamentosPedido`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            
                        });
                });
            });
        });
    });
});