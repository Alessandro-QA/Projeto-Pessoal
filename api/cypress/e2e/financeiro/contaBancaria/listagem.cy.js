/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/Listagem - Obtém a Listagem de Contas Bancárias`, () => {
            it('CT1 - Deve obter uma listagem com todas as contas', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        // Verificar se os arrays não estão vazios
                        expect(response.body.corrente).to.be.an('array').that.is.not.empty;
                        expect(response.body.credito).to.be.an('array').that.is.not.empty;
                        expect(response.body.caixaTesouraria).to.be.an('array').that.is.not.empty;

                    })
            })

            it('CT2 - Deve listar as contas por ContaBancariaId - Corrente', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verificar se o array 'corrente' não está vazio
                            expect(response.body.corrente).to.be.an('array').that.is.not.empty;

                            // Verificar se os arrays 'credito' e 'caixaTesouraria' estão vazios
                            expect(response.body.credito).to.be.an('array').that.is.empty;
                            expect(response.body.caixaTesouraria).to.be.an('array').that.is.empty;
                        })
                })
            })

            it('CT3 - Deve listar as contas por ContaBancariaId - Crédito', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verificar se o array 'credito' não está vazio
                            expect(response.body.credito).to.be.an('array').that.is.not.empty;

                            // Verificar se os arrays 'corrente' e 'caixaTesouraria' estão vazios
                            expect(response.body.corrente).to.be.an('array').that.is.empty;
                            expect(response.body.caixaTesouraria).to.be.an('array').that.is.empty;
                        })
                })
            })

            it('CT4 - Deve listar as contas por ContaBancariaId - Tesouraria', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Verificar se o array 'caixaTesouraria' não está vazio
                            expect(response.body.caixaTesouraria).to.be.an('array').that.is.not.empty;

                            // Verificar se os arrays 'corrente' e 'credito' estão vazios
                            expect(response.body.corrente).to.be.an('array').that.is.empty;
                            expect(response.body.credito).to.be.an('array').that.is.empty;
                        })
                })
            })

            it('CT5 - Deve listar as contas por EmpresaId - Corrente', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Iterar sobre cada conta no array 'corrente' e verificar o campo 'empresaTitular'
                            response.body.corrente.forEach((conta) => {
                                expect(conta.empresaTitular).to.equal(params.empresaTitular);
                            });

                            // Verificar o array 'credito' se não estiver vazio
                            if (response.body.credito.length > 0) {
                                response.body.credito.forEach((contaCredito) => {
                                    expect(contaCredito.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }

                            // Verificar o array 'caixaTesouraria' se não estiver vazio
                            if (response.body.caixaTesouraria.length > 0) {
                                response.body.caixaTesouraria.forEach((contaTesouraria) => {
                                    expect(contaTesouraria.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }

                        })
                })
            })

            it('CT6 - Deve listar as contas por EmpresaId - Crédito', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt6.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Iterar sobre cada conta no array 'credito' e verificar o campo 'empresaTitular'
                            response.body.credito.forEach((conta) => {
                                expect(conta.empresaTitular).to.equal(params.empresaTitular);
                            });

                            // Verificar o array 'corrente' se não estiver vazio
                            if (response.body.corrente.length > 0) {
                                response.body.corrente.forEach((contaCorrente) => {
                                    expect(contaCorrente.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }

                            // Verificar o array 'caixaTesouraria' se não estiver vazio
                            if (response.body.caixaTesouraria.length > 0) {
                                response.body.caixaTesouraria.forEach((contaTesouraria) => {
                                    expect(contaTesouraria.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }
                        })
                })
            })

            it('CT7 - Deve listar as contas por EmpresaId - Tesouraria', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt7.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            // Iterar sobre cada conta no array 'caixaTesouraria' e verificar o campo 'empresaTitular'
                            response.body.caixaTesouraria.forEach((conta) => {
                                expect(conta.empresaTitular).to.equal(params.empresaTitular);
                            });

                            // Verificar o array 'corrente' se não estiver vazio
                            if (response.body.corrente.length > 0) {
                                response.body.corrente.forEach((contaCorrente) => {
                                    expect(contaCorrente.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }

                            // Verificar o array 'credito' se não estiver vazio
                            if (response.body.credito.length > 0) {
                                response.body.credito.forEach((contaCredito) => {
                                    expect(contaCredito.empresaTitular).to.equal(params.empresaTitular);
                                });
                            }
                        })
                })
            })

            it('CT8 - Deve listar as contas correntes ativas', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt8.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verificar se os arrays não estão vazios
                            expect(response.body.corrente).to.be.an('array').that.is.not.empty;
                            expect(response.body.credito).to.be.an('array').that.is.not.empty;
                            expect(response.body.caixaTesouraria).to.be.an('array').that.is.not.empty;
                        })
                })
            })

            it('CT9 - Deve listar as contas correntes inativas', () => {
                cy.fixture('financeiro/contaBancaria/listagem/paramsCt9.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Listagem`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verificar se os arrays não estão vazios
                            expect(response.body.corrente).to.be.an('array').that.is.not.empty;
                            expect(response.body.credito).to.be.an('array').that.is.not.empty;
                            expect(response.body.caixaTesouraria).to.be.an('array').that.is.not.empty;

                        })
                })
            })
        })
    })
})
