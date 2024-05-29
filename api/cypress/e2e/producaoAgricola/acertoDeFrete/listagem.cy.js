/// <reference types='Cypress' />

import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context('POST - /api/producao-agricola/v1/AcertoFretes/List - Listagem', () => {
            describe('Filtragem de cabeçalho', () => {
                it('CT1 - Deve trazer 20 resultados sem filtro', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT2 - Deve trazer 2 resultados sem filtro', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro2Resultados)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                        })
                })

                it('CT3 - Deve filtrar por motorista', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porMotorista)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })

                it('CT4 - Deve filtrar por placa', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })
            })

            describe('Filtragem funil', () => {
                it('CT1 - Deve filtrar por periodo', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porPeriodo)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT2 - Deve filtrar por Origem - Unidade Armazenamento', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porOrigemUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(3).to.be.not.null
                        })
                })

                it('CT3 - Deve filtrar por Origem - Cliente', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porOrigemCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(4).to.be.not.null
                        })
                })

                it('CT4 - Deve filtrar por Destino - Unidade Armazenamento', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porDestinoUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                        })
                })

                it('CT5 - Deve filtrar por Destino - Cliente', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porDestinoCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })

                it('CT6 - Deve filtrar por Safra', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porSafra)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT7 - Deve filtrar por Fazenda', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porFazenda)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT8 - Deve filtrar por Status - Liquidado', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusLiquidado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                        })
                })

                it('CT9 - Deve filtrar por Status - Pendente', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusPendente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(13).to.be.not.null
                        })
                })

                it('CT10 - Deve filtrar por Status - Acertado', () => {
                    cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusAcertado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                        })
                })
            })

            // TODO: Aguardando correção, bug #60589
            describe.skip('Filtragem por pequisa', () => {
                it('CT1 - Deve filtrar por palavra', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt4').then((body) => {
                        cy.postRequest('/api/producao-agricola/v1/AcertoFretes/List', seedTeste.porPalavra)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                expect(response.body).to.have.lengthOf(11).to.be.not.null
                                expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                            })
                    })
                })
            })
        })
    })
})