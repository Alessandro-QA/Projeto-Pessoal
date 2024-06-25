/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/efetuarbaixapedidosfinalizados/efetuarbaixapedidosfinalizados.description');


context('Financeiro', () => {
    context('Titulo', () => {
        describe(`POST - ${Cypress.env('financeiro')}Titulo/EfetuarBaixaPedidosFinalizados - Efetuar Baixa Pedidos Finalizados`, () => {

            it('CT1 - Deve Efetuar Baixa Pedidos Finalizados', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/efetuarbaixapedidosfinalizados/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/EfetuarBaixaPedidosFinalizados`, payload)
                        .then((response) => {
                            // Verificação do status da resposta
                            expect(response.status).to.equal(200);

                            // Verificação da estrutura do response
                            expect(response.body).to.have.property('success', true);
                            expect(response.body).to.have.property('data', false);

                        });
                });

            });
        });
    });
})
