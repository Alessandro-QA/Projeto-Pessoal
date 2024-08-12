/// <reference types='Cypress' />

import { validateAcertoFreteResponse } from '../../../fixtures/producaoAgricola/acertoDeFrete/validate';


context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context(`GET - ${Cypress.env('producaoAgricola')}/AcertoFretes/{ID} - Detalhes`, () => {
            describe('Pendente', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/pendente/bodyCt1.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/2f7381c4-1648-4ef7-878f-0c54fb18a24a`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)

                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(1)  // Status Pendente

                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/pendente/bodyCt2.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/9c43f216-d82c-460f-a9c3-1127abd9da55`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                
                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(1)  // Status Pendente
                                expect(response.body.data.despesas).to.be.an('array').that.is.empty // Sem despesas vinculada
                            })
                    })
                })
            })

            describe('Acertado', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/acertado/bodyCt1.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/0a149a0f-9d51-4579-b307-47f0d335b842`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                               
                                
                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(2)  // Status Acertado

                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/acertado/bodyCt2.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/26d1b415-e4fb-4672-aea3-31ac26cc18cd`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                
                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(2)  // Status Acertado
                                expect(response.body.data.despesas).to.be.an('array').that.is.empty // Sem despesas vinculada
            
                            })
                    })
                })
            })

            describe('Liquidado', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/liquidado/bodyCt1.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/fe510e9c-28ac-4b3e-9c99-3885ec3bbc7f`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                
                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(3) // Status Liquidado
                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/liquidado/bodyCt2.json').then((body) => {
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/24796420-93a3-4481-b33c-16dc9cae7f7b`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                
                                validateAcertoFreteResponse(response.body)
                                expect(response.body.data.statusAcerto).to.equal(3) // Status Liquidado
                                expect(response.body.data.despesas).to.be.an('array').that.is.empty // Sem despesas vinculada
                            })
                    })
                })
            })
        })
    })
})
