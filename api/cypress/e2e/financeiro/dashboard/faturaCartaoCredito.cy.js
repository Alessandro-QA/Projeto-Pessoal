/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/FaturaCartaoCredito{params} - Fatura do Cartão de Crédito`, () => {
            it('CT1 - Deve buscar dados da Fatura do Cartão de Crédito', () => {
                cy.fixture('financeiro/dashboard/faturaCartaoCredito/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/FaturaCartaoCredito`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            expect(response.body).to.have.property('valor').that.is.a('number')
                            expect(response.body).to.have.property('limite').that.is.a('number')
                            expect(response.body).to.have.property('limiteDisponivel').that.is.a('number')
                        })
                })
            })
        })
    })
})
