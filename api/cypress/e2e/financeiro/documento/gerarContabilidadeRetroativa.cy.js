/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Documento/GerarContabilidadeRetroativa - Gerar contabilidade dos documentos sem contabil`, () => {

            it('CT1 - Gera contabilidade dos documentos sem contabil', () => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/GerarContabilidadeRetroativa`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data).to.be.a('boolean');
                    })
            })
        })
    })
})