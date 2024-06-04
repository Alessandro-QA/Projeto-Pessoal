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
                cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/b510cc00-272e-4d7d-9f7d-134221684be5')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        cy.fixture('financeiro/livroCaixa/livroCaixa/bodyCt2.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })
        })
    })
})
