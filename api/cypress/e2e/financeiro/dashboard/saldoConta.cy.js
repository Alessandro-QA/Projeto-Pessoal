/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/SaldoConta{params} - Saldo em Conta', () => {
            it('CT1 - Deve buscar dados do Saldo em Conta', () => {
                cy.fixture('financeiro/dashboard/saldoConta/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/SaldoConta', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/saldoConta/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
