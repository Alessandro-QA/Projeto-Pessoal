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
                                expect(cultura.descricao).to.equal('Feijão')

                            })
                        })
                })

            })

            it('CT3 - Deve listar as culturas pelo Nome Científico', () => {
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
    response.forEach(cultura => {
        expect(typeof cultura.id).to.equal('string');
        expect(typeof cultura.descricao).to.equal('string');
        expect(typeof cultura.nomeCientifico).to.equal('string');
        expect(typeof cultura.imageClass).to.equal('string');
        expect(Array.isArray(cultura.fasesFenologicas)).to.be.true;
        expect(typeof cultura.qtdEstadiosFenologicos).to.equal('number');

        // Valida unidadeMedida
        if (cultura.unidadeMedida) {
            expect(typeof cultura.unidadeMedida.id).to.equal('string');
            expect(typeof cultura.unidadeMedida.descricao).to.equal('string');
        }

        // Valida materialColheita se houver
        if (cultura.materialColheita) {
            expect(typeof cultura.materialColheita.id).to.equal('string');
            expect(typeof cultura.materialColheita.descricao).to.equal('string');

            if (cultura.materialColheita.unidadeMedida) {
                expect(typeof cultura.materialColheita.unidadeMedida.id).to.equal('string');
                expect(typeof cultura.materialColheita.unidadeMedida.sigla).to.equal('string');
            }

            expect(typeof cultura.materialColheita.tipoMaterial).to.equal('number');
        } else {
            // Quando materialColheita é null ou undefined, não deve ter propriedades
            expect(cultura.materialColheita).to.be.null;
        }

        // Valida fasesFenologicas
        cultura.fasesFenologicas.forEach(fase => {
            expect(typeof fase.id).to.equal('string');
            expect(typeof fase.culturaId).to.equal('string');
            expect(typeof fase.ordem).to.equal('number');
            expect(typeof fase.descricao).to.equal('string');
            expect(typeof fase.imageClass).to.equal('string');
            expect(typeof fase.qtdEstadios).to.equal('number');
            expect(Array.isArray(fase.estadiosFenologicos)).to.be.true;

            // Valida estadiosFenologicos
            fase.estadiosFenologicos.forEach(estadio => {
                expect(typeof estadio.id).to.equal('string');
                expect(typeof estadio.culturaFaseFenologicaId).to.equal('string');
                expect(typeof estadio.codigo).to.equal('string');
                expect(typeof estadio.descricao).to.equal('string');
                expect(typeof estadio.ordem).to.equal('number');
            });
        });
    });
}
