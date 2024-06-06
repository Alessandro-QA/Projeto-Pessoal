/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {

        let randomNumber

        describe('PUT - /api/financeiro/v1/Documento - Editar um Documento', () => {
            it('CT1 - Deve atualizar um documento sem atualizar a Origem', () => {
                cy.fixture('financeiro/documento/sourceUpdate/payloadCt1.json').then((payload) => {
         
                    // Gerar um novo número aleatório, para sempre alterar os dados do documento
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    //Alterando um valor daquele existente para ter alguma troca na edição
                    // É necessário alterar os 4 valores pois eles devem ser iguais
                    payload.financeiro.total = randomNumber
                    payload.categorias[0].valor = randomNumber
                    payload.financeiro.parcelas[0].valor = randomNumber
                    payload.ciclos[0].valor = randomNumber

                    cy.putRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)
                        })
                })
            })

        })
    })
})