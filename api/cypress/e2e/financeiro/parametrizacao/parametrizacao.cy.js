/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/parametrizacao/parametrizacao/parametrizacao.description');

context('Financeiro', () => {
    context('Parametrização', () => {

        let parametrizacaoID;

        describe(`POST/GET/PUT/DELETE - ${Cypress.env('financeiro')}/Parametrização - Rotina de Criação/Edição/Deleção de Parâmetros`, () => {

            it('CT1 - Deve criar um novo Parâmetro', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')

                cy.fixture('financeiro/parametrizacao/parametrizacao/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            // Armazena o ID para exclusão posterior
                            parametrizacaoID = response.body.data.id;
                            expect(parametrizacaoID).to.not.be.undefined;

                            cy.fixture('financeiro/parametrizacao/parametrizacao/bodyCt1.json').then((body) => {
                                body.id = parametrizacaoID
                                expect(response.body.data).to.deep.equal(body);
                            });
                        });
                });
            });

            it('CT2 - Deve Recuperar os dados da Parametrização', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao/${parametrizacaoID}`).then((response) => {
                    expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                    expect(response.status).to.be.equal(200);
                    expect(response.body).to.not.be.null;
                    expect(response.body).to.exist;

                    // Validação dos campos específicos do objeto response.body
                    expect(response.body.id).to.be.a('string').and.not.be.empty;
                    expect(response.body.tipoDocumentoParametrizacao).to.be.a('number');
                    expect(response.body.origemParametrizacao).to.be.a('number');
                    expect(response.body.fornecedor).to.be.an('object');
                    expect(response.body.fornecedor.id).to.be.a('string').and.not.be.empty;
                    expect(response.body.fornecedor.nome).to.be.a('string').and.not.be.empty;
                    expect(response.body.fornecedor.documentoPrincipal).to.be.a('string').and.not.be.empty;
                    expect(response.body.fornecedor.tipo).to.be.a('number');

                    expect(response.body.operacao).to.be.an('object');
                    expect(response.body.operacao.id).to.be.a('string').and.not.be.empty;
                    expect(response.body.operacao.codigo).to.be.a('number');
                    expect(response.body.operacao.nome).to.be.a('string').and.not.be.empty;
                    expect(response.body.operacao.movimentaEstoque).to.be.a('boolean');
                    expect(response.body.operacao.contabilizaEstoque).to.be.a('boolean');
                    expect(response.body.operacao.tipoEstoque).to.be.a('number');
                    expect(response.body.operacao.valorizacaoEstoque).to.be.a('number');
                    expect(response.body.operacao.destino).to.be.a('number');
                    expect(response.body.operacao.movimentaDocumento).to.be.a('boolean');
                    expect(response.body.operacao.tipoDocumento).to.be.a('number');
                    expect(response.body.operacao.contabilizaDocumento).to.be.a('boolean');
                    expect(response.body.operacao.movimentaFinanceiro).to.be.a('number');
                    expect(response.body.operacao.emissaoPropria).to.be.a('boolean');
                    expect(response.body.operacao.geraTributos).to.be.a('boolean');
                    expect(response.body.operacao.modeloDocumento).to.be.a('number');
                    expect(response.body.operacao.tipoOperacao).to.be.a('number');
                    expect(response.body.operacao.finalidadeOperacao).to.be.a('number');
                    expect(response.body.operacao.jornadaPropria).to.be.a('boolean');
                    expect(response.body.operacao.adiantamentoDocumento).to.be.a('boolean');
                    expect(response.body.operacao.adiantamentoTipoOperacao).to.be.a('number');
                    expect(response.body.operacao.adiantamentoOperacaoId).to.be.a('string').and.not.be.empty;

                    expect(response.body.dedutivel).to.be.a('boolean');
                    expect(response.body.formaPagamento).to.be.an('object');
                    expect(response.body.formaPagamento.id).to.be.a('string').and.not.be.empty;
                    expect(response.body.formaPagamento.descricao).to.be.a('string').and.not.be.empty;
                    expect(response.body.tipoRateioCiclo).to.be.a('number');
                    expect(response.body.tags).to.be.an('array');
            
                    expect(response.body.ativo).to.be.a('boolean');
                });
            });

            it('CT3 - Deve Editar a Parametrização Criada', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/parametrizacao/parametrizacao/payloadCt3.json').then((payload) => {

                    payload.id = parametrizacaoID

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            cy.fixture('financeiro/parametrizacao/parametrizacao/bodyCt3.json').then((body) => {
                                body.id = parametrizacaoID
                                expect(response.body.data).to.deep.equal(body);
                            });
                        });
                });
            });

            it('CT4 - Deve Deletar a Parametrização', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Parametrizacao`, parametrizacaoID).then((response) => {
                    expect(response.status).to.be.equal(200);
                });
            });

        });
    });
});
