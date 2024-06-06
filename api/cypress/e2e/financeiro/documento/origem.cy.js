/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/Origem/{acao}/{id} - Obtém Documento pela ação e ID', () => {

            it('CT1 - Obtém Documento pela ação e ID', () => {
                cy.fixture('financeiro/documento/origem/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`/api/financeiro/v1/Documento/Origem/${params.acao}/${params.id}`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            const body = response.body;
                            expect(body.operacao).to.be.an('object');
                            expect(body.operacao.id).to.be.a('string');
                            expect(body.operacao.descricao).to.be.a('string');

                            expect(body.safra).to.be.an('object');
                            expect(body.safra.id).to.be.a('string');
                            expect(body.safra.descricao).to.be.a('string');

                            expect(body.data).to.be.a('string');

                            expect(body.pessoa).to.be.an('object');
                            expect(body.pessoa.pessoaTipo).to.be.a('number');
                            expect(body.pessoa.numeroDocumento).to.be.a('string');
                            expect(body.pessoa.id).to.be.a('string');
                            expect(body.pessoa.descricao).to.be.a('string');

                            expect(body.fazenda).to.be.an('object');
                            expect(body.fazenda.id).to.be.a('string');
                            expect(body.fazenda.descricao).to.be.a('string');

                            expect(body.empresa).to.be.an('object');
                            expect(body.empresa.inscricaoEstadual).to.be.an('object');
                            expect(body.empresa.inscricaoEstadual.id).to.be.a('string');
                            expect(body.empresa.inscricaoEstadual.descricao).to.be.a('string');
                            expect(body.empresa.inscricaoEstadual.valor).to.be.a('string');
                            expect(body.empresa.inscricaoEstadual.isento).to.be.a('boolean');
                            expect(body.empresa.empresaDeSaoPaulo).to.be.a('boolean');
                            expect(body.empresa.id).to.be.a('string');
                            expect(body.empresa.descricao).to.be.a('string');

                            expect(body.manual).to.be.a('boolean');
                            expect(body.dedutivel).to.be.a('boolean');
                            expect(body.isMoedaAlternativa).to.be.a('boolean');

                            expect(body.origem).to.be.an('object');
                            expect(body.origem.id).to.be.a('string');
                            expect(body.origem.tipo).to.be.a('number');

                            expect(body.materiais).to.be.an('array');
                            expect(body.materiais[0].id).to.be.a('string');
                            expect(body.materiais[0].material).to.be.an('object');
                            expect(body.materiais[0].material.id).to.be.a('string');
                            expect(body.materiais[0].material.descricao).to.be.a('string');
                            expect(body.materiais[0].unidadeMedida).to.be.an('object');
                            expect(body.materiais[0].unidadeMedida.id).to.be.a('string');
                            expect(body.materiais[0].unidadeMedida.descricao).to.be.a('string');
                            expect(body.materiais[0].quantidade).to.be.a('number');
                            expect(body.materiais[0].valor).to.be.a('number');
                            expect(body.materiais[0].total).to.be.a('number');

                            expect(body.financeiro).to.be.an('object');
                            expect(body.financeiro.id).to.be.a('string');
                            expect(body.financeiro.total).to.be.a('number');
                            expect(body.financeiro.pago).to.be.a('boolean');
                            expect(body.financeiro.formaPagamento).to.be.an('object');
                            expect(body.financeiro.formaPagamento.id).to.be.a('string');
                            expect(body.financeiro.formaPagamento.descricao).to.be.a('string');
                            expect(body.financeiro.quantidadeParcelas).to.be.a('number');
                            expect(body.financeiro.condicaoPagamento).to.be.a('number');
                            expect(body.financeiro.valorFixo).to.be.a('boolean');
                            expect(body.financeiro.parcelas).to.be.an('array');
                            expect(body.financeiro.parcelas[0].id).to.be.a('string');
                            expect(body.financeiro.parcelas[0].vencimento).to.be.a('string');
                            expect(body.financeiro.parcelas[0].moeda).to.be.an('object');
                            expect(body.financeiro.parcelas[0].moeda.id).to.be.a('string');
                            expect(body.financeiro.parcelas[0].moeda.descricao).to.be.a('string');
                            expect(body.financeiro.parcelas[0].valor).to.be.a('number');
                            expect(body.financeiro.parcelas[0].saldo).to.be.a('number');
                            expect(body.financeiro.parcelas[0].status).to.be.a('number');
                            expect(body.financeiro.parcelas[0].numeroParcela).to.be.a('number');

                            expect(body.tipoDocumento).to.be.a('number');
                            expect(body.conferido).to.be.a('boolean');

                            expect(body.ciclos).to.be.an('array');
                            expect(body.ciclos[0].id).to.be.a('string');
                            expect(body.ciclos[0].ciclo).to.be.an('object');
                            expect(body.ciclos[0].ciclo.id).to.be.a('string');
                            expect(body.ciclos[0].ciclo.descricao).to.be.a('string');
                            expect(body.ciclos[0].valor).to.be.a('number');

                            expect(body.categorias).to.be.an('array');
                            expect(body.categorias[0].id).to.be.a('string');
                            expect(body.categorias[0].contaContabil).to.be.an('object');
                            expect(body.categorias[0].contaContabil.codigo).to.be.a('string');
                            expect(body.categorias[0].contaContabil.descricao).to.be.a('string');
                            expect(body.categorias[0].contaContabil.dedutivel).to.be.a('boolean');
                            expect(body.categorias[0].contaContabil.adiantamento).to.be.a('boolean');
                            expect(body.categorias[0].porcentagem).to.be.a('number');
                            expect(body.categorias[0].valor).to.be.a('number');

                            expect(body.titulos).to.be.an('array');
                            expect(body.titulos[0].id).to.be.a('string');
                            expect(body.titulos[0].documentoId).to.be.a('string');
                            expect(body.titulos[0].tipo).to.be.a('number');
                            expect(body.titulos[0].dataVencimento).to.be.a('string');
                            expect(body.titulos[0].moedaPadraoId).to.be.a('string');
                            expect(body.titulos[0].moedaPadraoDescricao).to.be.a('string');
                            expect(body.titulos[0].isMultiMoeda).to.be.a('boolean');
                            expect(body.titulos[0].valor).to.be.a('number');
                            expect(body.titulos[0].numeroParcela).to.be.a('number');
                            expect(body.titulos[0].totalParcelas).to.be.a('number');
                            expect(body.titulos[0].statusTitulo).to.be.a('number');
                            expect(body.titulos[0].saldo).to.be.a('number');

                            expect(body.totalIcms).to.be.a('number');
                            expect(body.totalPis).to.be.a('number');
                            expect(body.totalCofins).to.be.a('number');
                            expect(body.totalFCP).to.be.a('number');
                            expect(body.totalIPI).to.be.a('number');

                        })
                })
            })
        })
    })
})

