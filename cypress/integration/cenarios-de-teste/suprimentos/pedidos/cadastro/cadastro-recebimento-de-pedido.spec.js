/// <reference types="cypress" />

import * as seeds from '../../../../../fixtures/cenarios-de-teste/suprimentos/pedidos/cadastro-e-recebimento-de-pedido/imports-seed.js'
import LivroCaixa from '../../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import AgendaFinanceira from '../../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import Pedidos from '../../../../../support/commands/funcionalidades/suprimentos/pedidos.js'
import Recebimento from '../../../../../support/commands/funcionalidades/suprimentos/recebimento.js'
import Documentos from '../../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import testDescription from './cadastro-recebimento-pedido-description.js'

// Cadastro, Edição e Exclusão de Pedido com Recebimento
describe('CENÁRIO > Cadastro, Edição e Exclusão de Pedido com Recebimento Parcial - ', { tags: '@pedidos' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  after(() => {
    cy.logout()
  })

  it('Cadastrar um pedido', function () {
    cy.allure().severity('critical').startStep('test content')
    .descriptionHtml(testDescription.pedido)

    Pedidos.cadastrar(seeds.seedCadastroPedido)
  })

  it('Validar na listagem os dados do pedido cadastrado', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarListagem(seeds.seedDetalhesPedidoCadastro)
  })

  it('Validar detalhes do pedido cadastrado', function () {
    cy.allure().severity('normal').startStep('test content')
    .descriptionHtml(testDescription.detalhesPedido)

    Pedidos.validarDetalhes(seeds.seedDetalhesPedidoCadastro)
  })

  it('Validar detalhes do documento gerado pelo cadastro do pedido (outros)', function () {
    cy.allure().severity('normal').startStep('test content')

    Documentos.validarDetalhes(seeds.seedDocumentoCadastro)
  })

  it('Validar lançamento na agenda financeira, gerado pelo cadastro do pedido', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraCadastro)
  })

  it('Realizar o recebimento parcial (50%) do pedido', function () {
    cy.allure().severity('critical').startStep('test content')
    .descriptionHtml(testDescription.recebimento)

    Recebimento.cadastrar(seeds.seedCadastroRecebimentoParcial)
  })

  it('Validar na listagem os dados pedido recebido parcialmente', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarListagem(seeds.seedDetalhesRecebimentoParcial)
  })

  it('Validar detalhes do pedido recebido parcialmente', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarDetalhes(seeds.seedDetalhesRecebimentoParcial)
  })

  it('Validar detalhes do documento gerado pelo recebimento do pedido (nota fiscal)', function () {
    cy.allure().severity('normal').startStep('test content')

    Documentos.validarDetalhes(seeds.seedDocumentoRecebimentoParcial)
  })

  it('Validar abatimento no titulo financeiro, gerado pelo recebimento do pedido', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoParcial.pedido)
  })

  it('Validar criação de novo titulo financeiro, gerado pelo recebimento da nota', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoParcial.nota)
  })

  it('Validar baixa automática na agenda financeira, gerado pelo recebimento parcial do pedido/nota', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDetalhes(seeds.seedAgendaFinanceiraRecebimentoParcial.detalhesTitulo)
  })

  it('Realizar o recebimento do restante do pedido, com valor excedente', function () {
    cy.allure().severity('critical').startStep('test content')

    Recebimento.cadastrar(seeds.seedCadastroRecebimentoExcedente)
  })

  it('Validar na listagem os dados pedido recebido', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarListagem(seeds.seedDetalhesRecebimentoExcedente)
  })

  it('Validar detalhes do pedido recebido excedente', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarDetalhes(seeds.seedDetalhesRecebimentoExcedente)
  })

  it('Validar detalhes do documento gerado pelo recebimento excedente (nota fiscal)', function () {
    cy.allure().severity('normal').startStep('test content')

    Documentos.validarDetalhes(seeds.seedDocumentoRecebimentoExcedente)
  })

  it('Validar criação de titulo financeiro, gerado pelo recebimento excedente', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo102)
  })

  it('Pagar titulo 101 no valor de R$ 30.000,00, originario do pedido parcial', function () {
    cy.allure().severity('critical').startStep('test content')

    AgendaFinanceira.pagarPelaAgenda(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo101)
  })

  it('Pagar titulo 102 no valor de R$ 37.500,00, originario do pedido excedente', function () {
    cy.allure().severity('critical').startStep('test content')

    AgendaFinanceira.pagarPelaAgenda(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo102)
  })

  it('Validar titulo numero 100 pago - R$ 60.000,00', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo100)
  })

  it('Validar titulo numero 101 pago - R$ 30.000,00', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo101)
  })

  it('Validar titulo numero 102 pago - R$ 37.500,00', function () {
    cy.allure().severity('normal').startStep('test content')

    AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo102)
  })

  it('Validar lançamento do titulo 101 no valor de R$ 30.000,00', function () {
    cy.allure().severity('normal').startStep('test content')

    LivroCaixa.validarDashboard(seeds.seedDetalhesFinanceiro.livroCaixa)
  })

  it('Validar lançamento do titulo 102 no valor de R$ 37.500,00', function () {
    cy.allure().severity('normal').startStep('test content')

    LivroCaixa.validarDashboard(seeds.seedDetalhesFinanceiro.livroCaixa)
  })

  it('Validar movimentação do titulo 101 no valor de R$ 30.000,00', function () {
    cy.allure().severity('normal').startStep('test content')

    Movimentacao.validarDashboard(seeds.seedDetalhesFinanceiro.movimentacaoBancaria30)
  })

  it('Validar movimentação do titulo 102 no valor de R$ 37.500,00', function () {
    cy.allure().severity('normal').startStep('test content')

    Movimentacao.validarDashboard(seeds.seedDetalhesFinanceiro.movimentacaoBancaria45)
  })

  it('Excluir o documento 102', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.excluir(seeds.seedDocumentoRecebimentoExcedente)
  })

  it('Status do pedido deve ser "Entrega Parcial', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarListagem(seeds.seedStatusPedido.entregaParcial)
  })

  it('Excluir o documento 101', function () {
    cy.allure().severity('critical').startStep('test content')

    Documentos.excluir(seeds.seedDocumentoRecebimentoParcial)
  })

  it('Status do pedido deve ser "Aguardando Entrega', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarListagem(seeds.seedStatusPedido.aguardandoEntrega)
  })

  it('Excluir o pedido', function () {
    cy.allure().severity('critical').startStep('test content')
    .descriptionHtml(testDescription.excluirPedido)

    Pedidos.excluir(seeds.seedDetalhesPedidoCadastro)
  })

  it('Validar exclusão dos documentos', function () {
    cy.allure().severity('normal').startStep('test content')

    Documentos.validarExclusao()
  })

  it('Validar exclusão do pedido', function () {
    cy.allure().severity('normal').startStep('test content')

    Pedidos.validarExclusao()
  })
})
