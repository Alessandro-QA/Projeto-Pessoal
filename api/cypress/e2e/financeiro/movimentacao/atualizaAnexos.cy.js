/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/atualizaAnexos/atualizaAnexos.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`PUT - ${Cypress.env('financeiro')}/Movimentacao/{id}/AtualizaAnexos - Atualiza os Anexos da Movimentação`, () => {

            it('CT1 - Adicionar um Anexo a Movimentação Bancária', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/atualizaAnexos/paramsCt1.json').then((params) => {
                    cy.fixture('financeiro/movimentacao/atualizaAnexos/payloadCt1.json').then((payload) => {
                        cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}/AtualizaAnexos`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                expect(response.status).to.be.equal(200);
                                expect(response.body).to.exist;
                                expect(response.body).to.not.be.null;

                                expect(response.body.data.fileName).to.be.equal(payload.fileName)

                                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}`)
                                    .then((responseGet) => {
                                        expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                        expect(responseGet.status).to.be.equal(200);

                                        expect(response.body.data.id).to.be.equal(responseGet.body.anexos.id)
                                        expect(response.body.data.fileName).to.be.equal(responseGet.body.anexos.fileName)
                                        expect(response.body.data.url).to.be.equal(responseGet.body.anexos.url)
                                    });
                            });
                    });
                });
            });

            it('CT2 - Removendo o Anexo adicionado da Movimentação Bancária', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/atualizaAnexos/paramsCt1.json').then((params) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}/AtualizaAnexos`, [])
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;


                            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacao}`)
                                .then((responseGet) => {
                                    expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                    expect(responseGet.status).to.be.equal(200);

                                    expect(responseGet.body.anexos).to.be.empty

                                });

                        });
                });
            });
        });
    });
});