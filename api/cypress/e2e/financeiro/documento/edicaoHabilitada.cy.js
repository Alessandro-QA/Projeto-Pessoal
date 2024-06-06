/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/EdicaoHabilitada/{documentoId} - Obtém o status do documento para edição pelo ID', () => {

            it('CT1 - Obtém o status do documento para edição pelo ID', () => {
                cy.getRequest('/api/financeiro/v1/Documento/EdicaoHabilitada/622b9bc1-8af2-4e4c-9a66-84d5156baec4')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean')

                    });
            })

        })
    })
})

