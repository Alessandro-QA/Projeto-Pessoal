/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('Fatura do Cartão de Crédito - GET - /api/financeiro/v1/Dashboard/FaturaCartaoCredito{params}', () => {
            it('CT1 - Deve buscar dados da Fatura do Cartão de Crédito', () => {
                cy.fixture('financeiro/dashboard/faturaCartaoCredito/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/FaturaCartaoCredito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/faturaCartaoCredito/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
