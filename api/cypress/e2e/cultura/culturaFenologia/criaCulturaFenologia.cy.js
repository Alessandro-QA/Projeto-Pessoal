/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/criaCultura/criaCultura.description')

context('Cultura', () => {
    context('CulturaFenologia', () => {
        let idFase
        let idCultura
        let randomNumber
        let responsePayload

        describe(`POST/GET/PUT/DELETE - ${Cypress.env('cultura')}/CulturaFenologia - Cria, Edita e Exclui Fases Fenológicas de uma Cultura.`, () => {

            it('CT1 - Criar 3 Fases Fenológicas dentro de uma Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/culturaFenologia/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório para compor a descrição das fases e não ter repetição
                    payload.forEach((fase) => {
                        randomNumber = Math.floor(Math.random() * 1000000) // Gera um número aleatório entre 0 e 999999
                        fase.descricao = `${fase.descricao} ${randomNumber}` // Atualiza o campo 'descricao' no payload
                    })

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Validar o conteúdo das fases criadas
                            response.body.data.forEach((fase) => {
                                validaFase(fase)
                            })

                            // Gravar o ID da Cultura e Fase para utilizar posteriormente
                            idCultura = response.body.data[0].culturaId
                            idFase = response.body.data[0].id

                            // Salvar o payload de resposta para uso futuro
                            responsePayload = response.body.data
                        })
                })
            })

            it('CT2 - Obter todas as fases de uma Cultura pelo ID dela', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia/fases/cultura/${idCultura}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        // Validar o conteúdo das fases obtidas
                        response.body.data.forEach((fase) => {
                            validaFase(fase)
                        })
                    })
            })

            it('CT3 - Editar Fase Fenológica dentro de uma Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('critical')

                // Clonar o payload de resposta do CT1 e atualizar uma das fases
                let payload = JSON.parse(JSON.stringify(responsePayload))

                // Editar a primeira fase no payload clonado
                payload[0].descricao = `${payload[0].descricao} Editada`

                cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.not.be.null
                        expect(response.body).to.exist

                        // Verificando se o response está como foi editado
                        expect(response.body.data[0]).to.deep.equal(payload[0])

                        validaFase(response.body.data[0])
                    })
            })

            it('CT4 - Deletar Fase do Estádio Fenológico pelo ID da Fase', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, idFase).then((response) => {
                    expect(response.status).to.be.equal(200)

                    cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia/fases/cultura/${idCultura}`)
                        .then((responseGet) => {
                            expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(responseGet.status).be.equal(200)
                            expect(responseGet.body).to.exist
                            expect(responseGet.body).be.not.null

                            // Verifique se o tamanho do array restante de fases fenológicas é 2
                            expect(responseGet.body.data).to.have.length(2);
                        })
                })
            })

            it('CT5 - Deletar todas as Fases de uma Cultura pelo ID da Cultura', () => {

                cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia/fases/cultura`, idCultura).then((response) => {
                    expect(response.status).to.be.equal(200)

                    cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia/fases/cultura/${idCultura}`)
                        .then((responseGet) => {
                            expect(responseGet.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(responseGet.status).be.equal(200)
                            expect(responseGet.body).to.exist
                            expect(responseGet.body).be.not.null

                            // Verifique se o tamanho do array restante de fases fenológicas é 0
                            expect(responseGet.body.data).to.have.length(0);
                        })
                })
            })
        })
    })
})

function validaFase(fase) {
    // Validar o tipo dos campos principais de uma fase
    expect(fase).to.have.property('id').that.is.a('string')
    expect(fase).to.have.property('culturaId').that.is.a('string')
    expect(fase).to.have.property('ordem').that.is.a('number')
    expect(fase).to.have.property('descricao').that.is.a('string')
    expect(fase).to.have.property('imageClass').that.is.a('string')
    expect(fase).to.have.property('qtdEstadios').that.is.a('number')
    expect(fase).to.have.property('estadiosFenologicos').that.is.an('array')

    // Validar o tipo dos campos dentro de "estadiosFenologicos"
    fase.estadiosFenologicos.forEach(estadio => {
        expect(estadio).to.have.property('id').that.is.a('string')
        expect(estadio).to.have.property('culturaFaseFenologicaId').that.is.a('string')
        expect(estadio).to.have.property('codigo').that.is.a('string')
        expect(estadio).to.have.property('descricao').that.is.a('string')
        expect(estadio).to.have.property('ordem').that.is.a('number')
    })
}
