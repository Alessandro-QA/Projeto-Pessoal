/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/criaCulturaVariedade/criaCulturaVariedade.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {

        let idVariedade
        let randomNumber

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/CulturaVariedade - Cria, Edita, Obtém e Deleta Variedades`, () => {

            it('CT1 - Criar Variedade', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/culturaVariedade/criaCulturaVariedade/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, para não ter o risco de criar Variedade com mesmo nome
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`; // Atualiza o campo 'nomeCientifico' no payload

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validaVariedade(response.body.data)

                            // Salvar o ID da variedade criada para uso futuro
                            idVariedade = response.body.data.id
                        })
                })
            })

            it('CT2 - Editar Variedade existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('cultura/culturaVariedade/criaCulturaVariedade/payloadCt2.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload.id = idVariedade

                    // Gerar um novo número aleatório, para não ter o risco de editar Cultura com nome existente
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`; // Atualiza o campo 'nomeCientifico' no payload

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)

                            validaVariedade(response.body.data)
                        })
                })
            })

            it.only('CT3 - Obter as Variedades existentes', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;

                        verificarVariedades(response.body);
                        // Out of Memory. Tentar implementar solução do Joan
                    });
            })

            it('CT4 - Obter uma Variedade existente pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/${idVariedade}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        validaVariedade(response.body)
                    })
            })

            it('CT5 - Deletar Variedade pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, idVariedade).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
            })
        })
    })
})

function validaVariedade(response) {
    // Valida o tipo de cada campo do response
    expect(response).to.have.property('id').that.is.a('string');
    expect(response).to.have.property('descricao').that.is.a('string');
    expect(response).to.have.property('nomeCientifico').that.is.a('string');

    // Valida o array de detentoras
    expect(response).to.have.property('detentoras').that.is.an('array');
    response.detentoras.forEach(detentora => {
        expect(detentora).to.have.property('id').that.is.a('string');
        expect(detentora).to.have.property('detentora').that.is.an('object');
        expect(detentora.detentora).to.have.property('id').that.is.a('string');
        expect(detentora.detentora).to.have.property('descricao').that.is.a('string');
    });

    expect(response).to.have.property('rnc').that.is.a('string');
    expect(response).to.have.property('diasParaColheita').that.is.a('number');
    expect(response).to.have.property('producaoEstimada').that.is.a('number');
    expect(response).to.have.property('ativo').that.is.a('boolean');
    expect(response).to.have.property('culturaId').that.is.a('string');
    expect(response).to.have.property('material').that.is.an('object');
    expect(response.material).to.have.property('id').that.is.a('string');
    expect(response.material).to.have.property('descricao').that.is.a('string');
}

// Função auxiliar para verificar os campos e tipos das variedades
const verificarVariedades = (variedades) => {
    const expectedProperties = [
        { key: 'id', type: 'string' },
        { key: 'descricao', type: 'string' },
        { key: 'nomeCientifico', type: 'string' },
        { key: 'detentoras', type: 'array' },
        { key: 'rnc', type: 'string' },
        { key: 'diasParaColheita', type: 'number' },
        { key: 'producaoEstimada', type: 'number' },
        { key: 'ativo', type: 'boolean' },
        { key: 'culturaId', type: 'string' },
        { key: 'culturaDescricao', type: ['string', 'null'] },
        { key: 'material', type: 'object' }
    ];

    const allValid = variedades.every(variedade =>
        expectedProperties.every(({ key, type }) => {
            if (Array.isArray(type)) {
                return type.includes(typeof variedade[key]);
            }
            return typeof variedade[key] === type;
        }) &&
        // Validações adicionais para detentoras e material
        variedade.detentoras.every(detentora =>
            typeof detentora.id === 'string' &&
            typeof detentora.detentora === 'object' &&
            typeof detentora.detentora.id === 'string' &&
            typeof detentora.detentora.descricao === 'string'
        ) &&
        typeof variedade.material.id === 'string' &&
        typeof variedade.material.descricao === 'string'
    );

    expect(allValid).to.be.true;
};