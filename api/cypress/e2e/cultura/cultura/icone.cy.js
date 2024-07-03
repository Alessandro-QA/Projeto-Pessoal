/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/icone/icone.description')

context('Cultura', () => {
    context('Cultura', () => {

        describe(`GET - ${Cypress.env('cultura')}/Cultura/Icone - Obtém Icones de Culturas`, () => {

            it('CT1 - Obter os Ícones existentes', () => {
                cy.fixture('cultura/cultura/icone/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/Icone`, params)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.be.not.null;

                            // Validação de que todos os IDs esperados estão na resposta
                            params.ids.forEach((id) => {
                                expect(response.body).to.have.property(id);
                                expect(response.body[id]).to.be.a('string');
                            });
                        });

                });
            });
        });
    });
});
