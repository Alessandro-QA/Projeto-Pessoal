/// <reference types="cypress" />

import Utils from '../../../../../support/utils/utils'
import seedTestDashboardColheita from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-colheita.json'
import seedTestCadastro from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-producao.json'
// import seedTestDashboarContrato from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/dashboard-contrato.json'
import contratoJson from '../../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-inferior/contratos.json'
import Colheita from '../../../../../support/commands/funcionalidades/producao/colheita'
import DashboardProducao from '../../../../../support/commands/funcionalidades/producao/dashboardProducao'
// import contrato from '../../../../../support/commands/funcionalidades/producao/contratos'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

describe('FUNCIONALIDADE > Colheitas | Cadastro de colheita externa, com partilha e quantidade inferiror - ', { tags: '@cenarios' }, () => {
  var dataAtual = Utils.getDate()
  var bodyContrato1 = Utils.replacer('dataSubstituicao', dataAtual, contratoJson.contrato1)
  var bodyContrato2 = Utils.replacer('dataSubstituicao', dataAtual, contratoJson.contrato2)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Cadastrar contratos via API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato1, 'login_cenarios')
    Utils.requestApi('POST', '/api/producao-agricola/v1F/contratos', bodyContrato2, 'login_cenarios')
  })

  it('Cadastrar colheita', function () {
    cy.allure().severity('critical').startStep('test content')
      .descriptionHtml(html)

    Colheita.cadastrarEditar(seedTestCadastro)
  })

  it('Validar dashboard colheita', function () {
    cy.allure().severity('normal').startStep('test content')

    Colheita.validarDashboard(seedTestDashboardColheita)
  })

  it('Validar dashboar Produção', function () {
    cy.allure().severity('normal').startStep('test content')

    DashboardProducao.validarDashboard(seedTestDashboardProducao)
  })

  // TODO: aguardando resolução do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/36869
  // it('Validar dashboard Contrato', function () {
  //   cy.allure().severity('normal').startStep('test content')

  //   contrato.validarDashboard(seedTestDashboarContrato)
  // })

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
    <span style="color: #b22222;"> Cadastrar colheita externa, com partilha (Quantidade Inferior) </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
    <strong>QUANDO</strong> eu preencher os campos obrigatórios, com quantidade de carga sendo menor que a quantidade especificada nos contratos <br/>
    <strong>E</strong> anexar um arquivo no documento <br/>
    <strong>E</strong> selecionar dois ou mais contratos <br/>
    <strong>E</strong> clicar no botão salvar <br/>
    <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas, de produção e contrato <br/>
</div>
</div>
`
})
