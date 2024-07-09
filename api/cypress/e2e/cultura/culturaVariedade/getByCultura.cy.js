/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/getByCultura/getByCultura.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`GET - ${Cypress.env('cultura')}/CulturaVariedade/List - Obtém a Listagem de Variedades`, () => {
            it('CT1 - Deve obter uma listagem com todas as variedades a partir do ID da Cultura', () => {

                cy.fixture('cultura/culturaVariedade/getByCultura/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/GetByCultura`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            const variedades = response.body;
                            const culturaIdParam = params.id;

                            // Função auxiliar para verificar os campos e tipos das variedades
                            const verificarVariedades = (variedades) => {
                                const expectedProperties = [
                                    { key: 'id', type: 'string' },
                                    { key: 'descricao', type: 'string' },
                                    { key: 'nomeCientifico', type: 'nullOrString' },
                                    //{ key: 'detentoras', type: 'array' },
                                    { key: 'rnc', type: 'nullOrString' },
                                    { key: 'diasParaColheita', type: 'nullOrNumber' },
                                    { key: 'producaoEstimada', type: 'nullOrNumber' },
                                    { key: 'ativo', type: 'boolean' },
                                    { key: 'culturaId', type: 'string' },
                                    { key: 'culturaDescricao', type: 'string' },
                                    { key: 'material', type: 'nullOrString' }
                                ];

                                const isType = (value, type) => {
                                    if (type === 'nullOrString') {
                                        return value === null || typeof value === 'string';
                                    }
                                    if (type === 'nullOrNumber') {
                                        return value === null || typeof value === 'number';
                                    }
                                    if (type === 'array') {
                                        return Array.isArray(value);
                                    }
                                    return typeof value === type;
                                };

                                const allValid = variedades.every(variedade =>
                                    expectedProperties.every(({ key, type }) =>
                                        isType(variedade[key], type)
                                    ) && variedade.detentoras.every(detentora =>
                                        typeof detentora.id === 'string' &&
                                        (typeof detentora.detentora === 'undefined' || (
                                            typeof detentora.detentora.id === 'string' &&
                                            typeof detentora.detentora.descricao === 'string'
                                        ))
                                    ) && variedade.culturaId === culturaIdParam // Verificação do culturaId
                                );

                                expect(allValid).to.be.true;
                            };

                            // Verificar as variedades
                            verificarVariedades(variedades);
                        });
                });
            });
        });
    });
});
