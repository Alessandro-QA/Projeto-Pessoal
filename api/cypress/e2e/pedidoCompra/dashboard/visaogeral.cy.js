/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/visaogeral/visaogeral.description');

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('atendimentopedidos')}/Dashboard/VisaoGeral - Dashboard Visão Geral`, () => {
            it('CT1 - Atendimento Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/visaogeral/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/VisaoGeral`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o header x-tenant
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Valida a estrutura do objeto 'pedidosSolicitados'
                            expect(response.body).to.have.property('pedidosSolicitados');
                            expect(response.body.pedidosSolicitados).to.have.property('quantidade').that.is.a('number');
                            expect(response.body.pedidosSolicitados).to.have.property('valorTotal').that.is.a('number');
                            expect(response.body.pedidosSolicitados).to.have.property('quantidadeItens').that.is.a('number');

                            // Valida a estrutura do objeto 'pedidosEntregues'
                            expect(response.body).to.have.property('pedidosEntregues');
                            expect(response.body.pedidosEntregues).to.have.property('quantidade').that.is.a('number');
                            expect(response.body.pedidosEntregues).to.have.property('valorTotal').that.is.a('number');
                            expect(response.body.pedidosEntregues).to.have.property('quantidadeItens').that.is.a('number');

                            // Valida a estrutura do objeto 'pedidosPendentesEntrega'
                            expect(response.body).to.have.property('pedidosPendentesEntrega');
                            expect(response.body.pedidosPendentesEntrega).to.have.property('quantidade').that.is.a('number');
                            expect(response.body.pedidosPendentesEntrega).to.have.property('valorTotal').that.is.a('number');
                            expect(response.body.pedidosPendentesEntrega).to.have.property('quantidadeItens').that.is.a('number');
                        });
                });
            });
        });
    });
});
