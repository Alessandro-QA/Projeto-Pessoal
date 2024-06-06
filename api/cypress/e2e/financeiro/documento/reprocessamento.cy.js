/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('POST - /api/financeiro/v1/Documento/Reprocessar  - Gerar Reprocessamentos', () => {

            it('CT1 - Reprocessa o livro caixa que possui dados do Lançamento Contábil diferente de Documentos', () => {
                cy.postRequest('/api/financeiro/v1/Documento/ReprocessarLivroCaixaDocumento')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean');
                    })
            })

            it('CT2 - Reprocessa o Livro Caixa que a fazenda Matrícula foi Atualizada', () => {
                cy.postRequest('/api/financeiro/v1/Documento/ReprocessarLivroCaixaFazendaMatricula')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean');
                    })
            })

            it('CT3 - Reprocessa o Livro Caixa que possui documentos criados com empresa de São Paulo', () => {
                cy.postRequest('/api/financeiro/v1/Documento/ReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean');
                    })
            })
        })
    })
})