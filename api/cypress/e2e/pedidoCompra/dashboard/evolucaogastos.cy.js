/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/evolucaogastos/evolucaogastos.description');
const dayjs = require('dayjs');

context('Pedido Compra', () => {
    context('Atendimentos Pedidos', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}/Dashboard/EvolucaoGastos - Evolução de Gastos`, () => {
            it('CT1 - Evolução de Gastos', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/evolucaogastos/paramsCt1.json').then((params) => {
                    // Obter a data de um ano atrás para DataInicio
                    const dataInicio = dayjs().subtract(1, 'year').format('YYYY-MM-DDTHH:mm:ssZ');
                    // Obter a data de hoje para DataFim
                    const dataFim = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

                    params.DataInicio = dataInicio;
                    params.DataFim = dataFim;

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

