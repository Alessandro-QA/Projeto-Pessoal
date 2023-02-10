/// <reference types='Cypress' />

import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context('Acerto de Frete', () => {
    context('Listagem - POST /api/producao-agricola/v1/AcertoFretes/List)', () => {
        describe('Filtragem de cabeçalho', () => {
            it('CT1 - Deve trazer 20 resultados sem filtro', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/cabecalho/bodyCt1.json').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT2 - Deve trazer 2 resultados sem filtro', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/cabecalho/bodyCt2.json').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro2Resultados)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT3 - Deve filtrar por motorista', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/cabecalho/bodyCt3.json').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porMotorista)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT4 - Deve filtrar por placa', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/cabecalho/bodyCt4').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(9).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })
        })

        describe('Filtragem funil', () => {
            it('CT1 - Deve filtrar por periodo', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt1').then((body) => {

                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPeriodo)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT2 - Deve filtrar por Origem - Unidade Armazenamento', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt2').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porOrigemUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(3).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT3 - Deve filtrar por Origem - Cliente', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt3').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porOrigemCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(4).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT4 - Deve filtrar por Destino - Unidade Armazenamento', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt4').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porDestinoUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT5 - Deve filtrar por Destino - Cliente', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt5').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porDestinoCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(11).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT6 - Deve filtrar por Safra', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt6').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porSafra)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT7 - Deve filtrar por Fazenda', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt7').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porFazenda)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT8 - Deve filtrar por Status - Liquidado', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt8').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusLiquidado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT9 - Deve filtrar por Status - Pendente', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt9').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusPendente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(10).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })

            it('CT10 - Deve filtrar por Status - Acertado', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt10').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porStatusAcertado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })
        })

        // TODO: Aguardando correção, bug #60589
        describe.skip('Filtragem por pequisa', () => {
            it('CT1 - Deve filtrar por palavra', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagem/funil/bodyCt4').then((body) => {
                    cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPalavra)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(11).to.be.not.null
                            expect(JSON.stringify(response.body)).to.equal(JSON.stringify(body))
                        })
                })
            })
        })
    })
})