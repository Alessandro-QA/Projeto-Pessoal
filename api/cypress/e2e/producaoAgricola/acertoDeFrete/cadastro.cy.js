/// <reference types='Cypress' />

const assertResponse = { "success": true, "data": true }

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        describe('POST - /api/producao-agricola/v1/AcertoFretes - Cadastro', () => {
            it.skip('CT1 - Deve cadastrar Acerto de Frete', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/cadastro/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null
                            expect(response.body.success).to.equal(true)

                            cy.section('Deletar Acerto Criado Para não conflitar com outros testes')

                            const id = response.body.data.id

                            cy.deleteRequest('/api/producao-agricola/v1/AcertoFretes', id).then((response) => {
                                expect(response.body).to.deep.equal(assertResponse)
                            })
                        })
                })
            })

            it.skip('CT2 - Deve cadastrar Acerto de Frete Com Valor Manual', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/cadastro/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null
                            expect(response.body.success).to.equal(true)
                            expect(response.body.data.tipoValorManual).to.equal(2)
                            expect(response.body.data.valorManual).to.equal(1500.0)
                            expect(response.body.data.valorTotal).to.equal(8033.0)

                            cy.section('Deletar Acerto Criado Para não conflitar com outros testes')

                            const id = response.body.data.id

                            cy.deleteRequest('/api/producao-agricola/v1/AcertoFretes', id).then((response) => {
                                expect(response.body).to.deep.equal(assertResponse)
                            })
                        })
                })
            })

            it.skip('CT3 - Deve cadastrar Acerto de Frete Com Despesa', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/cadastro/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null
                            expect(response.body.success).to.equal(true)
                            expect(response.body.data.tipoValorManual).to.equal(1)
                            expect(response.body.data.valorManual).to.equal(25000.0)
                            expect(response.body.data.valorTotal).to.equal(25000.0)
                            expect(response.body.data.despesas).to.be.not.null

                            cy.section('Deletar Acerto Criado Para não conflitar com outros testes')

                            const id = response.body.data.id

                            cy.deleteRequest('/api/producao-agricola/v1/AcertoFretes', id).then((response) => {
                                expect(response.body).to.deep.equal(assertResponse)
                            })
                        })
                })
            })
        })
    })
})
