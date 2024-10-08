/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Enum', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Enum/FilterTipoMovimentacaoLivroCaixa - Obtém todos os registros do Enum FilterTipoMovimentacaoLivroCaixa`, () => {

            it('CT1 - Obtém todos os registros do Enum FilterTipoMovimentacaoLivroCaixa', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Enum/FilterTipoMovimentacaoLivroCaixa`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).be.not.null;
                        expect(response.body).to.be.an('array').that.is.not.empty;
                        cy.fixture('financeiro/enum/tipoMovimentacaoLivroCaixa/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body);
                        });
                    });
            });
        });
    });
});