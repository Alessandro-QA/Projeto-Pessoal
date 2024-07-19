/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/list/list.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`GET - ${Cypress.env('cultura')}/CulturaVariedade/List - Obtém a Listagem de Variedades`, () => {
            it('CT1 - Deve obter uma listagem com todas as variedades na primeira página, tamanho 10', () => {

                cy.fixture('cultura/culturaVariedade/list/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)
                        })
                })
            })

            it('CT2 - Deve listar as variedades pelo ID da Cultura', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt2.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                            response.body.forEach(item => {
                                expect(item).to.have.property('descricao').that.is.a('string');
                                expect(item.culturaId).to.equal(params.CulturaId);
                            });
                        })
                })

            })

            it('CT3 - Deve listar as variedades pela descrição', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt3.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                            response.body.forEach(item => {
                                expect(item).to.have.property('descricao').that.is.a('string');
                                expect(item.descricao).to.equal(params.Descricao);
                            });

                        })
                })

            })

            it('CT4 - Deve listar as variedades pelo Nome Científico', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt4.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                            response.body.forEach(item => {
                                expect(item).to.have.property('nomeCientifico').that.is.a('string');
                                expect(item.nomeCientifico).to.equal(params.NomeCientifico);
                            });

                        })
                })

            })

            it('CT5 - Deve listar as variedades pela Detentora', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt5.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal')

                    cy.getRequestWithMoreParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                            response.body.forEach(item => {
                                expect(item).to.have.property('detentoras').that.is.an('array');
                                item.detentoras.forEach(detentora => {
                                    expect(detentora.detentora).to.have.property('descricao').that.equals(params.Detentora);
                                });
                            });

                        })
                })

            })
        })
    })
})

function validarResponse(body) {
    // Verifica se body é um array
    expect(body).to.be.an('array');

    body.forEach(item => {
        // Valida que cada item é um objeto
        expect(item).to.be.an('object');

        // Valida o tipo de cada propriedade do item
        expect(item).to.have.property('id').that.is.a('string');
        expect(item).to.have.property('descricao').that.is.a('string');
        expect(item).to.have.property('detentoras').that.is.an('array');

        item.detentoras.forEach(detentora => {
            expect(detentora).to.be.an('object');
            expect(detentora).to.have.property('id').that.is.a('string');
            expect(detentora).to.have.property('detentora').that.is.an('object');
            expect(detentora.detentora).to.have.property('id').that.is.a('string');
            expect(detentora.detentora).to.have.property('descricao').that.is.a('string');
        });

        expect(item).to.have.property('diasParaColheita').that.is.a('number');
        expect(item).to.have.property('producaoEstimada').that.is.a('number');
        expect(item).to.have.property('ativo').that.is.a('boolean');
        expect(item).to.have.property('culturaId').that.is.a('string');
        expect(item).to.have.property('culturaDescricao').that.is.a('string');
    });
}
