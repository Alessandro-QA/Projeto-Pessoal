/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/listarEmpresasComMatriculaFazenda/listarEmpresasComMatriculaFazenda.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/ListarEmpresasComMatriculaFazenda - Lista de Empresas com Matrícula de Fazenda`, () => {

        it('CT1 - Buscar empresas com matrícula de fazenda', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/listarEmpresasComMatriculaFazenda/paramsCt1.json').then((params) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/ListarEmpresasComMatriculaFazenda`, params)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um array
                        expect(response.body).to.be.an('array')

                        response.body.forEach((empresa) => {
                            // Valida as propriedades de cada empresa
                            expect(empresa).to.be.an('object')
                            expect(empresa.id).to.be.a('string')
                            expect(empresa.nome).to.be.a('string')
                            expect(empresa.documentoPrincipal).to.be.a('string')

                        })
                    })
            })
        })
    })
})
