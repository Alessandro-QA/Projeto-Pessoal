/// <reference types='Cypress' />

import dayjs from 'dayjs';

const description = require('../../../fixtures/financeiro/movimentacao/transferencia/transferencia.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Movimentacao/Transferencia - Realiza uma Transferencia entre Contas em Movimentação Bancária `, () => {

            it('CT1 - Realizar uma Transferência', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('financeiro/movimentacao/transferencia/payloadCt1.json').then((payload) => {

                    // Criando um pagamento com data e Hora atual
                    const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.data = currentDateTime;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Transferencia`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;

                            expect(response.body).to.exist;

                            const transferencia = response.body.data
                            
                            expect(transferencia.id).to.be.a('string');
                            expect(transferencia.data).to.be.equal(payload.data);
                            expect(transferencia.valor).to.be.equal(payload.valor);
                            expect(transferencia.contaBancariaOrigemId).to.be.equal(payload.contaBancariaOrigemId);
                            expect(transferencia.contaBancariaDestinoId).to.be.equal(payload.contaBancariaDestinoId);
                            expect(transferencia.empresa.id).to.be.equal(payload.empresa.id);
                            expect(transferencia.empresa.descricao).to.be.equal(payload.empresa.descricao);
                            expect(transferencia.empresaDestino.id).to.be.equal(payload.empresaDestino.id);
                            expect(transferencia.empresaDestino.descricao).to.be.equal(payload.empresaDestino.descricao);
                            expect(transferencia.historico).to.be.equal(payload.historico);
                            expect(transferencia.anexos).to.be.deep.equal(payload.anexos);

                            const idTransferencia = transferencia.id

                            cy.wait(200)
                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao`, idTransferencia).then((response) => {
                                expect(response.status).to.be.equal(200);
                            })
                        });
                });
            });      
        });
    });
});