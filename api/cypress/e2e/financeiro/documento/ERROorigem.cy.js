/// <reference types='Cypress' />

//NÃO ESTÁ PRONTO!!!! COM ERRO!! 

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/Origem/{acao}/{id} - Obtém Documento pela ação e ID', () => {

            it('CT1 - Obtém Documento pela ação e ID', () => {
                cy.fixture('financeiro/documento/origem/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Documento/Origem', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            //expect(response.body.data.origemId).be.equal('c8166fe7-a9a1-47ea-a387-734297f67429')
                            //expect(response.body.data.possuiDocumentoFinanceiro).to.be.a('boolean')
                            //expect(response.body.data.edicaoHabilitada).to.be.a('boolean')
                        })
                })
            })
        })
    })
})

