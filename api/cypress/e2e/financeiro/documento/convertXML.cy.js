/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Documento/ConvertXML - Converte o XML`, () => {
            it('CT1 - Converter XML', () => {
                cy.fixture('financeiro/documento/convertXML/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ConvertXML`, params)
                        .then((response) => {
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;

                            // Verifica todas as propriedades do corpo da resposta
                            const body = response.body;

                            // Verifica as propriedades principais
                            expect(body.success).to.be.a('boolean');
                            expect(body.data).to.be.an('object');

                            // Verifica as propriedades do objeto 'data'
                            const data = body.data;

                            expect(data.id).to.be.a('string');
                            expect(data.numero).to.be.a('number');
                            expect(data.codigo).to.be.a('number');
                            expect(data.dataRecebimento).to.be.a('string');
                            expect(data.data).to.be.a('string');

                            // Verifica as propriedades do objeto 'pessoa'
                            expect(data.pessoa).to.be.an('object');
                            expect(data.pessoa.nome).to.be.a('string');
                            expect(data.pessoa.inscricaoEstadual).to.be.a('string');

                            // Verifica as propriedades do objeto 'empresa'
                            expect(data.empresa).to.be.an('object');
                            expect(data.empresa.inscricaoEstadual).to.be.an('object');
                            expect(data.empresa.inscricaoEstadual.id).to.be.a('string');
                            expect(data.empresa.id).to.be.a('string');

                            // Verifica as propriedades do objeto 'origem'
                            expect(data.origem).to.be.an('object');
                            expect(data.origem.tipo).to.be.a('number');

                            // Verifica as propriedades do objeto 'financeiro'
                            expect(data.financeiro).to.be.an('object');
                            expect(data.financeiro.id).to.be.a('string');
                            expect(data.financeiro.total).to.be.a('number');
                            expect(data.financeiro.pago).to.be.a('boolean');
                            expect(data.financeiro.quantidadeParcelas).to.be.a('number');
                            expect(data.financeiro.condicaoPagamento).to.be.a('number');
                            expect(data.financeiro.valorFixo).to.be.a('boolean');

                            // Verifica outras propriedades
                            expect(data.tipoDocumento).to.be.a('number');
                            expect(data.conferido).to.be.a('boolean');
                            expect(data.tags).to.be.an('array');
                            expect(data.ciclos).to.be.an('array');
                            expect(data.categorias).to.be.an('array');
                            expect(data.categoriasDescricao).to.be.a('string');
                        });
                });
            });
        });
    });
});
