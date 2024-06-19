/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/listagem/listagem.description');

// Função para validar o tipo e estrutura dos campos
function validarCamposMovimentacao(movimentacao) {
    expect(movimentacao).to.have.property('data').that.is.a('string');
    expect(movimentacao).to.have.property('id').that.is.a('string');
    expect(movimentacao).to.have.property('tipo').that.is.a('number');
    expect(movimentacao).to.have.property('fator').that.is.a('number');
    expect(movimentacao).to.have.property('categoria').that.is.a('string');
    expect(movimentacao).to.have.property('contaBancaria').that.is.an('object');
    expect(movimentacao.contaBancaria).to.have.property('id').that.is.a('string');
    expect(movimentacao.contaBancaria).to.have.property('descricao').that.is.a('string');
    expect(movimentacao).to.have.property('valorMovimentacao').that.is.a('number');
    expect(movimentacao).to.have.property('conferido').that.is.a('boolean');
}

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Movimentacao/Listagem - Obtém os Registros de Movimentação`, () => {

            it('CT1 - Obter Todos tipos de Registros de Movimentação', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Validar saldoTotal
                            expect(response.body).to.have.property('saldoTotal').that.is.a('number');

                            // Validar movimentacoes
                            expect(response.body).to.have.property('movimentacoes').that.is.an('array');
                            response.body.movimentacoes.forEach(movimentacao => {
                                validarCamposMovimentacao(movimentacao);
                            });

                        });
                });
            });

            it('CT2 - Obter os Registros de Movimentação filtrados por Conta', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/listagem/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Validar saldoTotal
                            expect(response.body).to.have.property('saldoTotal').that.is.a('number');

                            // Validar movimentacoes
                            expect(response.body).to.have.property('movimentacoes').that.is.an('array');
                            response.body.movimentacoes.forEach(movimentacao => {
                                validarCamposMovimentacao(movimentacao);
                                expect(movimentacao.contaBancaria.id).to.be.equal(payload.ContaBancariaId)
                            });

                        });
                });
            });

            it('CT3 - Obter os Registros de Movimentação filtrados por Categoria', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/listagem/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            //Validar saldoTotal
                            expect(response.body).to.have.property('saldoTotal').that.is.a('number');

                            // Validar movimentacoes
                            expect(response.body).to.have.property('movimentacoes').that.is.an('array');
                            response.body.movimentacoes.forEach(movimentacao => {
                                validarCamposMovimentacao(movimentacao);
                                expect(movimentacao.categoria).to.be.equal("Caixa Geral")  // Passando o texto da categoria diretamente no código devido ao fato de passar o Código da Categoria no Payload e ser retornado a sua Descrição
                            });

                        });
                });
            });

            it.only('CT4 - Obter os Registros de Movimentação filtrados por Pessoa', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/listagem/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            //Validar saldoTotal
                            expect(response.body).to.have.property('saldoTotal').that.is.a('number');

                            // Validar movimentacoes
                            expect(response.body).to.have.property('movimentacoes').that.is.an('array');
                            response.body.movimentacoes.forEach(movimentacao => {
                                validarCamposMovimentacao(movimentacao);
                            });

                        });
                });
            });



        });
    });
});