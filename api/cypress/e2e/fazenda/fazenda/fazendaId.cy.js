/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazendaId/fazendaId.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/{id} - fazenda por ID`, () => {

        it('CT1 - Buscar fazenda por ID', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            const fazendaId = 'e3b021cc-9040-4da5-bd9a-f4689d554fe4' // ID da fazenda

            cy.fixture('fazenda/fazendaId/payloadCt1.json').then((payload) => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${fazendaId}`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica se a resposta é um objeto
                        expect(response.body).to.be.an('object')

                        // Valida propriedades de nível superior
                        expect(response.body.ativo).to.be.a('boolean')
                        expect(response.body.id).to.be.a('string')
                        expect(response.body.nome).to.be.a('string')
                        expect(response.body.latitude).to.be.a('number')
                        expect(response.body.longitude).to.be.a('number')
                        expect(response.body.bairro).to.be.a('string')
                        expect(response.body.numero).to.be.a('string')
                        expect(response.body.codigo).to.be.a('number')

                        // Valida propriedades do objeto pais
                        expect(response.body.pais).to.be.an('object')
                        expect(response.body.pais.id).to.be.a('string')
                        expect(response.body.pais.descricao).to.be.a('string')

                        // Valida propriedades do objeto estado
                        expect(response.body.estado).to.be.an('object')
                        expect(response.body.estado.id).to.be.a('string')
                        expect(response.body.estado.descricao).to.be.a('string')
                        expect(response.body.estado.sigla).to.be.a('string')

                        // Valida propriedades do objeto municipio
                        expect(response.body.municipio).to.be.an('object')
                        expect(response.body.municipio.id).to.be.a('string')
                        expect(response.body.municipio.descricao).to.be.a('string')
                        expect(response.body.municipio.codigo).to.be.a('number')

                        // Valida propriedades do array inscricoesEstaduais
                        expect(response.body.inscricoesEstaduais).to.be.an('array')

                        // Valida propriedades do array fazendaMatriculas
                        expect(response.body.fazendaMatriculas).to.be.an('array')
                        response.body.fazendaMatriculas.forEach((matricula) => {
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

                            // Valida outras propriedades de fazendaMatricula
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
