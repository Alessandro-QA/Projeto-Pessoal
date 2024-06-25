/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/cartao/cartao.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Movimentacao/Cartao - Obtém as movimentações do Cartão Informado`, () => {

            it('CT1 - Obtém as Movimentações do Cartão pelo período de Data Filtrado', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('minor')

                cy.fixture('financeiro/movimentacao/cartao/paramsCt1.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Cartao`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            
                            // Validar limiteDisponivel
                            expect(response.body).to.have.property('limiteDisponivel').that.is.a('number');

                            // Validar contaNome
                            expect(response.body).to.have.property('contaNome').that.is.a('string');

                            // Converter em um formato de Data reconhecido pelo Cypress
                            const dataInicialObj = new Date(params.DataInicial);
                            const dataFinalObj = new Date(params.DataFinal);

                            // Validar movimentacoesDiarias
                            expect(response.body).to.have.property('movimentacoesDiarias').that.is.an('array');
                            response.body.movimentacoesDiarias.forEach(movimentacao => {
                                expect(movimentacao).to.have.property('data').that.is.a('string');
                                expect(movimentacao).to.have.property('id').that.is.a('string');
                                expect(movimentacao).to.have.property('categoria').that.is.a('string');
                                expect(movimentacao).to.have.property('operacao').that.is.a('string');
                                expect(movimentacao).to.have.property('valor').that.is.a('number');

                                // Converte a data do Response em um formato de data reconhecido pelo Cypress e valida se todas correspondem ao parâmetro passado
                                const dataMovimentacaoObj = new Date(movimentacao.data);
                                expect(dataMovimentacaoObj).to.be.within(dataInicialObj, dataFinalObj);
                            });
                        });
                });
            });
        });
    });
});