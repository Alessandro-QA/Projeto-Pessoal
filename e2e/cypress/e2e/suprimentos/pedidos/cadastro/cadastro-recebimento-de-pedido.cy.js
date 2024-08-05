/// <reference types="cypress" />

import * as seeds from '../../../../fixtures/suprimentos/pedidos/cadastro-e-recebimento-de-pedido/imports-seed.js'
import Utils from '../../../../support/utils/utils.js'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import AgendaFinanceira from '../../../../support/commands/financeiro/agenda-financeira/agenda-financeira.js'
import Pedidos from '../../../../support/commands/suprimentos/pedidos.js'
import Recebimento from '../../../../support/commands/suprimentos/recebimento.js'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import testDescription from './bdd-description/cadastro-recebimento-pedido.description.js'

const dayjs = require('dayjs');

// Cadastro, Edição e Exclusão de Pedido com Recebimento
describe('Suprimentos', { tags: '@suprimentos' }, () => {

  describe('Pedidos', { tags: '@pedidos' }, () => {
    describe('Cadastro, Edição e Exclusão', { tags: '@cadastro' }, () => {

      context('Cadastro, Edição e Exclusão de Pedido com Recebimento Parcial', () => {

        const precoUnitarioAleatorio = (Math.random() * 5).toFixed(2)
        const quantidadeAleatoria = Math.floor(Math.random() * 1001)  // Valor inteiro para quantidade
        const valorTotal = (quantidadeAleatoria * precoUnitarioAleatorio).toFixed(2)
        const numeroPedido = Utils.getNumeric(8)
        const dataPedido = dayjs().format('DD/MM/YYYY')
        const dataEntrega = dayjs().add(1, 'week').format('DD/MM/YYYY')

        seeds.seedCadastroPedido.numeroPedidoFornecedor = numeroPedido
  
        seeds.seedCadastroPedido.listaMateriais[0].quantidade = quantidadeAleatoria
        seeds.seedCadastroPedido.listaMateriais[0].precoUnitario = precoUnitarioAleatorio

        seeds.seedCadastroPedido.valorTotalMateriais = valorTotal
        seeds.seedCadastroPedido.listaMateriais[0].valorTotal = valorTotal
        seeds.seedCadastroPedido.valorParcela = valorTotal
        seeds.seedCadastroPedido.valorCategoria = valorTotal

        seeds.seedCadastroPedido.dataPedido = dataPedido
        seeds.seedCadastroPedido.dataEntrega = dataEntrega

        seeds.seedDocumentoCadastro.dataDocumento = dataPedido
        seeds.seedDocumentoCadastro.valorTotal = valorTotal
        seeds.seedDocumentoCadastro.parcelas[0].valorParcela = valorTotal
        seeds.seedDocumentoCadastro.parcelas[0].saldoParcela = valorTotal
        seeds.seedDocumentoCadastro.numeroDocumento = numeroPedido

        it.only('Deve cadastrar pedido', function () {
        
          cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('critical')

          Pedidos.cadastrar(seeds.seedCadastroPedido)
  
        })

        it.only('Deve validar na listagem os dados do pedido cadastrado', function () {
          
          cy.allureDescriptionHtml(testDescription.pedido).allureSeverity('normal')
          
          Pedidos.validarListagem(seeds.seedCadastroPedido)
        })

        it.only('Deve validar detalhes do pedido cadastrado', function () {
          
          cy.allureDescriptionHtml(testDescription.detalhesPedido).allureSeverity('normal')
          
          Pedidos.validarDetalhes(seeds.seedCadastroPedido)
        })

        it.only('Deve validar detalhes do documento gerado pelo cadastro do pedido (outros)', function () {
          cy.allureDescriptionHtml(testDescription.detalhesPedidoDocumento).allureSeverity('normal')

          seeds.seedDocumentoCadastro.ciclos = seeds.seedCadastroPedido.ciclos
          Documentos.validarDetalhes(seeds.seedDocumentoCadastro)
        })

        it('Deve validar lançamento na agenda financeira, gerado pelo cadastro do pedido', function () {
          // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.pesquisarAgendaFinanceira)

          AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraCadastro)
        })

        it('Deve realizar o recebimento parcial (50%) do pedido', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.recebimento)

          Recebimento.cadastrar(seeds.seedCadastroRecebimentoParcial)
        })

        it('Deve validar na listagem os dados pedido recebido parcialmente', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarListagem(seeds.seedDetalhesRecebimentoParcial)
        })

        it('Deve validar detalhes do pedido recebido parcialmente', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarDetalhes(seeds.seedDetalhesRecebimentoParcial)
        })

        it('Deve validar detalhes do documento gerado pelo recebimento do pedido (nota fiscal)', function () {
          // cy.allure().severity('normal').startStep('test content')

          Documentos.validarDetalhes(seeds.seedDocumentoRecebimentoParcial)
        })

        it('Deve validar abatimento no titulo financeiro, gerado pelo recebimento do pedido', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoParcial.pedido)
        })

        it('Deve validar criação de novo titulo financeiro, gerado pelo recebimento da nota', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoParcial.nota)
        })

        it('Deve validar baixa automática na agenda financeira, gerado pelo recebimento parcial do pedido/nota', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDetalhes(seeds.seedAgendaFinanceiraRecebimentoParcial.detalhesTitulo)
        })

        it('Deve realizar o recebimento do restante do pedido, com valor excedente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Recebimento.cadastrar(seeds.seedCadastroRecebimentoExcedente)
        })

        it('Deve validar na listagem os dados pedido recebido', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarListagem(seeds.seedDetalhesRecebimentoExcedente)
        })

        it('Deve validar detalhes do pedido recebido excedente', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarDetalhes(seeds.seedDetalhesRecebimentoExcedente)
        })

        it('Deve validar detalhes do documento gerado pelo recebimento excedente (nota fiscal)', function () {
          // cy.allure().severity('normal').startStep('test content')

          Documentos.validarDetalhes(seeds.seedDocumentoRecebimentoExcedente)
        })

        it('Deve validar criação de titulo financeiro, gerado pelo recebimento excedente', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo102)
        })

        it('Deve pagar titulo 101 no valor de R$ 30.000,00, originario do pedido parcial', function () {
          // cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo101)
        })

        it('Deve pagar titulo 102 no valor de R$ 37.500,00, originario do pedido excedente', function () {
          // cy.allure().severity('critical').startStep('test content')

          AgendaFinanceira.pagarPelaAgenda(seeds.seedAgendaFinanceiraRecebimentoExcedente.titulo102)
        })

        it('Deve validar titulo numero 100 pago - R$ 60.000,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo100)
        })

        it('Deve validar titulo numero 101 pago - R$ 30.000,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo101)
        })

        it('Deve validar titulo numero 102 pago - R$ 37.500,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          AgendaFinanceira.validarDashboard(seeds.seedDetalhesFinanceiro.titulo102)
        })

        it('Deve validar lançamento do titulo 101 no valor de R$ 30.000,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          LivroCaixa.validarLancamentos(seeds.seedDetalhesFinanceiro.livroCaixa)
        })

        it('Deve validar lançamento do titulo 102 no valor de R$ 37.500,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          LivroCaixa.validarLancamentos(seeds.seedDetalhesFinanceiro.livroCaixa)
        })

        it('Deve validar movimentação do titulo 101 no valor de R$ 30.000,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          Movimentacao.validarListagem(seeds.seedDetalhesFinanceiro.movimentacaoBancaria30)
        })

        it('Deve validar movimentação do titulo 102 no valor de R$ 37.500,00', function () {
          // cy.allure().severity('normal').startStep('test content')

          Movimentacao.validarListagem(seeds.seedDetalhesFinanceiro.movimentacaoBancaria45)
        })

        it('Deve excluir o documento 102', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.excluir(seeds.seedDocumentoRecebimentoExcedente)
        })

        it('Status do pedido deve ser "Entrega Parcial', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarListagem(seeds.seedStatusPedido.entregaParcial)
        })

        it('Deve excluir o documento 101', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.excluir(seeds.seedDocumentoRecebimentoParcial)
        })

        it('Status do pedido deve ser "Aguardando Entrega', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarListagem(seeds.seedStatusPedido.aguardandoEntrega)
        })

        it.only('Deve excluir o pedido', function () {
          
          cy.allureDescriptionHtml(testDescription.excluirPedido).allureSeverity('critical')

          Pedidos.excluir(seeds.seedCadastroPedido)
        })

        it('Deve validar exclusão dos documentos', function () {
          // cy.allure().severity('normal').startStep('test content')

          Documentos.validarExclusao(seedCadastroPedido)
        })

        it('Deve validar exclusão do pedido', function () {
          // cy.allure().severity('normal').startStep('test content')

          Pedidos.validarExclusao(seedCadastroPedido)
        })
      })
    })
  })
})
