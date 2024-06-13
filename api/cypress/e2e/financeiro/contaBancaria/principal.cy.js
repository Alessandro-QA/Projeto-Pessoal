/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/Principal - Obtém a Conta Bancária Principal`, () => {
            it('CT1 - Deve obter a conta principal', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Principal`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        
                        // Verificar os campos Existentes e tipos se correspondentes
                        expect(response.body).to.have.property('id').that.is.a('string');
                        expect(response.body).to.have.property('empresaTitular').that.is.an('object').with.all.keys('id', 'descricao');
                        expect(response.body).to.have.property('tipoConta').that.is.a('number');
                        expect(response.body).to.have.property('nome').that.is.a('string');
                        expect(response.body).to.have.property('contaPrincipal').that.is.a('boolean');
                        expect(response.body).to.have.property('numerarioEmTransito').that.is.a('boolean');
                        expect(response.body).to.have.property('banco').that.is.an('object').with.all.keys('id', 'codigoBacen', 'descricao');
                        expect(response.body).to.have.property('agencia').that.is.a('string');
                        expect(response.body).to.have.property('agenciaDigitoVerificador').that.is.a('string');
                        expect(response.body).to.have.property('conta').that.is.a('string');
                        expect(response.body).to.have.property('contaDigitoVerificador').that.is.a('string');
                        expect(response.body).to.have.property('saldoInicial').that.is.a('number');
                        expect(response.body).to.have.property('saldoAtual').that.is.a('number');
                        expect(response.body).to.have.property('dataInicialSaldo').that.is.a('string');
                        expect(response.body).to.have.property('incluirSaldoDisponivel').that.is.a('boolean');
                        expect(response.body).to.have.property('codigo').that.is.a('number');
                        expect(response.body).to.have.property('openBanking').that.is.a('boolean');
                        expect(response.body).to.have.property('ativo').that.is.a('boolean');
                        expect(response.body).to.have.property('contaBancariaEmpresas').that.is.an('array');

                        // Verificar os campos dentro de contaBancariaEmpresas
                        response.body.contaBancariaEmpresas.forEach((contaEmpresa) => {
                            expect(contaEmpresa).to.have.property('id').that.is.a('string');
                            expect(contaEmpresa).to.have.property('empresa').that.is.an('object').with.all.keys('id', 'descricao');
                        });

                    })
            })
        })
    })
})
