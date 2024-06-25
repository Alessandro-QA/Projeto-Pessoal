/// <reference types='Cypress' />

const description = require('../../fixtures/localidade/pais/pais.description');

context('Localidade', () => {
    context('País', () => {
        describe(`GET - ${Cypress.env('localidadeBackoffice')}/Pais - Recupera Lista de Países`, () => {

            it('CT1 - Recupera Todos os Países', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Pais`, {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        response.body.forEach((pais) => {
                            expect(pais).to.have.property('id').that.is.a('string');
                            expect(pais).to.have.property('nome').that.is.a('string');
                            expect(pais).to.have.property('sigla').that.satisfy((sigla) => sigla === null || typeof sigla === 'string');
                            expect(pais).to.have.property('codigo').that.is.a('string');
                        });

                    })
            })

            it('CT2 - Recupera um País pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('localidade/pais/paramsCt2.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Pais/${params.id}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            expect(response.body).to.deep.equal(params)
                        })
                })
            })
        })
    })
})
