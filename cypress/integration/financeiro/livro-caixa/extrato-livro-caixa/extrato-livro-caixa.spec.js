/// <reference types="cypress"/>

import payLoadLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/extrato-livro-caixa/pay-load.json'
import seedTestLivroCaixa from '../../../../fixtures/funcionalidades/financeiro/livro-caixa/extrato-livro-caixa/extrato-livro-caixa.json'
import Fazenda from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/fazenda/fazenda.js'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/extrato-livro-caixa.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Livro Caixa | Extrato do Livro Caixa', { tags: '@livroCaixa'}, () => {
    var lancamento = Utils.getPayloadPorAmbiente(payLoadLivroCaixa)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
      Utils.deleteDownloadsFolder()
    })

    after(() => {
      Authenticate.logout()
    })

    context('Realizar lançamentos via API', () => {
      it('Do tipo Entrada', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel1, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel2, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel3, 'login_cenarios')
      })

      it('Do tipo Saída', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.saidaDedutivel, 'login_cenarios')
      })
    })

    context('Validar extrato do Livro Caixa', () => {
      it('Definir matricula na fazenda como Exploração Individual', function () {
        Fazenda.matricula(seedTestLivroCaixa.exportar.matriculaFazenda)
      })

      it('Filtrar por produtor', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroProdutor)

        LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroProdutor)
      })

      it('Filtrar por ano', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroAno)

        LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroAno)
      })

      it('Filtrar por todos (Ativo e Inativo)', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtroTodos)
        
        // Tornar lançamento em inativo
        LivroCaixa.adicionarEditarLancamento(seedTestLivroCaixa.filtroStatus)

        LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroStatus)
      })

      it('Exportar extrato do Livro Caixa', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.exportar)

        LivroCaixa.validarExtrato(seedTestLivroCaixa.exportar)
      })

      it('Deletar matricula na fazenda', function () {
        Fazenda.deletarMatricula(seedTestLivroCaixa.exportar.matriculaFazenda)
      })
    })
  })
})
