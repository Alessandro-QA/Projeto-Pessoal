/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa/obterValoresTotaisDosLancamentos - Obtém Valores Totais dos Lançamentos', () => {
            it('CT1 - Deve obter Valores totais de Resposta dos Lançamentos', () => {
                cy.fixture('financeiro/livroCaixa/obterValoresTotaisDosLancamentos/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/ObterValoresTotaisDosLancamentos', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null  

                            const data = response.body.data;
                            const campos = [
                                'valoresDeSaidas',
                                'valoresDeEntradas',
                                'valoresNaoDedutiveis',
                                'saldoAnterior',
                                'saldoAtual',
                                'estimativaIrrf'
                            ];

                            // Verificando se todos os campos estão presentes e são números
                            campos.forEach((campo) => {
                                expect(data).to.have.property(campo);
                                expect(data[campo]).to.be.a('number');
                            });
                            
                        })
                })
            })
        })
    })
})