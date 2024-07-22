/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/pedidos/criarpedidos/criarpedidos.description')
const { validatePedidos } = require('../../../fixtures/pedidoCompra/pedidos/criarpedidos/validate')
const dayjs = require('dayjs');

context('Pedido Compra', () => {
    context('Criar Pedidos', () => {

        let idpedidos
        let idpedidoPagamentoParcelas
        let idpedidoPagamento
        let codigoPedido
        let idPedidosMateriais

        describe(`POST/PUT/PATCH/GET/DELETE - ${Cypress.env('pedidoCompra')}/Pedidos - Criar Pedidos`, () => {
            it('CT1 - Criação de Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/criarpedidos/payloadCt1.json').then((payload) => {
                    // Gera um número de pedido aleatório
                    let randomNumber = Math.floor(Math.random() * 1000000)
                    payload.numeroPedidoFornecedor = randomNumber // Adiciona o número de pedido ao payload

                    // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.data = tomorrowDate;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)
                            // Armazenar o ID do pedido criado
                            idpedidos = response.body.data.id
                            idpedidoPagamento = response.body.data.pedidoPagamento.id
                            idpedidoPagamentoParcelas = response.body.data.pedidoPagamento.pedidoPagamentoParcelas[0].id
                            codigoPedido = response.body.data.codigo
                            idPedidosMateriais = response.body.data.pedidoMateriais[0].id

                            validatePedidos(response.body.data)
                        })
                })
            })

            it('CT2 - Editar de Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.log(idPedidosMateriais)

                cy.fixture('pedidoCompra/pedidos/criarpedidos/payloadCt2.json').then((payload) => {

                    payload.pedidoPagamento.pedidoPagamentoParcelas[0].id = idpedidoPagamentoParcelas
                    payload.pedidoPagamento.id = idpedidoPagamento
                    payload.codigo = codigoPedido
                    payload.pedidoMateriais[0].id = idPedidosMateriais

                    payload.id = idpedidos
                    let randomNumber = Math.floor(Math.random() * 1000000)
                    payload.numeroPedidoFornecedor = randomNumber // Adiciona o número de pedido ao payload

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos`, payload).then((response) => {
                        cy.log(payload.pedidoMateriais.id)
                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)

                        validatePedidos(response.body.data)
                    })
                })
            })

            it('CT3 - Obter Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/${idpedidos}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;

                        validatePedidos(response.body);
                    });
            });

            it('CT4 - Deve patchear um Pedido', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('pedidoCompra/pedidos/criarpedidos/payloadCt3.json').then((payload) => {

                    cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos/${idpedidos}`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                        });
                });
            });

            it('CT5 - Excluir Pedidos', () => {
                cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Pedidos`, idpedidos).then((response) => {
                    // Verifica o status code da resposta
                    expect(response.status).to.equal(200)
                    // Verifica o corpo da resposta
                    expect(response.body).to.have.property('success', true)
                    expect(response.body).to.have.property('data', true)
                })
            })

        })
    })
})