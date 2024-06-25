/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/movimentacao/movimentacao/movimentacao.description');

function validateMovimentacaoResponse(response) {
    // Validando os tipos de cada campo na resposta
    expect(response).to.exist;
    expect(response.id).to.be.a('string');
    expect(response.tipoMovimentacao).to.be.a('number');
    expect(response.data).to.be.a('string');

    expect(response.formaPagamento).to.be.an('object');
    expect(response.formaPagamento.id).to.be.a('string');
    expect(response.formaPagamento.descricao).to.be.a('string');

    expect(response.contaBancaria).to.be.an('object');
    expect(response.contaBancaria.id).to.be.a('string');
    expect(response.contaBancaria.descricao).to.be.a('string');

    expect(response.empresa).to.be.an('object');
    expect(response.empresa.id).to.be.a('string');
    expect(response.empresa.descricao).to.be.a('string');

    expect(response.empresaDestino).to.be.an('object');
    expect(response.empresaDestino.id).to.be.a('string');

    expect(response.valor).to.be.a('number');
    expect(response.manual).to.be.a('boolean');
    expect(response.historicoMovimentacao).to.be.a('string');
    expect(response.conferido).to.be.a('boolean');
    expect(response.encontroContas).to.be.a('boolean');

    expect(response.categorias).to.be.an('array');
    response.categorias.forEach(categoria => {
        expect(categoria).to.be.an('object');
        expect(categoria.id).to.be.a('string');
        expect(categoria.categoria).to.be.an('object');
        expect(categoria.categoria.codigo).to.be.a('string');
        expect(categoria.categoria.descricao).to.be.a('string');
        expect(categoria.categoria.dedutivel).to.be.a('boolean');
        expect(categoria.categoria.adiantamento).to.be.a('boolean');
        expect(categoria.valor).to.be.a('number');
        expect(categoria.porcentagem).to.be.a('number');
    });

    expect(response.titulos).to.be.an('array');
    response.titulos.forEach(titulo => {
        expect(titulo).to.be.an('object');
        expect(titulo.id).to.be.a('string');
        expect(titulo.tituloHistoricoId).to.be.a('string');
        expect(titulo.tipoTitulo).to.be.a('number');

        expect(titulo.documento).to.be.an('object');
        expect(titulo.documento.id).to.be.a('string');
        expect(titulo.documento.codigo).to.be.a('number');
        expect(titulo.documento.numero).to.be.a('string');

        expect(titulo.pessoa).to.be.an('object');
        expect(titulo.pessoa.pessoaTipo).to.be.a('number');
        expect(titulo.pessoa.numeroDocumento).to.be.a('string');
        expect(titulo.pessoa.id).to.be.a('string');
        expect(titulo.pessoa.descricao).to.be.a('string');

        expect(titulo.empresa).to.be.an('object');
        expect(titulo.empresa.empresaDeSaoPaulo).to.be.a('boolean');
        expect(titulo.empresa.id).to.be.a('string');
        expect(titulo.empresa.descricao).to.be.a('string');

        expect(titulo.valor).to.be.a('number');
        expect(titulo.juros).to.be.a('number');
        expect(titulo.multa).to.be.a('number');
        expect(titulo.desconto).to.be.a('number');
        expect(titulo.variacaoCambial).to.be.a('number');
        expect(titulo.valorTotal).to.be.a('number');
    });

    expect(response.anexos).to.be.an('array');
    response.anexos.forEach(anexo => {
        expect(anexo).to.be.an('object');
    });
}

context('Financeiro', () => {
    context('Movimentação', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Movimentacao/{id} - Obtém dados de somente uma movimentação específica`, () => {

            it('CT1 - Obtém as Movimentações de um Pagamento', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/movimentacao/params.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacaoPagamento}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Chama a função de validação para verificar os tipos de campo
                            validateMovimentacaoResponse(response.body);

                            expect(response.body.id).to.be.equal(params.idMovimentacaoPagamento);
                            expect(response.body.tipoMovimentacao).to.be.equal(2);

                        });
                });
            });

            it('CT2 - Obtém as Movimentações de um Recebimento', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/movimentacao/params.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacaoRecebimento}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Chama a função de validação para verificar os tipos de campo
                            validateMovimentacaoResponse(response.body);

                            expect(response.body.id).to.be.equal(params.idMovimentacaoRecebimento);
                            expect(response.body.tipoMovimentacao).to.be.equal(1);

                        });
                });
            });

            it('CT3 - Obtém as Movimentações de uma Transferência', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('financeiro/movimentacao/movimentacao/params.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/${params.idMovimentacaoTransferencia}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            expect(response.body.id).to.be.equal(params.idMovimentacaoTransferencia);
                            expect(response.body.tipoMovimentacao).to.be.equal(3);

                            // Validando os tipos de cada campo na resposta
                            const data = response.body;
                            expect(data.id).to.be.a('string').and.to.not.be.empty;
                            expect(data.tipoMovimentacao).to.be.a('number');
                            expect(data.data).to.be.a('string').and.to.not.be.empty;

                            expect(data.contaBancaria).to.be.an('object');
                            expect(data.contaBancaria.id).to.be.a('string').and.to.not.be.empty;
                            expect(data.contaBancaria.descricao).to.be.a('string').and.to.not.be.empty;

                            expect(data.empresa).to.be.an('object');
                            expect(data.empresa.id).to.be.a('string').and.to.not.be.empty;
                            expect(data.empresa.descricao).to.be.a('string').and.to.not.be.empty;

                            expect(data.empresaDestino).to.be.an('object');
                            expect(data.empresaDestino.id).to.be.a('string').and.to.not.be.empty;
                            expect(data.empresaDestino.descricao).to.be.a('string').and.to.not.be.empty;

                            expect(data.valor).to.be.a('number');
                            expect(data.manual).to.be.a('boolean');
                            expect(data.historicoMovimentacao).to.be.a('string').and.to.not.be.empty;
                            expect(data.conferido).to.be.a('boolean');
                            expect(data.encontroContas).to.be.a('boolean');

                            expect(data.categorias).to.be.an('array').and.to.have.lengthOf(0);
                            expect(data.titulos).to.be.an('array').and.to.have.lengthOf(0);
                            expect(data.anexos).to.be.an('array').and.to.have.lengthOf(0);
                        });
                });
            });
        });
    });
});