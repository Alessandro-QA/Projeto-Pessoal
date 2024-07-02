/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/cultura/criaCultura/cultura.description')

context('Cultura', () => {
    context('Cultura', () => {

        let bodyedit
        let idCultura

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('cultura')}/Cultura - Cria, Edita e Obtém Culturas`, () => {

            it('CT1 - Criar Cultura ', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('cultura/cultura/criaCultura/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/Cultura`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            cy.fixture('cultura/cultura/criaCultura/bodyCt1.json').then((body) => {
                                // Passando o Response do que foi retornado para o Body, pois precisará ser usado na edição
                                body = response.body.data
                                // Passando o mesmo response para uma variável global para teste em novo cenário
                                bodyedit = response.body.data
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body)
                            })

                            // Salvar o ID da cultura criada para uso futuro
                            idCultura = response.body.data.id

                        })
                })
            })

            it('CT2 - Editar Cultura existente', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')

                cy.fixture('cultura/cultura/criaCultura/payloadCt1.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload = bodyedit

                    // Alterando um valor daquele que foi criado para ter alguma troca na edição
                    payload.descricao = 'TESTE EDIÇÃO 01'
                    payload.nomeCientifico = 'TESTE EDIÇÃO 01 CIENTIFICO'

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

                        response.body.forEach(cultura => {
                            // Validando os tipos dos atributos no objeto cultura
                            expect(cultura.id).to.be.a('string');
                            expect(cultura.descricao).to.be.a('string');

                            // Validando o tipo de unidadeMedida
                            expect(cultura.unidadeMedida).to.be.an('object');
                            expect(cultura.unidadeMedida.id).to.be.a('string');
                            expect(cultura.unidadeMedida.descricao).to.be.a('string');

                            // Validando o tipo de materialColheita
                            expect(cultura.materialColheita).to.be.an('object');
                            expect(cultura.materialColheita.id).to.be.a('string');
                            expect(cultura.materialColheita.descricao).to.be.a('string');
                            expect(cultura.materialColheita.unidadeMedida).to.be.an('object');
                            expect(cultura.materialColheita.unidadeMedida.id).to.be.a('string');
                            expect(cultura.materialColheita.unidadeMedida.sigla).to.be.a('string');
                            expect(cultura.materialColheita.tipoMaterial).to.be.a('number');

                            // Validando o tipo de fasesFenologicas (um array)
                            expect(cultura.fasesFenologicas).to.be.an('array');

                            // Validando o tipo de qtdEstadiosFenologicos
                            expect(cultura.qtdEstadiosFenologicos).to.be.a('number');
                        });

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

                        // Validando os tipos dos atributos no objeto cultura
                        expect(response.body.id).to.be.a('string');
                        expect(response.body.descricao).to.be.a('string');

                        // Validando o tipo de unidadeMedida
                        expect(response.body.unidadeMedida).to.be.an('object');
                        expect(response.body.unidadeMedida.id).to.be.a('string');
                        expect(response.body.unidadeMedida.descricao).to.be.a('string');

                        // Validando o tipo de materialColheita
                        expect(response.body.materialColheita).to.be.an('object');
                        expect(response.body.materialColheita.id).to.be.a('string');
                        expect(response.body.materialColheita.descricao).to.be.a('string');
                        expect(response.body.materialColheita.unidadeMedida).to.be.an('object');
                        expect(response.body.materialColheita.unidadeMedida.id).to.be.a('string');
                        expect(response.body.materialColheita.unidadeMedida.sigla).to.be.a('string');
                        expect(response.body.materialColheita.tipoMaterial).to.be.a('number');

                        // Validando o tipo de fasesFenologicas (um array)
                        expect(response.body.fasesFenologicas).to.be.an('array');

                        // Validando o tipo de qtdEstadiosFenologicos
                        expect(response.body.qtdEstadiosFenologicos).to.be.a('number');

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
