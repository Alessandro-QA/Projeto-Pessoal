/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/Corrente - Obtém Contas Bancárias Correntes', () => {
            it('CT1 - Deve obter todas as contas correntes', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/Corrente')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                        cy.fixture('financeiro/contaBancaria/corrente/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })

            it('CT2 - Deve obter conta corrente por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Corrente', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/corrente/bodyCt2.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve obter conta corrente por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Corrente', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/corrente/bodyCt3.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT4 - Deve obter contas correntes ativas', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt4.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Corrente', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/corrente/bodyCt4.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT5 - Deve obter contas correntes inativas', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt5.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Corrente', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/corrente/bodyCt5.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})
