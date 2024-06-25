/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/tituloid/tituloid.description');

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Titulo/{id} - Obtém Dados do Titulo por ID`, () => {

            it('CT1 - Obtém Dados do Titulo por ID', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/tituloid/payloadCt1.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/titulo/${payload.id}`)
                        .then((response) => {
                            expect(response.status).to.equal(200);
                            expect(response.body).to.have.property('id', payload.id);

                         // Verifica se o corpo da resposta tem a estrutura esperada
                         expect(response.body).to.have.property('id', payload.id);
                         expect(response.body).to.have.property('valor', 20);
                         expect(response.body).to.have.property('saldo', 0);
                         expect(response.body).to.have.property('formaPagamento', 'PIX');
                         expect(response.body).to.have.property('condicaoRecebimento', 'A vista');
                         expect(response.body).to.have.property('vencimento', '2024-07-10T00:00:00-03:00');
                         expect(response.body).to.have.property('fornecedor', 'Cliente Teste API');
                         expect(response.body).to.have.property('cnpj', '51634860047');
                            
                        });
                });
            });

        });
    });
});
