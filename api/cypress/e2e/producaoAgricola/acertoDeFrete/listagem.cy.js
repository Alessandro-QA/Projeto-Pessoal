/// <reference types='Cypress' />

import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context(`POST - ${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List - Listagem`, () => {
            describe('Filtragem de cabeçalho', () => {
                it('CT1 - Deve trazer 20 resultados sem filtro', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.semFiltro)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT2 - Deve trazer 2 resultados sem filtro', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.semFiltro2Resultados)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                        })
                })

                it('CT3 - Deve filtrar por motorista', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porMotorista)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })

                it('CT4 - Deve filtrar por placa', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porPlaca)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })
            })

            describe('Filtragem funil', () => {
                it('CT1 - Deve filtrar por periodo', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porPeriodo)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT2 - Deve filtrar por Origem - Unidade Armazenamento', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porOrigemUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(3).to.be.not.null
                        })
                })

                it('CT3 - Deve filtrar por Origem - Cliente', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porOrigemCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(4).to.be.not.null
                        })
                })

                it('CT4 - Deve filtrar por Destino - Unidade Armazenamento', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porDestinoUA)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(2).to.be.not.null
                        })
                })

                it('CT5 - Deve filtrar por Destino - Cliente', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porDestinoCliente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(12).to.be.not.null
                        })
                })

                it('CT6 - Deve filtrar por Safra', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porSafra)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT7 - Deve filtrar por Fazenda', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porFazenda)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(20).to.be.not.null
                        })
                })

                it('CT8 - Deve filtrar por Status - Liquidado', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porStatusLiquidado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                        })
                })

                it('CT9 - Deve filtrar por Status - Pendente', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porStatusPendente)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(13).to.be.not.null
                        })
                })

                it('CT10 - Deve filtrar por Status - Acertado', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porStatusAcertado)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.have.lengthOf(5).to.be.not.null
                        })
                })
            })

            describe('Filtragem por pesquisa', () => {
                it('CT1 - Deve filtrar por palavra', () => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/List`, seedTeste.porPalavra)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.be.not.null

                            // Verifica se o response.body é um array não vazio
                            expect(response.body).to.be.an('array').that.is.not.empty;

                            // Valida os campos do primeiro objeto no array
                            const firstItem = response.body[0];
                            expect(firstItem).to.have.property('id').that.is.a('string');
                            expect(firstItem).to.have.property('numero').that.is.a('number');
                            expect(firstItem).to.have.property('dataAcerto').that.is.a('string').and.matches(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/);
                            expect(firstItem).to.have.property('statusAcerto').that.is.a('number');

                            // Verifica o objeto motorista
                            expect(firstItem).to.have.property('motorista').that.is.an('object').and.not.null;
                            expect(firstItem.motorista).to.have.property('id').that.is.a('string');
                            expect(firstItem.motorista).to.have.property('documentoPrincipal').that.is.a('string');
                            expect(firstItem.motorista).to.have.property('descricao').that.is.a('string');

                            // Verifica o objeto veiculo
                            expect(firstItem).to.have.property('veiculo').that.is.an('object').and.not.null;
                            expect(firstItem.veiculo).to.have.property('id').that.is.a('string');
                            expect(firstItem.veiculo).to.have.property('placa').that.is.a('string');

                            expect(firstItem).to.have.property('tipoValorManual').that.is.a('number');
                            expect(firstItem).to.have.property('valorManual').that.is.a('number');
                            expect(firstItem).to.have.property('valorTotal').that.is.a('number');

                        })
                })
            })
        })
    })
})