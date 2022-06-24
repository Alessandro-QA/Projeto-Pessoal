/// <reference types="cypress" />

import Utils from '../../../../../support/utils/utils.js'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/dashboard-producao.json'
import contrato1 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/contrato.json'
import contrato2 from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-partilha/contrato2.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita externa com partilha - ', { tags: '@colheita' }, () => {
  var dataAtual = Utils.getDate()
  var body = Utils.replacer('dataSubstituicao', dataAtual, contrato1)
  var body2 = Utils.replacer('dataSubstituicao', dataAtual, contrato2)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Cadastrar contratos por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', body, 'login_cenarios')
    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', body2, 'login_cenarios')
  })

  it('Cadastrar colheita externa', function () {
    cy.allure().severity('critical').startStep('test content')
    .descriptionHtml(html)

    Colheita.cadastrarEditar(seedTestCadastro)
  })

  it('Validar dashboard de Colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboardColheita)
  })

  it('Validar dashboard Produção', function () {
    cy.allure().severity('normal').startStep('test content')

    DashboardProducao.validarDashboard(seedTestDashboardProducao)
  })

  const html = `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
    <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Cadastrar colheita externa, com contrato e com partilha </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar destino "Externo" <br/>
    <strong>E</strong> selecionar dois ou mais contratos <br/>
    <strong>E</strong> clicar no botão salvar <br/>
    <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
</div>
  `
})
