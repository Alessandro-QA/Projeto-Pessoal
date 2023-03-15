/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/FluxoCaixa{params} - Fluxo de Caixa', () => {
            it('CT1 - Deve buscar dados do gráfico de Fluxo de Caixa', () => {
                cy.fixture('financeiro/dashboard/fluxoCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/FluxoCaixa', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/fluxoCaixa/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
