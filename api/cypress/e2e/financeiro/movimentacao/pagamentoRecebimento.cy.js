/// <reference types='Cypress' />

import dayjs from 'dayjs';

const description = require('../../../fixtures/financeiro/movimentacao/pagamentoRecebimento/pagamentoRecebimento.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Movimentacao/Pagamento/Recebimento - Realiza um Pagamento ou Recebimento em Movimentação Bancária `, () => {

            it('CT1 - Realizar um Pagamento', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('financeiro/movimentacao/pagamentoRecebimento/payloadCt1.json').then((payload) => {

                    // Criando um pagamento com data e Hora atual
                    const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.data = currentDateTime;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Pagamento/Recebimento`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;

                            expect(response.body).to.exist;

                            const pagamento = response.body.data
                            // Verificações para comparar o response com o payload enviado
                            expect(pagamento.data).to.equal(payload.data);
                            expect(pagamento.valor).to.equal(payload.valor);
                            expect(pagamento.tipoMovimentacao).to.equal(2);
                            expect(pagamento.dedutivel).to.equal(payload.dedutivel);
                            expect(pagamento.empresa.id).to.equal(payload.empresa.id);
                            expect(pagamento.empresa.descricao).to.equal(payload.empresa.descricao);
                            expect(pagamento.historico).to.equal(payload.historico);
                            expect(pagamento.anexos).to.deep.equal(payload.anexos);
                            expect(pagamento.contaBancariaId).to.equal(payload.contaBancariaId);
                            expect(pagamento.categoria.codigo).to.equal(payload.categoria.codigo);
                            expect(pagamento.categoria.descricao).to.equal(payload.categoria.descricao);

                            const idPagamento = pagamento.id

                            cy.wait(200)
                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao`, idPagamento).then((response) => {
                                expect(response.status).to.be.equal(200);
                            })
                        });
                });
            });

            it('CT2 - Realizar um Recebimento', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('financeiro/movimentacao/pagamentoRecebimento/payloadCt2.json').then((payload) => {

                    // Criando um pagamento com data e Hora atual
                    const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.data = currentDateTime;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Pagamento/Recebimento`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;

                            expect(response.body).to.exist;

                            const recebimento = response.body.data
                            // Verificações para comparar o response com o payload enviado
                            expect(recebimento.data).to.equal(payload.data);
                            expect(recebimento.valor).to.equal(payload.valor);
                            expect(recebimento.tipoMovimentacao).to.equal(1);
                            expect(recebimento.dedutivel).to.equal(payload.dedutivel);
                            expect(recebimento.empresa.id).to.equal(payload.empresa.id);
                            expect(recebimento.empresa.descricao).to.equal(payload.empresa.descricao);
                            expect(recebimento.historico).to.equal(payload.historico);
                            expect(recebimento.anexos).to.deep.equal(payload.anexos);
                            expect(recebimento.contaBancariaId).to.equal(payload.contaBancariaId);
                            expect(recebimento.categoria.codigo).to.equal(payload.categoria.codigo);
                            expect(recebimento.categoria.descricao).to.equal(payload.categoria.descricao);

                            const idRecebimento = recebimento.id

                            cy.wait(200)
                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao`, idRecebimento).then((response) => {
                                expect(response.status).to.be.equal(200);
                            })
                        });
                });

            });
        });
    });
});