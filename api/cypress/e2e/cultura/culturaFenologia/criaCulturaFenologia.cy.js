/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaFenologia/criaCulturaFenologia.description')

context('Cultura', () => {
    context('Cultura', () => {

        let bodyedit
        let idFase

        describe(`POST/PUT/DELETE - ${Cypress.env('cultura')}/CulturaFenologia - Cria, Edita e Exclui uma Fase Fenológica de uma Cultura.`, () => {

            it('CT1 - Criar Fase Fenológica dentro de uma Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/culturaFenologia/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            cy.fixture('cultura/culturaFenologia/bodyCt1.json').then((body) => {
                                // Passando o Response do que foi retornado para o Body, pois precisará ser usado na edição
                                body = response.body.data
                                // Passando o mesmo response para uma variável global para teste em novo cenário
                                bodyedit = response.body.data
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body)
                            })

                            // Salvar o ID da Fase criada para uso futuro
                            idFase = response.body.data.id
                        })
                })
            })

            it('CT2 - Editar Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('cultura/culturaFenologia/bodyCt1.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload = bodyedit

                    // Alterando um valor daquele que foi criado para ter alguma troca na edição
                    payload[0].descricao = 'FASE EDITADA ESTADIO FENOLÓGICO';

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`, payload)
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

            it('CT3 - Deve Deletar Fase do Estádio Fenológico pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia/{idFase}`, idFase).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
            })
        })
    })
})