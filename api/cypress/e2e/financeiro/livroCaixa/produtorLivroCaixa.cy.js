/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa - Obtém os registros do Livro Caixa com filtro', () => {
            it('CT1 - Deve obter registro do Livro Caixa', () => {
                cy.fixture('financeiro/livroCaixa/produtorLivroCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixa', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null  
                        })
                })
            })
        })
    })
})

