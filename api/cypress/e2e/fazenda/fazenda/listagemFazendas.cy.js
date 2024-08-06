/// <reference types='Cypress' />

 const description = require('../../../fixtures/fazenda/listagemFazenda/listagemFazenda.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/ListagemFazendas - Listagem de Fazenda`, () => {

        it('CT1 - Listagem de fazendas', () => {
             cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/listagemFazenda/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/ListagemFazendas`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um array
                        expect(response.body).to.be.an('array')

                        response.body.forEach((fazenda) => {
                            // Valida propriedades de nível superior da fazenda
                            expect(fazenda).to.be.an('object')
                            expect(fazenda.ativo).to.be.a('boolean')
                            expect(fazenda.id).to.be.a('string')
                            expect(fazenda.nome).to.be.a('string')
                            expect(fazenda.quantidadeTalhoes).to.be.a('number')

                        })
                    })
            })
        })
    })
})