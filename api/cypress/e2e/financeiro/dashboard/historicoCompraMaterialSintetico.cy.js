/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/historicoCompraMaterialSintetico{params} - Historico de Compra Material Sintetico', () => {
            it('CT1 - Deve buscar Historico de Compra de Material - Sintetico', () => {
                cy.fixture('financeiro/dashboard/historicoCompraMaterialSintetico/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/historicoCompraMaterialSintetico', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/historicoCompraMaterialSintetico/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
