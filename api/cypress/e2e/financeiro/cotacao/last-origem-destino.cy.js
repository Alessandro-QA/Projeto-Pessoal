/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Cotacao', () => {
        describe(`GET - ${Cypress.env('financeiro')}/cotacao/last/origem/{MoedaIdOrigem}/Destino/{MoedaIdDestino} - Obtém Dados das duas moedas envolvidas na conversao/cotacao`, () => {

            it('CT1 - Obtém Dados das duas moedas envolvidas na conversao/cotacao', () => {
                cy.fixture('financeiro/cotacao/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/cotacao/last/origem/${params.MoedaIdOrigem}/destino/${params.MoedaIdDestino}`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.be.a('boolean')

                            const body = response.body;

                            expect(body.data.moedaOrigem.id).to.equal('de5237c9-55f9-4ec4-86fb-6892ffbb9ab7')
                            expect(body.data.moedaOrigem.descricao).to.be.a('string')
                            expect(body.data.moedaOrigem.codigo).to.be.a('number')
                            expect(body.data.moedaOrigem.sigla).to.be.a('string')
                            expect(body.data.moedaOrigem.simbolo).to.be.a('string')
                            expect(body.data.moedaOrigem.ativo).to.be.a('boolean')

                            expect(body.data.moedaDestino.id).to.equal('f7869132-3eb0-4bfc-b416-754b040c98ff')
                            expect(body.data.moedaDestino.descricao).to.be.a('string')
                            expect(body.data.moedaDestino.codigo).to.be.a('number')
                            expect(body.data.moedaDestino.sigla).to.be.a('string')
                            expect(body.data.moedaDestino.simbolo).to.be.a('string')
                            expect(body.data.moedaDestino.ativo).to.be.a('boolean')

                            expect(body.data.valor).to.be.a('number')
                        })
                })
            })
        })
    })
})