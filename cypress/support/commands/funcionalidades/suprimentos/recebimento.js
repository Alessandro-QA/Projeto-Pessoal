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

    // Navegar para Recebimento
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // lancar nota fiscal manual
    // selecionar fornecedor
    cy.getVisible(locatorRecebimento.dashboard.selectFornecedor).click()
      .contains(seedTest.fornecedor).click()

    // validar cnpj fornecedor
    cy.getVisible(locatorRecebimento.dashboard.cnpjFornecedor)
      .contains(seedTest.cnpjFornecedor)

    // buscar fornecedor
    cy.getVisible(locatorRecebimento.dashboard.botaoBuscar).click()

    // validar fornecedor
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFornecedor)
      .should('contain', seedTest.fornecedor)

    // validar cnpj fornecedor
    cy.getVisible(locatorRecebimento.recebimentoManual.cnpjFornecedor)
      .should('contain', seedTest.cnpjFornecedor)

    // numero da nota
    cy.getVisible(locatorRecebimento.recebimentoManual.inputNumeroNota)
      .clear().type(`{movetoend}${seedTest.numeroNota}`)

    // serie nota
    cy.getVisible(locatorRecebimento.recebimentoManual.inputSerieNota)
      .clear().type(`{movetoend}${seedTest.serieNota}`)

    // data emissao
    cy.getVisible(locatorRecebimento.recebimentoManual.inputDataEmissao)
      .clear().type(`${seedTest.dataEmissao}{enter}`)

    // data recebimento
    cy.getVisible(locatorRecebimento.recebimentoManual.inputDataRecebimento)
      .clear().type(`${seedTest.dataRecebimento}{enter}`)

    // hora recebimento
    cy.getVisible(locatorRecebimento.recebimentoManual.inputHoraRecebimento)
      .clear().type(`${seedTest.horaRecebimento}{enter}`)

    // selecionar fazenda
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // selecionar empresa
    cy.getVisible(locatorRecebimento.recebimentoManual.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // validar incricao estadual
    cy.getVisible(locatorRecebimento.recebimentoManual.selecetInscricaoEstadual)
      .should('contain', seedTest.inscricaoEstadual)

    // selecionar safra
    cy.getVisible(locatorRecebimento.recebimentoManual.selectSafra).click()
      .contains(seedTest.safra).click()

    // validar nome material
    cy.getVisible(locatorRecebimento.materiais.nomeMaterial)
      .should('contain', seedTest.nomeMaterial)

    cy.getVisible(locatorRecebimento.materiais.collapseMaterial).click().then(() => {
      // validar unidade armazenamento
      cy.getVisible(locatorRecebimento.materiais.unidadeArmazenamento)
        .should('contain', seedTest.unidadeArmazenamento)

      // quantidade material
      cy.getVisible(locatorRecebimento.materiais.quantidadeMaterialRecebido)
        .clear().type(`{movetoend}${seedTest.quantidadeMaterial}{enter}`)

      // preco material - NF
      cy.getVisible(locatorRecebimento.materiais.precoMaterialRecebido)
        .clear().type(`{movetoend}${seedTest.precoMaterial}{enter}`)

      // Total
      cy.get(locatorRecebimento.materiais.total).should(($el) => {
        expect($el).to.contain.text(seedTest.totalMaterial)
      })

      // Preco Pedido
      cy.get(locatorRecebimento.materiais.total).should(($el) => {
        expect($el).to.contain.text(seedTest.precoPedido)
      })

      // confirmar material
      cy.get(locatorRecebimento.materiais.botaoConfirmarMaterial).click()
    })

    // forma de pagamento
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFormaPagamento).click()
      .contains(seedTest.formaPagamento).click()

    // valor parcela
    cy.getVisible(locatorRecebimento.recebimentoManual.valorParcela)
      .should('contain', seedTest.valorParcela)

    // categoria
    cy.getVisible(locatorRecebimento.recebimentoManual.selectCategoria)
      .should('contain', seedTest.categoria)

    // porcentagem categoria
    cy.getVisible(locatorRecebimento.recebimentoManual.inputPorcentagemCategoria)
      .should('have.value', seedTest.porcentagemCategoria)

    // valor categoria
    cy.getVisible(locatorRecebimento.recebimentoManual.inputValorCategoria)
      .should('have.value', seedTest.valorCategoria)

    // rateio entre ciclos
    cy.getVisible(locatorRecebimento.recebimentoManual.checkBoxRateioEntreCiclos)
      .should('have.attr', 'aria-checked')

    // validar nome, porcentagem e valor dos ciclos
    ciclos.forEach((ciclo, index) => {
      // nome ciclo
      cy.get(locatorRecebimento.recebimentoManual.selectCiclo).eq(index)
        .should('contain', ciclo.nomeCiclo)

      // porcentagem ciclo
      cy.get(locatorRecebimento.recebimentoManual.inputPorcentagemCiclo).eq(index)
        .should('have.value', ciclo.porcentagemCiclo)

      // valor ciclo
      cy.get(locatorRecebimento.recebimentoManual.inputValorCiclo).eq(index)
        .should('have.value', ciclo.valorCiclo)
    })

    // total valor recebimento
    cy.get(locatorRecebimento.recebimentoManual.totalRecebimento)
      .should('contain', seedTest.totalRecebimento)

    // salvar recebimento
    cy.getVisible(locatorRecebimento.recebimentoManual.botaoFinalizarRecebimento).click()

    cy.get(locatorRecebimento.recebimentoManual.botaoFinalizarRecebimento)
      .should('not.exist')

    // mensagem sucesso
    cy.get(locatorRecebimento.dashboard.mensagemSucesso)
      .should('contain', 'Recebimento realizado com sucesso')
  }
}

export default new Recebimento()
