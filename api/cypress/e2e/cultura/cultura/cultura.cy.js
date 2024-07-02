/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/cultura.description')

context('Cultura', () => {
    context('Cultura', () => {

        let bodyedit
        let idCultura

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/Cultura - Cria, Edita e Obtém Culturas`, () => {

            it('CT1 - Criar Cultura ', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/cultura/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            cy.fixture('cultura/cultura/bodyCt1.json').then((body) => {
                                // Passando o Response do que foi retornado para o Body, pois precisará ser usado na edição
                                body = response.body.data
                                // Passando o mesmo response para uma variável global para teste em novo cenário
                                bodyedit = response.body.data
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body)
                            })

                            // Salvar o ID do agendamento criado para uso futuro
                            idCultura = response.body.data.id

                        })
                })
            })

            it('CT2 - Editar Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('cultura/cultura/payloadCt1.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload = bodyedit

                    // Alterando um valor daquele que foi criado para ter alguma troca na edição
                    payload.descricao = 'cultura1234'
                    payload.nomeCientifico = 'cientifico cultura1234'

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)
                        })
                })
            })

            it('CT3 - Obter as Culturas existentes', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null

                        response.body.forEach((cultura) => {
                            expect(cultura.id).to.be.a('string')
                            expect(cultura.descricao).to.be.a('string')
                            expect(cultura.nomeCientifico).to.be.a('string')

                            expect(cultura.unidadeMedida).to.be.an('object')
                            expect(cultura.unidadeMedida.id).to.be.a('string')
                            expect(cultura.unidadeMedida.descricao).to.be.a('string')

                            expect(cultura.imageClass).to.be.a('string')

                            expect(cultura.materialColheita).to.be.an('object')
                            expect(cultura.materialColheita.id).to.be.a('string')
                            expect(cultura.materialColheita.descricao).to.be.a('string')
                            expect(cultura.materialColheita.unidadeMedida).to.be.an('object')
                            expect(cultura.materialColheita.unidadeMedida.id).to.be.a('string')
                            expect(cultura.materialColheita.unidadeMedida.sigla).to.be.a('string')
                            expect(cultura.materialColheita.tipoMaterial).to.be.a('number')

                            expect(cultura.fasesFenologicas).to.be.an('array')
                            expect(cultura.qtdEstadiosFenologicos).to.be.a('number')
                        })

                    })
            })

            it('CT4 - Deve Deletar Cultura pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, idCultura).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
            })
        })

    })
})
