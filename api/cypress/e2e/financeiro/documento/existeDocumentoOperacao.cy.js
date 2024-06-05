/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/ExisteDocumentoOperacao/{operacaoId} - Verifica se Existe Documento para a Operação', () => {

            it('CT1 - Verifica que Existe Documento para a Operação', () => {
                cy.getRequest('/api/financeiro/v1/Documento/ExisteDocumentoOperacao/7cd539ea-66bb-4ff2-9258-e994391a0fd5')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')
                        expect(response.body.data).be.equal(true)
                    })
            })

            it('CT2 - Verifica que NÃO Existe Documento para a Operação', () => {
                cy.getRequest('/api/financeiro/v1/Documento/ExisteDocumentoOperacao/a5fc5df8-7188-9327-13d9-67b0bb712c7e')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')
                        expect(response.body.data).be.equal(false)
                    })
            })
        })
    })
})