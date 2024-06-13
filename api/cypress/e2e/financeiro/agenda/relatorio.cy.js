/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - api/financeiro/v1/Agenda/Relatorio - Relatorio', () => {
            it('CT1 Deve Haver relatorio com todos os Titulos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);
                            expect(response.body.data).to.exist;

                            // Verificar os dados do relatório
                            const relatorio = response.body.data;
                            expect(relatorio.fazenda).to.equal('Fazenda Teste API');
                            expect(relatorio.empresa).to.equal('Empresa Teste API');

                            // Verificar os dados dos títulos
                            const titulos = relatorio.titulos;
                            expect(titulos).to.be.an('array').that.is.not.empty;

                            // Verificar cada título individualmente
                            titulos.forEach((titulo) => {
                                expect(titulo).to.have.property('vencimento').that.is.a('string');
                                expect(titulo).to.have.property('totalPagar').that.is.a('number');
                                expect(titulo).to.have.property('totalReceber').that.is.a('number');
                                expect(titulo).to.have.property('totalPago').that.is.a('number');
                                expect(titulo).to.have.property('totalRecebido').that.is.a('number');

                                // Verificar os detalhes dos títulos
                                const detalhes = titulo.detalhes;
                                expect(detalhes).to.be.an('array').that.is.not.empty;

                                // Verificar cada detalhe individualmente
                                detalhes.forEach((detalhe) => {
                                    expect(detalhe).to.have.property('pessoa').that.is.a('string');
                                    expect(detalhe).to.have.property('parcela').that.is.a('string');
                                    expect(detalhe).to.have.property('valorParcela').that.is.a('number');
                                    expect(detalhe).to.have.property('status').that.is.a('string');
                                    expect(detalhe).to.have.property('saldo').that.is.a('number');
                                    expect(detalhe).to.have.property('numero').that.is.a('string');

                                    // Verificar se existem informações bancárias
                                    if (detalhe.informacoesBancarias) {
                                        // Verificar os dados das informações bancárias
                                        const informacoesBancarias = detalhe.informacoesBancarias;
                                        expect(informacoesBancarias).to.be.an('object');
                                        expect(informacoesBancarias).to.have.property('descricaoBanco').that.is.a('string');
                                        expect(informacoesBancarias).to.have.property('agenciaBancariaNumero').that.is.a('string');
                                        expect(informacoesBancarias).to.have.property('agenciaBancariaDigitoVerificador').that.is.a('string');
                                        expect(informacoesBancarias).to.have.property('numeroConta').that.is.a('string');
                                        expect(informacoesBancarias).to.have.property('digitoVerificadorConta').that.is.a('string');
                                    }
                                });
                            });
                        });
                });
            });

            it('CT2 Deve Haver relatorio de Titulos a pagar', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            it('CT2 Deve Haver relatorio de Titulos a pagar', () => {
                                cy.fixture('financeiro/agenda/relatorio/payloadCt2.json').then((payload) => {
                                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                                        .then((response) => {
                                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                                            expect(response.status).to.equal(200);
                                            expect(response.body).to.exist;
                                            expect(response.body).to.have.property('success', true);
                                            expect(response.body.data).to.exist;

                                            const data = response.body.data;

                                            // Validações principais
                                            expect(data).to.have.property('fazenda').that.equals('Fazenda Teste API');
                                            expect(data).to.have.property('empresa').that.equals('Empresa Teste API');
                                            expect(data).to.have.property('periodo').that.is.an('object');
                                            expect(data.periodo).to.have.property('inicio').that.equals('2024-06-06T00:00:00-03:00');
                                            expect(data.periodo).to.have.property('fim').that.equals('2024-07-06T23:59:59-03:00');
                                            expect(data).to.have.property('usuario').that.equals('apiTest_myfarm@hubconexa.com');
                                            expect(data).to.have.property('totalPago').that.equals(0);
                                            expect(data).to.have.property('totalRecebido').that.equals(0);
                                            expect(data).to.have.property('totalPagar').that.equals(0);

                                            // Validações dos títulos
                                            expect(data).to.have.property('titulos').that.is.an('array').that.has.lengthOf(1);
                                            const titulo = data.titulos[0];
                                            expect(titulo).to.have.property('vencimento').that.equals('2024-06-07T00:00:00+00:00');
                                            expect(titulo).to.have.property('totalPagar').that.equals(0);
                                            expect(titulo).to.have.property('totalReceber').that.equals(50617.14);
                                            expect(titulo).to.have.property('totalPago').that.equals(0);
                                            expect(titulo).to.have.property('totalRecebido').that.equals(0);

                                            // Validações dos detalhes dos títulos
                                            expect(titulo).to.have.property('detalhes').that.is.an('array').that.has.lengthOf(1);
                                            const detalhe = titulo.detalhes[0];
                                            expect(detalhe).to.have.property('pessoa').that.equals('Cliente Teste API');
                                            expect(detalhe).to.have.property('parcela').that.equals('1/1');
                                            expect(detalhe).to.have.property('status').that.equals('Recebido Parcialmente');
                                            expect(detalhe).to.have.property('numero').that.equals('4');

                                            // Validações das informações bancárias
                                            expect(detalhe).to.have.property('informacoesBancarias').that.is.an('object');
                                            const informacoesBancarias = detalhe.informacoesBancarias;
                                            expect(informacoesBancarias).to.have.property('descricaoBanco').that.equals('Crediare S.A. Crédito, Financiamento e Investimento');
                                            expect(informacoesBancarias).to.have.property('agenciaBancariaNumero').that.equals('5854858548');
                                            expect(informacoesBancarias).to.have.property('agenciaBancariaDigitoVerificador').that.equals('4');
                                            expect(informacoesBancarias).to.have.property('numeroConta').that.equals('485484');
                                            expect(informacoesBancarias).to.have.property('digitoVerificadorConta').that.be('4');
                                        });
                                });
                            });

                        })
                })
            })

            it('CT3 Deve Haver relatorio de Titulos recebidos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {

                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);
                            expect(response.body).to.have.property('data');

                            const data = response.body.data;

                            // Verifica a estrutura de 'data'
                            expect(data).to.have.property('fazenda');
                            expect(data).to.have.property('empresa');
                            expect(data).to.have.property('periodo');
                            expect(data.periodo).to.have.property('inicio');
                            expect(data.periodo).to.have.property('fim');

                            // Verifica a estrutura dos objetos dentro de 'titulos'
                            data.titulos.forEach((titulo) => {
                                expect(titulo).to.have.property('vencimento');
                                expect(titulo).to.have.property('totalPagar');
                                expect(titulo).to.have.property('totalReceber');
                                expect(titulo).to.have.property('totalPago');

                            });
                        });
                });
            });


            it('CT4 Deve Haver relatorio de Titulos Parcialmente Recebido', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            const data = response.body.data;

                            // Validações específicas
                            expect(data).to.have.property('fazenda').that.equals('Fazenda Teste API');
                            expect(data).to.have.property('empresa').that.equals('Empresa Teste API');

                            // Validação dos detalhes dos títulos
                            expect(data).to.have.property('titulos').that.is.an('array').that.has.lengthOf(1); // Espera-se um título

                            // Verifica se o status do detalhe do título é "Recebido Parcialmente" e o valorParcela é maior que zero
                            data.titulos.forEach((titulo) => {
                                titulo.detalhes.forEach((detalhe) => {
                                    expect(detalhe).to.have.property('status').that.equals('Recebido Parcialmente'); // Verifica se o status é 'Recebido Parcialmente'
                                    expect(detalhe).to.have.property('valorParcela').that.is.greaterThan(0); // Verifica se o valorParcela é maior que zero
                                });
                            });
                        })
                })
            })
        })
    })
})
