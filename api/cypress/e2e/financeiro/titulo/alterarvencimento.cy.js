/// <reference types="Cypress" />

const dayjs = require('dayjs');
const description = require('../../../fixtures/financeiro/titulo/alterarvencimento/alterarvencimento.description');

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`PUT - ${Cypress.env('financeiro')}Titulo/AlterarVencimento - alterar o Vencimento`, () => {

            it('CT1 - Alterar o Vencimento do Titulo', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');
                cy.fixture('financeiro/titulo/alterarvencimento/payloadCt1.json').then((data) => {
                    const tituloId = data.id;

                    // Definir o payload com a data de vencimento dinâmica
                    const payload = {
                        id: tituloId,
                        dataVencimento: dayjs().add(30, 'day').format('YYYY-MM-DDTHH:mm:ssZ') // Nova data de vencimento
                    };

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/AlterarVencimento`, payload)
                        .then((response) => {
                            // Verifica o status da resposta
                            expect(response.status).to.equal(200);

                            // Verifica o conteúdo da resposta
                            expect(response.body).to.have.property('success', true);
                            expect(response.body).to.have.property('data');
                            expect(response.body.data).to.have.property('id').to.be.a('string');
                            expect(response.body.data).to.have.property('dataVencimento').to.be.a('string').and.not.empty;

                            // Verifica se a data de vencimento do response é a mesma data de vencimento que foi informada
                            expect(response.body.data.dataVencimento).to.equal(payload.dataVencimento);
                        });
                });
            });

        });
    });
});
