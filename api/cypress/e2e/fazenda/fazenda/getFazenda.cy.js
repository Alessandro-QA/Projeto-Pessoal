/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/getFazenda/getFazenda.description');
const { validateFazenda } = require('../../../fixtures/fazenda/getFazenda/validate');

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda - Gerenciamento de Fazenda`, () => {

        it('CT1 - fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`)
                .then((response) => {
                    expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'));
                    expect(response.status).to.equal(200);

                    // Validar a estrutura da resposta
                    const responseBody = response.body;

                    // Verificar que a resposta é um array
                    expect(responseBody).to.be.an('array');

                    responseBody.forEach((fazenda) => {
                        validateFazenda(fazenda);
                    });
                });
        });
    });
});
