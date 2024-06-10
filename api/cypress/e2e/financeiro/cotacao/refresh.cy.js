/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Cotacao', () => {
        describe('POST - /api/financeiro/v1/Cotacao/Refresh - Atualiza Cotações', () => {

            it('CT1 - Atualiza Cotações', () => {
                cy.postRequest('/api/financeiro/v1/Cotacao/Refresh', {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')
                        expect(response.body.data).to.be.a('boolean')
                    })
            })
        })
    })
})
