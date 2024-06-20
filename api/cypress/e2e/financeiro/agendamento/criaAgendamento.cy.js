/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/agendamento/criaAgendamento/criaAgendamento.description');
const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Agendamento', () => {

        let bodyedit;
        let idAgendamento;

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('financeiro')}/Agendamento - Cria, Edita e Obtém Agendamentos`, () => {

            it('CT1 - Criar Agendamento ', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical');

                cy.fixture('financeiro/agendamento/criaAgendamento/payloadCt1.json').then((payload) => {

                    // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Passando sempre a data de amanhã pro payload pois não podemos agendar um recebimento para data menor que a atual.
                    payload.dataAgendamento = tomorrowDate;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            const body = response.body;
                            expect(body.success).to.be.a('boolean');
                            expect(body.data.dataAgendamento).to.be.a('string');
                            expect(body.data.status).to.be.a('number');
                            expect(body.data.anexos).to.be.an('array');
                            expect(body.data.tags).to.be.an('array');
                            expect(body.data.tags[0].id).to.be.a('string');
                            expect(body.data.tags[0].descricao).to.be.a('string');
                            expect(body.data.id).to.be.a('string');
                            expect(body.data.tituloId).to.be.a('string');
                            expect(body.data.contaBancariaId).to.be.a('string');
                            expect(body.data.formaPagamento.id).to.be.a('string');
                            expect(body.data.formaPagamento.descricao).to.be.a('string');
                            expect(body.data.empresa.id).to.be.a('string');
                            expect(body.data.empresa.descricao).to.be.a('string');
                            expect(body.data.juros).to.be.a('number');
                            expect(body.data.multa).to.be.a('number');
                            expect(body.data.desconto).to.be.a('number');
                            expect(body.data.valor).to.be.a('number');
                            expect(body.data.valorBaixa).to.be.a('number');
                            expect(body.data.valorBaixaAlternativa).to.be.a('number');
                            expect(body.data.valorTotal).to.be.a('number');
                            expect(body.data.observacao).to.be.a('string');

                            cy.fixture('financeiro/agendamento/criaAgendamento/bodyCt1.json').then((body) => {
                                // Passando o Response do que foi retornado para o Body, pois precisará ser usado na edição
                                body = response.body.data;
                                // Passando o mesmo response para uma variável global para teste em novo cenário
                                bodyedit = response.body.data;
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body);
                            });

                            // Salvar o ID do agendamento criado para uso futuro
                            idAgendamento = response.body.data.id;

                        });
                });
            });


            it('CT2 - Editar Agendamento existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical');

                cy.fixture('financeiro/agendamento/criaAgendamento/bodyCt1.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload = bodyedit;

                    // Alterando um valor daquele que foi criado para ter alguma troca na edição
                    payload.desconto = 5;
                    payload.valorTotal = 65;

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload);
                        })
                })
            })

            it('CT3 - Obter os Agendamentos existentes', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        response.body.forEach((agendamento) => {
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
                    })
            })

            it('CT4 - Deve Deletar Agendamento pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('critical');
                
                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, idAgendamento).then((response) => {
                    expect(response.status).to.be.equal(200);
                });
            })
        });

    })
})
