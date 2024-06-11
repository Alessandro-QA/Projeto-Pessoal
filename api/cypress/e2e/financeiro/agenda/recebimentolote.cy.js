/// <reference types='Cypress' />

const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - /api/financeiro/v1/Agenda/Recebimento - Recebimento', () => {

            let numeroDocumento1;
            let numeroDocumento2;
            let idDocumentoReceber1;
            let idDocumentoReceber2;
            let randomNumber1;
            let randomNumber2;
            let currentDate = dayjs().format('YYYY-MM-DDTHH:mm:ssZ'); // Definir a data e hora atual no formato desejado

            it('CT1 - Deve criar só um Documento', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt1.json').then((payload) => {

                    // Gerar novos números aleatórios para os documentos
                    randomNumber1 = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999

                    // Primeiro Documento
                    payload.numero = randomNumber1.toString();
                    numeroDocumento1 = payload.numero;
                    payload.financeiro.parcelas[0].vencimento = currentDate;
                    payload.dataRecebimento = currentDate;

                    cy.postRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            idDocumentoReceber1 = response.body.id; // Salvar o ID do primeiro documento
                        });
                });
            });

            it('CT2- Deve criar o Segundo Documento', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt1.json').then((payload) => {

                    // Gerar novos números aleatórios para os documentos
                    randomNumber2 = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999

                    // Primeiro Documento
                    payload.numero = randomNumber2.toString();
                    numeroDocumento2 = payload.numero;
                    payload.financeiro.parcelas[0].vencimento = currentDate;
                    payload.dataRecebimento = currentDate;

                    cy.postRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            idDocumentoReceber2 = response.body.id; // Salvar o ID do primeiro documento
                        });
                });
            });

            it('CT3 - Deve listar a agenda A Pagar e a Receber', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt3.json').then((payload) => {

                    // Definir a data inicial e final no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const dataInicial = dayjs().startOf('day').format('YYYY-MM-DDTHH:mm:ssZ');
                    const dataFinal = dayjs().endOf('day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Atualizar as datas no payload
                    payload.dataInicial = dataInicial;
                    payload.dataFinal = dataFinal;

                    cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Encontrar o objeto dentro de `titulos` onde `valor` é igual ao valor esperado
                            const tituloReceber1 = response.body.data.titulos.find(titulo => titulo.valor === 30 && titulo.statusTitulo === 3 && titulo.numero === numeroDocumento1);
                            const tituloReceber2 = response.body.data.titulos.find(titulo => titulo.valor === 30 && titulo.statusTitulo === 3 && titulo.numero === numeroDocumento2);

                            // Salvando ID dos documentos a receber
                            idDocumentoReceber1 = tituloReceber1.id;
                            idDocumentoReceber2 = tituloReceber2.id;
                        });
                });
            });

            it('CT4 - Recebimento em Lote', () => {
                cy.fixture('financeiro/agenda/recebimentolote/payloadCt4.json').then((payload) => {

                    payload.baixas[0].tituloId = idDocumentoReceber1;
                    payload.baixas[1].tituloId = idDocumentoReceber2;
                   

                    cy.postRequest('/api/financeiro/v1/Agenda/RecebimentoLote', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                            expect(response.body.data).to.have.property('data').that.is.a('string');
                            expect(response.body.data).to.have.property('valor').that.equals(60);
                            expect(response.body.data).to.have.property('encontroContas').that.is.false;
                        });
                });
            });
        });

    });
});

