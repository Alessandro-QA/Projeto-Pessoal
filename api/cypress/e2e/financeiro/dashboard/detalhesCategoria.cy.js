/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria{params} - Detalhes por Categoria`, () => {
            it('CT1 - Deve buscar dados dos Detalhes por Categoria - Pagamento', () => {
                cy.fixture('financeiro/dashboard/detalhesCategoria/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/detalhesCategoria/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar dados dos Detalhes por Categoria - Recebimento', () => {
                cy.fixture('financeiro/dashboard/detalhesCategoria/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/detalhesCategoria/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar dados dos Detalhes por Categoria - Transferência', () => {
                cy.fixture('financeiro/dashboard/detalhesCategoria/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/detalhesCategoria/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT4 - Deve buscar dados dos Detalhes por Categoria - Por Tag', () => {
                cy.fixture('financeiro/dashboard/detalhesCategoria/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/detalhesCategoria/bodyCt4.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT5 - Deve buscar dados dos Detalhes por Categoria - Por Pesquisa', () => {
                cy.fixture('financeiro/dashboard/detalhesCategoria/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/DetalhesCategoria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/detalhesCategoria/bodyCt5.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
