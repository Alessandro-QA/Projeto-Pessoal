/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/parametrizacao/listagem/listagem.description');

// Função para verificar os tipos de campos no response
function verificarTiposCampos(registro) {
    // Verifica os tipos de campos para o primeiro registro
    expect(registro.id).to.be.a('string');
    expect(registro.tipoDocumentoParametrizacao).to.be.a('number');
    expect(registro.origemParametrizacao).to.be.a('number');
    
    // Verifica os tipos de campos dentro do objeto fornecedor
    expect(registro.fornecedor.id).to.be.a('string');
    expect(registro.fornecedor.nome).to.be.a('string');
    expect(registro.fornecedor.documentoPrincipal).to.be.a('string');
    expect(registro.fornecedor.tipo).to.be.a('number');
    
    // Verifica os tipos de campos dentro do objeto operacao
    expect(registro.operacao.id).to.be.a('string');
    expect(registro.operacao.codigo).to.be.a('number');
    expect(registro.operacao.nome).to.be.a('string');
    expect(registro.operacao.movimentaEstoque).to.be.a('boolean');
    expect(registro.operacao.tipoEstoque).to.be.a('number');
    expect(registro.operacao.valorizacaoEstoque).to.be.a('number');
    expect(registro.operacao.destino).to.be.a('number');
    expect(registro.operacao.movimentaDocumento).to.be.a('boolean');
    expect(registro.operacao.tipoDocumento).to.be.a('number');
    expect(registro.operacao.contabilizaDocumento).to.be.a('boolean');
    expect(registro.operacao.movimentaFinanceiro).to.be.a('number');
    expect(registro.operacao.emissaoPropria).to.be.a('boolean');
    expect(registro.operacao.geraTributos).to.be.a('boolean');
    expect(registro.operacao.modeloDocumento).to.be.a('number');
    expect(registro.operacao.tipoOperacao).to.be.a('number');
    expect(registro.operacao.finalidadeOperacao).to.be.a('number');
    expect(registro.operacao.jornadaPropria).to.be.a('boolean');
    expect(registro.operacao.adiantamentoDocumento).to.be.a('boolean');
    
    // Verifica os tipos de campos dentro do array operacaoMatrizContabeis
    registro.operacao.operacaoMatrizContabeis.forEach(matrizContabil => {
        expect(matrizContabil.id).to.be.a('string');
        expect(matrizContabil.ativo).to.be.a('boolean');
        expect(matrizContabil.operacaoId).to.be.a('string');
        expect(matrizContabil.contabilizar).to.be.a('number');
        
        // Verifica os tipos de campos dentro do objeto recurso
        expect(matrizContabil.recurso.id).to.be.a('string');
        expect(matrizContabil.recurso.tipo).to.be.a('number');
        
        // Verifica os tipos de campos dentro do objeto contaDebito
        expect(matrizContabil.contaDebito.dedutivel).to.be.a('boolean');
        expect(matrizContabil.contaDebito.codigo).to.be.a('string');
        expect(matrizContabil.contaDebito.nome).to.be.a('string');
        
        // Verifica os tipos de campos dentro do objeto contaCredito
        expect(matrizContabil.contaCredito.dedutivel).to.be.a('boolean');
        expect(matrizContabil.contaCredito.codigo).to.be.a('string');
        expect(matrizContabil.contaCredito.nome).to.be.a('string');
        
        // Verifica os tipos de campos dentro do objeto debitoCaixa
        expect(matrizContabil.debitoCaixa.dedutivel).to.be.a('boolean');
        if (matrizContabil.debitoCaixa.codigo) {
            expect(matrizContabil.debitoCaixa.codigo).to.be.a('string');
        }
        
        // Verifica os tipos de campos dentro do objeto creditoCaixa
        expect(matrizContabil.creditoCaixa.dedutivel).to.be.a('boolean');
        if (matrizContabil.creditoCaixa.codigo) {
            expect(matrizContabil.creditoCaixa.codigo).to.be.a('string');
        }
        
        // Verifica os tipos de campos para historico e historicoCaixa
        expect(matrizContabil.historico).to.be.a('string');
        expect(matrizContabil.historicoCaixa).to.be.a('string');
        expect(matrizContabil.tipoContaContabil).to.be.a('number');
    });
    
    // Verifica os tipos de campos para outros campos do registro
    expect(registro.dedutivel).to.be.a('boolean');
    expect(registro.formaPagamento.id).to.be.a('string');
    expect(registro.formaPagamento.descricao).to.be.a('string');
    expect(registro.tipoRateioCiclo).to.be.a('number');
    expect(registro.tags).to.be.an('array');
    expect(registro.ativo).to.be.a('boolean');
}

context('Financeiro', () => {
    context('Parametrização', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Parametrizacao/Listagem - Obtém registros de Parametrização`, () => {

            it('CT1 - Obter Todos Registros de Parametrização', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/parametrizacao/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            
                            // Verifica os tipos de campos para cada registro no response.data
                            response.body.data.forEach(registro => {
                                verificarTiposCampos(registro);
                            });
                        });
                });
            });

            it('CT2 - Obter os Registros de Parametrização filtrados por Situação', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/parametrizacao/listagem/payloadCt2.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            
                            // Verifica os tipos de campos para cada registro no response.data
                            response.body.data.forEach(registro => {
                                expect(registro.ativo).to.be.true;
                                verificarTiposCampos(registro);
                            });
                        });
                });
            });

            it('CT3 - Obter os Registros de Parametrização filtrados por Fornecedor', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/parametrizacao/listagem/payloadCt3.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            
                            // Verifica os tipos de campos para cada registro no response.data
                            response.body.data.forEach(registro => {
                                expect(registro.fornecedor.id).to.be.equal(payload.fornecedores[0]);
                                verificarTiposCampos(registro);
                            });
                        });
                });
            });

            it('CT4 - Obter os Registros de Parametrização filtrados pela Operação', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.fixture('financeiro/parametrizacao/listagem/payloadCt4.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;
                            
                            // Verifica os tipos de campos para cada registro no response.data
                            response.body.data.forEach(registro => {
                                expect(registro.operacao.id).to.be.equal(payload.operacoes[0]);
                                verificarTiposCampos(registro);
                            });
                        });
                });
            });

        });
    });
});