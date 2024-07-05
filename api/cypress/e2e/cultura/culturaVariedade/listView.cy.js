/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/listView/listView.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`POST - ${Cypress.env('cultura')}/CulturaVariedade/ListView - Lista as variedades resultantes da busca a partir de um payload.`, () => {

            it('CT1 - Listar Variedades conforme tamanho especificado no payload', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('cultura/culturaVariedade/listView/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/ListView`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            response.body.forEach((variedade) => {
                                expect(variedade).to.have.property('id').and.to.be.a('string')
                                expect(variedade).to.have.property('cultura').and.to.be.a('string')
                                expect(variedade).to.have.property('culturaId').and.to.be.a('string')
                                expect(variedade).to.have.property('variedade').and.to.be.a('string')
                                expect(variedade).to.have.property('nomeCientifico').and.to.be.a('string')
                                expect(variedade).to.have.property('producaoEstimada').and.to.be.a('number')
                                expect(variedade).to.have.property('diasParaColheita').and.to.be.a('number')
                                expect(variedade).to.have.property('tenantId').and.to.be.a('string')
                            })
                        })
                })
            })
        })
    })
})
