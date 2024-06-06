/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/VerificarSaldoDocumentoPelaOrigem - Obtém o Saldo do Documento pela Origem', () => {

            it('CT1 - Obtém o Saldo do Documento pela Origem', () => {
                cy.fixture('financeiro/documento/verificarSaldoDocumentoPelaOrigem/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Documento/VerificarSaldoDocumentoPelaOrigem', params)
                        .then((response) => {
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;
                            expect(response.body.saldo).to.be.a('number');

                        });
                })
            })
        })
    })
})

