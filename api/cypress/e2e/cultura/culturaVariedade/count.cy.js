/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/count/count.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`POST - ${Cypress.env('cultura')}/CulturaVariedade/Count - Verifica a quantidade de resultados a ser exibida na página`, () => {
            it('CT1 - Verifica a quantidade de resultados a ser exibida na página', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('cultura/culturaVariedade/count/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/Count`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            expect(response.body).to.be.a('number')
                        })
                })
            })

            it('CT2 - Verifica se a rota retorna zero ao buscar por ítem não existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('cultura/culturaVariedade/count/payloadCt2.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/Count`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            expect(response.body).to.be.equal(0)
                        })
                })
            })
        })
    })
})
