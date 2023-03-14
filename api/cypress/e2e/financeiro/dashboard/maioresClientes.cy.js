/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('Maiores Clientes - GET - /api/financeiro/v1/Dashboard/MaioresClientes{params}', () => {
            it('CT1 - Deve buscar dados dos Maiores Clientes', () => {
                cy.fixture('financeiro/dashboard/maioresClientes/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/MaioresClientes', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/maioresClientes/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
