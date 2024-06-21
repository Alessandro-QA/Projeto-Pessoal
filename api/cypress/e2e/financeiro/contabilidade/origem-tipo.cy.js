/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Contabilidade', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Contabilidade/Origem/{idOrigem}/Tipo/{tipoOrigem} - Obtém registros contábeis pelo ID e tipo da Origem`, () => {
            it('CT1 - Obtém registros contábeis pelo ID e tipo da Origem', () => {
                cy.fixture('financeiro/contabilidade/origem-tipo/paramsCt1.json').then((params) => {
                    cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Contabilidade/Origem/${params.idOrigem}/Tipo/${params.tipoOrigem}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Itera sobre cada registro no corpo da resposta
                            response.body.forEach(record => {
                                // Verifica o valor de 'origemId' e 'tipoOrigem'
                                expect(record).to.have.property('origemId').to.equal('e8a8c967-5654-41df-867b-f7f87660c1ea')
                                expect(record).to.have.property('tipoOrigem').to.equal(3)

                                // Verifica as propriedades do objeto 'empresa'
                                expect(record).to.have.property('empresa').that.is.an('object')
                                expect(record.empresa).to.have.property('id').that.is.a('string')
                                expect(record.empresa).to.have.property('descricao').that.is.a('string')

                                // Verifica as propriedades do objeto 'inscricaoEstadual'
                                expect(record).to.have.property('inscricaoEstadual').that.is.an('object')
                                expect(record.inscricaoEstadual).to.have.property('id').that.is.a('string')
                                expect(record.inscricaoEstadual).to.have.property('descricao').that.is.a('string')
                                expect(record.inscricaoEstadual).to.have.property('valor').that.is.a('string')
                                expect(record.inscricaoEstadual).to.have.property('isento').that.is.a('boolean')

                                // Verifica as propriedades do objeto 'fazenda'
                                expect(record).to.have.property('fazenda').that.is.an('object')
                                expect(record.fazenda).to.have.property('id').that.is.a('string')
                                expect(record.fazenda).to.have.property('descricao').that.is.a('string')

                                // Verifica as propriedades do objeto 'pessoa'
                                expect(record).to.have.property('pessoa').that.is.an('object')
                                expect(record.pessoa).to.have.property('id').that.is.a('string')
                                expect(record.pessoa).to.have.property('descricao').that.is.a('string')

                                // Verifica as propriedades do objeto 'safra'
                                expect(record).to.have.property('safra').that.is.an('object')
                                expect(record.safra).to.have.property('id').that.is.a('string')
                                expect(record.safra).to.have.property('descricao').that.is.a('string')

                                // Verifica as propriedades de cada categoria no array 'categorias'
                                record.categorias.forEach(categoria => {
                                    expect(categoria).to.have.property('id').that.is.a('string')
                                    expect(categoria).to.have.property('percentual').that.is.a('number')
                                    expect(categoria).to.have.property('contaDebito').that.is.an('object')
                                    expect(categoria.contaDebito).to.have.property('codigo').that.is.a('string')
                                    expect(categoria.contaDebito).to.have.property('conta').that.is.a('string')
                                    expect(categoria.contaDebito).to.have.property('dedutivel').that.is.a('boolean')
                                    expect(categoria).to.have.property('contaCredito').that.is.an('object')
                                    expect(categoria.contaCredito).to.have.property('dedutivel').that.is.a('boolean')
                                    expect(categoria).to.have.property('historicoCompetencia').that.is.a('string')
                                    expect(categoria).to.have.property('historicoCaixa').that.is.a('string')
                                    expect(categoria).to.have.property('valor').that.is.a('number')
                                })

                                // Verifica se 'competencias' é um array
                                expect(record).to.have.property('competencias').that.is.an('array')

                                // Verifica as propriedades de cada regime no array 'regimesCaixa'
                                expect(record).to.have.property('regimesCaixa').that.is.an('array')
                                record.regimesCaixa.forEach(regimeCaixa => {
                                    expect(regimeCaixa).to.have.property('id').that.is.a('string')
                                    expect(regimeCaixa).to.have.property('lancamentoContabilId').that.is.a('string')
                                    expect(regimeCaixa).to.have.property('movimentacaoId').that.is.a('string')
                                    expect(regimeCaixa).to.have.property('contaDebito').that.is.an('object')
                                    expect(regimeCaixa.contaDebito).to.have.property('codigo').that.is.a('string')
                                    expect(regimeCaixa.contaDebito).to.have.property('conta').that.is.a('string')
                                    expect(regimeCaixa.contaDebito).to.have.property('dedutivel').that.is.a('boolean')
                                    expect(regimeCaixa).to.have.property('contaCredito').that.is.an('object')
                                    expect(regimeCaixa.contaCredito).to.have.property('codigo').that.is.a('string')
                                    expect(regimeCaixa.contaCredito).to.have.property('conta').that.is.a('string')
                                    expect(regimeCaixa.contaCredito).to.have.property('dedutivel').that.is.a('boolean')
                                    expect(regimeCaixa).to.have.property('tipo').that.is.a('number')
                                    expect(regimeCaixa).to.have.property('valor').that.is.a('number')
                                    expect(regimeCaixa).to.have.property('historicoContabil').that.is.a('string')
                                })
                            })
                        })
                })
            })
        })
    })
})