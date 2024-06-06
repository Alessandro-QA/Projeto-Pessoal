/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/Contrato/{id} - Obtém Dados do Contrato e os Recebimentos Financeiros Relacionados a ele pelo ID', () => {

            it('CT1 - Obtém Dados do Contrato e os Recebimentos Financeiros Relacionados a ele pelo ID', () => {
                cy.getRequest('/api/financeiro/v1/documento/contrato/3acf724f-1814-4676-aad2-985e398d86ec')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.valorContrato).to.be.a('number')
                        expect(response.body.valorRecebido).to.be.a('number')
                        expect(response.body.valorReceber).to.be.a('number')

                        expect(response.body.recebimentos).to.be.an('array');
                        response.body.recebimentos.forEach(recebimento => {
                            expect(recebimento).to.have.property('numeroDocumento').that.is.a('string');
                            expect(recebimento).to.have.property('valor').that.is.a('number');
                            expect(recebimento).to.have.property('status').that.is.a('number');
                        });
                    })

            })
        })
    })
})

