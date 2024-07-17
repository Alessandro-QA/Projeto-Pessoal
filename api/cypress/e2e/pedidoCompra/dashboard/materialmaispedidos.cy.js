/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/dashboard/materialmaispedidos/materialmaispedidos.description');


context('Pedido Compra', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('pedidoCompra')}Dashboard/Material/MaisPedidos - Dashboard Materiais Mais Pedidos`, () => {
            it('CT1 - Materiais Mais Pedidos com Parâmetros Padrão', () => {
                 cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/materialmaispedidos/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/Material/MaisPedidos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de materiais mais pedidos
                            response.body.forEach((material) => {
                                // Validar campo 'nomeMaterial'
                                expect(material).to.have.property('nomeMaterial').that.is.a('string');

                                // Validar campo 'unidadeMedida'
                                expect(material).to.have.property('unidadeMedida').that.is.a('string');

                                // Validar campo 'valor'
                                expect(material).to.have.property('valor').that.is.a('number');

                                // Validar campo 'quantidade'
                                expect(material).to.have.property('quantidade').that.is.a('number');
                            });
                        });
                });
            });


            it('CT2 - Materiais Mais Pedidos para Fazenda Específica', () => {
                 cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('pedidoCompra/dashboard/materialmaispedidos/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Dashboard/Material/MaisPedidos`, params)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200);

                            // Verifica se o corpo da resposta existe e não é nulo
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica se a resposta é um array e não está vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Validar cada item do array de materiais mais pedidos
                            response.body.forEach((material) => {
                                // Validar tipo e existência de propriedades
                                expect(material).to.have.property('nomeMaterial').that.is.a('string');
                                expect(material).to.have.property('unidadeMedida').that.is.a('string');
                                expect(material).to.have.property('valor').that.is.a('number');
                                expect(material).to.have.property('quantidade').that.is.a('number');

                                // Validar que o material "Soja" está presente 
                                if (material.nomeMaterial === 'Soja') {
                                    expect(material.nomeMaterial).to.equal('Soja');
                                    expect(material.unidadeMedida).to.equal('kg');
                                    expect(material.valor).to.be.a('number');
                                    expect(material.quantidade).to.be.a('number');
                                }
                            });
                        });
                });
            });
        });
    });
});
