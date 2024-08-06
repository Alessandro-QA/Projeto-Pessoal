/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/idMatriculasIeInscricaoEstadualId/idMatriculasIeInscricaoEstadualId.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/{id}/matriculas/{IE}/{id}/exploracoes - Listagem de Explorações de Matrículas`, () => {

        it('CT1 - Buscar explorações de matrícula de fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            const fazendaId = 'a5b4ec5c-dc8a-4d49-bdce-ae8639ebb8f7'
            const matriculaId = '03cc2a37-da82-4aeb-abda-0b62ee46c9b1'
            const ie = 'IE'

            cy.fixture('fazenda/idMatriculasIeInscricaoEstadualId/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${fazendaId}/matriculas/${ie}/${matriculaId}/exploracoes`, payload)
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
                            expect(item).to.have.property('pessoa').that.is.an('object')
                            expect(item.pessoa).to.have.property('id').that.is.a('string')
                            expect(item.pessoa).to.have.property('nome').that.is.a('string')
                            expect(item.pessoa).to.have.property('documentoPrincipal').that.is.a('string')
                            expect(item).to.have.property('participacao').that.is.a('number')

                        })
                    })
            })
        })
    })
})
