/// <reference types="cypress" />

import seedTestPessoa from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-pessoa.json'
import Pessoa from '.././../../../support/commands/funcionalidades/atividades-agricolas/cadastros/pessoa/pessoa.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Pessoa - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste para cadastro de uma nova pessoa
  it('Deve cadastrar uma pessoa', function () {
    cy.allure().severity('critical').startStep('test content')
      .descriptionHtml(html)

    Pessoa.cadastro(seedTestPessoa)
  })

  // Validação da Dashboard de pessoa
  it('Deve validar a Dashboard de Cadastro de pessoas', function () {
    cy.allure().severity('minor').startStep('test content')

    Pessoa.validarDashboard(seedTestPessoa)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar pessoa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente responsável da fazenda <br/>
    <strong>QUERO</strong> poder cadastrar uma nova pessoa <br/>
    <strong>PARA</strong> melhor gestão da minha fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Jurídica </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira cadastrar uma nova pessoa <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Cadastro de pessoas <br/>
    <strong>E</strong> clicar em Adicionar pessoa <br/>
    <strong>E</strong> selecionar o tipo de pessoa <br/>
    <strong>E</strong> selecionar Pessoa Jurídica <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em adicionar <br/>
    <strong>ENTAO</strong> será salvo e validado na dashboard de Cadastro de pessoas <br/>
</div>
   `
})
