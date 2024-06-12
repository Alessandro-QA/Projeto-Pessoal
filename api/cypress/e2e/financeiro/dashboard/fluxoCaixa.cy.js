/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/FluxoCaixa{params} - Fluxo de Caixa`, () => {
            it('CT1 - Deve buscar dados do gráfico de Fluxo de Caixa', () => {
                cy.fixture('financeiro/dashboard/fluxoCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/FluxoCaixa`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            cy.fixture('financeiro/dashboard/fluxoCaixa/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})