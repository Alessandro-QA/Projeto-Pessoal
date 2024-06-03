/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa - Obtém registros do Livro Caixa', () => {
            
            it('CT1 - Obter Todos os Registros do Livro Caixa', () => {
                cy.getRequest('/api/financeiro/v1/LivroCaixa')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                    })
            })

            it('CT2 - Obtém Registro de Livro Caixa pelo ID', () => {
                cy.fixture('financeiro/livroCaixa/livroCaixa/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                        })
                })
            })
        })
    })
})
