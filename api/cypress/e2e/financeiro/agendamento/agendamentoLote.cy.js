/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/agendamento/agendamentoLote/agendamentoLote.description');
const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Agendamento', () => {

        describe(`POST - ${Cypress.env('financeiro')}/AgendamentoLote - Cria Agendamentos Agrupados em Lote`, () => {

            it('CT1 - Cria Agendamentos Agrupados em Lote', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');
                
                cy.fixture('financeiro/agendamento/agendamentoLote/payloadCt1.json').then((payload) => {

                    // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Passando sempre a data de amanhã pra cada dataAgendamento do payload pois não podemos agendar um recebimento para data menor que a atual.
                    payload.agendamentos.forEach((agendamento) => {
                        agendamento.dataAgendamento = tomorrowDate;
                    });

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento/AgendamentoLote`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            response.body.data.forEach((agendamento) => {
                                expect(agendamento.dataAgendamento).to.be.a('string');
                                expect(agendamento.status).to.be.a('number');
                                expect(agendamento.anexos).to.be.an('array');
                                expect(agendamento.tags).to.be.an('array');
                                expect(agendamento.id).to.be.a('string');
                                expect(agendamento.tituloId).to.be.a('string');
                                expect(agendamento.contaBancariaId).to.be.a('string');
                                expect(agendamento.juros).to.be.a('number');
                                expect(agendamento.multa).to.be.a('number');
                                expect(agendamento.desconto).to.be.a('number');
                                expect(agendamento.valor).to.be.a('number');
                                expect(agendamento.valorBaixa).to.be.a('number');
                                expect(agendamento.valorBaixaAlternativa).to.be.a('number');
                                expect(agendamento.valorTotal).to.be.a('number');
                            });

                            const agendamento1 = response.body.data[0].id
                            const agendamento2 = response.body.data[1].id
                            const agendamento3 = response.body.data[2].id

                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, agendamento1).then((responseDelete) => {
                                expect(responseDelete.status).to.be.equal(200);
                            });

                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, agendamento2).then((responseDelete) => {
                                expect(responseDelete.status).to.be.equal(200);
                            });

                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, agendamento3).then((responseDelete) => {
                                expect(responseDelete.status).to.be.equal(200);
                            });

                        });
                });
            });
        });
    });
});