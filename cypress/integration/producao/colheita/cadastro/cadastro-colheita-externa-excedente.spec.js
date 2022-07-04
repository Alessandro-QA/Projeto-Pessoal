/// <reference types="cypress" />

import Utils from '../../../../support/utils/utils.js'
// import Contrato from '../../../../support/commands/funcionalidades/producao/contratos.js'
import Colheita from '../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import seedTestDashboardColheita from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-producao.json'
// import seedTestDashboardContrato from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/dashboard-contrato.json'
import contrato1 from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/contrato-1.json'
import contrato2 from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa-com-quantidade-excedente.js/contrato-2.json'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Colheitas | Cadastro de colheita externa com partilha e quantidade excedente', { tags: '@colheita' }, () => {
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

    it('Validar listagem de Colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
      cy.allure().severity('normal').startStep('test content')

      Colheita.validarListagem(seedTestDashboardColheita)
    })

    it('Validar dashboard de Produção', function () {
      cy.allure().severity('normal').startStep('test content')

      DashboardProducao.validarDashboard(seedTestDashboardProducao)
    })

    // TODO: aguardando resolução do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/36869
    // it('Validar dashboard Contrato', function () {
    //   cy.allure().severity('normal').startStep('test content')

    //   Contrato.validarDashboard(seedTestDashboardContrato)
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
    <span style="color: #b22222;"> Cadastrar colheita externa, com partilha (Quantidade Excedente) </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
    <strong>QUANDO</strong> eu preencher os campos obrigatórios, com quantidade de carga sendo maior que a quantidade especificada nos contratos <br/>
    <strong>E</strong> selecionar destino "Externo" <br/>
    <strong>E</strong> selecionar dois ou mais contratos <br/>
    <strong>E</strong> clicar no botão salvar <br/>
    <strong>E</strong> clicar em sim no modal <br/>
    <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas, de produção e de contratos <br/>
</div>
</div>
  `
  })
})
