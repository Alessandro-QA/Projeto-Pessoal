/// <reference types='Cypress' />


//import bodyCt4 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt4.json'
import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context.skip('Acerto de Frete', () => {
    context('Listagem (AcertoFretes/List)', () => {
        describe.skip('Filtragem de cabeçalho', () => {
            it.skip('CT1 - Deve trazer 20 resultados sem filtro', () => {

                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(20).to.be.not.null
                        //expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt1))
                    })
            })
        })

        describe.skip('Filtragem funil', () => {
            it.skip('CT1 - Deve filtrar por periodo', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        //expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })
        })
    })
})