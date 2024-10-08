/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Documento/Reprocessar - Gerar Reprocessamentos`, () => {

            //  Cenários SKIP não conseguem ser executados na máquina virtual e recebe timeout / Verificar depois com backend as condições de uso do mesmo
            it.skip('CT1 - Reprocessa o livro caixa que possui dados do Lançamento Contábil diferente de Documentos', () => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ReprocessarLivroCaixaDocumento`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean');
                    })
            })

            it.skip('CT2 - Reprocessa o Livro Caixa que a fazenda Matrícula foi Atualizada', () => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ReprocessarLivroCaixaFazendaMatricula`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean');
                    })
            })

            it('CT3 - Reprocessa o Livro Caixa que possui documentos criados com empresa de São Paulo', () => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor`)
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