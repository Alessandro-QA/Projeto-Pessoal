/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Documento/Origem/{origemId}/Infomacoes - Obtém modelo com informações básicas do OrigemID`, () => {

            it('CT1 - Obtém modelo com informações básicas do OrigemID', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/Origem/c8166fe7-a9a1-47ea-a387-734297f67429/Informacoes`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data.origemId).be.equal('c8166fe7-a9a1-47ea-a387-734297f67429')
                        expect(response.body.data.possuiDocumentoFinanceiro).to.be.a('boolean')
                        expect(response.body.data.edicaoHabilitada).to.be.a('boolean')
                    })
            })
        })
    })
})
