/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/vincularEmpresaInscricoesEstaduais/vincularEmpresaInscricoesEstaduais.description')

context('Fazenda', () => {
    describe(`GET - ${Cypress.env('fazenda')}/Fazenda/VincularEmpresaInscriçõesEstaduais - Vincular Empresa a Inscrições Estaduais`, () => {

        it('CT1 - Vincular Empresas a Incrições Estaduais', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('fazenda/vincularEmpresaInscricoesEstaduais/payloadCt1.json').then((payload) => {
                cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda/VincularEmpresaInscricoesEstaduais`, payload)
                    .then((response) => {
                        // Verifica o status da resposta e o cabeçalho da solicitação
                        expect(response.status).to.equal(200)
                        expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))

                        // Verifica o cabeçalho da solicitação
                        expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))

                        // Valida a propriedade 'success'
                        expect(response.body).to.have.property('success', true)

                        // Valida a propriedade 'data'
                        expect(response.body).to.have.property('data').that.is.an('object')

                        const data = response.body.data

                        // Valida 'data.empresaNome'
                        expect(data).to.have.property('empresaNome', payload.empresaNome)

                        // Valida 'data.empresaDocumentoPrincipal'
                        expect(data).to.have.property('empresaDocumentoPrincipal', payload.empresaDocumentoPrincipal)

                        // Valida 'data.empresaId'
                        expect(data).to.have.property('empresaId', payload.empresaId)

                        // Valida 'data.inscricoesEstaduais'
                        expect(data).to.have.property('inscricoesEstaduais').that.is.an('array').with.lengthOf(1)

                        const inscricaoEstadual = data.inscricoesEstaduais[0]

                        // Valida 'inscricoesEstaduais.inscricaoEstadual'
                        expect(inscricaoEstadual).to.have.property('inscricaoEstadual').that.is.an('object')

                        const inscricao = inscricaoEstadual.inscricaoEstadual

                        // Valida propriedades de 'inscricaoEstadual'
                        expect(inscricao).to.have.property('id', payload.inscricoesEstaduais[0].inscricaoEstadual.id)
                        expect(inscricao).to.have.property('descricao', payload.inscricoesEstaduais[0].inscricaoEstadual.descricao)
                        expect(inscricao).to.have.property('valor', payload.inscricoesEstaduais[0].inscricaoEstadual.valor)
                        expect(inscricao).to.have.property('ativo', payload.inscricoesEstaduais[0].inscricaoEstadual.ativo)

                        // Valida 'inscricaoEstadual.fiscal'
                        expect(inscricao).to.have.property('fiscal').that.is.an('object')

                        const fiscal = inscricao.fiscal

                        // Valida propriedades de 'fiscal'
                        expect(fiscal).to.have.property('id', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.id)
                        expect(fiscal).to.have.property('proximoNumeroNotaProducao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.proximoNumeroNotaProducao)
                        expect(fiscal).to.have.property('serieNotaProducao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.serieNotaProducao)
                        expect(fiscal).to.have.property('proximoNumeroNotaHomologacao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.proximoNumeroNotaHomologacao)
                        expect(fiscal).to.have.property('serieNotaHomologacao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.serieNotaHomologacao)
                        expect(fiscal).to.have.property('proximoNumeroMDFeProducao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.proximoNumeroMDFeProducao)
                        expect(fiscal).to.have.property('proximoNumeroMDFeHomologacao', payload.inscricoesEstaduais[0].inscricaoEstadual.fiscal.proximoNumeroMDFeHomologacao)

                        // Valida 'inscricaoEstadual.fazendas'
                        expect(inscricaoEstadual).to.have.property('fazendas').that.is.an('array').with.lengthOf(1)

                        const fazenda = inscricaoEstadual.fazendas[0]

                        // Valida propriedades de 'fazendas'
                        expect(fazenda).to.have.property('fazendaId', payload.inscricoesEstaduais[0].fazendas[0].fazendaId)
                        expect(fazenda).to.have.property('fazendaNome', payload.inscricoesEstaduais[0].fazendas[0].fazendaNome)
                        expect(fazenda).to.have.property('deleted', payload.inscricoesEstaduais[0].fazendas[0].deleted)
                    })
            })
        })
    })
})
