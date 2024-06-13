/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria - Obtém todas as Contas Bancárias`, () => {
            it('CT1 - Deve obter todas as Contas Bancárias', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                    })
            })
        })

        describe(`PUT - ${Cypress.env('financeiro')}/ContaBancaria - Realiza updade de Conta Bancária`, () => {
            it('CT1 - Deve editar Conta Bancária', () => {
                cy.fixture('financeiro/contaBancaria/contaBancaria/payloadCt1-PUT.json').then((payload) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body.data.id).be.equal('55764151-a910-4050-bd36-ca18a3f2bd8c')
                            expect(response.body.data.nome).be.equal('Conta Edição - Editada')
                            expect(response.body.data.banco.descricao).be.equal('Cooperativa de Crédito de Livre Admissão Sul Maranhense - SICOOB SUL MARANHENSE')
                            expect(response.body.data.agencia).be.equal('7418521')
                            expect(response.body.data.agenciaDigitoVerificador).be.equal('0')
                            expect(response.body.data.conta).be.equal('9638521')
                            expect(response.body.data.contaDigitoVerificador).be.equal('0')
                        })
                })
            })

            it('CT2 - Deve desfazer edição da Conta Bancária', () => {
                cy.fixture('financeiro/contaBancaria/contaBancaria/payloadCt2-PUT.json').then((payload) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body.data.id).be.equal('55764151-a910-4050-bd36-ca18a3f2bd8c')
                            expect(response.body.data.nome).be.equal('Conta Edição')
                            expect(response.body.data.banco.descricao).be.equal('Banco Industrial do Brasil S.A.')
                            expect(response.body.data.agencia).be.equal('741852')
                            expect(response.body.data.agenciaDigitoVerificador).be.equal('9')
                            expect(response.body.data.conta).be.equal('963852')
                            expect(response.body.data.contaDigitoVerificador).be.equal('7')
                        })
                })
            })
        })

        describe(`POST - ${Cypress.env('financeiro')}/ContaBancaria - Realiza adição de Conta Bancária`, () => {
            it('CT1 - Deve adicionar nova Conta Bancária', () => {
                cy.fixture('financeiro/contaBancaria/contaBancaria/payloadCt1-POST.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.equal(true)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null
                            expect(response.body.data.tipoConta).to.equal(1)
                            expect(response.body.data.nome).to.equal('Teste Adição')
                            expect(response.body.data.agencia).to.equal('32145')
                            expect(response.body.data.agenciaDigitoVerificador).to.equal('5')
                            expect(response.body.data.conta).to.equal('65413')
                            expect(response.body.data.contaDigitoVerificador).to.equal('2')

                            cy.section('Deletar conta cadastrada, para não conflitar com outros testes')
                            const id = response.body.data.id
                            const assertResponse = { "success": true, "data": true }

                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, id).then((response) => {
                                expect(response.body).to.deep.equal(assertResponse)
                            })
                        })
                })
            })
        })
    })
})