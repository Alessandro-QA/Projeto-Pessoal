/// <reference types='Cypress' />

const description = require('../../fixtures/conversorUnidadeMedida/list/list.description')

context('Conversor Unidade Medida', () => {
    context('Listar as configurações de Conversão de Unidade Medida', () => {
        describe(`GET - ${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida/{UnidadeMedidaConvertidaId}/List - Listar as Conversões de Unidades de Medida Existentes`, () => {

            it('CT1 - Listar as Conversões de Unidades de Medida pelo ID da Unidade Convertida', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('conversorUnidadeMedida/list/paramsCt1.json').then((params) => {

                    cy.getRequestWithParams(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida/${params.UnidadeMedidaConvertidaId}/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Validando o tipo de cada campo nos itens da lista
                            const responseData = response.body
                            responseData.forEach(item => {
                                expect(item.unidadeMedidaConvertida).to.have.property('id', "c261b9fa-2fb4-3a39-613e-c9c38e656d73")
                                expect(item).to.have.property('unidadeMedidaBase').that.is.an('object')
                                expect(item).to.have.property('unidadeMedidaConvertida').that.is.an('object')
                                expect(item).to.have.property('valor').that.is.a('number')

                                const unidadeMedidaBase = item.unidadeMedidaBase
                                expect(unidadeMedidaBase).to.have.property('id').that.is.a('string')
                                expect(unidadeMedidaBase).to.have.property('descricao').that.is.a('string')
                                expect(unidadeMedidaBase).to.have.property('codigo').that.is.a('string')
                                expect(unidadeMedidaBase).to.have.property('tipo').that.is.a('string')
                                expect(unidadeMedidaBase).to.have.property('ativo').that.is.a('boolean')

                                const unidadeMedidaConvertida = item.unidadeMedidaConvertida
                                expect(unidadeMedidaConvertida).to.have.property('id').that.is.a('string')
                                expect(unidadeMedidaConvertida).to.have.property('descricao').that.is.a('string')
                                expect(unidadeMedidaConvertida).to.have.property('codigo').that.is.a('string')
                                expect(unidadeMedidaConvertida).to.have.property('tipo').that.is.a('string')
                                expect(unidadeMedidaConvertida).to.have.property('ativo').that.is.a('boolean')
                            })
                        })
                })
            })
        })
    })
})