/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe(`GET - ${Cypress.env('financeiro')}/LivroCaixa/ProdutorLivroCaixa - Obtém o Resultado do Saldo Atual do IR`, () => {
            it('CT1 - Deve obter o Resultado do Saldo Atual do IR', () => {
                cy.fixture('financeiro/livroCaixa/calculoIR/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa/CalculoIr`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;
                        });
                });
            });
        });
    });
});
