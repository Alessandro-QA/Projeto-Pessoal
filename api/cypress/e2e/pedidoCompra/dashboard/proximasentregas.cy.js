/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/proximasentregas/proximas.description');


context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('atendimentopedidos')}/Dashboard/ProximasEntregas - Dashboard Proximas Entregas`, () => {
            it('CT1 - Proximas Entregas', () => {
                 cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/proximasentregas/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/ProximasEntregas`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de proximas entregas
                            response.body.forEach((entrega) => {
                                // Validar campo 'codigoPedido'
                                expect(entrega).to.have.property('codigoPedido').that.is.a('number');

                                // Validar campo 'fornecedorDescricao'
                                expect(entrega).to.have.property('fornecedorDescricao').that.is.a('string');

                                // Validar campo 'quantidadeItens'
                                expect(entrega).to.have.property('quantidadeItens').that.is.a('number');

                                // Validar campo 'dataEntrega'
                                expect(entrega).to.have.property('dataEntrega').that.is.a('string');
                            });
                        });
                });
            });

            it('CT2 - Proximas Entregas com FazendaId', () => {
                 cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/proximasentregas/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/ProximasEntregas`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de proximas entregas
                            response.body.forEach((entrega) => {
                                // Validar campo 'codigoPedido'
                                expect(entrega).to.have.property('codigoPedido').that.is.a('number');

                                // Validar campo 'fornecedorDescricao'
                                expect(entrega).to.have.property('fornecedorDescricao').that.is.a('string');

                                // Validar campo 'quantidadeItens'
                                expect(entrega).to.have.property('quantidadeItens').that.is.a('number');

                                // Validar campo 'dataEntrega'
                                expect(entrega).to.have.property('dataEntrega').that.is.a('string');
                            });
                        });
                });
            });
        });
    });
});
