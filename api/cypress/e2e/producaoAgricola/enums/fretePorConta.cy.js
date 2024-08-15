/// <reference types='Cypress' />

const description = require('../../../fixtures/producaoAgricola/enums/enums.FretePorConta.description')

context('Produção Agrícola', () => {
    context('Enums', () => {
        describe(`GET - ${Cypress.env('producaoAgricola')}/Enums/FretePorConta - Obtém as opções de pessoa existentes para atribuir o frete `, () => {

            it('CT1 - Obter as opções de pessoa existentes para atribuir o frete ', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/Enums/FretePorConta`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        response.body.forEach((item) => {
                            expect(item.value).to.be.a('number')
                            expect(item.enumValue).to.be.a('string')
                            expect(item.enumDescription).to.be.a('string')
                        })
                    })
            })
        })
    })
})