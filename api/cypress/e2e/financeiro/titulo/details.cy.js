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
                            expect(titulo).to.have.property('id').that.is.a('string');
                            expect(titulo).to.have.property('valor', 40);
                            expect(titulo).to.have.property('saldo', 40);
                            expect(titulo).to.have.property('formaPagamento', 'Boleto');
                            expect(titulo).to.have.property('condicaoRecebimento', 'A vista');
                            expect(titulo).to.have.property('vencimento', '2024-07-06T14:13:53-03:00');
                            expect(titulo).to.have.property('fornecedor', 'Empresa 2');
                            expect(titulo).to.have.property('cnpj', '80010705000129');
                            expect(titulo).to.have.property('parcela', '1/1');
                            expect(titulo).to.have.property('documentoId', '50c3b878-ee4e-4b84-b3e9-91575d673924');
                            expect(titulo).to.have.property('numero', '629604');
                            
                            // Verificação da estrutura de empresa
                            expect(titulo).to.have.property('empresa').that.is.an('object');
                            expect(titulo.empresa).to.have.property('id', '44e2d617-2d9d-4b4f-8138-7d1f1739a599');
                            expect(titulo.empresa).to.have.property('descricao', 'Empresa Teste API');

                            expect(titulo).to.have.property('numeroBoleto', '78999998521477545454544844845456656251515848485');

                            // Verificação da estrutura de operacao
                            expect(titulo).to.have.property('operacao').that.is.an('object');
                            expect(titulo.operacao).to.have.property('id', '333aab40-3979-9b1a-526b-b725254c6100');
                            expect(titulo.operacao).to.have.property('descricao', 'Água e Esgoto');

                            expect(titulo).to.have.property('statusTitulo', 4);
                            expect(titulo).to.have.property('historicoRecebimento').that.is.an('array').and.be.empty;

                            });
                    });

                });
            });
        });
    })
