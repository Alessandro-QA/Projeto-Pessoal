/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/verificarMovimentacoesDocumento/verificarMovimentacoesDocumento.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Movimentacao/VerificarMovimentacoesDocumento - Retorna true or False para consulta de Movimentações`, () => {

            it('CT1 - Obtém resposta se Documento possui movimentações', () => {

            cy.allureDescriptionHtml(description.Ct1).allureSeverity('minor')
                                                    
                cy.fixture('financeiro/movimentacao/verificarMovimentacoesDocumento/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/VerificarMovimentacoesDocumento`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            expect(response.body).to.be.equal(true)
                        });
                });
            });
        });
    });
});