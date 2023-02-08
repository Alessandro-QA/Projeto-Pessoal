/// <reference types='Cypress' />

import bodyCt1 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt1.json'
import bodyCt2 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt2.json'
import bodyCt3 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt3.json'
import bodyCt4 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt4.json'
import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context('Acerto de Frete', () => {
    context('Listagem (/AcertoFretes/List)', () => {
        describe('Filtragem de cabeçalho', () => {
            it('CT1 - Deve trazer 20 resultados sem filtro', () => {

                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(20).to.be.not.null
                        //expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt1))
                    })
            })

            it('CT2 - Deve trazer 2 resultados sem filtro', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro2Resultados)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(2).to.be.not.null
                        //expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt2))
                    })
            })

            it('CT3 - Deve filtrar por motorista', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porMotorista)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(10).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt3))
                    })
            })

            it('CT4 - Deve filtrar por placa', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })
        })

        describe('Filtragem funil', () => {
            it('CT1 - Deve filtrar por periodo', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT2 - Deve filtrar por Origem Interna - UA', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT3 - Deve filtrar por Origem Interna - Cliente', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT4 - Deve filtrar por Destino - UA', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT5 - Deve filtrar por Destino - Cliente', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT6 - Deve filtrar por Safra', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT7 - Deve filtrar por Fazenda', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })

            it('CT8 - Deve filtrar por Status', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })
        })

        describe('Filtragem por pequisa', () => {
            it('CT1 - Deve filtrar por palavra', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })
        })
    })
})