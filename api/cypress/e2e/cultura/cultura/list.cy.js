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

                            validarResponse(response.body)
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

                            validarResponse(response.body)

                            response.body.forEach(cultura => {
                                expect(cultura.descricao).to.equal('Milho')

                            })
                        })
                })

            })

            it.skip('CT3 - Deve listar as culturas pelo Nome Científico', () => {
                cy.fixture('cultura/cultura/list/paramsCt3.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            validarResponse(response.body)

                            response.body.forEach(cultura => {
                                expect(cultura.nomeCientifico).to.equal('Zea mays');
                            });
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

                            validarResponse(response.body)

                            response.body.forEach(cultura => {
                                expect(cultura.id).to.equal('e6d30c1e-9eaa-4213-9e39-ac73cbb1429a')
                            })

                        })
                })
            })
        })
    })
})


function validarResponse(response) {
    expect(response).to.be.an('array').that.is.not.empty;
    response.forEach(cultura => {
        expect(cultura.id).to.be.a('string');
        expect(cultura.descricao).to.be.a('string');
        expect(cultura.nomeCientifico).to.be.a('string');
        expect(cultura.imageClass).to.be.a('string');

        // Valida o tipo da unidadeMedida
        expect(cultura.unidadeMedida).to.be.an('object');
        expect(cultura.unidadeMedida.id).to.be.a('string');
        expect(cultura.unidadeMedida.descricao).to.be.a('string');

        // Valida o tipo do materialColheita
        expect(cultura.materialColheita).to.be.an('object');
        expect(cultura.materialColheita.id).to.be.a('string');
        expect(cultura.materialColheita.descricao).to.be.a('string');
        expect(cultura.materialColheita.unidadeMedida).to.be.an('object');
        expect(cultura.materialColheita.unidadeMedida.id).to.be.a('string');
        expect(cultura.materialColheita.unidadeMedida.sigla).to.be.a('string');
        expect(cultura.materialColheita.tipoMaterial).to.be.a('number');

        // Valida o tipo das fasesFenologicas
        expect(cultura.fasesFenologicas).to.be.an('array');
        cultura.fasesFenologicas.forEach(fase => {
            expect(fase.id).to.be.a('string');
            expect(fase.culturaId).to.be.a('string');
            expect(fase.ordem).to.be.a('number');
            expect(fase.descricao).to.be.a('string');
            expect(fase.imageClass).to.be.a('string');
            expect(fase.qtdEstadios).to.be.a('number');

            // Valida o tipo dos estadiosFenologicos
            expect(fase.estadiosFenologicos).to.be.an('array');
            fase.estadiosFenologicos.forEach(estadio => {
                expect(estadio.id).to.be.a('string');
                expect(estadio.culturaFaseFenologicaId).to.be.a('string');
                expect(estadio.codigo).to.be.a('string');
                expect(estadio.descricao).to.be.a('string');
                expect(estadio.ordem).to.be.a('number');
            });
        });

        // Valida o tipo de qtdEstadiosFenologicos
        expect(cultura.qtdEstadiosFenologicos).to.be.a('number');
    });
}