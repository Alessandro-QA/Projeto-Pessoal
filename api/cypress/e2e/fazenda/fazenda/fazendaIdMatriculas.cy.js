/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazendaIdMatriculas/fazendaIdMatriculas.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/{id}/matriculas -  de Matrículas de Fazenda`, () => {

        it('CT1 - Matricula de Fazenda por ID', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            const fazendaId = 'e3b021cc-9040-4da5-bd9a-f4689d554fe4' // Substitua pelo ID desejado

            cy.fixture('fazenda/fazendaIdMatriculas/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${fazendaId}/matriculas`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um array
                        expect(response.body).to.be.an('array')

                        // Valida propriedades dos itens do array
                        response.body.forEach((matricula) => {
                            expect(matricula).to.be.an('object')
                            expect(matricula.id).to.be.a('string')
                            expect(matricula.empresa).to.be.an('object')
                            expect(matricula.empresa.id).to.be.a('string')
                            expect(matricula.empresa.nome).to.be.a('string')

                            // Valida propriedades do objeto inscricaoEstadual dentro de empresa
                            expect(matricula.empresa.inscricaoEstadual).to.be.an('object')
                            expect(matricula.empresa.inscricaoEstadual.id).to.be.a('string')
                            expect(matricula.empresa.inscricaoEstadual.descricao).to.be.a('string')
                            expect(matricula.empresa.inscricaoEstadual.valor).to.be.a('string')
                            expect(matricula.empresa.inscricaoEstadual.isento).to.be.a('boolean')
                            expect(matricula.empresa.inscricaoEstadual.ativo).to.be.a('boolean')

                            // Valida outras propriedades de matrícula
                            expect(matricula.tipoExploracao).to.be.a('number')
                            expect(matricula.cafir).to.be.a('string')
                            expect(matricula.caepf).to.be.a('string')
                            expect(matricula.descricao).to.be.a('string')
                            expect(matricula.codigo).to.be.a('number')

                            // Valida fazendaMatriculaPessoaExploracoes como array
                            expect(matricula.fazendaMatriculaPessoaExploracoes).to.be.an('array')
                        })
                    })
            })
        })
    })
})
