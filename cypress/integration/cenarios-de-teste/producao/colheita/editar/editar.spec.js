/// <reference types="cypress" />

import colheitaJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestEditar from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/editar.json'
import seedTestDashboard from '../../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/dashboar-colheita.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import Utils from '../../../../../support/utils/utils.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > Colheitas | Edição de colheita - ', { tags: '@colheita' }, () => {
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

  it('Editar colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .descriptionHtml(html)

    Colheita.cadastrarEditar(seedTestEditar)
  })

  it('Validar listagem de colheita após edição', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboard)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Editar colheita </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> poder editar uma colheita <br/>
    <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Editar </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira editar uma colheita <br/>
    <strong>QUANDO</strong> eu entrar na dashboard de colheita <br/>
    <strong>E</strong> clicar no card de uma das colheitas listadas <br/>
    <strong>E</strong> clicar no ícone de edição <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em atualizar <br/>
    <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de colheita <br/>
</div>
</div>
  `
})
