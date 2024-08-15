/// <reference types='Cypress' />

const description = require('../../../fixtures/producaoAgricola/enums/enums.destinoMovimentacao.description')

context('Produção Agrícola', () => {
    context('Enums', () => {
        describe(`GET - ${Cypress.env('producaoAgricola')}/Enums/DestinoMovimentacao - Obtém todos os Destinos de Movimentação existentes`, () => {

            it('CT1 - Obter todos os Destinos de Movimentação existentes', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/Enums/DestinoMovimentacao`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        response.body.forEach((destino) => {
                            expect(destino.value).to.be.a('number')
                            expect(destino.enumValue).to.be.a('string')
                            expect(destino.enumDescription).to.be.a('string')
                        })
                    })
            })
        })
    })
})