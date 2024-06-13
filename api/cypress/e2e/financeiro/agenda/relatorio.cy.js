/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe(`POST - ${Cypress.env('financeiro')}/Agenda/Relatorio - Relatorio`, () => {

            it('CT1 Deve Haver relatorio com todos os Titulos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/relatorio`, payload)
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
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            // Verificações específicas para CT2
                            const data = response.body.data;
                            expect(data).to.exist;
                            expect(data.fazenda).to.equal('Fazenda Teste API');
                            expect(data.empresa).to.equal('Empresa Teste API');
                            expect(data.periodo).to.be.an('object');
                            expect(data.periodo.inicio).to.equal('2024-06-06T00:00:00-03:00');
                            expect(data.periodo.fim).to.equal('2024-07-06T23:59:59-03:00');
                            expect(data.usuario).to.equal('apiTest_myfarm@hubconexa.com');
                            expect(data.totalPago).to.equal(0);
                            expect(data.totalRecebido).to.equal(0);


                            // Verificações dos títulos
                            expect(data.titulos).to.be.an('array').that.has.lengthOf(1);
                            const titulo = data.titulos[0];
                            expect(titulo.vencimento).to.equal('2024-06-07T00:00:00+00:00');
                            expect(titulo.totalPagar).to.equal(0);
                            expect(titulo.totalReceber).to.equal(50617.14);
                            expect(titulo.totalPago).to.equal(0);
                            expect(titulo.totalRecebido).to.equal(0);

                            // Verificações dos detalhes dos títulos
                            expect(titulo.detalhes).to.be.an('array').that.has.lengthOf(1);
                            const detalhe = titulo.detalhes[0];
                            expect(detalhe.pessoa).to.equal('Cliente Teste API');
                            expect(detalhe.parcela).to.equal('1/1');
                            expect(detalhe.status).to.equal('Recebido Parcialmente');
                            expect(detalhe.numero).to.equal('4');

                            // Verificações das informações bancárias
                            expect(detalhe.informacoesBancarias).to.be.an('object');
                            const informacoesBancarias = detalhe.informacoesBancarias;
                            expect(informacoesBancarias.descricaoBanco).to.equal('Crediare S.A. Crédito, Financiamento e Investimento');
                            expect(informacoesBancarias.agenciaBancariaNumero).to.equal('5854858548');
                            expect(informacoesBancarias.agenciaBancariaDigitoVerificador).to.equal('4');
                            expect(informacoesBancarias.numeroConta).to.equal('485484');
                            expect(informacoesBancarias.digitoVerificadorConta).to.equal('4');
                        });
                });
            });

            it('CT3 Deve Haver relatorio de Titulos recebidos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            const data = response.body.data;

                            // Verificações específicas para CT3
                            expect(data.fazenda).to.exist;
                            expect(data.empresa).to.exist;
                            expect(data.periodo).to.exist;

                            // Verificações dos títulos recebidos
                            data.titulos.forEach((titulo) => {
                                expect(titulo).to.have.property('vencimento');
                                expect(titulo).to.have.property('totalPagar');
                                expect(titulo).to.have.property('totalReceber');
                                expect(titulo).to.have.property('totalPago');
                            });
                        });
                });
            });

            it.only('CT4 Deve Haver relatorio de Titulos Parcialmente Recebido', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            const data = response.body.data;

                            // Verificações específicas para CT4
                            expect(data.fazenda).to.equal('Fazenda Teste API');
                            expect(data.empresa).to.equal('Empresa Teste API');

                            // Verificações dos detalhes dos títulos parcialmente recebidos
                            expect(data.titulos).to.be.an('array').that.has.lengthOf(1); // Espera-se um título

                            // Verifica se o status do detalhe do título é "Recebido Parcialmente" e o valorParcela é maior que zero
                            data.titulos.forEach((titulo) => {
                                titulo.detalhes.forEach((detalhe) => {
                                    expect(detalhe).to.have.property('status').that.equals('Recebido Parcialmente'); // Verifica se o status é 'Recebido Parcialmente'
                                    expect(detalhe).to.have.property('valorParcela').that.is.greaterThan(0); // Verifica se o valorParcela é maior que zero

                                    // Verificações das informações bancárias
                                    if (detalhe.informacoesBancarias) {
                                        const informacoesBancarias = detalhe.informacoesBancarias;
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
        });
    });
});

