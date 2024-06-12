/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/RecebimentosCategoria{params} - Recebimentos por Categoria`, () => {
            it('CT1 - Deve buscar dados de Recebimentos por Categoria', () => {
                cy.fixture('financeiro/dashboard/recebimentosCategoria/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/RecebimentosCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/recebimentosCategoria/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar dados de Recebimentos por Categoria - Por Tag', () => {
                cy.fixture('financeiro/dashboard/recebimentosCategoria/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/RecebimentosCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/recebimentosCategoria/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar dados de Recebimentos por Categoria - Por Pesquisa', () => {
                cy.fixture('financeiro/dashboard/recebimentosCategoria/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/RecebimentosCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/recebimentosCategoria/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
