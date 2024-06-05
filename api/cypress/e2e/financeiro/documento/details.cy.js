/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('POST - /api/financeiro/v1/Documento/Details - Obtém detalhes de Documentos pelos IDs', () => {

            it('CT1 - Obter detalhes de Documentos pelos IDs', () => {
                cy.fixture('financeiro/documento/details/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Documento/Details', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verifica se cada documento retornado contém o ID que foi enviado na requisição
                            payload.forEach((idEnviado) => {
                                const documentoEncontrado = response.body.find(doc => doc.id === idEnviado);
                                expect(documentoEncontrado).to.exist;
                            });
                        })
                })
            })
        })
    })
})
