/// <reference types='Cypress' />

const description = require('../../fixtures/localidade/municipio/municipio.description');

context('Localidade', () => {
    context('Municipio', () => {
        describe(`GET - ${Cypress.env('localidadeBackoffice')}/Municipio - Recupera Lista de Municipios`, () => {

            it('CT1 - Recupera Todos os Municípios', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Municipio`, {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                    })
            })

            it('CT2 - Recupera Todos os Municípios somente do Estado selecionado', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('localidade/municipio/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Municipio`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verifica se todos os municipios possuem o campo 'estadoId' como string e igual ao valor esperado
                            const todosMunicipiosValidos = Cypress._.every(response.body, (municipio) => {
                                return typeof municipio.estadoId === 'string' && municipio.estadoId === params.estadoId;
                            });

                            expect(todosMunicipiosValidos).to.be.true;

                        })
                })
            })

            it('CT3 - Recupera um Estado pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('localidade/municipio/paramsCt3.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('localidadeBackoffice')}/Municipio/${params.id}`)
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
