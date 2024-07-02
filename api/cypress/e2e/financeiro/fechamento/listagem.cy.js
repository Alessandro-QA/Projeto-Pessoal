/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/fechamento/listagem/listagem.description');

context('Financeiro', () => {
    context('Fechamento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Fechamento/Listagem - Listagem`, () => {

            it('CT1 - Listagem de fechamento com 1 empresa', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/fechamento/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/fechamento/Listagem`, payload)
                        .then((response) => {
                            expect(response.status).to.equal(200);

                            // Verificação dos dados do response
                            expect(response.body).to.be.an('array');
                            response.body.forEach((item) => {
                                expect(item).to.have.property('id').that.is.a('string');
                                expect(item).to.have.property('empresa').that.is.an('object');
                                expect(item.empresa).to.have.property('id').that.is.a('string');
                                expect(item.empresa).to.have.property('descricao').that.is.a('string');
                                expect(item).to.have.property('tipo').that.is.a('number');
                                expect(item).to.have.property('data').that.is.a('string');
                                expect(item).to.have.property('excecoes').that.is.an('array');

                                item.excecoes.forEach((excecao) => {
                                    expect(excecao).to.have.property('id').that.is.a('string');
                                    expect(excecao).to.have.property('fechamentoId').that.is.a('string');
                                    expect(excecao).to.have.property('perfil').that.is.an('object');
                                    expect(excecao.perfil).to.have.property('id').that.is.a('string');
                                    expect(excecao.perfil).to.have.property('descricao').that.is.a('string');
                                });
                            });
                        });
                });
            });

            it('CT2 - Listagem de fechamento de empresas por ID', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal');

                cy.fixture('financeiro/fechamento/listagem/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/fechamento/Listagem`, payload)
                        .then((response) => {
                            expect(response.status).to.equal(200);

                            // Verifica se o response é um array (caso esteja retornando mais de um fechamento)
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Itera sobre cada fechamento no response
                            response.body.forEach((fechamento) => {
                                // Verifica os campos principais de cada fechamento
                                expect(fechamento).to.have.property('id').that.is.a('string');
                                expect(fechamento.empresa).to.have.property('id').that.is.a('string');
                                expect(fechamento.empresa).to.have.property('descricao').that.is.a('string');
                                expect(fechamento.tipo).to.be.a('number');
                                expect(fechamento.data).to.be.a('string');

                                // Verifica as exceções
                                expect(fechamento.excecoes).to.be.an('array');
                                fechamento.excecoes.forEach((excecao) => {
                                    expect(excecao).to.have.property('id').that.is.a('string');
                                    expect(excecao).to.have.property('fechamentoId').that.is.a('string');
                                    expect(excecao.perfil).to.have.property('id').that.is.a('string');
                                    expect(excecao.perfil).to.have.property('descricao').that.is.a('string');
                                });
                            });
                        });
                });
            });
        });
    });
});
