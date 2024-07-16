/// <reference types='Cypress' />

 const description = require('../../../fixtures/pedidoCompra/pedidos/listagem/listagem.description');

context('Pedido Compra', () => {
    context('Pedidos', () => {
        describe(`GET - ${Cypress.env('atendimentopedidos')}/Pedidos/Listagem - Listagem de Pedidos`, () => {
            it('CT1 - Listagem de pedidos', () => {
                 cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/Listagem`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').that.equals(Cypress.env('tenant'));
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazia
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Valida cada item do array de resposta
                            response.body.forEach(pedido => {
                                expect(pedido).to.have.property('id').that.is.a('string');
                                expect(pedido).to.have.property('codigo').that.is.a('number');
                                expect(pedido).to.have.property('data').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDocumentoPrincipal').that.is.a('string');
                                expect(pedido).to.have.property('safraDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fazendaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('statusPedido').that.is.a('number');
                                expect(pedido).to.have.property('empresaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('numeroPedidoFornecedor').that.is.oneOf([null, pedido.numeroPedidoFornecedor]);
                            });
                        });
                });
            })

            it('CT2 - Listagem Pedidos com Status Aguardando Entrega', () => {
                 cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/listagem/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/Listagem`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').that.equals(Cypress.env('tenant'));
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazia
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Valida cada item do array de resposta
                            response.body.forEach(pedido => {
                                expect(pedido).to.have.property('id').that.is.a('string');
                                expect(pedido).to.have.property('codigo').that.is.a('number');
                                expect(pedido).to.have.property('data').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDocumentoPrincipal').that.is.a('string');
                                expect(pedido).to.have.property('safraDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fazendaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('statusPedido').that.is.a('number');
                                expect(pedido).to.have.property('empresaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('numeroPedidoFornecedor').that.is.oneOf([null, pedido.numeroPedidoFornecedor]);
                            });
                        });
                });
            });
            it('CT3 - Listagem Pedidos por Fornecedor', () => {
                 cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/listagem/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/Listagem`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').that.equals(Cypress.env('tenant'));
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de resposta
                            response.body.forEach(pedido => {
                                expect(pedido).to.have.property('id').that.is.a('string');
                                expect(pedido).to.have.property('codigo').that.is.a('number');
                                expect(pedido).to.have.property('data').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDocumentoPrincipal').that.is.a('string');
                                expect(pedido).to.have.property('safraDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fazendaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('statusPedido').that.is.a('number');
                                expect(pedido).to.have.property('empresaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('numeroPedidoFornecedor').that.is.oneOf([null, pedido.numeroPedidoFornecedor]);

                                // Validar que o FornecedorId no payload está presente na resposta
                                expect(pedido.fornecedorDocumentoPrincipal).to.exist;
                            });
                        });
                });
            });
            it('CT4 - Listagem de Pedidos por Safra', () => {
                 cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/listagem/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/Listagem`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').that.equals(Cypress.env('tenant'));
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de resposta
                            response.body.forEach(pedido => {
                                expect(pedido).to.have.property('id').that.is.a('string');
                                expect(pedido).to.have.property('codigo').that.is.a('number');
                                expect(pedido).to.have.property('data').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fornecedorDocumentoPrincipal').that.is.a('string');
                                expect(pedido).to.have.property('safraDescricao').that.is.a('string');
                                expect(pedido).to.have.property('fazendaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('statusPedido').that.is.a('number');
                                expect(pedido).to.have.property('empresaDescricao').that.is.a('string');
                                expect(pedido).to.have.property('numeroPedidoFornecedor').that.is.oneOf([null, pedido.numeroPedidoFornecedor]);

                                // Validar que a safraDescricao está presente e é uma string
                                expect(pedido.safraDescricao).to.be.a('string');
                            });
                        });
                });
            });
        });
    });
});