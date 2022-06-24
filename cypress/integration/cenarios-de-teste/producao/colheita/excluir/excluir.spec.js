/// <reference types="cypress" />

import colheitaJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestDashboard from '../../../../../fixtures/cenarios-de-teste/producao/colheita/excluir-colheita/dashboard-colheita.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import Utils from '../../../../../support/utils/utils.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > Colheitas | Exclusão de colheita - ', { tags: '@colheita' }, () => {
  var dataAtual = Utils.getDate()
  var bodyColheita = Utils.replacer('dataSubstituicao', dataAtual, colheitaJson)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Cadastrar colheita por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
  })

  it('Excluir colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .descriptionHtml(html)

    Colheita.excluir(seedTestDashboard.dashboard)
  })

  it('Validar exclusão na listagem de Colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboard.dashboarAposExclusao)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Excluir colheita </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> poder excluir uma colheita <br/>
    <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Excluir </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira excluir uma colheita <br/>
    <strong>QUANDO</strong> eu entrar na dashboard de colheita <br/>
    <strong>E</strong> clicar no card de uma das colheitas listadas <br/>
    <strong>E</strong> clicar no ícone de exclusão <br/>
    <strong>E</strong> clicar em Excluir <br/>
    <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de colheita <br/>
</div>
</div>
  `
})
