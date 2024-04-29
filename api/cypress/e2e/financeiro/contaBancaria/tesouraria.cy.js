/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/CaixaTesouraria - Obtém Contas Bancárias de Tesouraria', () => {
            it('CT1 - Deve obter todas as contas de Tesouraria', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/CaixaTesouraria')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                        cy.fixture('financeiro/contaBancaria/tesouraria/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })

            it('CT2 - Deve obter conta de tesouraria por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/CaixaTesouraria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/tesouraria/bodyCt2.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve obter conta de tesouraria por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/CaixaTesouraria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/tesouraria/bodyCt3.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT4 - Deve obter contas de tesouraria ativas', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt4.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/CaixaTesouraria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/tesouraria/bodyCt4.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT5 - Deve obter contas de tesouraria inativas', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt5.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/CaixaTesouraria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/tesouraria/bodyCt5.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})
