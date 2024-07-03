/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/criaCultura/criaCultura.description')

context('Cultura', () => {
    context('Cultura', () => {

        let idCultura
        let randomNumber

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/Cultura - Cria, Edita e Obtém Culturas`, () => {

            it('CT1 - Criar Cultura', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/cultura/criaCultura/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, para não ter o risco de criar Cultura com mesmo nome
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`; // Atualiza o campo 'nomeCientifico' no payload

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validaCultura(response.body.data)

                            // Salvar o ID da cultura criada para uso futuro
                            idCultura = response.body.data.id
                        })
                })
            })

            it('CT2 - Editar Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('cultura/cultura/criaCultura/payloadCt2.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload.id = idCultura

                    // Gerar um novo número aleatório, para não ter o risco de editar Cultura com nome existente
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`; // Atualiza o campo 'descricao' no payload
                    payload.nomeCientifico = `${payload.nomeCientifico} ${randomNumber}`; // Atualiza o campo 'nomeCientifico' no payload

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)

                            validaCultura(response.body.data)
                        })
                })
            })

            it('CT3 - Obter as Culturas existentes', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        // Verifica se a estrutura da resposta está correta
                        expect(response.body).to.be.an('array')

                        validaResponseCulturas(response.body)
                    })
            })

            it('CT4 - Obter uma Cultura existente pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura/${idCultura}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        // Chama a função de validação passando a cultura diretamente
                        validaCultura(response.body)
                    })
            })

            it('CT5 - Deve Deletar Cultura pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, idCultura).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
            })
        })
    })
})

function validaCultura(cultura) {
    // Validar o tipo dos campos principais
    expect(cultura).to.have.property('id').that.is.a('string')
    expect(cultura).to.have.property('descricao').that.is.a('string')
    expect(cultura).to.have.property('unidadeMedida').that.is.an('object')
    expect(cultura).to.have.property('imageClass').that.is.a('string')
    expect(cultura).to.have.property('materialColheita').that.is.an('object')
    expect(cultura).to.have.property('fasesFenologicas').that.is.an('array')
    expect(cultura).to.have.property('qtdEstadiosFenologicos').that.is.a('number')

    // Validar o tipo dos campos dentro de "unidadeMedida"
    expect(cultura.unidadeMedida).to.have.property('id').that.is.a('string')
    expect(cultura.unidadeMedida).to.have.property('descricao').that.is.a('string')

    // Validar o tipo dos campos dentro de "materialColheita"
    const materialColheita = cultura.materialColheita
    expect(materialColheita).to.have.property('id').that.is.a('string')
    expect(materialColheita).to.have.property('descricao').that.is.a('string')
    expect(materialColheita).to.have.property('unidadeMedida').that.is.an('object')
    expect(materialColheita).to.have.property('tipoMaterial').that.is.a('number')

    // Validar o tipo dos campos dentro de "unidadeMedida" de "materialColheita"
    const materialColheitaUnidadeMedida = materialColheita.unidadeMedida
    expect(materialColheitaUnidadeMedida).to.have.property('id').that.is.a('string')
    expect(materialColheitaUnidadeMedida).to.have.property('sigla').that.is.a('string')
}

function validaResponseCulturas(culturas) {
    // Iterar sobre cada cultura no array e validar seus campos
    culturas.forEach(cultura => {
        validaCultura(cultura)
    })
}
