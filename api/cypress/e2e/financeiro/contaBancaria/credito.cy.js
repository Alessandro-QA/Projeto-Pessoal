/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/Credito - Obtém Contas Bancárias de Crédito', () => {
            it('CT1 - Deve obter todas as contas de crédito (cartão)', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/Credito')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                        cy.fixture('financeiro/contaBancaria/credito/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })

            it('CT2 - Deve obter conta de crédito por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Credito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/credito/bodyCt2.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve obter conta de crédito por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Credito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/credito/bodyCt3.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT4 - Deve obter contas de crédito ativas', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt4.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Credito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/credito/bodyCt4.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT5 - Deve obter contas de crédito inativas', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt5.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Credito', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/credito/bodyCt5.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})
