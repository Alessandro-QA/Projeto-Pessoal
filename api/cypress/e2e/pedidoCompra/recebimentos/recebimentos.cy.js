/// <reference types='Cypress' />

const dayjs = require('dayjs');
const description = require('../../../fixtures/pedidoCompra/recebimentos/recebimentos/recebimentos.description');
const { validateData } = require('../../../fixtures/pedidoCompra/recebimentos/recebimentos/validate');


context('Pedido Compra', () => {
    context('Recebimentos', () => {

        let recebimentoID;
        let randomNumber;

        describe(`POST/GET/PUT/PATCH/DELETE - ${Cypress.env('pedidoCompra')}/Recebimentos - Criar/Recuperar/Editar/Apagar Recebimentos`, () => {

            it('CT1 - Deve criar um novo recebimento', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('blocker');
                
                cy.fixture('pedidoCompra/recebimentos/recebimentos/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numeroNotaFiscal = randomNumber; // Atualiza o campo 'numero' no payload
                    payload.serieNotaFiscal = randomNumber;

                    // Formatação de data no formato desejado
                    const hoje = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    const daquiUmMes = dayjs().add(1, 'month').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Atualizar os campos de data no payload
                    payload.dataEmissaoNotaFiscal = hoje;
                    payload.data = hoje;
                    if (payload.financeiro) {
                        if (payload.financeiro.pedidoPagamentoParcelas) {
                            payload.financeiro.pedidoPagamentoParcelas.forEach(parcela => {
                                parcela.dataVencimento = daquiUmMes;
                                parcela.vencimento = daquiUmMes;
                            });
                        }
                        if (payload.financeiro.parcelas) {
                            payload.financeiro.parcelas.forEach(parcela => {
                                parcela.vencimento = daquiUmMes;
                            });
                        }
                    }

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            recebimentoID = response.body.data.id;
                            expect(recebimentoID).to.not.be.undefined;

                            const data = response.body.data;
                            validateData(data);
                        });
                });
            });

            it('CT2 - Deve Editar o Recebimento Criado', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal');

                cy.fixture('pedidoCompra/recebimentos/recebimentos/payloadCt2.json').then((payload) => {

                    // Edição para alterar número do documento
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString()

                    // Gerar as novas datas
                    const hoje = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                    const daquiUmMes = dayjs().add(1, 'month').format('YYYY-MM-DDTHH:mm:ssZ');

                    // Atualizar as datas no payload
                    payload.dataRecebimento = hoje;
                    payload.data = hoje;
                    payload.financeiro.parcelas[0].vencimento = daquiUmMes;

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            expect(response.body.data.numero).to.be.equal(payload.numero)


                            const dadosDoc = response.body.data

                            // Top level properties
                            expect(dadosDoc.id).to.be.equal(payload.id);
                            expect(dadosDoc.numero).to.be.equal(payload.numero);
                            expect(dadosDoc.tipoDocumento).to.be.equal(payload.tipoDocumento);
                            expect(dadosDoc.dataRecebimento).to.be.equal(payload.dataRecebimento);
                            expect(dadosDoc.data).to.be.equal(payload.data);
                            expect(dadosDoc.observacao).to.be.equal(payload.observacao);
                            expect(dadosDoc.conferido).to.be.equal(payload.conferido);
                            expect(dadosDoc.dedutivel).to.be.equal(payload.dedutivel);


                            // Nested objects
                            expect(dadosDoc.operacao.id).to.be.equal(payload.operacao.id);
                            expect(dadosDoc.operacao.descricao).to.be.equal(payload.operacao.descricao);

                            expect(dadosDoc.safra.id).to.be.equal(payload.safra.id);
                            expect(dadosDoc.safra.descricao).to.be.equal(payload.safra.descricao);

                            expect(dadosDoc.fazenda.id).to.be.equal(payload.fazenda.id);
                            expect(dadosDoc.fazenda.descricao).to.be.equal(payload.fazenda.descricao);

                            expect(dadosDoc.empresa.id).to.be.equal(payload.empresa.id);
                            expect(dadosDoc.empresa.descricao).to.be.equal(payload.empresa.descricao);

                            // Arrays
                            expect(dadosDoc.tags[0].id).to.be.equal(payload.tags[0].id);
                            expect(dadosDoc.tags[0].descricao).to.be.equal(payload.tags[0].descricao);

                            // Materiais
                            expect(dadosDoc.materiais[0].id).to.be.equal(payload.materiais[0].id);
                            expect(dadosDoc.materiais[0].quantidade).to.be.equal(payload.materiais[0].quantidade);
                            expect(dadosDoc.materiais[0].valor).to.be.equal(payload.materiais[0].valor);
                            expect(dadosDoc.materiais[0].total).to.be.equal(payload.materiais[0].total);

                            // Financeiro
                            expect(dadosDoc.financeiro.total).to.be.equal(payload.financeiro.total);
                            expect(dadosDoc.financeiro.pago).to.be.equal(payload.financeiro.pago);

                            expect(dadosDoc.financeiro.parcelas[0].vencimento).to.be.equal(payload.financeiro.parcelas[0].vencimento);
                            expect(dadosDoc.financeiro.parcelas[0].valor).to.be.equal(payload.financeiro.parcelas[0].valor);

                            // Categorias
                            expect(dadosDoc.categorias[0].id).to.be.equal(payload.categorias[0].id);
                            expect(dadosDoc.categorias[0].valor).to.be.equal(payload.categorias[0].valor);
                            expect(dadosDoc.categorias[0].contaContabil.codigo).to.be.equal(payload.categorias[0].contaContabil.codigo);
                            expect(dadosDoc.categorias[0].contaContabil.descricao).to.be.equal(payload.categorias[0].contaContabil.descricao);
                            expect(dadosDoc.categorias[0].contaContabil.dedutivel).to.be.equal(payload.categorias[0].contaContabil.dedutivel);

                        });
                });
            });

            it('CT3 - Deve patchear um Recebimento', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.fixture('pedidoCompra/recebimentos/recebimentos/payloadCt3.json').then((payload) => {

                    // Gerando número random para edição via Patch
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload[0].value = randomNumber
                    payload[1].value = randomNumber

                    cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos/${recebimentoID}`, payload)
                        .then((response) => {
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                        });
                });
            });

            it('CT4 - Deve recuperar dados da Movimentação pelo ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos/${recebimentoID}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                        expect(response.status).to.be.equal(200);

                        const data = response.body.data;

                        expect(data.numeroNotaFiscal).to.be.equal(randomNumber)
                        expect(data.serieNotaFiscal).to.be.equal(randomNumber)
                        validateData(data);
                    });
            });

            it('CT5 - Deve Deletar Documento de Recebimento', () => {

                cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal');

                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('pedidoCompra')}/Recebimentos`, recebimentoID).then((response) => {
                    expect(response.status).to.be.equal(200);
                });
            });

        });
    });
});
