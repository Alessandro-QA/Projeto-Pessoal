/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/ProdutoresLivroCaixa{params} - Produtores Livro Caixa', () => {
            it('CT1 - Deve buscar Livro Caixa por Ano', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/produtoresLivroCaixa', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/produtoresLivroCaixa/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Livro Caixa por Produtor', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt2.json').then((payload) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/produtoresLivroCaixa', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/produtoresLivroCaixa/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Livro Caixa por Produtor e Ano', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt3.json').then((payload) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/produtoresLivroCaixa', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/produtoresLivroCaixa/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
