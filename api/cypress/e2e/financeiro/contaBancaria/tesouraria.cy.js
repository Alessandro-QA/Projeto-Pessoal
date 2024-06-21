/// <reference types='Cypress' />

function validateResponse(response) {
    // Itera sobre cada item do array e verifica os campos e seus tipos
    response.body.forEach(item => {
        expect(item).to.have.property('id').that.is.a('string');
        expect(item).to.have.property('nomeConta').that.is.a('string');
        expect(item).to.have.property('saldoInicial').that.is.a('number');
        expect(item).to.have.property('saldo').that.is.a('number');
        expect(item).to.have.property('dataSaldoInicial').that.is.a('string');
        expect(item).to.have.property('empresaTitular').that.is.a('string');
        expect(item).to.have.property('ativo').that.is.a('boolean');
    });
}


context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria - Obtém Contas Bancárias de Tesouraria`, () => {
            it('CT1 - Deve obter todas as contas de Tesouraria', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                        
                        validateResponse(response);
                    })
            })

            it('CT2 - Deve obter conta de tesouraria por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                        
                            validateResponse(response); 
                        })
                })
            })

            it('CT3 - Deve obter conta de tesouraria por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponse(response);
                        })
                })
            })

            it('CT4 - Deve obter contas de tesouraria ativas', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponse(response);
                        })
                })
            })

            it('CT5 - Deve obter contas de tesouraria inativas', () => {
                cy.fixture('financeiro/contaBancaria/tesouraria/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/CaixaTesouraria`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body).to.be.an('array').that.is.not.empty
                            
                            validateResponse(response);
                        })
                })
            })
        })
    })
})
