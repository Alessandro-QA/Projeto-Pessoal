/// <reference types='Cypress' />

context('Acerto de Frete', () => {
    context('Listagem de Romaneios - GET - /api/producao-agricola/v1/AcertoFretes/ListRomaneios?{params}', () => {
        it('CT1 - Deve listar romaneios por motorista', () => {
            cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/payloadCt1.json').then((payload) => {
                cy.executeRequest('GET', '/api/producao-agricola/v1/AcertoFretes/ListRomaneios', payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).be.not.null
                        expect(response.body).to.exist
                        expect(response.body).to.be.an('array').that.is.not.empty
                    })
            })
        })

        it('CT2 - Deve listar romaneios por motorista e placa', () => {
            cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/payloadCt2.json').then((payload) => {
                cy.executeRequest('GET', '/api/producao-agricola/v1/AcertoFretes/ListRomaneios', payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).be.not.null
                        expect(response.body).to.exist
                        expect(response.body).to.be.an('array').that.is.not.empty
                    })
            })
        })
    })
})
