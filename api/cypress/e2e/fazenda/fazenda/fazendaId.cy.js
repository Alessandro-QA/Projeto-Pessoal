/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazendaId/fazendaId.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/{id} - Fazenda por ID`, () => {

        it('CT1 - Buscar fazenda por ID', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/fazendaId/paramsCt1.json').then((params) => {

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/${params.id}`)
                    .then((response) => {
                        
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Valida a estrutura da resposta (exemplo de validação adicional)
                        expect(response.body).to.be.an('object')
                        expect(response.body).to.have.property('id').that.is.a('string')
                        expect(response.body).to.have.property('nome').that.is.a('string')
                        // Valida a estrutura da resposta
                        expect(response.body).to.be.an('object')
                        expect(response.body).to.have.property('ativo').that.is.a('boolean')
                        expect(response.body).to.have.property('id').that.is.a('string')
                        expect(response.body).to.have.property('nome').that.is.a('string')
                        expect(response.body).to.have.property('latitude').that.is.a('number')
                        expect(response.body).to.have.property('longitude').that.is.a('number')
                        expect(response.body).to.have.property('bairro').that.is.a('string')
                        expect(response.body).to.have.property('numero').that.is.a('string')
                        expect(response.body).to.have.property('codigo').that.is.a('number')

                        // Valida o objeto `pais`
                        expect(response.body).to.have.property('pais').that.is.an('object')
                        expect(response.body.pais).to.have.property('id').that.is.a('string')
                        expect(response.body.pais).to.have.property('descricao').that.is.a('string')

                        // Valida o objeto `estado`
                        expect(response.body).to.have.property('estado').that.is.an('object')
                        expect(response.body.estado).to.have.property('id').that.is.a('string')
                        expect(response.body.estado).to.have.property('descricao').that.is.a('string')
                        expect(response.body.estado).to.have.property('sigla').that.is.a('string')

                        // Valida o objeto `municipio`
                        expect(response.body).to.have.property('municipio').that.is.an('object')
                        expect(response.body.municipio).to.have.property('id').that.is.a('string')
                        expect(response.body.municipio).to.have.property('descricao').that.is.a('string')
                        expect(response.body.municipio).to.have.property('codigo').that.is.a('number')

                        // Valida o array `inscricoesEstaduais`
                        expect(response.body).to.have.property('inscricoesEstaduais').that.is.an('array')
                        expect(response.body.inscricoesEstaduais).to.be.empty // Valida que o array está vazio

                        // Valida o array `fazendaMatriculas`
                        expect(response.body).to.have.property('fazendaMatriculas').that.is.an('array')
                        response.body.fazendaMatriculas.forEach((matricula) => {
                            expect(matricula).to.be.an('object')
                            expect(matricula).to.have.property('id').that.is.a('string')
                            expect(matricula).to.have.property('empresa').that.is.an('object')
                            expect(matricula.empresa).to.have.property('id').that.is.a('string')
                            expect(matricula.empresa).to.have.property('nome').that.is.a('string')
                            expect(matricula.empresa).to.have.property('inscricaoEstadual').that.is.an('object')
                            expect(matricula.empresa.inscricaoEstadual).to.have.property('id').that.is.a('string')
                            expect(matricula.empresa.inscricaoEstadual).to.have.property('descricao').that.is.a('string')
                            expect(matricula.empresa.inscricaoEstadual).to.have.property('valor').that.is.a('string')
                            expect(matricula.empresa.inscricaoEstadual).to.have.property('isento').that.is.a('boolean')
                            expect(matricula.empresa.inscricaoEstadual).to.have.property('ativo').that.is.a('boolean')
                            expect(matricula).to.have.property('tipoExploracao').that.is.a('number')
                            expect(matricula).to.have.property('cafir').that.is.a('string')
                            expect(matricula).to.have.property('caepf').that.is.a('string')
                            expect(matricula).to.have.property('descricao').that.is.a('string')
                            expect(matricula).to.have.property('codigo').that.is.a('number')
                            expect(matricula).to.have.property('fazendaMatriculaPessoaExploracoes').that.is.an('array')
                        })
                    })
            })
        })
    })
})