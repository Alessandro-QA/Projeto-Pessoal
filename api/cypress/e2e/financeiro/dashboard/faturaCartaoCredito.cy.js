/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/FaturaCartaoCredito{params} - Fatura do Cartão de Crédito', () => {
            it('CT1 - Deve buscar dados da Fatura do Cartão de Crédito', () => {
                cy.fixture('financeiro/dashboard/faturaCartaoCredito/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/FaturaCartaoCredito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                        
                            expect(response.body).to.have.property('valor').that.is.a('number')
                            expect(response.body).to.have.property('limite').that.is.a('number')
                            expect(response.body).to.have.property('limiteDisponivel').that.is.a('number')
                        })
                })
            })
        })
    })
})
