/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/getFazenda/getFazenda.description')
const { validateFazendaListResponse } = require('../../../fixtures/fazenda/getFazenda/validate')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda - Gerenciamento de Fazenda`, () => {

        it('CT1 - fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)

                        validateFazendaListResponse(response)
                      
                    })
            })
        })
    })
