/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Documento/ImpressaoRecibo/{id} - Obtém a Impressão do Recibo do Documento pelo ID`, () => {

            it('CT1 - Obtém a Impressão do Recibo do Documento pelo ID', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/ImpressaoRecibo/f5fc2007-04de-4d7a-9c27-5a7988cbc886`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')

                        expect(response.body.data.nomeRecebedor).to.be.a('string')
                        expect(response.body.data.documentoRecebedor).to.be.a('string')
                        expect(response.body.data.logradouroRecebedor).to.be.a('string')
                        expect(response.body.data.numeroEnderecoRecebedor).to.be.a('string')
                        expect(response.body.data.complementoEnderecoRecebedor).to.be.a('string')
                        expect(response.body.data.cepEnderecoRecebedor).to.be.a('string')
                        expect(response.body.data.bairroRecebedor).to.be.a('string')
                        expect(response.body.data.cidadeRecebedor).to.be.a('string')
                        expect(response.body.data.estadoRecebedor).to.be.a('string')
                        expect(response.body.data.nomePagador).to.be.a('string')
                        expect(response.body.data.documentoPagador).to.be.a('string')
                        expect(response.body.data.valor).to.be.a('number')
                        expect(response.body.data.valorExtenso).to.be.a('string')
                        expect(response.body.data.cidade).to.be.a('string')
                        expect(response.body.data.estado).to.be.a('string')
                        expect(response.body.data.data).to.be.a('string')
                        expect(response.body.data.fazendaDescricao).to.be.a('string')
                        expect(response.body.data.empresaInscricaoEstadualValor).to.be.a('string')
                    })
            })
        })
    })
})
