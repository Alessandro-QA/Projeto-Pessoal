/// <reference types="cypress" />

import locCadastroColheita from '../../../locators/funcionalidades/producao/colheita/locators-cadastro-edicao-colheita'
import locDashboardColheita from '../../../locators/funcionalidades/producao/colheita/locators-dashboard.js'
import locDetalhesColheita from '../../../locators/funcionalidades/producao/colheita/locators-detalhes-colheita.js'

class Colheita {
  /**
   * Método para cadastrar uma nova colheita
   * @param {} seedTest
   * */
  cadastrarEditar(seedTest) {
    cy.intercept('POST', 'https://daas.dev.conexa.com.br/api/unidade-medida/v1/ConversorUnidadeMedida/ConverterUnidade').as('conversor')

    if (seedTest.editar) {
      const url = '/producao/colheita'
      const locatorTituloPagina = locDashboardColheita.titulo
      const tituloPagina = 'Colheitas'

      cy.intercept('GET', '/api/producao-agricola/v1/colheitas/**').as('detalhes')
      cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/cultura/v1/cultura/icone?**').as('listColheitas')

      // Navegar para dashboard de colheita
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)

      // Selecionar fazenda
      cy.getVisible(locDashboardColheita.selectFazenda).click()
      cy.getVisible(locDashboardColheita.selecionarFazenda)
        .contains(seedTest.filtroFazenda).click()

      cy.wait(2000)

      // Selecionar safra
      cy.getVisible(locDashboardColheita.selectSafra).click()
      cy.getVisible(locDashboardColheita.selecionarSafra)
        .contains(seedTest.filtroSafra).click()

      cy.wait('@listColheitas')

      cy.getVisible(locDashboardColheita.cardColheita).click().should(($el) => {
        expect($el).to.contain.text(seedTest.destinoEditar)
      })

      cy.wait('@detalhes', { timeout: 8000 })

      cy.get(locCadastroColheita.buttonEditar).click()
    } else {
      const url = '/producao/colheita/cadastro'
      const locatorTituloPagina = locCadastroColheita.titulo
      const tituloPagina = 'Nova Colheita'

      // Navegar para cadastro de colheita
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)
    }

    if (seedTest.transportadora) {
      // Selecionar transportadora
      cy.get(locCadastroColheita.selectTransportadora).click()
      cy.getVisible(locCadastroColheita.selecionarTransportadora)
        .contains(seedTest.transportadora).click()
    }

    if (seedTest.placaVeiculo) {
      // Selecionar placa veiculo
      cy.getVisible(locCadastroColheita.selectPlacaVeiculo).click()
      cy.getVisible(locCadastroColheita.selecionarPlacaVeiculo)
        .contains(seedTest.placaVeiculo).click()
    }

    if (seedTest.guardarMotorista) {
      // Digitar nome motorista
      cy.getVisible(locCadastroColheita.spanGuardarMotorista).click()

      cy.getVisible(locCadastroColheita.inputMotorista).clear()
        .type(seedTest.motorista)
    } else if (seedTest.motorista) {
      // Selecionar motorista
      cy.getVisible(locCadastroColheita.selectMotorista).click()
      cy.getVisible(locCadastroColheita.selecionarMotorista)
        .contains(seedTest.motorista).click()
    }

    if (seedTest.fazenda) {
      // Selecionar fazenda
      cy.getVisible(locCadastroColheita.selectFazenda).click()
      cy.getVisible(locCadastroColheita.selecionarFazenda)
        .contains(seedTest.fazenda).click()
    }

    if (seedTest.safra) {
      // Selecionar safra
      cy.getVisible(locCadastroColheita.selectSafra).click()
      cy.getVisible(locCadastroColheita.selecionarSafra)
        .contains(seedTest.safra).click()
    }

    if (seedTest.talhao) {
      // Selecionar talhao
      cy.getVisible(locCadastroColheita.selectTalhao).click({ force: true })
      cy.getVisible(locCadastroColheita.selecionarTalhao)
        .contains(seedTest.talhao).click()
    }

    if (seedTest.variedade) {
      // Validar variedade selecionada
      cy.getVisible(locCadastroColheita.variedadeSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTest.variedade)
      })
    }

    if (seedTest.porcentagemCarga) {
      // Porcentagem da carga
      cy.getVisible(locCadastroColheita.inputPorcentagemCarga).clear()
        .type(seedTest.porcentagemCarga)
    }

    if (seedTest.destino) {
      // Destino
      cy.getVisible(locCadastroColheita.toggleDestino).contains(seedTest.destino).click()
    }

    if (seedTest.destino === 'Externo') {
      // Selecionar cliente
      cy.getVisible(locCadastroColheita.selectCliente).click()
        .contains(seedTest.clienteDestino).click()

      if (seedTest.contratos === 'Todos os contratos') {
        cy.getVisible(locCadastroColheita.contratoSelecionado).should(($el) => {
          expect($el).to.contain.text('Todos os contratos')
        })
      } else {
        // Selecionar contratos
        cy.getVisible(locCadastroColheita.selectContrato).click()
          .contains(seedTest.contratos).click()
      }
    } else if (seedTest.destino === 'Interno') {
      // Selecionar unidade armazenamento
      cy.getVisible(locCadastroColheita.selectUnidadeArmazenamento).click()
        .contains(seedTest.unidadeArmazenamento).click()
    }

    if (seedTest.pesoBruto) {
      // Peso bruto
      cy.getVisible(locCadastroColheita.inputPesoBrutoPesagem).clear()
        .type(`{movetoend}${seedTest.pesoBruto}`)

      cy.wait('@conversor', { timeout: 8000 })
    }

    if (seedTest.taraVeiculo) {
      // Tara do veiculo
      cy.getVisible(locCadastroColheita.inputTaraVeiculoPesagem).clear()
        .type(`{movetoend}${seedTest.taraVeiculo}`)
    }

    cy.wait('@conversor', { timeout: 8000 })

    // Desconto classificação
    if (seedTest.descontoClassificacao) {
      cy.getVisible(locCadastroColheita.inputDescontoClassificacaoPesagem).clear()
        .type(`{movetoend}${seedTest.descontoClassificacao}`)

      cy.wait('@conversor', { timeout: 8000 })
    }

    if (seedTest.subtotal) {
      // Validar subtotal
      cy.getVisible(locCadastroColheita.spanSubtotal).should(($el) => {
        expect($el).to.contain.text(seedTest.subtotal)
      })
    }

    if (seedTest.retornoCliente) {
      // Numero romaneio
      cy.getVisible(locCadastroColheita.inputNumeroRomaneio).clear()
        .type(seedTest.numeroRomaneio)

      // Peso bruto
      cy.getVisible(locCadastroColheita.inputPesoBrutoRetorno).clear()
        .type(`{movetoend}${seedTest.pesoBrutoRetorno}`)

      // Tara do veiculo
      cy.getVisible(locCadastroColheita.inputTaraVeiculoRetorno).clear({ force: true })
        .type(`{movetoend}${seedTest.taraVeiculoRetorno}`)

      // Validar subtotal
      cy.getVisible(locCadastroColheita.spanSubTotalRetorno).should(($el) => {
        expect($el).to.contain.text(seedTest.subtotalRetorno)
      })

      // Desconto classificação
      if (seedTest.descontoClassificacaoRetorno) {
        cy.getVisible(locCadastroColheita.inputDescontoClassificacaoRetorno).clear()
          .type(`{movetoend}${seedTest.descontoClassificacaoRetorno}`)
      }
    }

    // Validar Partilha
    if (seedTest.partilha) {
      const partilha = seedTest.partilha
      partilha.forEach((campo, i) => {
        cy.get(locCadastroColheita.inputQuantidadePartilha).eq(i)
          .clear({ force: true })
          .type(`{movetoend}${campo.partilhaValor}`)
      })
    }

    // Validar total desconto
    cy.getVisible(locCadastroColheita.spanTotalDesconto).should(($el) => {
      expect($el).to.contain.text(seedTest.totalDesconto)
    })

    // Validar total liquido
    cy.getVisible(locCadastroColheita.spanTotalLiquido).should(($el) => {
      expect($el).to.contain.text(seedTest.totalLiquido)
    })

    // Validar total em sacas
    cy.getVisible(locCadastroColheita.spanTotalEmSacas).should(($el) => {
      expect($el).to.contain.text(seedTest.totalEmSacas)
    })

    cy.getVisible(locCadastroColheita.buttonAdicionar).click()

    if (seedTest.modal) {
      cy.getVisible(locCadastroColheita.msgAlert).should(($el) => {
        expect($el).to.contain.text('"A Fixar" para o Armazem cliente.')
      })

      cy.getVisible(locCadastroColheita.btnSim).click()
    }

    cy.get(locCadastroColheita.msgSucesso).should(($el) => {
      expect($el).to.contain.text('Colheita salva com sucesso')
    })
  }

  /**
  * Método para excluir uma existente colheita
  * @param {} seedTest
  */
  excluir(seedTest) {
    const url = '/producao/colheita'
    const locatorTituloPagina = locDashboardColheita.titulo
    const tituloPagina = 'Colheitas'

    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/cultura/v1/cultura/icone?**').as('listColheitas')

    // Selecionar fazenda
    cy.getVisible(locDashboardColheita.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    cy.wait(2000)

    // Selecionar safra
    cy.getVisible(locDashboardColheita.selectSafra).click()
      .contains(seedTest.safra).click()

    cy.wait('@listColheitas')

    // Abrir colheita
    cy.get(locDashboardColheita.buttonAbrirDetalhes).click({ force: true })

    // Excluir colheita
    cy.get(locDetalhesColheita.buttonExcluir).click()

    // Confirmar exclusão
    cy.get(locDetalhesColheita.buttonConfirmarExclusao).click()

    // Validar mensagem exclusão
    cy.getVisible(locDetalhesColheita.msgSucesso).should(($el) => {
      expect($el).to.contain.text('Colheita excluída com sucesso.')
    })
  }

  /**
  * Método para validar a Dashboard de colheita
  * @param {} seedTest
  */
  validarDashboard(seedTest) {
    const url = '/producao/colheita'
    const locatorTituloPagina = locDashboardColheita.titulo
    const tituloPagina = 'Colheitas'

    // Navegar para dashboard de Colheita
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/cultura/v1/cultura/icone?**').as('listColheitas')

    // Selecionar fazenda
    cy.getVisible(locDashboardColheita.selectFazenda).click()
      .contains(seedTest.fazenda).click({ force: true })

    cy.wait(2000)

    // Selecionar safra
    cy.getVisible(locDashboardColheita.selectSafra).click()
      .contains(seedTest.safra).click({ force: true })

    if (seedTest.semCards) {
      cy.getVisible(locDashboardColheita.mensagemSemDados).should(($el) => {
        expect($el).to.contain.text(seedTest.mensagem)
      })
    } else {
      cy.wait('@listColheitas')

      // Validar card colheita - destino
      cy.getVisible(locDashboardColheita.spanDestino).should(($el) => {
        expect($el).to.contain.text(seedTest.destino)
      })

      // Validar card colheita - placa
      cy.getVisible(locDashboardColheita.spanPlaca).should(($el) => {
        expect($el).to.contain.text(seedTest.placa)
      })

      //  Validar card colheita - um ou mais contratos destino
      if (seedTest.contrato) {
        cy.get(locDashboardColheita.spanContratoDestino).should('contain', seedTest.contratoDestino1)
          .and('contain', seedTest.contratoDestino2)
      } else {
        cy.getVisible(locDashboardColheita.spanContratoDestino).should(($el) => {
          expect($el).to.contain.text(seedTest.contratoDestino)
        })
      }

      // Validar card colheita - cultura
      cy.getVisible(locDashboardColheita.spanCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.cultura)
      })

      // Validar card colheita - quantidade
      cy.getVisible(locDashboardColheita.spanQuantidade).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      // Validar card colheita - quantidade cultura
      cy.getVisible(locDashboardColheita.spanQuantidadeCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeCultura)
      })
    }
  }
}

export default new Colheita()
