/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Encontro Contas', () => {
        describe('POST - /api/financeiro/v1/EncontroContas/ContasBancarias/Empresas - Valida se Empresa possui conta Tesouraria', () => {

            it('CT1 - Deve validar se Conta Empresa possui Tesouraria por ID da Empresa', () => {
                cy.fixture('financeiro/encontroContas/contasBancariaEmpresa/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/EncontroContas/ContasBancarias/Empresas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            // Verifica se `tenantPossuiContaTesourariaCadastrada` é `true`
                            expect(response.body.data).to.have.property('tenantPossuiContaTesourariaCadastrada', true)
                            // Verifica se `contasTesouraria` não está vazio
                            expect(response.body.data.contasTesouraria).to.be.an('array').that.is.not.empty

                            // Itera sobre cada conta e valida os campos
                            response.body.data.contasTesouraria.forEach(conta => {
                                expect(conta).to.have.property('id').that.is.a('string')
                                expect(conta).to.have.property('empresaTitular').that.is.an('object')
                                expect(conta.empresaTitular).to.have.property('id').that.is.a('string')
                                expect(conta.empresaTitular).to.have.property('descricao').that.is.a('string')
                                expect(conta).to.have.property('tipoConta').that.is.a('number')
                                expect(conta).to.have.property('nome').that.is.a('string')
                                expect(conta).to.have.property('contaPrincipal').that.is.a('boolean')
                                expect(conta).to.have.property('numerarioEmTransito').that.is.a('boolean')
                                expect(conta).to.have.property('banco').that.is.an('object')
                                expect(conta.banco).to.have.property('id').that.is.a('string')
                                expect(conta).to.have.property('saldoInicial').that.is.a('number')
                                expect(conta).to.have.property('saldoAtual').that.is.a('number')
                                expect(conta).to.have.property('dataInicialSaldo').that.is.a('string')
                                expect(conta).to.have.property('incluirSaldoDisponivel').that.is.a('boolean')
                                expect(conta).to.have.property('codigo').that.is.a('number')
                                expect(conta).to.have.property('openBanking').that.is.a('boolean')
                                expect(conta).to.have.property('ativo').that.is.a('boolean')

                                // Valida as contas bancárias das empresas
                                expect(conta).to.have.property('contaBancariaEmpresas').that.is.an('array').that.is.not.empty
                                conta.contaBancariaEmpresas.forEach(contaBancariaEmpresa => {
                                    expect(contaBancariaEmpresa).to.have.property('id').that.is.a('string')
                                    expect(contaBancariaEmpresa).to.have.property('empresa').that.is.an('object')
                                    expect(contaBancariaEmpresa.empresa).to.have.property('id').that.is.a('string')
                                    expect(contaBancariaEmpresa.empresa).to.have.property('descricao').that.is.a('string')
                                })

                            })
                        })
                })
            })

            it('CT2 - Deve validar se Conta Empresa não possui Tesouraria por ID da Empresa', () => {
                cy.fixture('financeiro/encontroContas/contasBancariaEmpresa/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/EncontroContas/ContasBancarias/Empresas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verifica se `tenantPossuiContaTesourariaCadastrada` é `true`
                            expect(response.body.data).to.have.property('tenantPossuiContaTesourariaCadastrada', true)
                            // Verifica se `contasTesouraria` não está vazio
                            expect(response.body.data.contasTesouraria).to.be.an('array').that.is.empty
                        })
                })
            })

            it('CT3 - Deve listar todas as Contas Tesourarias', () => {
                cy.fixture('financeiro/encontroContas/contasBancariaEmpresa/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/EncontroContas/ContasBancarias/Empresas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null

                            // Verifica se `tenantPossuiContaTesourariaCadastrada` é `true`
                            expect(response.body.data).to.have.property('tenantPossuiContaTesourariaCadastrada', true)
                            // Verifica se `contasTesouraria` não está vazio
                            expect(response.body.data.contasTesouraria).to.be.an('array').that.is.not.empty

                            // Itera sobre cada conta e valida os campos
                            response.body.data.contasTesouraria.forEach(conta => {
                                expect(conta).to.have.property('id').that.is.a('string')
                                expect(conta).to.have.property('empresaTitular').that.is.an('object')
                                expect(conta.empresaTitular).to.have.property('id').that.is.a('string')
                                expect(conta.empresaTitular).to.have.property('descricao').that.is.a('string')
                                expect(conta).to.have.property('tipoConta').that.is.a('number')
                                expect(conta).to.have.property('nome').that.is.a('string')
                                expect(conta).to.have.property('contaPrincipal').that.is.a('boolean')
                                expect(conta).to.have.property('numerarioEmTransito').that.is.a('boolean')
                                expect(conta).to.have.property('banco').that.is.an('object')
                                expect(conta.banco).to.have.property('id').that.is.a('string')
                                expect(conta).to.have.property('saldoInicial').that.is.a('number')
                                expect(conta).to.have.property('saldoAtual').that.is.a('number')
                                expect(conta).to.have.property('dataInicialSaldo').that.is.a('string')
                                expect(conta).to.have.property('incluirSaldoDisponivel').that.is.a('boolean')
                                expect(conta).to.have.property('codigo').that.is.a('number')
                                expect(conta).to.have.property('openBanking').that.is.a('boolean')
                                expect(conta).to.have.property('ativo').that.is.a('boolean')

                                // Valida as contas bancárias das empresas
                                expect(conta).to.have.property('contaBancariaEmpresas').that.is.an('array').that.is.not.empty
                                conta.contaBancariaEmpresas.forEach(contaBancariaEmpresa => {
                                    expect(contaBancariaEmpresa).to.have.property('id').that.is.a('string')
                                    expect(contaBancariaEmpresa).to.have.property('empresa').that.is.an('object')
                                    expect(contaBancariaEmpresa.empresa).to.have.property('id').that.is.a('string')
                                    expect(contaBancariaEmpresa.empresa).to.have.property('descricao').that.is.a('string')
                                })
                            })
                        })
                })
            })

        })
    })
})