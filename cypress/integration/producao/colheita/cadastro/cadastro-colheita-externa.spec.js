/// <reference types="cypress" />

import seedTestDashboardColheita from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/dashboard-colheita.json'
import seedTestCadastro from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/cadastro-colheita.json'
import seedTestDashboardProducao from '../../../../fixtures/cenarios-de-teste/producao/colheita/externa/dashboard-producao.json'
import Colheita from '../../../../support/commands/funcionalidades/producao/colheita.js'
import DashboardProducao from '../../../../support/commands/funcionalidades/producao/dashboardProducao.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Colheitas | Cadastro de colheita externa sem contrato', { tags: '@colheita' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
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
    <span style="color: #b22222;"> Cadastrar colheita externa sem contrato </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
    <strong>QUANDO</strong> eu preencher os campos obrigatórios <br/>
    <strong>E</strong> selecionar destino "Externo" <br/>
    <strong>E</strong> não selecionar um contrato <br/>
    <strong>E</strong> clicar no botão salvar <br/>
    <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
</div>
  `
  })
})
