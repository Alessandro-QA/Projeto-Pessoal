/// <reference types="cypress" />

import seedTestEmpresa from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-empresa.json'
import Empresa from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/empresa/empresa.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Empresa - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste de cadastro de uma nova empresa
  it('Deve cadastrar uma empresa', function () {
    cy.allure().severity('critical').startStep('test content')
      .descriptionHtml(html)

    Empresa.cadastro(seedTestEmpresa)
  })

  // Validação da Dashboard de empresa
  it('Deve validar a Dashboard de empresa', function () {
    cy.allure().severity('minor').startStep('test content')

    Empresa.validarDashboard(seedTestEmpresa)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar Empresa </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br/>
    <strong>QUERO</strong> poder cadastrar empresas <br/>
    <strong>PARA</strong> melhor gestão das informações vinculadas a minha fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Jurídica </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira cadastrar uma nova empresa/pessoa <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Empresas <br/>
    <strong>E</strong> clicar em Adicionar empresa <br/>
    <strong>E</strong> selecionar Jurídica <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em Adicionar <br/>
    <strong>ENTAO</strong> será salvo e validado a dashboard de Empresas <br/>
</div>
   `
})
