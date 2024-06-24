/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/parametrizacao/consultaParametrizacaoFornecedor/consultaParametrizacaoFornecedor.description');

context('Financeiro', () => {
    context('Parametrizacao', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Parametrizacao/ConsultaParametrizacaoFornecedor - Obtém Parametrizacao por Consulta de Fornecedor`, () => {
            it('CT1 - Consulta as Parametrizaçoes Pelos Fornecedores enviados', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('minor')
                
                cy.fixture('financeiro/parametrizacao/consultaParametrizacaoFornecedor/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/ConsultaParametrizacaoFornecedor`, payload)
                        .then((response) => {
                            // Verificar os headers
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));

                            // Verificar se a resposta é 400
                            expect(response.status).to.be.equal(400);

                            // Verificar o corpo da resposta
                            expect(response.body).to.have.property('success', false);
                            expect(response.body.notifications).to.include.members([
                                "Ocorreu um erro ao tentar cadastrar o Fornecedor com o documento principal: 39.672.767/0001-00",
                                "CNPJ ja cadastrado para a pessoa Fornecedor 2; Para o fornecedor com documento principal: 39.672.767/0001-00"
                            ]);

                            // Este teste é esperado que dê que erro devido ao payload ser de um fornecedor existente.
                        });
                });
            });

        });
    });
});