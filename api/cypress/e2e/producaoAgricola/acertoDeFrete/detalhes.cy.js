/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context('Detalhes - GET - /api/producao-agricola/v1/AcertoFretes/{ID}', () => {
            describe('Pendente', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/pendente/bodyCt1.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/2f7381c4-1648-4ef7-878f-0c54fb18a24a')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).not.be.empty
                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/pendente/bodyCt2.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/9c43f216-d82c-460f-a9c3-1127abd9da55')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).be.empty
                            })
                    })
                })
            })

            describe('Acertado', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/acertado/bodyCt1.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/0a149a0f-9d51-4579-b307-47f0d335b842')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).not.be.empty
                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/acertado/bodyCt2.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/26d1b415-e4fb-4672-aea3-31ac26cc18cd')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).be.empty
                            })
                    })
                })
            })

            describe('Liquidado', () => {
                it('CT1 - Deve exibir detalhes de Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/liquidado/bodyCt1.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/fe510e9c-28ac-4b3e-9c99-3885ec3bbc7f')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).not.be.empty
                            })
                    })
                })

                it('CT2 - Deve exibir detalhes de Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/detalhes/liquidado/bodyCt2.json').then((body) => {
                        cy.getRequest('/api/producao-agricola/v1/AcertoFretes/24796420-93a3-4481-b33c-16dc9cae7f7b')
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).to.equal(body.data.id)
                                expect(response.body.data.numero).to.equal(body.data.numero)
                                expect(response.body.data.statusAcerto).to.equal(body.data.statusAcerto)
                                expect(response.body.data.motorista).to.deep.equal(body.data.motorista)
                                expect(response.body.data.veiculo).to.deep.equal(body.data.veiculo)
                                expect(response.body.data.romaneios).to.deep.equal(body.data.romaneios)
                                expect(response.body.data.despesas).be.empty
                            })
                    })
                })
            })
        })
    })
})
