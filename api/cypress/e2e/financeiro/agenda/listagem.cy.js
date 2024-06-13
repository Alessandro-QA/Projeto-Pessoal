/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Agenda/Listagem - Listagem da agenda Financeira`, () => {

            it('CT1 Deve Obter Listagem da agenda Financeira', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null

                            // Validando os dados dos títulos
                            response.body.data.titulos.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string')
                                expect(titulo.statusTitulo).to.be.a('number')
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao')
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.moeda).to.be.an('object').that.has.all.keys('id', 'descricao', 'codigo', 'ativo')
                                expect(titulo.isMultiMoeda).to.be.a('boolean')
                            });

                            // Validando o total a pagar e o total a receber
                            expect(response.body.data.totalAPagar).to.be.a('number')
                            expect(response.body.data.totalAReceber).to.be.a('number')
                        });
                });
            });

            it('CT2 Deve Obter listagem de Titulos a Pagar', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null

                            // Validando os dados dos títulos
                            response.body.data.titulos.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string')
                                expect(titulo.statusTitulo).to.be.a('number')
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao')
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.moeda).to.be.an('object').that.has.all.keys('id', 'descricao', 'codigo', 'ativo')
                                expect(titulo.isMultiMoeda).to.be.a('boolean')
                            });

                            // Validando o total a pagar e o total a receber
                            expect(response.body.data.totalAPagar).to.be.a('number')
                            expect(response.body.data.totalAReceber).to.be.a('number')
                        });
                });
            });

            it('CT3 Deve Obter listagem de Titulos Pagos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null

                            // Validando os dados dos títulos
                            response.body.data.titulos.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string')
                                expect(titulo.statusTitulo).to.be.a('number')
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao')
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.moeda).to.be.an('object').that.has.all.keys('id', 'descricao', 'codigo', 'ativo')
                                expect(titulo.documentoId).to.be.a('string')
                            });

                            // Validando o total a pagar e o total a receber
                            expect(response.body.data.totalAPagar).to.be.a('number')
                            expect(response.body.data.totalAReceber).to.be.a('number')
                        });
                });
            });

            it('CT4 Deve Obter listagem de Titulos Recebidos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null

                            // Validando os dados dos títulos
                            response.body.data.titulos.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string')
                                expect(titulo.statusTitulo).to.be.a('number')
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao')
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.moeda).to.be.an('object').that.has.all.keys('id', 'descricao', 'codigo', 'ativo')
                                expect(titulo.isMultiMoeda).to.be.a('boolean')
                            });

                            // Validando o total a pagar e o total a receber
                            expect(response.body.data.totalAPagar).to.be.a('number')
                            expect(response.body.data.totalAReceber).to.be.a('number')
                        });
                });
            });

            it('CT5 Deve Obter listagem de Titulos por Pessoa', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt5.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null

                            // Verificar se os títulos estão presentes
                            expect(response.body.data.titulos).to.be.an('array').that.is.not.empty

                            // Validar cada título retornado
                            response.body.data.titulos.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string')
                                expect(titulo.statusTitulo).to.be.a('number')
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao')
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao')
                                expect(titulo.documentoId).to.be.a('string')
                            })
                        });
                });
            });

        });
    });
});
