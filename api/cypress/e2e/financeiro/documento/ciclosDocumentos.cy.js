/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/v1/Documento/CiclosDocumentos - Obtém Ciclos Utilizados nos Documentos`, () => {
            it('CT1 - Obtém Ciclos Utilizados nos Documentos', () => {
                cy.fixture('financeiro/documento/ciclosDocumentos/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/CiclosDocumentos`, params)
                        .then((response) => {
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            response.body.forEach(item => {
                                expect(item).to.have.property('id').that.is.a('string');
                                expect(item).to.have.property('descricao').that.is.a('string');
                                // Adicione mais asserções conforme necessário para cada item do array
                            });
                        });
                });
            });
        });
    });
});
