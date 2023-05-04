/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/Listagem - Obtém a Listagem de Contas Bancárias', () => {
            it('CT1 - Deve obter uma listagem com todas as contas', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/Listagem')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        cy.fixture('financeiro/contaBancaria/listagem/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })

            it('CT2 - Deve listar as contas por ContaBancariaId - Corrente', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt2.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve listar as contas por ContaBancariaId - Crédito', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt3.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT4 - Deve listar as contas por ContaBancariaId - Tesouraria', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt4.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt4.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT5 - Deve listar as contas por EmpresaId - Corrente', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt5.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt5.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT6 - Deve listar as contas por EmpresaId - Crédito', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt6.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt6.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT7 - Deve listar as contas por EmpresaId - Tesouraria', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt7.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt7.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT8 - Deve listar as contas correntes ativas', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt8.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt8.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT9 - Deve listar as contas correntes inativas', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt9.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/Listagem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/listagem/bodyCt9.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})
