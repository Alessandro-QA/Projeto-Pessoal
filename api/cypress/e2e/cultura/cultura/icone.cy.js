/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/icone/icone.description')

context('Cultura', () => {
    context('Cultura', () => {

        describe(`GET - ${Cypress.env('cultura')}/Cultura/Icone - Obtém Icones de Culturas`, () => {

            it('CT1 - Obter os Ícones existentes', () => {
                cy.fixture('cultura/cultura/icone/paramsCt1.json').then((params) => {
                    
                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/Icone`, params)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                        })

                })

            })
        })
    })
})
