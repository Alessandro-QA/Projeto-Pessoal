/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/evolucaogastos/evolucaogastos.description');
const dayjs = require('dayjs');

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('atendimentopedidos')}/Dashboard/EvolucaoGastos - Evolução de Gastos`, () => {
            it('CT1 - Evolução de Gastos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/evolucaogastos/paramsCt1.json').then((params) => {
                    // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Ajustar o campo DataFim para a data de amanhã
                    params.DataFim = tomorrowDate;

                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/EvolucaoGastos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);
                            
                            // Verifica o corpo da resposta
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de resposta
                            response.body.forEach(item => {
                                // Validar campo 'nomeCategoria'
                                expect(item).to.have.property('nomeCategoria').that.is.a('string');

                                // Validar campo 'valorMateriais'
                                expect(item).to.have.property('valorMateriais').that.is.a('number');

                                // Validar campo 'data'
                                expect(item).to.have.property('data').that.is.a('string');
                            });
                        });
                });
            });
        })
    })
});
