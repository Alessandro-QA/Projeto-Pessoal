/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/alterarvencimento/alterarvencimento.description');

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`PUT - ${Cypress.env('financeiro')}Titulo/AlterarVencimento - alterar o Vencimento`, () => {

            it('CT1 - Alterar o Vencimento do Titulo', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/alterarvencimento/payloadCt1.json').then((payload) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/AlterarVencimento`, payload)
                        .then((response) => {
                          // Verifica o status da resposta
                          expect(response.status).to.equal(200);

                          // Verifica o conteúdo da resposta
                          expect(response.body).to.have.property('success', true);
                          expect(response.body).to.have.property('data');
                          expect(response.body.data).to.have.property('id').to.be.a('string');
                          expect(response.body.data).to.have.property('dataVencimento').to.be.a('string').and.not.empty;
                        });
                });
            });

        });
    });
});
