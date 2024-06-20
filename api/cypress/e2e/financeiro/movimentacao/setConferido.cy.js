/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/setConferido/setConferido.description');

context('Financeiro', () => {
    context('Movimentacao', () => {
        describe(`PUT - ${Cypress.env('financeiro')}/Movimentacao/{id}/setConferido/{conferido} - Atualiza movimentação para Status de Conferido`, () => {

            it('CT1 - Marcar uma Movimentação como Conferida', () => {

               cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/setConferido/params.json').then((params) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}/setConferido/True`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                        });
                });
            });

            it('CT2 - Marcar uma Movimentação como Não Conferida', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')
 
                 cy.fixture('financeiro/movimentacao/setConferido/params.json').then((params) => {
                     cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}/setConferido/False`)
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