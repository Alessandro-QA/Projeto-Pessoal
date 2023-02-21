/// <reference types='Cypress' />

context('Acerto de Frete', () => {
    describe('Cadastro - POST /api/producao-agricola/v1/AcertoFretes', () => {
        it('CT1 - Deve cadastrar Acerto de Frete', () => {
            cy.fixture('producaoAgricola/acertoDeFrete/cadastro/bodyCt1.json').then((body) => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes', body)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body.data).to.be.not.null
                        expect(response.body.data.id).to.be.not.null
                        expect(response.body.success).to.equal(true)

                        // Deletar Acerto Criado Para não conflitar com outros testes
                        const id = response.body.data.id
                        cy.executeRequest('DELETE', '/producao-agricola/v1/AcertoFretes', '', id)
                    })
            })
        })

        it('CT2 - Deve cadastrar Acerto de Frete Com Valor Manual', () => {
            cy.fixture('producaoAgricola/acertoDeFrete/cadastro/bodyCt2.json').then((body) => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes', body)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body.data).to.be.not.null
                        expect(response.body.data.id).to.be.not.null
                        expect(response.body.success).to.equal(true)
                        expect(response.body.data.tipoValorManual).to.equal(2)
                        expect(response.body.data.valorManual).to.equal(1500.0)
                        expect(response.body.data.valorTotal).to.equal(8033.0)

                        // Deletar Acerto Criado Para não conflitar com outros testes
                        const id = response.body.data.id
                        cy.executeRequest('DELETE', '/producao-agricola/v1/AcertoFretes', '', id)
                    })
            })
        })

        it('CT3 - Deve cadastrar Acerto de Frete Com Despesa', () => {
            cy.fixture('producaoAgricola/acertoDeFrete/cadastro/bodyCt3.json').then((body) => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes', body)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body.data).to.be.not.null
                        expect(response.body.data.id).to.be.not.null
                        expect(response.body.success).to.equal(true)
                        expect(response.body.data.tipoValorManual).to.equal(1)
                        expect(response.body.data.valorManual).to.equal(25000.0)
                        expect(response.body.data.valorTotal).to.equal(25000.0)
                        expect(response.body.data.despesas).to.be.not.null

                        // Deletar Acerto Criado Para não conflitar com outros testes
                        const id = response.body.data.id
                        cy.executeRequest('DELETE', '/producao-agricola/v1/AcertoFretes', '', id)
                    })
            })
        })
    })
})

