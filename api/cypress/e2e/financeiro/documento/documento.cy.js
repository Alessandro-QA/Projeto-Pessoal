/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento - Obtém registros de documentos', () => {

            it('CT1 - Obtém Registro de Documento pelo ID', () => {
                cy.getRequest('/api/financeiro/v1/Documento/7a58cb86-be72-4881-b0ed-2a04049a9ab6')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body.id).to.equal('7a58cb86-be72-4881-b0ed-2a04049a9ab6');
                    })
            })
        })
    })
})