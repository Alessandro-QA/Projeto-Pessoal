/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/ValoresReceberRecebido - Obtém Valores Recebidos ou a Receber por filtro', () => {

            it('CT1 - Obtém Valores Recebidos ou a Receber por filtro', () => {
                cy.fixture('financeiro/documento/valoresReceberRecebido/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Documento/ValoresReceberRecebido', params)
                        .then((response) => {
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;
                            expect(response.body.valorRecebido).to.be.a('number');
                            expect(response.body.valorReceber).to.be.a('number');
                        })
                })
            })
        })
    })
})
