/// <reference types='Cypress' />

const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - /api/financeiro/v1/Agenda/Recebimento - Recebimento', () => {

            let numeroDocumento
            let idDocumentoReceber
            let randomNumber

            it('CT1 - Deve criar um novo documento', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload
                    numeroDocumento = payload.numero

                    // Definir a data e hora atual no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const currentDate = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    payload.financeiro.parcelas[0].vencimento = currentDate;
                    payload.dataRecebimento = currentDate;

                    cy.postRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                        })
                })
            })

            it('CT2 - Deve listar a agenda A Pagar e a Receber', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt2.json').then((payload) => {

                    // Definir a data inicial e final no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                    const dataInicial = dayjs().startOf('day').format('YYYY-MM-DDTHH:mm:ssZ');
                    const dataFinal = dayjs().endOf('day').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Atualizar as datas no payload
                    payload.dataInicial = dataInicial;
                    payload.dataFinal = dataFinal;

                    cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Encontrar o objeto dentro de `titulos` onde `valor` é igual a 30
                            const tituloReceber = response.body.data.titulos.find(titulo => titulo.valor === 30 && titulo.statusTitulo === 3 && titulo.numero === numeroDocumento);

                            // Salvando ID dos documentos a receber e a pagar
                            idDocumentoReceber = tituloReceber.id;

                        })
                })
            })

            it('CT3 Recebimento com 1 Titulo a Receber ', () => {
                cy.fixture('financeiro/agenda/recebimento/payloadCt3.json').then((payload) => {
                    payload.tituloId = idDocumentoReceber
                    cy.postRequest('/api/financeiro/v1/Agenda/Recebimento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);
                            expect(response.body.data).to.have.property('dataPagamento').that.is.a('string');
                            expect(response.body.data).to.have.property('pagamentoUmClick').that.is.true;
                            expect(response.body.data).to.have.property('anexos').that.is.an('array').that.is.empty;
                            expect(response.body.data).to.have.property('createdByUserId').that.is.a('string');
                            expect(response.body.data).to.have.property('id').that.is.a('string');
                            expect(response.body.data).to.have.property('contaBancariaId').that.is.a('string');
                            expect(response.body.data.formaPagamento).to.have.property('id').that.is.a('string');
                            expect(response.body.data.formaPagamento).to.have.property('descricao').that.equals('PIX');
                            expect(response.body.data.empresa).to.have.property('id').that.is.a('string');
                            expect(response.body.data.empresa).to.have.property('descricao').that.equals('Empresa Teste API');
                            expect(response.body.data).to.have.property('juros').that.equals(0);
                            expect(response.body.data).to.have.property('multa').that.equals(0);
                            expect(response.body.data).to.have.property('desconto').that.equals(0);
                            expect(response.body.data).to.have.property('valor').that.equals(30);
                            expect(response.body.data).to.have.property('valorBaixa').that.equals(30);
                            expect(response.body.data).to.have.property('valorBaixaAlternativa').that.equals(0);
                            expect(response.body.data).to.have.property('valorTotal').that.equals(30);

                        });

                        });
                });
            })


        })
    })
    