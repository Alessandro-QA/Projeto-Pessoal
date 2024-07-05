/// <reference types='Cypress' />

const { validate } = require('../../fixtures/unidadeMedida/list/validate')
const description = require('../../fixtures/unidadeMedida/unidadeMedida/unidadeMedida.description');

context('Unidade de Medida', () => {
    context('List', () => {
        describe.skip(`GET - ${Cypress.env('unidadeMedida')}/UnidadeMedida/List - Lista todas unidades de medida podendo incluir filtros como parâmetros`, () => {

            it('CT1 - Listar todas Unidades de Medida Cadastradas', () => {

                //cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('unidadeMedida/list/paramsCt1.json').then((params) => {

                    cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            // Seleciona apenas os primeiros 30 itens do array de resposta
                            const first30Items = response.body.slice(0, 30);

                            // Verifica se a resposta contém pelo menos 30 itens
                            expect(first30Items).to.have.lengthOf.at.least(30);

                            // Itera sobre cada item nos primeiros 30 itens e aplica a função de validação
                            first30Items.forEach((item) => {
                                validate(item);
                            });
                        });
                })
            })

            it('CT2 - Listar todas Unidades de Medida filtradas por Status Inativo', () => {

                //cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('unidadeMedida/list/paramsCt2.json').then((params) => {

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            // Itera sobre cada item na lista de resposta e aplica a função de validação
                            response.body.forEach((item) => {
                                validate(item);
                                expect(item.ativo).to.be.false; // Verifica se 'ativo' é falso (booleano)
                            });

                        });
                })
            })

            it('CT3 - Listar todas Unidades de Medida filtradas pelo código', () => {

                //cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('unidadeMedida/list/paramsCt3.json').then((params) => {

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            // Itera sobre cada item na lista de resposta e aplica a função de validação
                            response.body.forEach((item) => {
                                validate(item);
                                expect(item.codigo).to.be.equal(params.codigo); // Verifica se Filtrou pelo código informado
                            });

                        });
                })
            })

        })
    })
})

