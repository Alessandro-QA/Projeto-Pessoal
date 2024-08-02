/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazenda/fazenda.description');
const { validateFazendaResponse } = require('../../../fixtures/fazenda/fazenda/validate');

context('Fazenda', () => {
    describe(`POST/PUT/DELETE - ${Cypress.env('fazenda')}/Fazenda - Gerenciamento de Fazenda`, () => {

        let fazendaId;

        it('CT1 - Criar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

            cy.fixture('fazenda/fazenda/payloadCt1.json').then((payload) => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'));
                        expect(response.status).to.equal(200);

                        validateFazendaResponse(response);

                        // Salvar o ID da fazenda criada para uso posterior
                        fazendaId = response.body.data.id;
                    });
            });
        });

        it('CT2 - Editar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('fazenda/fazenda/payloadCt2.json').then((payload) => {


                cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)

                        validateFazendaResponse(response);
                    })
            })
        })

        it('CT3 - Deletar fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, fazendaId)
                .then((response) => {
                    expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                    expect(response.status).to.equal(200)

                })
        })
    })
})
