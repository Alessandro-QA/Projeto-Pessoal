/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/relatorio/relatorio.description');

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`GET - ${Cypress.env('financeiro')}//Movimentacao/Relatorio - Obtém Relatório detalhado de Pagamentos/Recebimentos trazend o Saldo pelo Filtro desejado`, () => {

            it('CT1 - Obtém o Relatório de todas Movimentações do Período', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/relatorio/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Valida os campos e tipos de cada campo
                            validateResponseFields(response.body);

                            // Valida as somas dos valores Pagamento e Recebimento
                            validateSums(response.body);

                        });
                });
            });

            it('CT2 - Obtém o Relatório de uma Conta Bancária específica', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/relatorio/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Valida os campos e tipos de cada campo
                            validateResponseFields(response.body);
                            
                            // Valida o nome da conta bancária filtrada
                            expect(response.body.data.contaBancaria).to.be.equal('Cartão Teste Dashboard Financeiro');

                            // Valida as somas dos valores Pagamento e Recebimento
                            validateSums(response.body);

                        });
                });
            });

            it('CT3 - Obtém o Relatório de uma Empresa Específica', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/relatorio/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            //Valida os campos e tipos de cada campo
                            validateResponseFields(response.body);
                            
                            // Valida o nome da empresa filtrada
                            expect(response.body.data.empresa).to.be.equal('Empresa Teste API');

                            // Valida as somas dos valores Pagamento e Recebimento
                            validateSums(response.body);

                        });
                });
            });

            it('CT4 - Obtém o Relatório de uma Categoria Específica', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/relatorio/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Relatorio`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            //Valida os campos e tipos de cada campo
                            validateResponseFields(response.body);
                            

                            response.body.data.movimentacoes.forEach(mov => {
                                mov.detalhes.forEach(det => {
                                    expect(det).to.have.property('categoria').to.include('Caixa Geral');
                                });
                            });

                            // Valida as somas dos valores Pagamento e Recebimento
                            validateSums(response.body);

                        });
                });
            });

        });
    });
});

function validateResponseFields(body) {
    expect(body).to.have.property('success').that.is.a('boolean');
    expect(body).to.have.property('data').that.is.an('object');
    const data = body.data;
    expect(data).to.have.property('empresa').that.is.a('string');
    expect(data).to.have.property('periodo').that.is.an('object');
    expect(data.periodo).to.have.property('inicio').that.is.a('string');
    expect(data.periodo).to.have.property('fim').that.is.a('string');
    expect(data).to.have.property('contaBancaria').that.is.a('string');
    expect(data).to.have.property('banco').that.is.a('string');
    expect(data).to.have.property('categoria').that.is.a('string');
    expect(data).to.have.property('usuario').that.is.a('string');
    expect(data).to.have.property('totalPago').that.is.a('number');
    expect(data).to.have.property('totalRecebido').that.is.a('number');
    expect(data).to.have.property('saldo').that.is.a('number');
    expect(data).to.have.property('movimentacoes').that.is.an('array');
}


function validateSums(body) {
    const data = body.data;
    let totalPagamentos = 0;
    let totalRecebimentos = 0;
    let saldo = 0;

    data.movimentacoes.forEach(mov => {
        mov.detalhes.forEach(det => {
            if (det.tipo === 'Pagamento') {
                totalPagamentos += det.valor;
            } else if (det.tipo === 'Recebimento') {
                totalRecebimentos += det.valor;
            }
        });
    });
    saldo = totalRecebimentos - totalPagamentos;

    expect(saldo).to.be.closeTo(data.saldo,0.1)
    expect(totalPagamentos).to.be.closeTo(data.totalPago,0.1);
    expect(totalRecebimentos).to.be.closeTo(data.totalRecebido,0.1);
}