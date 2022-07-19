/// <reference types="cypress" />

import seedTestColheita from '../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestEditar from '../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/editar.json'
import seedTestDashboard from '../../../../fixtures/cenarios-de-teste/producao/colheita/editar-colheita/dashboar-colheita.json'
import testDescription from './bdd-description/editar.description.js'
import { cadastrarEditar, validarListagem, getColheitaPorAmbiente } from '../../../../support/commands/funcionalidades/producao/colheita.js'
import { getDate, replacer, setAccessTokenToEnv, requestApi } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/funcionalidades/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativação do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  context('Funcionalidade', () => {
    describe('Colheitas | Edição de colheita', { tags: '@colheita' }, () => {
      var colheita = getColheitaPorAmbiente(seedTestColheita)

      var dataAtual = getDate()
      var bodyColheita = replacer('dataSubstituicao', dataAtual, colheita)

      before(function () {
        const credenciais = Cypress.env('login_cenarios')
        login(credenciais)
        setAccessTokenToEnv(credenciais)
      })

      after(() => {
        logout()
      })

      it('Cadastrar colheita por API', function () {
        cy.allure().severity('normal').startStep('test content')

        requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
      })

      it('Editar colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.editar)

        cadastrarEditar(seedTestEditar)
      })

      it('Validar listagem de colheita após edição', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')

        validarListagem(seedTestDashboard)
      })
    })
  })
}
