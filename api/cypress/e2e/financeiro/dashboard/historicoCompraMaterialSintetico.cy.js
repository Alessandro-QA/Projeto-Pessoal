/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/historicoCompraMaterialSintetico{params} - Historico de Compra Material Sintetico`, () => {
            it('CT1 - Deve buscar Historico de Compra de Material - Sintetico', () => {
                cy.fixture('financeiro/dashboard/historicoCompraMaterialSintetico/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/historicoCompraMaterialSintetico`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            cy.fixture('financeiro/dashboard/historicoCompraMaterialSintetico/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})