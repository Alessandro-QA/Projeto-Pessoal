/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Encontro Contas', () => {
        describe('GET - /api/financeiro/v1/EncontroContas/Pessoa/{pessoaId}/Titulos/Moeda/{moedaId}/List - Lista os Títulos pela Pessoa e Pela Moeda', () => {
            
            it('CT1 - Deve obter a Lista de Títulos A Pagar e a Receber por Cliente e Moeda', () => {
                cy.fixture('financeiro/encontroContas/list/paramsCt1.json').then((params) => {
                    cy.getRequest(`/api/financeiro/v1/EncontroContas/Pessoa/${params.pessoaID}/Titulos/Moeda/${params.moedaID}/List`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null  
                            
                            const { titulosAPagar, titulosAReceber } = response.body.data

                            // Função auxiliar para verificar os campos e tipos dos títulos
                            const verificarTitulos = (titulos) => {
                                titulos.forEach((titulo) => {
                                    titulo.titulos.forEach((t) => {
                                        expect(t).to.have.property('id').that.is.a('string')
                                        expect(t).to.have.property('empresaId').that.is.a('string')
                                        expect(t).to.have.property('empresaDescricacaoId').that.is.a('string')
                                        expect(t).to.have.property('numeroDocumento').that.is.a('string')
                                        expect(t).to.have.property('documentoId').that.is.a('string')
                                        expect(t).to.have.property('vencimento').that.is.a('string')
                                        expect(t).to.have.property('moedaPadraoId').that.is.a('string')
                                        expect(t).to.have.property('moedaAlternativaId').that.is.a('string')
                                        expect(t).to.have.property('moedaPadraoDescricao').that.is.a('string')
                                        expect(t).to.have.property('valor').that.is.a('number')
                                        expect(t).to.have.property('valorAltenativo').that.is.a('number')
                                        expect(t).to.have.property('saldo').that.is.a('number')
                                        expect(t).to.have.property('saldoAlternativo').that.is.a('number')
                                        expect(t).to.have.property('isMoedaAlternativa').that.is.a('boolean')
                                    })
                                })
                            }

                            // Verificar títulos a pagar
                            verificarTitulos(titulosAPagar)

                            // Verificar títulos a receber
                            verificarTitulos(titulosAReceber)
                        })
                })
            })
        })
    })
})
