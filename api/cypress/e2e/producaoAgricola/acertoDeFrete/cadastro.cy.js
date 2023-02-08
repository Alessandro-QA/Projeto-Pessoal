/// <reference types='Cypress' />


import bodyCt4 from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/bodyCt4.json'
import seedTeste from '../../../fixtures/producaoAgricola/acertoDeFrete/listagem/seedTeste.json'

context('Acerto de Frete', () => {
    context('Cadastro (/AcertoFretes)', () => {
        describe('Filtragem de cabeçalho', () => {
            it('CT1 - Deve trazer 20 resultados sem filtro', () => {

                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.semFiltro)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(20).to.be.not.null
                        //expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt1))
                    })
            })
        })

        describe('Filtragem funil', () => {
            it('CT1 - Deve filtrar por periodo', () => {
                cy.executeRequest('POST', '/producao-agricola/v1/AcertoFretes/List', seedTeste.porPlaca)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).to.equal(200)
                        expect(response.body).to.have.lengthOf(11).to.be.not.null
                        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(bodyCt4))
                    })
            })
        })
    })
})

Acerto Com 1 Romaneio
Acerto com 2 Romaneios (Valores iguais)
Acerto com 2 Romaneios (Valores diferentes)
Acerto com 20 Romaneios

Acerto sem documentos de despesas
Acerto com 1 documento de despesas
Acerto com 20 documentos de despesas

Acerto com valor manual
Acerto com valor manual (Desconto)
Acerto com valor manual (Acrescimo)
Acerto sem valor manual

Acerto com geração de documento (Não pago)
    Validar status do Acerto
    Validar se gerou documento
    Validar se gerou titulo na agenda
Acerto com geração de documento (Já pago)
    Validar status do Acerto
    Validar se gerou documento
    Validar se gerou titulo na agenda pago
    Validar se gerou movimentacao bancaria

