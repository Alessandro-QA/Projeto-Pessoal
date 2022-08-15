/// <reference types="cypress" />

import locCadastroColheita from '../../../locators/funcionalidades/producao/colheita/locators-cadastro-edicao-colheita'
import locListagemColheita from '../../../locators/funcionalidades/producao/colheita/locators-dashboard.js'
import locDetalhesColheita from '../../../locators/funcionalidades/producao/colheita/locators-detalhes-colheita.js'

class Colheita {
  /**
   * Método para cadastrar uma nova colheita
   * @param {} seedTest
   * */
  cadastrarEditar(seedTest) {
    cy.intercept('POST', `${Cypress.env('daasUrl')}/api/unidade-medida/v1/ConversorUnidadeMedida/ConverterUnidade`)
      .as('conversor')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconeCultura')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/list?**`)
      .as('listCiclos')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/**')
      .as('detalhes')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/List?**')
      .as('listColheitas')
    cy.intercept('GET', '/api/fazenda/v1/UnidadeArmazenamento/List?**')
      .as('listUnidadeArmazenamento')

    if (seedTest.editar) {
      const url = '/producao/colheita'
      const locatorTituloPagina = locListagemColheita.titulo
      const tituloPagina = 'Colheitas'

      // Navegar para dashboard de colheita
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)

      // Selecionar fazenda
      cy.getVisible(locListagemColheita.selectFazenda).click()
      cy.get(locListagemColheita.selecionarFazenda)
        .contains(seedTest.filtroFazenda).click()

      cy.wait('@listUnidadeArmazenamento')
      cy.wait('@listColheitas')

      // Selecionar safra
      cy.getVisible(locListagemColheita.selectSafra).click()
      cy.get(locListagemColheita.selecionarSafra)
        .contains(seedTest.filtroSafra).click()

      cy.wait('@listCiclos')
      cy.wait('@listColheitas')

      // selecionar a card de colheita
      cy.getVisible(locListagemColheita.cardColheita).click().should(($el) => {
        expect($el).to.contain.text(seedTest.destinoEditar)
      })

      cy.wait('@detalhes')

      // clicar no botão para editar colheita
      cy.get(locCadastroColheita.buttonEditar).click()

      cy.wait('@conversor')

    } else {
      const url = '/producao/colheita/cadastro'
      const locatorTituloPagina = locCadastroColheita.titulo
      const tituloPagina = 'Nova Colheita'

      // Navegar para cadastro de colheita
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)
    }

    // informar a data da colheita
    if (seedTest.data) {
      cy.getVisible(locCadastroColheita.inputDataColheita)
        .type(`${seedTest.data}{enter}`)
    }

    // selecionar a transportadora
    cy.getVisible(locCadastroColheita.selectTransportadora).click()
      .contains(seedTest.transportadora).click()

    // selecionar o veiculo pela placa
    cy.getVisible(locCadastroColheita.selectPlacaVeiculo).click()
      .contains(seedTest.placaVeiculo).click()

    // selecionar o motorias para o transporte da colheita
    if (seedTest.guardarMotorista) {
      // Digitar nome motorista
      cy.getVisible(locCadastroColheita.spanGuardarMotorista).click()

      cy.getVisible(locCadastroColheita.inputMotorista).clear()
        .type(seedTest.motorista)
    } else {
      // Selecionar motorista
      cy.getVisible(locCadastroColheita.selectMotorista).click()
      cy.getVisible(locCadastroColheita.selecionarMotorista)
        .contains(seedTest.motorista).click()
    }

    // selecionar a fazenda onde foi realizada colheita
    cy.getVisible(locCadastroColheita.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // selecionar a safra
    cy.getVisible(locCadastroColheita.selectSafra).click()
    cy.getVisible(locCadastroColheita.selecionarSafra)
      .contains(seedTest.safra)

    if (seedTest.talhoes) {
      const talhoes = seedTest.talhoes
      talhoes.forEach((talhao) => {
        // adicionar talhão
        if (seedTest.adicionarTalhao) {
          cy.getVisible(locCadastroColheita.buttonAddTalhao).click()
        }

        // selecionar o talhao
        cy.get(locCadastroColheita.selectTalhao).click()
          .contains(talhao.talhao).click()

        // selecionar a varidade da cultura colhida
        cy.get(locCadastroColheita.selectVariedade).click()
        cy.getVisible(locCadastroColheita.variedadeSelecionada)
          .contains(talhao.variedade).click({ force: true })

        // informar a porcentagem de cada talhao colhido a ser carregado
        cy.get(locCadastroColheita.inputPorcentagemCarga).clear()
          .type(talhao.porcentagemCarga)
      })
    }

    if (seedTest.destino === 'Externo') {
      // Selecionar cliente
      cy.getVisible(locCadastroColheita.selectCliente).click({timeout: '@conversor'})
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
    } else {
      cy.getVisible(locCadastroColheita.toggleDestino)
        .contains(seedTest.destino).click()

      cy.wait('@conversor')

      // Selecionar unidade armazenamento
      cy.getVisible(locCadastroColheita.selectUnidadeArmazenamento).click()
        .contains(seedTest.unidadeArmazenamento).click()
    }

    // informar o peso bruto na pesagem interna
    cy.getVisible(locCadastroColheita.inputPesoBrutoPesagem).clear().click()
      .type(seedTest.pesoBrutoInterna)

    // informar o peso do veiculo na pesagem interna
    cy.getVisible(locCadastroColheita.inputTaraVeiculoPesagem).clear().click()
      .type(seedTest.taraVeiculoInterna)

    cy.wait('@conversor')

    // validar o peso total apos peso bruto e o peso do veiculo
    cy.getVisible(locCadastroColheita.spanSubtotalPesagem).click()
      .contains(seedTest.subTotalInterno)

    if (seedTest.descontoClassificacao) {
      // informar o desconto da classificação de modo manual
      cy.getVisible(locCadastroColheita.inputDescontoClassificacaoPesagem).clear().click()
        .type(seedTest.descontoClassificacaoInterno)

      cy.wait('@conversor')

      if (seedTest.tabelaDescontoInterno) {
        // selecionar o checkBox da tabela de desconto
        cy.getVisible(locCadastroColheita.checkTabelaDescontoPesagem).click()

        cy.wait('@conversor')
      }
    }

    if (seedTest.retornoCliente) {
      const quantidade = seedTest.retornoCliente
      // informar o numero do romaneio do retorno do cliente
      cy.getVisible(locCadastroColheita.inputNumeroRomaneio).clear()
        .type(quantidade.numeroRomaneio)

      // informar o peso bruto da colheita do retorno do cliente
      cy.getVisible(locCadastroColheita.inputPesoBrutoRetorno).clear().click()
        .type(quantidade.pesoBrutoRetorno)

      // informar o peso do veiculo do retorno do cliente
      cy.getVisible(locCadastroColheita.inputTaraVeiculoRetorno).clear().click()
        .type(quantidade.taraVeiculoRetorno)

      cy.wait('@conversor')

      // validar o peso total apos o peso bruto da colheita e peso do veiculo
      cy.getVisible(locCadastroColheita.spanSubTotalRetorno).click().should(($el) => {
        expect($el).to.contain.text(quantidade.subtotalRetorno)
      })

      if (quantidade.descontoClassificacaoRetorno) {
        // informar o desconto de classificação
        cy.getVisible(locCadastroColheita.inputDescontoClassificacaoRetorno).clear()
          .type(quantidade.descontoClassificacaoRetorno)

        cy.wait('@conversor')

        if (quantidade.tabelaDescontoRetorno) {
          // selecionar o checkBox da tabela de desconto
          cy.getVisible(locCadastroColheita.checkTabelaDescontoRetorno).click()

          cy.wait('@conversor')
        }
      }
    }

    if (seedTest.partilha) {
      const partilhas = seedTest.partilha
      partilhas.forEach((partilha, index) => {
        // informar a quantidade partilhada da colheita para cada contrato
        cy.get(locCadastroColheita.inputQuantidadePartilha).eq(index)
          .clear({ force: true })
          .type(`{movetoend}${partilha.partilhaValor}`)
      })

      cy.wait('@conversor')
    }

    // validar o subTotal final
    cy.getVisible(locCadastroColheita.spanSubtotal).click().should(($el) => {
      expect($el).to.contain.text(seedTest.subTotal)
    })

    // validar o total de desconto final
    cy.getVisible(locCadastroColheita.spanTotalDesconto).should(($el) => {
      expect($el).to.contain.text(seedTest.totalDesconto)
    })

    // validar o total liquido final
    cy.getVisible(locCadastroColheita.spanTotalLiquido).should(($el) => {
      expect($el).to.contain.text(seedTest.totalLiquido)
    })

    // validar conversao total de acordo com a unidade de medida da varidade colhida
    cy.getVisible(locCadastroColheita.spanTotalCultura).should(($el) => {
      expect($el).to.contain.text(seedTest.totalCultura)
    })

    // Clicar no botão de salvar colheita
    cy.getVisible(locCadastroColheita.buttonAdicionar).click()

    if (seedTest.modal) {
      cy.getVisible(locCadastroColheita.msgAlert, { timeout: 30000}).should(($el) => {
        expect($el).to.contain.text('"A Fixar" para o Armazem cliente.')
      })

    cy.getVisible(locCadastroColheita.btnSim).click()

    } else {
      cy.get(locCadastroColheita.msgSucesso, { timeout: 30000}).should(($el) => {
        expect($el).to.contain.text('Colheita salva com sucesso')
      })
    }
  }

  /**
  * Método para excluir uma existente colheita
  * @param {} seedTest
  */
  excluir(seedTest) {
    const url = '/producao/colheita'
    const locatorTituloPagina = locListagemColheita.titulo
    const tituloPagina = 'Colheitas'

    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconeCultura')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/list?**`)
      .as('listCiclos')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/List?**')
      .as('listColheitas')
    cy.intercept('GET', '/api/fazenda/v1/UnidadeArmazenamento/List?**')
      .as('listUnidadeArmazenamento')

    // Selecionar fazenda
    cy.getVisible(locListagemColheita.selectFazenda).click()
      .contains(seedTest.fazenda).click()
      .wait(['@listUnidadeArmazenamento', '@listColheitas'])

    // Selecionar safra
    cy.getVisible(locListagemColheita.selectSafra).click()
      .contains(seedTest.safra).click()
      .wait(['@listCiclos', '@listColheitas', '@iconeCultura'])

    // Abrir colheita
    cy.get(locListagemColheita.buttonAbrirDetalhes).click({ force: true })

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
  * Método para validar a listagem de colheita
  * @param {} seedTest
  */
  validarListagem(seedTest) {
    const url = '/producao/colheita'
    const locatorTituloPagina = locListagemColheita.titulo
    const tituloPagina = 'Colheitas'

    // Navegar para dashboard de Colheita
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconeCultura')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/list?**`)
      .as('listCiclos')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/List?**')
      .as('listColheitas')
    cy.intercept('GET', '/api/fazenda/v1/UnidadeArmazenamento/List?**')
      .as('listUnidadeArmazenamento')

    // Selecionar fazenda
    cy.getVisible(locListagemColheita.selectFazenda).click()
    cy.get(locListagemColheita.selecionarFazenda)
      .contains(seedTest.fazenda).click()

    cy.wait('@listUnidadeArmazenamento')
    cy.wait('@listColheitas')

    // Selecionar safra
    cy.getVisible(locListagemColheita.selectSafra).click()
    cy.get(locListagemColheita.selecionarSafra)
      .contains(seedTest.safra).click()

    cy.wait('@listCiclos')
    cy.wait('@listColheitas')

    if (seedTest.semCards) {
      cy.getVisible(locListagemColheita.mensagemSemDados).should(($el) => {
        expect($el).to.contain.text(seedTest.mensagem)
      })
    } else {
      // Validar card colheita - destino
      cy.getVisible(locListagemColheita.spanDestino).should(($el) => {
        expect($el).to.contain.text(seedTest.destino)
      })

      // Validar card colheita - placa
      cy.getVisible(locListagemColheita.spanPlaca).should(($el) => {
        expect($el).to.contain.text(seedTest.placa)
      })

      //  Validar card colheita - um ou mais contratos destino
      if (seedTest.contrato) {
        cy.get(locListagemColheita.spanContratoDestino).should('contain', seedTest.contratoDestino1)
          .and('contain', seedTest.contratoDestino2)
      } else {
        cy.getVisible(locListagemColheita.spanContratoDestino).should(($el) => {
          expect($el).to.contain.text(seedTest.contratoDestino)
        })
      }

      // Validar card colheita - cultura
      cy.getVisible(locListagemColheita.spanCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.cultura)
      })

      // Validar card colheita - quantidade
      cy.getVisible(locListagemColheita.spanQuantidade).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      // Validar card colheita - quantidade cultura
      cy.getVisible(locListagemColheita.spanQuantidadeCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeCultura)
      })
    }
  }
}

export default new Colheita()
