/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe(`POST - ${Cypress.env('financeiro')}/Agenda/ListTitulos - Listagem da agenda Financeira`, () => {

            it('CT1 Deve Obter Listagem de Títulos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/ListTitulos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body.success).to.be.true;
                            expect(response.body.data).to.exist;
                            expect(response.body.data).to.be.an('array').that.is.not.empty;

                            // Verificar se os dados de cada título estão presentes
                            response.body.data.forEach((titulo) => {
                                expect(titulo).to.have.property('id').that.is.a('string');
                                expect(titulo).to.have.property('statusTitulo').that.is.a('number');
                                expect(titulo).to.have.property('pessoa').that.is.an('object');
                                expect(titulo).to.have.property('empresa').that.is.an('object');
                                expect(titulo).to.have.property('fazenda').that.is.an('object');
                                expect(titulo).to.have.property('formaPagamento').that.is.an('object');
                                expect(titulo).to.have.property('moeda').that.is.an('object');
                                expect(titulo).to.have.property('isMultiMoeda').that.is.a('boolean');
                                expect(titulo).to.have.property('parcela').that.is.a('string');
                                expect(titulo).to.have.property('valor').that.is.a('number');
                                expect(titulo).to.have.property('dataVencimento').that.is.a('string');
                            });
                        });
                });
            });

            it('CT2 Deve Obter Listagem de Títulos a Pagar', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/ListTitulos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body.data).to.exist;
                            expect(response.body.data).to.not.be.null;

                            // Verificar se os dados de cada título estão presentes
                            response.body.data.forEach((titulo) => {
                                expect(titulo).to.have.property('id').that.is.a('string');
                                expect(titulo).to.have.property('statusTitulo').that.is.a('number');
                                expect(titulo).to.have.property('pessoa').that.is.an('object');
                                expect(titulo).to.have.property('empresa').that.is.an('object');
                                expect(titulo).to.have.property('fazenda').that.is.an('object');
                                expect(titulo).to.have.property('formaPagamento').that.is.an('object');
                                expect(titulo).to.have.property('moeda').that.is.an('object');
                                expect(titulo).to.have.property('isMultiMoeda').that.is.a('boolean');
                                expect(titulo).to.have.property('parcela').that.is.a('string');
                                expect(titulo).to.have.property('valor').that.is.a('number');
                                expect(titulo).to.have.property('dataVencimento').that.is.a('string');

                                // Verificar se a propriedade 'numeroBoleto' existe antes de fazer a expectativa
                                if (titulo.numeroBoleto !== undefined) {
                                    expect(titulo).to.have.property('numeroBoleto').that.is.a('string');
                                }
                            });
                        });
                });
            });

            it('CT3 Deve Obter Listagem de Títulos Pagos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/ListTitulos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body.data).to.exist;
                            expect(response.body.data).to.not.be.null;

                            // Verificar se os dados de cada título estão presentes
                            response.body.data.forEach((titulo) => {
                                expect(titulo).to.have.property('id').that.is.a('string');
                                expect(titulo).to.have.property('statusTitulo').that.is.a('number');
                                expect(titulo).to.have.property('pessoa').that.is.an('object');
                                expect(titulo).to.have.property('empresa').that.is.an('object');
                                expect(titulo).to.have.property('fazenda').that.is.an('object');
                                expect(titulo).to.have.property('formaPagamento').that.is.an('object');
                                expect(titulo).to.have.property('valor').that.is.a('number');
                                expect(titulo).to.have.property('dataVencimento').that.is.a('string');
                                expect(titulo).to.have.property('saldoParcela').that.is.a('number');
                                expect(titulo).to.have.property('tipo').that.is.a('number');
                                expect(titulo).to.have.property('origemDocumento').that.is.a('number');
                                expect(titulo).to.have.property('numero').that.is.a('string');
                                expect(titulo).to.have.property('documentoId').that.is.a('string');
                            });
                        });
                });
            });

            it('CT4 Deve Obter Listagem de Títulos Recebidos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/ListTitulos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body.data).to.exist;
                            expect(response.body.data).to.not.be.null;

                            // Verificar se os dados de cada título estão presentes
                            response.body.data.forEach((titulo) => {
                                expect(titulo).to.have.property('id').that.is.a('string');
                                expect(titulo).to.have.property('statusTitulo').that.is.a('number');
                                expect(titulo).to.have.property('pessoa').that.is.an('object');
                                expect(titulo).to.have.property('empresa').that.is.an('object');
                                expect(titulo).to.have.property('fazenda').that.is.an('object');
                                expect(titulo).to.have.property('formaPagamento').that.is.an('object');
                                expect(titulo).to.have.property('tipo').that.is.a('number');
                                expect(titulo).to.have.property('origemDocumento').that.is.a('number');
                                expect(titulo).to.have.property('numero').that.is.a('string');
                                expect(titulo).to.have.property('documentoId').that.is.a('string');
                            });
                        });
                });
            });

            it('CT5 Deve Obter Listagem de Títulos por Pessoas', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCt5.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/ListTitulos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body.data).to.exist;
                            expect(response.body.data).to.not.be.null;

                            // Validando os dados da lista de títulos
                            response.body.data.forEach((titulo) => {
                                expect(titulo.id).to.be.a('string');
                                expect(titulo.statusTitulo).to.be.a('number');
                                expect(titulo.pessoa).to.be.an('object').that.has.all.keys('pessoaTipo', 'numeroDocumento', 'id', 'descricao');
                                expect(titulo.empresa).to.be.an('object').that.has.all.keys('id', 'descricao');
                                expect(titulo.fazenda).to.be.an('object').that.has.all.keys('id', 'descricao');
                                expect(titulo.formaPagamento).to.be.an('object').that.has.all.keys('id', 'descricao');
                                expect(titulo.moeda).to.be.an('object').that.has.all.keys('id', 'descricao', 'codigo', 'ativo');
                            });
                        });
                });
            });

        });
    });
});
