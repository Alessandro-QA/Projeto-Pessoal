/// <reference types='Cypress' />

const description = require('../../fixtures/localidade/estado/estado.description');

context('Localidade', () => {
    context('Estado', () => {
        describe(`GET - ${Cypress.env('localidadeBackoffice')}/Estado - Recupera Lista de Estados`, () => {

            it('CT1 - Recupera Todos os Estados', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Estado`, {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        response.body.forEach((estado) => {
                            expect(estado).to.have.property('id').that.is.a('string');
                            expect(estado).to.have.property('nome').that.is.a('string');
                            expect(estado).to.have.property('sigla').that.is.a('string');
                            expect(estado).to.have.property('codigo').that.is.a('string');
                            expect(estado).to.have.property('paisId').that.is.a('string');
                        });
                    })
            })

            it('CT2 - Recupera Todos os Estados somente do País selecionado', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('localidade/estado/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Estado`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verifica se o tamanho do array é 27 (todos estados do BR listados)
                            expect(response.body).to.have.length(27);

                            response.body.forEach((estado) => {
                                expect(estado).to.have.property('id').that.is.a('string');
                                expect(estado).to.have.property('nome').that.is.a('string');
                                expect(estado).to.have.property('sigla').that.is.a('string');
                                expect(estado).to.have.property('codigo').that.is.a('string');
                                expect(estado).to.have.property('paisId').that.is.a('string').to.be.equal(params.paisId);

                            })
                        })
                })
            })

            it('CT3 - Recupera um Estado pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('localidade/estado/paramsCt3.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Estado/${params.id}`)
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
