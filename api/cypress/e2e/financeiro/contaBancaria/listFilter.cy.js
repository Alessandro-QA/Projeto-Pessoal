/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/ListFilter - Obtém Todas as Contas Bancárias', () => {
            it('CT1 - Deve obter todas as Contas Bancárias', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/ListFilter')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                    })
            })

            it('CT2 - Deve obter todas as Contas Bancárias por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/ListFilter', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/listFilter/bodyCt2.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve obter todas as Contas Bancárias por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt3.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/ListFilter', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/listFilter/bodyCt3.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT4 - Deve obter todas as Contas Bancárias ativas', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt4.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/ListFilter', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                        })
                })
            })

            it('CT5 - Deve obter todas as Contas Bancárias inativas', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt5.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/ContaBancaria/ListFilter', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/contaBancaria/listFilter/bodyCt5.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})
