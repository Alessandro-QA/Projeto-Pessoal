/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/GastosCategoria{params} - Gastos por Categoria', () => {
            it('CT1 - Deve buscar dados de Gastos por Categoria', () => {
                cy.fixture('financeiro/dashboard/gastosCategoria/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/GastosCategoria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/gastosCategoria/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar dados de Gastos por Categoria - Por Tag', () => {
                cy.fixture('financeiro/dashboard/gastosCategoria/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/GastosCategoria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/gastosCategoria/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar dados de Gastos por Categoria - Por Pesquisa', () => {
                cy.fixture('financeiro/dashboard/gastosCategoria/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/GastosCategoria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/gastosCategoria/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
