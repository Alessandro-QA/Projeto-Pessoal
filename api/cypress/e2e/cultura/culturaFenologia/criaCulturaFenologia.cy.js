/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/criaCultura/criaCultura.description')

context('Cultura', () => {
    let idFase;
    let idEstadio;
    let randomNumber;

    describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/CulturaFenologia - Cria, Edita e Exclui uma Fase Fenológica de uma Cultura.`, () => {

        it('CT1 - Criar Fase Fenológica dentro de uma Cultura existente', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical');

            cy.fixture('cultura/culturaFenologia/payloadCt1.json').then((payload) => {
                // Gerar um novo número aleatório para compor a descrição da fase
                randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                payload[0].descricao = `${payload[0].descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload

                cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.exist;
                        expect(response.body).to.not.be.null;

                        // Validar o conteúdo da fase criada
                        validaFase(response.body.data[0]);

                        // Salvar o ID da fase criada para uso futuro
                        idFase = response.body.data[0].id;
                        idEstadio = response.body.data[0].estadiosFenologicos[0].id;
                    });
            });
        });

        it('CT2 - Editar Fase Fenológica dentro de uma Cultura existente', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical');

            cy.fixture('cultura/culturaFenologia/payloadCt2.json').then((payload) => {

                // Copiando o body do cenário anterior
                payload[0].id = idFase; // Atualizando o ID da fase para o ID obtido no CT1
                payload[0].estadiosFenologicos[0].id = idEstadio; // Atualizando o ID do estadio para o ID obtido no CT1

                // Gerar um novo número aleatório, para não ter o risco de editar Fase com nome existente
                randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                payload[0].descricao = `${payload[0].descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload

                cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
                    .then((response) => {

                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);
                        expect(response.body).to.not.be.null;
                        expect(response.body).to.exist;

                        // Verificando se o response está como foi editado
                        expect(response.body.data[0]).to.deep.equal(payload[0]);

                        validaFase(response.body.data[0]);
                    });
            });
        });


        it('CT3 - Deve Deletar Fase do Estádio Fenológico pelo ID', () => {

            cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')

            cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, idFase).then((response) => {
                expect(response.status).to.be.equal(200)
            })
        })
    });
});

function validaFase(fase) {
    // Validar o tipo dos campos principais de uma fase
    expect(fase).to.have.property('id').that.is.a('string');
    expect(fase).to.have.property('culturaId').that.is.a('string');
    expect(fase).to.have.property('ordem').that.is.a('number');
    expect(fase).to.have.property('descricao').that.is.a('string');
    expect(fase).to.have.property('imageClass').that.is.a('string');
    expect(fase).to.have.property('qtdEstadios').that.is.a('number');
    expect(fase).to.have.property('estadiosFenologicos').that.is.an('array');

    // Validar o tipo dos campos dentro de "estadiosFenologicos"
    fase.estadiosFenologicos.forEach(estadio => {
        expect(estadio).to.have.property('id').that.is.a('string');
        expect(estadio).to.have.property('culturaFaseFenologicaId').that.is.a('string');
        expect(estadio).to.have.property('codigo').that.is.a('string');
        expect(estadio).to.have.property('descricao').that.is.a('string');
        expect(estadio).to.have.property('ordem').that.is.a('number');
    });
}
