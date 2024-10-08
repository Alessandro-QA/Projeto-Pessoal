/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/existetitulosbyoperacao/exixtetitulosbyoperacao.description');

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`GET - ${Cypress.env('financeiro')}Titulo/ExisteTituloByOperacao{id} - Existe Titulos na Operação por ID`, () => {

            it('CT1 - Existe Titulos na Operação por ID (Falso)', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/existetitulosbyoperacao/payloadCt1.json').then((payload) => {
                    // Verificar se a URL está correta e adicionar uma barra antes do payload.id
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/ExisteTituloByOperacao/${payload.id}`)
                        .then((response) => {
                            // Verificação do status da resposta
                            expect(response.status).to.equal(200);

                            // Verifique se a resposta é um booleano
                            expect(response.body).to.be.a('boolean');

                            // Verifique se a resposta é false
                            expect(response.body).to.equal(false);

                        });
                });
            });

            it('CT2 - Existe Titulos na Operação por ID (Verdadeiro)', () => {

               // cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/titulo/existetitulosbyoperacao/payloadCt2.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/ExisteTituloByOperacao/${payload.id}`)
                        .then((response) => {
                            // Verificação do status da resposta
                            expect(response.status).to.equal(200);

                            // Verifique se a resposta é um booleano
                            expect(response.body).to.be.a('boolean');

                           //  Verifique se a resposta é true
                            expect(response.body).to.equal(true);
                        });
                });
            });

        });
    })
})

