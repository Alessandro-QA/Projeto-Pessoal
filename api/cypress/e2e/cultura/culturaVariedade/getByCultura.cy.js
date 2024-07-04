/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/getByCultura/getByCultura.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`GET - ${Cypress.env('cultura')}/CulturaVariedade/List - Obtém a Listagem de Variedades`, () => {
            it.only('CT1 - Deve obter uma listagem com todas as variedades a partir do ID da Cultura', () => {

                cy.fixture('cultura/culturaVariedade/getByCultura/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/GetByCultura`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            //validarResponse(response.body)
                        })
                })
            })
        })
    })
})