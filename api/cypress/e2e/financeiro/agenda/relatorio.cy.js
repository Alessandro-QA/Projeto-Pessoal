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
                            const allTitulosValidos = titulos.every((titulo) => {
                                const tituloValido = [
                                    { key: 'vencimento', type: 'string' },
                                    { key: 'totalPagar', type: 'number' },
                                    { key: 'totalReceber', type: 'number' },
                                    { key: 'totalPago', type: 'number' },
                                    { key: 'totalRecebido', type: 'number' }
                                ].every(({ key, type }) => typeof titulo[key] === type);

                                // Verificar os detalhes dos títulos
                                const detalhes = titulo.detalhes;
                                const detalhesValidos = detalhes.every((detalhe) => {
                                    const detalheValido = [
                                        { key: 'pessoa', type: 'string' },
                                        { key: 'parcela', type: 'string' },
                                        { key: 'valorParcela', type: 'number' },
                                        { key: 'status', type: 'string' },
                                        { key: 'saldo', type: 'number' },
                                        { key: 'numero', type: 'string' }
                                    ].every(({ key, type }) => typeof detalhe[key] === type);

                                    // Verificar se existem informações bancárias
                                    if (detalhe.informacoesBancarias) {
                                        // Verificar os dados das informações bancárias
                                        const informacoesBancarias = detalhe.informacoesBancarias;
                                        const informacoesBancariasValidas = [
                                            { key: 'descricaoBanco', type: 'string' },
                                            { key: 'agenciaBancariaNumero', type: 'string' },
                                            { key: 'agenciaBancariaDigitoVerificador', type: 'string' },
                                            { key: 'numeroConta', type: 'string' },
                                            { key: 'digitoVerificadorConta', type: 'string' }
                                        ].every(({ key, type }) => typeof informacoesBancarias[key] === type);

                                        return detalheValido && informacoesBancariasValidas;
                                    }

                                    return detalheValido;
                                });

                                return tituloValido && Array.isArray(detalhes) && detalhesValidos;
                            });

                            expect(allTitulosValidos).to.be.true;
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
                            // Verificação geral de existência de propriedades e tipos
                            expect(data).to.exist;
                            expect(data).to.be.an('object');
                            expect(data.fazenda).to.be.a('string');
                            expect(data.empresa).to.be.a('string');
                            expect(data.periodo).to.be.an('object');
                            expect(data.usuario).to.be.a('string');
                            expect(data.totalPago).to.be.a('number');
                            expect(data.totalRecebido).to.be.a('number');
                            expect(data.titulos).to.be.an('array');

                            // Verificações dos tipos dos títulos
                            if (data.titulos.length > 0) {
                                const titulo = data.titulos[0];
                                expect(titulo).to.be.an('object');
                                expect(titulo.vencimento).to.be.a('string');
                                expect(titulo.totalPagar).to.be.a('number');
                                expect(titulo.totalReceber).to.be.a('number');
                                expect(titulo.totalPago).to.be.a('number');
                                expect(titulo.totalRecebido).to.be.a('number');

                                // Verificações dos tipos dos detalhes dos títulos
                                if (titulo.detalhes && titulo.detalhes.length > 0) {
                                    const detalhe = titulo.detalhes[0];
                                    expect(detalhe).to.be.an('object');
                                    expect(detalhe.pessoa).to.be.a('string');
                                    expect(detalhe.parcela).to.be.a('string');
                                    expect(detalhe.status).to.be.a('string');
                                    expect(detalhe.numero).to.be.a('string');

                                    // Verificações dos tipos das informações bancárias
                                    if (detalhe.informacoesBancarias) {
                                        const informacoesBancarias = detalhe.informacoesBancarias;
                                        expect(informacoesBancarias).to.be.an('object');
                                        expect(informacoesBancarias.descricaoBanco).to.be.a('string');
                                        expect(informacoesBancarias.agenciaBancariaNumero).to.be.a('string');
                                        expect(informacoesBancarias.agenciaBancariaDigitoVerificador).to.be.a('string');
                                        expect(informacoesBancarias.numeroConta).to.be.a('string');
                                        expect(informacoesBancarias.digitoVerificadorConta).to.be.a('string');
                                    }
                                }
                            }
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

            it('CT4 Deve Haver relatorio de Titulos Parcialmente Recebido', () => {
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
                            expect(data.titulos).to.be.an('array'); // Espera-se um título

                            // Verifica se o status do detalhe do título é "Recebido Parcialmente" e o valorParcela é maior que zero
                            data.titulos.forEach((titulo) => {
                                titulo.detalhes.forEach((detalhe) => {
                                    expect(detalhe).to.have.property('status').that.equals('Recebido Parcialmente'); // Verifica se o status é 'Recebido Parcialmente'
                                    expect(detalhe).to.have.property('valorParcela').that.is.greaterThan(0); // Verifica se o valorParcela é maior que zero                               // Verificações das informações bancárias
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
