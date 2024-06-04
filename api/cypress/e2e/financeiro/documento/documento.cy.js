/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento - Obtém registros de documentos', () => {

            it('CT1 - Obtém Registro de Documento pelo ID', () => {
                cy.getRequest('/api/financeiro/v1/Documento/7a58cb86-be72-4881-b0ed-2a04049a9ab6')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.id).to.equal('7a58cb86-be72-4881-b0ed-2a04049a9ab6')

                        // Verifica todas as propriedades do corpo da resposta
                        const body = response.body; //pra não ter que digitar response.body o tempo inteiro amém

                        expect(body.id).to.be.a('string');
                        expect(body.numero).to.be.a('string');
                        expect(body.codigo).to.be.a('number');
                        expect(body.dataRecebimento).to.be.a('string');
                        expect(body.data).to.be.a('string');
                        expect(body.manual).to.be.a('boolean');
                        expect(body.dedutivel).to.be.a('boolean');
                        expect(body.tipoDocumento).to.be.a('number');
                        expect(body.conferido).to.be.a('boolean');
                        expect(body.adiantamentoDocumento).to.be.a('boolean');

                        // Verifica as propriedades do objeto 'operacao'
                        expect(body.operacao).to.be.an('object');
                        expect(body.operacao.id).to.be.a('string');
                        expect(body.operacao.descricao).to.be.a('string');

                        // Verifica as propriedades do objeto 'safra'
                        expect(body.safra).to.be.an('object');
                        expect(body.safra.id).to.be.a('string');
                        expect(body.safra.descricao).to.be.a('string');

                        // Verifica as propriedades do objeto 'pessoa'
                        expect(body.pessoa).to.be.an('object');
                        expect(body.pessoa.pessoaTipo).to.be.a('number');
                        expect(body.pessoa.numeroDocumento).to.be.a('string');
                        expect(body.pessoa.id).to.be.a('string');
                        expect(body.pessoa.descricao).to.be.a('string');

                        // Verifica as propriedades do objeto 'fazenda'
                        expect(body.fazenda).to.be.an('object');
                        expect(body.fazenda.id).to.be.a('string');
                        expect(body.fazenda.descricao).to.be.a('string');

                        // Verifica as propriedades do objeto 'empresa'
                        expect(body.empresa).to.be.an('object');
                        expect(body.empresa.inscricaoEstadual).to.be.an('object');
                        expect(body.empresa.inscricaoEstadual.id).to.be.a('string');
                        expect(body.empresa.inscricaoEstadual.descricao).to.be.a('string');
                        expect(body.empresa.inscricaoEstadual.valor).to.be.a('string');
                        expect(body.empresa.inscricaoEstadual.isento).to.be.a('boolean');
                        expect(body.empresa.empresaDeSaoPaulo).to.be.a('boolean');
                        expect(body.empresa.id).to.be.a('string');
                        expect(body.empresa.descricao).to.be.a('string');

                        expect(body.isMoedaAlternativa).to.be.a('boolean');

                        // Verifica as propriedades do objeto 'origem'
                        expect(body.origem).to.be.an('object');
                        expect(body.origem.id).to.be.a('string');
                        expect(body.origem.tipo).to.be.a('number');

                        // Verifica as propriedades do array 'materiais' para cada material
                        expect(body.materiais).to.be.an('array');
                        body.materiais.forEach(material => {
                            expect(material.id).to.be.a('string');
                            expect(material.material).to.be.an('object');
                            expect(material.material.id).to.be.a('string');
                            expect(material.material.descricao).to.be.a('string');
                            expect(material.unidadeMedida).to.be.an('object');
                            expect(material.unidadeMedida.id).to.be.a('string');
                            expect(material.unidadeMedida.descricao).to.be.a('string');
                            expect(material.quantidade).to.be.a('number');
                            expect(material.valor).to.be.a('number');
                            expect(material.total).to.be.a('number');
                            expect(material.ncm).to.be.an('object');
                            expect(material.ncm.id).to.be.a('string');
                            expect(material.cfop).to.be.an('object');
                            expect(material.cfop.id).to.be.a('string');
                            expect(material.documentoMaterialPedidos).to.be.an('array');
                        });

                        // Verifica as propriedades do objeto 'financeiro'
                        expect(body.financeiro).to.be.an('object');
                        expect(body.financeiro.id).to.be.a('string');
                        expect(body.financeiro.total).to.be.a('number');
                        expect(body.financeiro.totalAlternativo).to.be.a('number');
                        expect(body.financeiro.cotacao).to.be.a('number');
                        expect(body.financeiro.pago).to.be.a('boolean');
                        expect(body.financeiro.formaPagamento).to.be.an('object');
                        expect(body.financeiro.formaPagamento.id).to.be.a('string');
                        expect(body.financeiro.formaPagamento.descricao).to.be.a('string');
                        expect(body.financeiro.quantidadeParcelas).to.be.a('number');
                        expect(body.financeiro.condicaoPagamento).to.be.a('number');
                        expect(body.financeiro.valorFixo).to.be.a('boolean');
                        expect(body.financeiro.parcelas).to.be.an('array');
                        body.financeiro.parcelas.forEach(parcela => {
                            expect(parcela.id).to.be.a('string');
                            expect(parcela.vencimento).to.be.a('string');
                            expect(parcela.moeda).to.be.an('object');
                            expect(parcela.moeda.id).to.be.a('string');
                            expect(parcela.moeda.descricao).to.be.a('string');
                            expect(parcela.valor).to.be.a('number');
                            expect(parcela.saldo).to.be.a('number');
                            expect(parcela.status).to.be.a('number');
                            expect(parcela.numeroParcela).to.be.a('number');
                        });

                        expect(body.tags).to.be.an('array');
                        expect(body.ciclos).to.be.an('array');

                        // Verifica as propriedades do array 'categorias' para cada categoria
                        expect(body.categorias).to.be.an('array');
                        body.categorias.forEach(categoria => {
                            expect(categoria.id).to.be.a('string');
                            expect(categoria.contaContabil).to.be.an('object');
                            expect(categoria.contaContabil.codigo).to.be.a('string');
                            expect(categoria.contaContabil.descricao).to.be.a('string');
                            expect(categoria.contaContabil.dedutivel).to.be.a('boolean');
                            expect(categoria.contaContabil.adiantamento).to.be.a('boolean');
                            expect(categoria.porcentagem).to.be.a('number');
                            expect(categoria.valor).to.be.a('number');
                        });

                        expect(body.documentoMaterialImpostos).to.be.an('array');
                        expect(body.categoriasDescricao).to.be.a('string');
                        expect(body.anexos).to.be.an('array');

                        // Verifica as propriedades do objeto 'tributacoesTotais'
                        expect(body.tributacoesTotais).to.be.an('object');
                        expect(body.tributacoesTotais.modelo).to.be.a('number');
                        expect(body.tributacoesTotais.serie).to.be.a('number');
                        expect(body.tributacoesTotais.baseCalculoICMS).to.be.a('number');
                        expect(body.tributacoesTotais.valorTotalICMS).to.be.a('number');
                        expect(body.tributacoesTotais.isentasNaoTributadas).to.be.a('number');
                        expect(body.tributacoesTotais.outrosICMS).to.be.a('number');
                        expect(body.tributacoesTotais.baseCalculoSubst).to.be.a('number');
                        expect(body.tributacoesTotais.valorICMSRetido).to.be.a('number');
                        expect(body.tributacoesTotais.valorIPI).to.be.a('number');
                        expect(body.tributacoesTotais.isentas).to.be.a('number');
                        expect(body.tributacoesTotais.outrosIPI).to.be.a('number');

                        // Verifica as propriedades do objeto 'outrosValores'
                        expect(body.outrosValores).to.be.an('object');
                        expect(body.outrosValores.frete).to.be.a('number');
                        expect(body.outrosValores.seguro).to.be.a('number');
                        expect(body.outrosValores.despesas).to.be.a('number');
                        expect(body.outrosValores.descontos).to.be.a('number');
                        expect(body.outrosValores.total).to.be.a('number');

                        // Verifica as propriedades do array 'titulos' para cada título
                        expect(body.titulos).to.be.an('array');
                        body.titulos.forEach(titulo => {
                            expect(titulo.id).to.be.a('string');
                            expect(titulo.documentoId).to.be.a('string');
                            expect(titulo.tipo).to.be.a('number');
                            expect(titulo.dataVencimento).to.be.a('string');
                            expect(titulo.moedaPadraoId).to.be.a('string');
                            expect(titulo.moedaPadraoDescricao).to.be.a('string');
                            expect(titulo.isMultiMoeda).to.be.a('boolean');
                            expect(titulo.moedaAlternativaId).to.be.a('string');
                            expect(titulo.valor).to.be.a('number');
                            expect(titulo.numeroParcela).to.be.a('number');
                            expect(titulo.totalParcelas).to.be.a('number');
                        })
                    })
            })
        })
    })
})
