/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/maioresnegociacoes/maioresnegociacoes.description');

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Dashboard/MaioresNegociacoes - Maiores Negociações`, () => {
            it('CT1 - Negociações por Fornecedor com parâmetros padrão', () => {
                 cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/maioresnegociacoes/paramsCt1.json').then((params) => {
                    // Faz a requisição com os parâmetros especificados
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/MaioresNegociacoes`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazia
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de negociações
                            response.body.forEach((negociacao) => {
                                // Validar campo 'fornecedor'
                                expect(negociacao).to.have.property('fornecedor').that.is.a('string');

                                // Validar campo 'valor'
                                expect(negociacao).to.have.property('valor').that.is.a('number');

                                // Validar campo 'proporcao'
                                expect(negociacao).to.have.property('proporcao').that.is.a('number');
                            });

                            // Validar a existência do fornecedor esperado
                            const fornecedorTesteAPI = response.body.find(negociacao => negociacao.fornecedor === 'Fornecedor Teste API');

                            expect(fornecedorTesteAPI).to.exist;
                        });
                });
            });
            it('CT2 - Negociações por Fornecedor com Fazenda e Safra', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/maioresnegociacoes/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/MaioresNegociacoes`, params)
                        .then((response) => {
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            response.body.forEach((negociacao) => {
                                expect(negociacao).to.have.property('fornecedor').that.is.a('string');
                                expect(negociacao).to.have.property('valor').that.is.a('number');
                                expect(negociacao).to.have.property('proporcao').that.is.a('number');
                            });

                            const fornecedor2 = response.body.find(negociacao => negociacao.fornecedor === 'Fornecedor 2');
                            expect(fornecedor2).to.exist;
                        });
                });
            });
        });
    });
});
