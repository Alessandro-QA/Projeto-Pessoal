/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {

        let livroCaixaID;
        let livroCaixaOrigem;

        describe(`POST/PATCH/PUT/DELETE - ${Cypress.env('financeiro')}/LivroCaixa - Criar Lançamento Livro Caixa`, () => {
            it('CT1 - Deve criar um lançamento do livro caixa', () => {
                cy.fixture('financeiro/livroCaixa/criarLivroCaixa/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).be.not.null;
                            expect(response.body).to.exist;

                            livroCaixaID = response.body.data.id;
                            livroCaixaOrigem = response.body.data.origemId;
                            expect(livroCaixaID).to.not.be.undefined;
                        });
                });
            });

            it('CT2 - Deve editar um lançamento do livro caixa', () => {
                cy.fixture('financeiro/livroCaixa/criarLivroCaixa/payloadCt2.json').then((payload) => {
                    payload.id = livroCaixaID;
                    payload.origemId = livroCaixaOrigem;
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).be.not.null;
                            expect(response.body).to.exist;
                            expect(response.body.data.valor).to.be.equal(60);
                        });
                });
            });

            it('CT3 - Deve patchear um lançamento do livro caixa', () => {
                cy.fixture('financeiro/livroCaixa/criarLivroCaixa/payloadCt3.json').then((payload) => {
                    cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa/${livroCaixaID}`, payload)
                        .then((response) => {
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                        });
                });
            });

            it('CT4 - Deve Redefinir um lançamento do livro caixa', () => {
                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa/Reset/${livroCaixaID}`, livroCaixaID)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).be.equal(200);
                        expect(response.body).be.not.null;
                        expect(response.body).to.exist;
                        expect(response.body.valor).to.be.equal(50);
                    });
            });

            it('CT5 - Deve Deletar Lançamento', () => {
                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa`, livroCaixaID)
                    .then((response) => {
                        expect(response.status).be.equal(200);
                    });
            });

        });
    });
});