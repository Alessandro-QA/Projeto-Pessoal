/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe('GET - /api/financeiro/v1/LivroCaixa/ProdutorLivroCaixaResumoMensal - Obtém todos os registros do Livro Caixa agrupados por mês com filtro', () => {
            it('CT1 - Deve obter registro do Livro Caixa agrupados por Mês', () => {
                cy.fixture('financeiro/livroCaixa/produtorLivroCaixaResumoMensal/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/LivroCaixa/ProdutorLivroCaixaResumoMensal', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.data).to.be.an('array').with.length(12)

                            // Verifica se todos os meses de 1 a 12 estão presentes na resposta
                            const mesesEsperados = Array.from({ length: 12 }, (_, i) => i + 1);
                            const mesesResposta = response.body.data.map(item => item.mes);

                            mesesEsperados.forEach(mes => {
                                expect(mesesResposta).to.include(mes);
                            });

                        })
                })
            })
        })
    })
})