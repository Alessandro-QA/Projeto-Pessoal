/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/list/list.description')

context('Cultura', () => {
    context('Cultura', () => {
        describe(`GET - ${Cypress.env('cultura')}/Cultura/List - Obtém a Listagem de Culturas`, () => {
            it('CT1 - Deve obter uma listagem com todas as culturas', () => {

                cy.fixture('cultura/cultura/list/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null



                        })
                })
            })

            it('CT2 - Deve listar as culturas pela descrição', () => {
                cy.fixture('cultura/cultura/list/paramsCt2.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                        })
                })
            })

            it('CT3 - Deve listar as culturas pelo Nome Científico', () => {
                cy.fixture('cultura/cultura/list/paramsCt3.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                        })

                })
            })

            it('CT4 - Deve listar as culturas pelo Id', () => {
                cy.fixture('cultura/cultura/list/paramsCt4.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                        })
                })
            })
        })
    })
})


function validaResponseCultura(response) {
    response.body.forEach(cultura => {
        // Validando os tipos dos atributos no objeto cultura
        expect(cultura.id).to.be.a('string');
        expect(cultura.descricao).to.be.a('string');

        // Validando o tipo de unidadeMedida
        expect(cultura.unidadeMedida).to.be.an('object');
        expect(cultura.unidadeMedida.id).to.be.a('string');
        expect(cultura.unidadeMedida.descricao).to.be.a('string');

        // Validando o tipo de materialColheita
        expect(cultura.materialColheita).to.be.an('object');
        expect(cultura.materialColheita.id).to.be.a('string');
        expect(cultura.materialColheita.descricao).to.be.a('string');
        expect(cultura.materialColheita.unidadeMedida).to.be.an('object');
        expect(cultura.materialColheita.unidadeMedida.id).to.be.a('string');
        expect(cultura.materialColheita.unidadeMedida.sigla).to.be.a('string');
        expect(cultura.materialColheita.tipoMaterial).to.be.a('number');

        // Validando o tipo de fasesFenologicas (um array)
        expect(cultura.fasesFenologicas).to.be.an('array');

        // Validando o tipo de qtdEstadiosFenologicos
        expect(cultura.qtdEstadiosFenologicos).to.be.a('number');
    });
}