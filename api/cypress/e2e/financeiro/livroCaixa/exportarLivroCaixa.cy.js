/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa/ExportarLivroCaixa - Exporta arquivo do Livro Caixa', () => {
            it('CT1 - Deve exportar registro do Livro Caixa em URL', () => {
                cy.fixture('financeiro/livroCaixa/exportarLivroCaixa/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/ExportarLivroCaixa', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            const data = response.body.data;
                            expect(data).to.have.property('urlArquivo');
                            expect(data.urlArquivo).to.be.a('string');
                            expect(data.urlArquivo).to.match(/^https?:\/\/[^\s$.?#].[^\s]*$/);
                        })
                })
            })
        })
    })
})
