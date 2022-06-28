/// <reference types="cypress" />

import seedTestContaBancaria from '../../../fixtures/funcionalidades/financeiro/contas-bancarias/fixture-conta-bancaria.json'
import ContaBancaria from '../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Cadastro de Conta Bancária', { tags: '@contasBancarias' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })
    it('Deve cadastrar uma conta bancaria', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(html)

      ContaBancaria.cadastro(seedTestContaBancaria)
    })

    it('Deve pesquisar uma conta bancaria', function () {
      cy.allure().severity('minor').startStep('test content')

      ContaBancaria.validarDashboard(seedTestContaBancaria)
    })
    const html =
      `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastrar conta bancária </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
  </div>
     `
  })
})
