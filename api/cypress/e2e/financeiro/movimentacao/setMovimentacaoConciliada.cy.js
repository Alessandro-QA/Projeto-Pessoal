/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/setMovimentacaoConciliada/setMovimentacaoConciliada.description');
import dayjs from 'dayjs';

context('Financeiro', () => {
    context('Movimentacao', () => {
        describe(`PUT - ${Cypress.env('financeiro')}/Movimentacao/SetMovimentacaoConciliada - Define a Movimentação como Conciliada e Adiciona uma Data Conciliação`, () => {

            it('CT1 - Adiciona data conciliação para uma única movimentação', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/setMovimentacaoConciliada/payloadCt1.json').then((payload) => {

                    // Criando uma conciliação com data e Hora atual
                    const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
                    payload.dataConciliacao = currentDateTime;

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/SetMovimentacaoConciliada`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Validando se documento recebeu a data de conciliação
                            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${payload.movimentacaoId}`)
                                .then((responseGet) => {
                                    expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                    expect(responseGet.status).to.be.equal(200);

                                    expect(responseGet.body.dataConciliacao).to.be.equal(payload.dataConciliacao)
                                });
                        });
                });
            });

            it('CT2 - Adiciona data conciliação em lote', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/setMovimentacaoConciliada/payloadCt2.json').then((payload) => {

                    // Criando uma conciliação com data e Hora atual
                    const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
                    payload[0].dataConciliacao = currentDateTime;
                    payload[1].dataConciliacao = currentDateTime;
                    payload[2].dataConciliacao = currentDateTime;

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/SetMovimentacoesConciliadas`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Validando se documentos receberam a data de conciliação
                            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${payload[0].movimentacaoId}`)
                                .then((responseGet) => {
                                    expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                    expect(responseGet.status).to.be.equal(200);

                                    expect(responseGet.body.dataConciliacao).to.be.equal(payload[0].dataConciliacao)
                                });

                            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${payload[1].movimentacaoId}`)
                                .then((responseGet) => {
                                    expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                    expect(responseGet.status).to.be.equal(200);

                                    expect(responseGet.body.dataConciliacao).to.be.equal(payload[1].dataConciliacao)
                                });

                            cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${payload[2].movimentacaoId}`)
                                .then((responseGet) => {
                                    expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                    expect(responseGet.status).to.be.equal(200);

                                    expect(responseGet.body.dataConciliacao).to.be.equal(payload[2].dataConciliacao)
                                });
                        });
                });
            });
        });
    });
});