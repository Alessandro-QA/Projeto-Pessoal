/// <reference types='Cypress' />

const description = require('../../fixtures/conversorUnidadeMedida/criaConversaoUnidadeMedida/criaConversaoUnidadeMedida.description')

context('Conversor Unidade Medida', () => {
    context('Cadastrar as configurações de Conversão de Unidade Medida', () => {

        let idConversao

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida - Cadastrar, Editar, Obter e Excluir Conversões de Unidades de Medida`, () => {

            it('CT1 - Cadastrar uma Conversão de Unidade de Medida', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('conversorUnidadeMedida/criaConversaoUnidadeMedida/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Validação dos tipos de dados
                            const responseData = response.body.data
                            expect(responseData).to.have.property('id').that.is.a('string')
                            expect(responseData).to.have.property('unidadeMedidaBaseId').that.is.a('string')
                            expect(responseData).to.have.property('unidadeMedidaConvertidaId').that.is.a('string')
                            expect(responseData).to.have.property('valor').that.is.a('number')

                            // Salvar o ID da conversão criada para uso futuro
                            idConversao = response.body.data.id
                        })
                })
            })

            it('CT2 - Editar uma Conversão de Unidade de Medida', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('conversorUnidadeMedida/criaConversaoUnidadeMedida/payloadCt2.json').then((payload) => {

                    // Copiando o body do cenário anterior
                    payload.id = idConversao

                    // Alterando Unidade Base e Valor
                    payload.unidadeMedidaBaseId = "12cf8f5a-65c5-3266-6d67-fc45b0ef3d80"
                    payload.valor = 45

                    cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)

                            const responseData = response.body.data
                            expect(responseData).to.have.property('id').that.is.a('string')
                            expect(responseData).to.have.property('unidadeMedidaBaseId').that.is.a('string')
                            expect(responseData).to.have.property('unidadeMedidaConvertidaId').that.is.a('string')
                            expect(responseData).to.have.property('valor').that.is.a('number')
                        })
                })
            })

            it('CT3 - Obtém uma Conversão de Unidade de Medida pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida/${idConversao}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        // Verifica se a estrutura da resposta está correta
                        const responseData = response.body

                        expect(responseData).to.have.property('id').that.is.a('string')
                        expect(responseData).to.have.property('unidadeMedidaBase').that.is.an('object')
                        expect(responseData).to.have.property('unidadeMedidaConvertida').that.is.an('object')
                        expect(responseData).to.have.property('valor').that.is.a('number')

                        // Validação do objeto unidadeMedidaBase
                        const unidadeMedidaBase = responseData.unidadeMedidaBase
                        expect(unidadeMedidaBase).to.have.property('id').that.is.a('string')
                        expect(unidadeMedidaBase).to.have.property('descricao').that.is.a('string')
                        expect(unidadeMedidaBase).to.have.property('codigo').that.is.a('string')
                        expect(unidadeMedidaBase).to.have.property('tipo').that.is.a('string')
                        expect(unidadeMedidaBase).to.have.property('ativo').that.is.a('boolean')

                        // Validação do objeto unidadeMedidaConvertida
                        const unidadeMedidaConvertida = responseData.unidadeMedidaConvertida
                        expect(unidadeMedidaConvertida).to.have.property('id').that.is.a('string')
                        expect(unidadeMedidaConvertida).to.have.property('descricao').that.is.a('string')
                        expect(unidadeMedidaConvertida).to.have.property('codigo').that.is.a('string')
                        expect(unidadeMedidaConvertida).to.have.property('tipo').that.is.a('string')
                        expect(unidadeMedidaConvertida).to.have.property('ativo').that.is.a('boolean')
                    })
            })

            it('CT4 - Obtém Todas as Conversões de Unidades de Medida', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        // Limitando o número de itens validados
                        const responseData = response.body
                        const itemsToValidate = responseData.slice(0, 10) // Validando apenas os primeiros 10 itens

                        itemsToValidate.forEach(item => {
                            expect(item).to.have.property('id').that.is.a('string')
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

            it('CT5 - Apaga a Conversão de Unidade de Medida pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida`, idConversao)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                    })
            })
        })
    })
})