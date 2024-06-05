/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/EdicaoOrigemHabilitada - Obtém indicação de que o documento pode ser editado pelo origemId', () => {

            it('CT1 - Obtém indicação de que o documento pode ser editado pelo origemId', () => {
                cy.getRequest('/api/financeiro/v1/Documento/EdicaoOrigemHabilitada/7a58cb86-be72-4881-b0ed-2a04049a9ab6')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.a('boolean')
                    })
            })
        })
    })
})

