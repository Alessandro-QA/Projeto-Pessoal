/// <reference types="cypress" />

import locatorRecebimento from '../../locators/suprimentos/recebimento/locators-recebimento.js'

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

    // Navegar para Pedidos
    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Recebimentos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

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
    cy.get(locatorRecebimento.materiais.nomeMaterial)
      .should('contain', seedTest.nomeMaterial)

    cy.getVisible(locatorRecebimento.materiais.tabelaMateriais).contains(seedTest.nomeMaterial).closest('.header')
      .find(locatorRecebimento.materiais.iconeBotao).click()

    cy.get(locatorRecebimento.materiais.linhaMaterial).filter(`:contains("${seedTest.codigoPedido}")`)
      .should('be.visible')
      .then(($linha) => {
        cy.wrap($linha).within(() => {
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
          cy.get('span').eq(4).then(($el) => {
            const expectedText = `R$ ${Number(seedTest.totalMaterial).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}`
            // Remove espaços extras do texto atual e do esperado para comparação
            const actualText = $el.text().replace(/\s+/g, ' ').trim() // Normaliza múltiplos espaços
            const normalizedExpectedText = expectedText.replace(/\s+/g, ' ').trim() // Normaliza múltiplos espaços
            expect(actualText).to.eq(normalizedExpectedText)
          })
          cy.log('Preco Pedido')
          cy.get('span').eq(5).should(($el) => {
            const expectedText = (`R$ ${Number(seedTest.precoPedido).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
            // Remove espaços extras do texto atual e do esperado para comparação
            const actualText = $el.text().replace(/\s+/g, ' ').trim() // Normaliza múltiplos espaços
            const normalizedExpectedText = expectedText.replace(/\s+/g, ' ').trim() // Normaliza múltiplos espaços
            expect(actualText).to.eq(normalizedExpectedText)
          })

          cy.log('confirmar material')
          cy.get(locatorRecebimento.materiais.botaoConfirmarMaterial).click({ force: true })
        })
      })

    cy.log('forma de pagamento')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectFormaPagamento).click()
      .contains(seedTest.formaPagamento).click()

    cy.log('valor parcela')
    cy.getVisible(locatorRecebimento.recebimentoManual.valorParcela)
      .should('contain.text', `R$ ${Number(seedTest.valorParcela).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)

    cy.log('categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.selectCategoria)
      .should('contain', seedTest.categoria)

    cy.log('porcentagem categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputPorcentagemCategoria)
      .should('have.value', seedTest.porcentagemCategoria)

    cy.log('valor categoria')
    cy.getVisible(locatorRecebimento.recebimentoManual.inputValorCategoria)
      .should('contain.text', `R$ ${Number(seedTest.valorCategoria).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)

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
      .should('contain.text', `R$ ${Number(seedTest.totalRecebimento).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)

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
