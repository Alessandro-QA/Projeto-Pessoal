/// <reference types='Cypress' />

function validateResponseBody(body) {
  
    body.forEach(item => {
    
        expect(item.id).to.be.a('string').and.not.empty;
        expect(item.empresaTitular).to.be.an('object').that.includes.all.keys('id', 'descricao');
        expect(item.empresaTitular.id).to.be.a('string').and.not.empty;
        expect(item.empresaTitular.descricao).to.be.a('string').and.not.empty;
        expect(item.tipoConta).to.be.a('number');
        expect(item.nome).to.be.a('string').and.not.empty;
        expect(item.contaPrincipal).to.be.a('boolean');
        expect(item.numerarioEmTransito).to.be.a('boolean');
        expect(item.banco).to.be.an('object').that.includes.all.keys('id');
        expect(item.banco.id).to.be.a('string').and.not.empty;
        if (item.banco.codigoBacen) {
            expect(item.banco.codigoBacen).to.be.a('string').and.not.empty;
        }
        if (item.banco.descricao) {
            expect(item.banco.descricao).to.be.a('string').and.not.empty;
        }
        expect(item.saldoInicial).to.be.a('number');
        expect(item.saldoAtual).to.be.a('number');
        if (item.dataInicialSaldo) {
            expect(item.dataInicialSaldo).to.be.a('string').and.not.empty;
        }
        expect(item.incluirSaldoDisponivel).to.be.a('boolean');
        if (item.numeroCartao) {
            expect(item.numeroCartao).to.be.a('number');
        }
        if (item.limiteCartao) {
            expect(item.limiteCartao).to.be.a('number');
        }
        if (item.bandeiraCartao) {
            expect(item.bandeiraCartao).to.be.a('number');
        }
        if (item.fechamentoFatura) {
            expect(item.fechamentoFatura).to.be.a('number');
        }
        if (item.vencimentoFatura) {
            expect(item.vencimentoFatura).to.be.a('number');
        }
        if (item.contaCorrenteId) {
            expect(item.contaCorrenteId).to.be.a('string').and.not.empty;
        }
        expect(item.codigo).to.be.a('number');
        expect(item.openBanking).to.be.a('boolean');
        expect(item.ativo).to.be.a('boolean');
        expect(item.contaBancariaEmpresas).to.be.an('array').that.is.not.empty;
        item.contaBancariaEmpresas.forEach(empresa => {
            expect(empresa).to.have.all.keys('id', 'empresa');
            expect(empresa.id).to.be.a('string').and.not.empty;
            expect(empresa.empresa).to.be.an('object').that.includes.all.keys('id', 'descricao');
            expect(empresa.empresa.id).to.be.a('string').and.not.empty;
            expect(empresa.empresa.descricao).to.be.a('string').and.not.empty;
        });
    });
}


context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/ListFilter - Obtém Todas as Contas Bancárias`, () => {
            it('CT1 - Deve obter todas as Contas Bancárias', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/ListFilter`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty

                        validateResponseBody(response.body);
                    })
            })

            it('CT2 - Deve obter todas as Contas Bancárias por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/ListFilter`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponseBody(response.body);
                        })
                })
            })

            it('CT3 - Deve obter todas as Contas Bancárias por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/ListFilter`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponseBody(response.body);
                        })
                })
            })

            it('CT4 - Deve obter todas as Contas Bancárias ativas', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/ListFilter`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty

                            validateResponseBody(response.body);
                        })
                })
            })

            it('CT5 - Deve obter todas as Contas Bancárias inativas', () => {
                cy.fixture('financeiro/contaBancaria/listFilter/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/ListFilter`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponseBody(response.body);
                        })
                })
            })
        })
    })
})
