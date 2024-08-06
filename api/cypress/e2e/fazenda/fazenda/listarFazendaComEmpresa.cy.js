/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/listarFazendasComEmpresa/listarFazendaComEmpresa.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/ListarFazendasComEmpresa - Lista de Fazendas com Empresa`, () => {

        it('CT1 - Buscar fazendas com empresa', () => {
             cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            const empresaId = '44e2d617-2d9d-4b4f-8138-7d1f1739a599'

            cy.fixture('fazenda/listarFazendasComEmpresa/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/ListarFazendasComEmpresa?EmpresaId=${empresaId}`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um array
                        expect(response.body).to.be.an('array')

                        // Valida a estrutura de cada item do array
                        response.body.forEach((item) => {
                            expect(item).to.be.an('object')
                            expect(item).to.have.property('id').that.is.a('string')
                            expect(item).to.have.property('nome').that.is.a('string')

                        })
                    })
            })
        })
    })
})
