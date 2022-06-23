/// <reference types="cypress" />

import seedTestCiclo from '../../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-ciclo.json'
import Ciclo from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/ciclo/ciclo.js'

describe('FUNCIONALIDADE > Atividades Agricolas | Cadastro de Ciclo - ', { tags: '@cadastro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  // Teste de cadastro de um novo ciclo de milho
  it('Deve cadastrar um ciclo de milho', function () {
    cy.allure().severity('normal').startStep('test content')
      .descriptionHtml(html)

    Ciclo.cadastrar(seedTestCiclo)
  })

  // Validação da Dashboard de ciclo
  it('Deve validar a Dashboard de ciclo', function () {
    cy.allure().severity('minor').startStep('test content')

    Ciclo.validarDashboard(seedTestCiclo)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de ciclo </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> cadastrar um ciclo de produção <br/>
    <strong>PARA</strong> gerenciar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cadastrar ciclo inexistente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja com o modal cadastro de ciclo aberto <br/>
    <strong>QUANDO</strong> os campos obrigatórios forem preenchidos <br/>
    <strong>E</strong> clicar no botão <b>"Adicionar"</b> <br/>
    <strong>ENTAO</strong> o ciclo é cadastrado e o modal de cadastro será fechado <br/>
</div>
   `
})
