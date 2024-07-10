/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/details/details.description');

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Titulo/Details - Deve Ver Detalhes do Titulo`, () => {

            it('CT1 - Deve ver detalhes do Titulo', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/details/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/Details`, payload)
                        .then((response) => {
                            // Verificação do status da resposta
                            expect(response.status).to.equal(200);

                            // Verificação da estrutura do response
                            expect(response.body).to.be.an('array').and.have.length(1);

                            const titulo = response.body[0];
                            // Validação dos campos principais
                            expect(titulo).to.have.property('id').and.to.be.a('string');
                            expect(titulo).to.have.property('valor').and.to.be.a('number');
                            expect(titulo).to.have.property('saldo').and.to.be.a('number');
                            expect(titulo).to.have.property('formaPagamento').and.to.be.a('string');
                            expect(titulo).to.have.property('condicaoRecebimento').and.to.be.a('string');
                            expect(titulo).to.have.property('vencimento').and.to.be.a('string');
                            expect(titulo).to.have.property('fornecedor').and.to.be.a('string');
                            expect(titulo).to.have.property('cnpj').and.to.be.a('string');
                            expect(titulo).to.have.property('parcela').and.to.be.a('string');
                            expect(titulo).to.have.property('documentoId').and.to.be.a('string');
                            expect(titulo).to.have.property('numero').and.to.be.a('string');
                            expect(titulo).to.have.property('empresa').and.to.be.an('object');
                            expect(titulo).to.have.property('operacao').and.to.be.an('object');
                            expect(titulo).to.have.property('statusTitulo').and.to.be.a('number');
                            expect(titulo).to.have.property('historicoRecebimento').and.to.be.an('array');
                            expect(titulo).to.have.property('tags').and.to.be.an('array');

                            // Validação dos campos dentro de 'empresa'
                            expect(titulo.empresa).to.have.property('id').and.to.be.a('string');
                            expect(titulo.empresa).to.have.property('descricao').and.to.be.a('string');

                            // Validação dos campos dentro de 'operacao'
                            expect(titulo.operacao).to.have.property('id').and.to.be.a('string');
                            expect(titulo.operacao).to.have.property('descricao').and.to.be.a('string');

                            // Validação dos campos dentro de 'historicoRecebimento'
                            titulo.historicoRecebimento.forEach((historico) => {
                                expect(historico).to.have.property('data').and.to.be.a('string');
                                expect(historico).to.have.property('valor').and.to.be.a('number');
                                expect(historico).to.have.property('juros').and.to.be.a('number');
                                expect(historico).to.have.property('multa').and.to.be.a('number');
                                expect(historico).to.have.property('desconto').and.to.be.a('number');
                                expect(historico).to.have.property('variacaoCambial').and.to.be.a('number');
                                expect(historico).to.have.property('valorRecebido').and.to.be.a('number');
                                expect(historico).to.have.property('contaBancaria').and.to.be.a('string');
                                expect(historico).to.have.property('tipoBaixa').and.to.be.a('number');
                            });

                            // Validação dos campos dentro de 'tags'
                            titulo.tags.forEach((tag) => {
                                expect(tag).to.have.property('id').and.to.be.a('string');
                                expect(tag).to.have.property('descricao').and.to.be.a('string');
                            });

                        });
                });

            });
        });
    });
})
