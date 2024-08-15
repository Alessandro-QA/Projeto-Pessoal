/// <reference types='Cypress' />

const description = require('../../../fixtures/producaoAgricola/enums/enums.TipoNegociacao.description')

context('Produção Agrícola', () => {
    context('Enums', () => {
        describe(`GET - ${Cypress.env('producaoAgricola')}/Enums/TipoNegociacao - Obtém os tipos de negociação existentes.`, () => {

            it('CT1 - Obter os tipos de negociação existentes ', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/Enums/TipoNegociacao`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        response.body.forEach((tipo) => {
                            expect(tipo.value).to.be.a('number')
                            expect(tipo.enumValue).to.be.a('string')
                            expect(tipo.enumDescription).to.be.a('string')
                        })
                    })
            })
        })
    })
})