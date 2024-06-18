/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/ProdutoresLivroCaixa{params} - Produtores Livro Caixa`, () => {
            it('CT1 - Deve buscar Livro Caixa por Ano', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/produtoresLivroCaixa`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty

                            response.body.forEach(item => {
                                // Validando propriedades do produtor
                                expect(item).to.have.property('produtor').that.is.an('object')
                                expect(item.produtor).to.have.property('documentoPrincipal').that.is.a('string')
                                expect(item.produtor).to.have.property('id').that.is.a('string')
                                expect(item.produtor).to.have.property('descricao').that.is.a('string')

                                // Validando propriedades financeiras
                                expect(item).to.have.property('entrada').that.is.a('number')
                                expect(item).to.have.property('saida').that.is.a('number')
                                expect(item).to.have.property('estimativaIR').that.is.a('number')
                                expect(item).to.have.property('saldo').that.is.a('number')
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Livro Caixa por Produtor', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt2.json').then((payload) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/produtoresLivroCaixa`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
                            expect(response.body).to.be.an('array')
                            cy.fixture('financeiro/dashboard/produtoresLivroCaixa/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Livro Caixa por Produtor e Ano', () => {
                cy.fixture('financeiro/dashboard/produtoresLivroCaixa/paramsCt3.json').then((payload) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/produtoresLivroCaixa`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.not.null
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
