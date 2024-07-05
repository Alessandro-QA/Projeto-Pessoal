/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/criaCulturaVariedade/criaCulturaVariedade.description');

context('Cultura', () => {
    context('CulturaVariedade', () => {

        let idVariedade;
        let randomNumber;

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/CulturaVariedade - Cria, Edita, Obtém e Deleta Variedades`, () => {

            it('CT1 - Criar Variedade', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical');

                cy.fixture('cultura/culturaVariedade/criaCulturaVariedade/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, para não ter o risco de criar Variedade com mesmo nome
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`; // Atualiza o campo 'nomeCientifico' no payload

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            verificarVariedade(response.body.data);

                            // Salvar o ID da variedade criada para uso futuro
                            idVariedade = response.body.data.id;
                        });
                });
            });

            it('CT2 - Editar Variedade existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical');

                cy.fixture('cultura/culturaVariedade/criaCulturaVariedade/payloadCt2.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload.id = idVariedade;

                    randomNumber = Math.floor(Math.random() * 1000000);
                    payload.descricao = `${payload.descricao} ${randomNumber}`;
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`;

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload);

                            verificarVariedade(response.body.data);
                        });
                });
            });

            it('CT3 - Obter uma Variedade existente pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/${idVariedade}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;

                        verificarVariedade(response.body);
                    });
            });

            it('CT4 - Deletar Variedade pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('critical');

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade`, idVariedade).then((response) => {
                    expect(response.status).to.be.equal(200);
                });
            });
        });
    });
});

function verificarVariedade(data) {
    expect(data).to.have.property('id').that.is.a('string');
    expect(data).to.have.property('descricao').that.is.a('string');
    expect(data).to.have.property('nomeCientifico').that.is.a('string');
    expect(data).to.have.property('detentoras').that.is.an('array');
    expect(data).to.have.property('rnc').that.is.a('string');
    expect(data).to.have.property('diasParaColheita').that.is.a('number');
    expect(data).to.have.property('producaoEstimada').that.is.a('number');
    expect(data).to.have.property('ativo').that.is.a('boolean');
    expect(data).to.have.property('culturaId').that.is.a('string');
    expect(data).to.have.property('material').that.is.an('object');

    // Validando as propriedades do objeto material
    expect(data.material).to.have.property('id').that.is.a('string');
    expect(data.material).to.have.property('descricao').that.is.a('string');
}
