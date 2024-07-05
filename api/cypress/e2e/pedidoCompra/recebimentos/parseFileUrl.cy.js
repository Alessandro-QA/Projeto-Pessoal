/// <reference types='Cypress' />

const description = require('../../../fixtures/pedidoCompra/recebimentos/parseFileUrl/parseFileUrl.description');

context('Pedido Compra', () => {
    context('Recebimentos', () => {
        describe(`POST - ${Cypress.env('pedidoCompra')}/Recebimentos/ParseFileUrl - Realiza o Recebimento Automático via Link de Arquivo XML`, () => {
            it('CT1 - Carregar link de XML Brasileiro para validação dos dados carregados automaticamente ', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('pedidoCompra/recebimentos/parseFileUrl/paramsCt1.json').then((params) => {
                    cy.postRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos/ParseFileUrl`, params)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            cy.readFile('cypress/fixtures/pedidoCompra/recebimentos/parseFileUrl/bodyCt1.json').then((body) => {

                                // Esses campos são diferentes para cada importação 
                                body.data.urlArquivo = response.body.data.urlArquivo
                                body.data.dataRecebimento = response.body.data.dataRecebimento
                                body.data.financeiro.id = response.body.data.financeiro.id
                                body.data.financeiro.pedidoPagamentoParcelas[0].id = response.body.data.financeiro.pedidoPagamentoParcelas[0].id
                                body.data.financeiro.pedidoPagamentoParcelas[0].dataVencimento = response.body.data.financeiro.pedidoPagamentoParcelas[0].dataVencimento
                                body.data.chaveNFe =response.body.data.chaveNFe

                                expect(response.body).to.deep.equal(body)
                            })
                        });
                });
            });

        });
    });
});