/// <reference types="cypress" />

import locatorRecebimento from '../../../locators/funcionalidades/suprimentos/recebimento/locators-recebimento.js'

const url = '/suprimentos/recebimento'
const locatorTituloPagina = locatorRecebimento.dashboard.titulo
const tituloPagina = 'Recebimento'

class Recebimento {
  /**
   * Realiza o cadastro de um recebimento manual
   * @param {} seedTest
   * */
  cadastrar(seedTest) {
    var ciclos = seedTest.ciclos

    cy.log('Navegar para Recebimento')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('lancar nota fiscal manual')
    cy.log('Selecionar fornecedor')
    cy.getVisible(locatorRecebimento.dashboard.selectFornecedor).click()
      .contains(seedTest.fornecedor).click()

    cy.log('Validar cnpj fornecedor')
    cy.getVisible(locatorRecebimento.dashboard.cnpjFornecedor)
      .contains(seedTest.cnpjFornecedor)

    cy.log('buscar fornecedor')
    cy.getVisible(locatorRecebimento.dashboard.botaoBuscar).click()

    cy.log('validar fornecedor')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFornecedor)
      .should('contain', seedTest.fornecedor)

    cy.log('validar cnpj fornecedor')
    cy.getVisible(locatorRecebimento.recebimentoManual.cnpjFornecedor)
      .should('contain', seedTest.cnpjFornecedor)

    cy.log('numero da nota')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputNumeroNota)
      .clear().type(`{movetoend}${seedTest.numeroNota}`)

    cy.log('serie nota')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputSerieNota)
      .clear().type(`{movetoend}${seedTest.serieNota}`)

    cy.log('data emissao')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputDataEmissao)
      .clear().type(`${seedTest.dataEmissao}{enter}`)

    cy.log('data recebimento')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputDataRecebimento)
      .clear().type(`${seedTest.dataRecebimento}{enter}`)

    cy.log('hora recebimento')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputHoraRecebimento)
      .clear().type(`${seedTest.horaRecebimento}{enter}`)

    cy.log('selecionar fazenda')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    cy.log('selecionar empresa')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    cy.log('validar incricao estadual')
    cy.getVisible(locatorRecebimento.recebimentoManual.selecetInscricaoEstadual)
      .should('contain', seedTest.inscricaoEstadual)

    cy.log('selecionar safra')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectSafra).click()
      .contains(seedTest.safra).click()

    cy.log('validar nome material')
    cy.getVisible(locatorRecebimento.materiais.nomeMaterial)
      .should('contain', seedTest.nomeMaterial)

    cy.getVisible(locatorRecebimento.materiais.collapseMaterial).click().then(() => {
      cy.log('validar unidade armazenamento')
      cy.getVisible(locatorRecebimento.materiais.unidadeArmazenamento)
        .should('contain', seedTest.unidadeArmazenamento)

      cy.log('quantidade material')
      cy.getVisible(locatorRecebimento.materiais.quantidadeMaterialRecebido)
        .clear().type(`{movetoend}${seedTest.quantidadeMaterial}{enter}`)

      cy.log('preco material - NF')
      cy.getVisible(locatorRecebimento.materiais.precoMaterialRecebido)
        .clear().type(`{movetoend}${seedTest.precoMaterial}{enter}`)

      cy.log('Total')
      cy.get(locatorRecebimento.materiais.total).should(($el) => {
        expect($el).to.contain.text(seedTest.totalMaterial)
      })

      cy.log('Preco Pedido')
      cy.get(locatorRecebimento.materiais.total).should(($el) => {
        expect($el).to.contain.text(seedTest.precoPedido)
      })

      cy.log('confirmar material')
      cy.get(locatorRecebimento.materiais.botaoConfirmarMaterial).click()
    })

    cy.log('forma de pagamento')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFormaPagamento).click()
      .contains(seedTest.formaPagamento).click()

    cy.log('valor parcela')
    cy.getVisible(locatorRecebimento.recebimentoManual.valorParcela)
      .should('contain', seedTest.valorParcela)

    cy.log('categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectCategoria)
      .should('contain', seedTest.categoria)

    cy.log('porcentagem categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputPorcentagemCategoria)
      .should('have.value', seedTest.porcentagemCategoria)

    cy.log('valor categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputValorCategoria)
      .should('have.value', seedTest.valorCategoria)

    cy.log('rateio entre ciclos')
    cy.getVisible(locatorRecebimento.recebimentoManual.checkBoxRateioEntreCiclos)
      .should('have.attr', 'aria-checked')

    cy.log('validar nome, porcentagem e valor dos ciclos')
    ciclos.forEach((ciclo, index) => {
      cy.log('nome ciclo')
      cy.get(locatorRecebimento.recebimentoManual.selectCiclo).eq(index)
        .should('contain', ciclo.nomeCiclo)

      cy.log('porcentagem ciclo')
      cy.get(locatorRecebimento.recebimentoManual.inputPorcentagemCiclo).eq(index)
        .should('have.value', ciclo.porcentagemCiclo)

      cy.log('valor ciclo')
      cy.get(locatorRecebimento.recebimentoManual.inputValorCiclo).eq(index)
        .should('have.value', ciclo.valorCiclo)
    })

    cy.log('total valor recebimento')
    cy.get(locatorRecebimento.recebimentoManual.totalRecebimento)
      .should('contain', seedTest.totalRecebimento)

    cy.log('salvar recebimento')
    cy.getVisible(locatorRecebimento.recebimentoManual.botaoFinalizarRecebimento).click()

    cy.get(locatorRecebimento.recebimentoManual.botaoFinalizarRecebimento)
      .should('not.exist')

    cy.log('mensagem sucesso')
    cy.get(locatorRecebimento.dashboard.mensagemSucesso)
      .should('contain', 'Recebimento realizado com sucesso')
  }
}

export default new Recebimento()
