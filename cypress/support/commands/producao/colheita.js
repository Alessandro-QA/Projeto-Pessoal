/// <reference types="cypress" />

import locCadastroColheita from '../../locators/producao/colheita/locators-cadastro-edicao-colheita.js'
import locListagemColheita from '../../locators/producao/colheita/locators-dashboard.js'
import locDetalhesColheita from '../../locators/producao/colheita/locators-detalhes-colheita.js'

class Colheita {
  /**
   * Método para cadastrar uma nova colheita
   * @param {} seedTest
   * */
  cadastrarEditar(seedTest) {
    cy.intercept('POST', `${Cypress.env('daasUrl')}/api/unidade-medida/v1/ConversorUnidadeMedida/ConverterUnidade`).as('conversor')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`).as('iconeCultura')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/list?**`).as('listCiclos')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/**').as('detalhes')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/List?**').as('listColheitas')
    cy.intercept('GET', '/api/fazenda/v1/UnidadeArmazenamento/List?**').as('listUnidadeArmazenamento')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/atividades-agricolas/v1/Planejamento/Safra/Safras/**`).as('getSafra')

    if (seedTest.editar) {
      const url = '/producao/colheita'
      const locatorTituloPagina = locListagemColheita.titulo
      const tituloPagina = 'Colheitas'

      cy.log('Navegar para dashboard de colheita')
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)

      cy.log('Selecionar fazenda')
      cy.getVisible(locListagemColheita.selectFazenda).click()
      cy.get(locListagemColheita.selecionarFazenda)
        .contains(seedTest.filtroFazenda).click()

      cy.wait('@listUnidadeArmazenamento')
      cy.wait('@listColheitas')

      cy.log('Selecionar safra')
      cy.getVisible(locListagemColheita.selectSafra).click()
      cy.get(locListagemColheita.selecionarSafra)
        .contains(seedTest.filtroSafra).click()

      cy.wait('@listCiclos')
      cy.wait('@listColheitas')

      cy.log('selecionar a card de colheita')
      cy.getVisible(locListagemColheita.cardColheita).click().should(($el) => {
        expect($el).to.contain.text(seedTest.destinoEditar)
      })

      cy.wait('@detalhes')

      cy.log('clicar no botão para editar colheita')
      cy.get(locCadastroColheita.buttonEditar).click()

      cy.wait('@conversor')

    } else {
      const url = '/producao/colheita/cadastro'
      const locatorTituloPagina = locCadastroColheita.titulo
      const tituloPagina = 'Nova Colheita'

      cy.log('Navegar para cadastro de colheita')
      cy.navegarPara(url, locatorTituloPagina, tituloPagina)
    }

    cy.log('informar a data da colheita')
    if (seedTest.data) {
      cy.getVisible(locCadastroColheita.inputDataColheita)
        .type(`${seedTest.data}{enter}`)
    }

    cy.log('selecionar a transportadora')
    cy.getVisible(locCadastroColheita.selectTransportadora).click()
      .get(locCadastroColheita.selecionarTransportadora).contains(seedTest.transportadora).click()

    cy.log('selecionar o veiculo pela placa')
    cy.getVisible(locCadastroColheita.selectPlacaVeiculo).click()
      .get(locCadastroColheita.selecionarPlacaVeiculo).contains(seedTest.placaVeiculo).click()

    cy.log('selecionar motorista')
    if (seedTest.guardarMotorista) {
      cy.log('Digitar nome motorista')
      cy.getVisible(locCadastroColheita.spanGuardarMotorista).click()

      cy.getVisible(locCadastroColheita.inputMotorista).clear()
        .type(seedTest.motorista)
    } else {
      cy.log('Selecionar motorista')
      cy.getVisible(locCadastroColheita.selectMotorista).click()
        .get(locCadastroColheita.selecionarMotorista).contains(seedTest.motorista).click()
    }

    cy.log('selecionar a fazenda')
    cy.getVisible(locCadastroColheita.selectFazenda).click()
      .get(locCadastroColheita.selecionarFazenda).contains(seedTest.fazenda).click()

    cy.wait('@getSafra')

    cy.log('selecionar a safra')
    cy.getVisible(locCadastroColheita.selectSafra).click()
      .get(locCadastroColheita.selecionarSafra).contains(seedTest.safra).click()

    if (seedTest.talhoes) {
      const talhoes = seedTest.talhoes
      talhoes.forEach((talhao) => {
        cy.log('adicionar talhão')
        if (seedTest.adicionarTalhao) {
          cy.getVisible(locCadastroColheita.buttonAddTalhao).click()
        }

        cy.log('selecionar o talhao')
        cy.get(locCadastroColheita.selectTalhao).click()
          .get(locCadastroColheita.selecionarTalhao).contains(talhao.talhao).click()

        cy.log('selecionar a varidade da cultura colhida')
        cy.get(locCadastroColheita.selectVariedade).click()
          .get(locCadastroColheita.variedadeSelecionada).contains(talhao.variedade).click({ force: true })

        cy.log('informar a porcentagem de cada talhao colhido a ser carregado')
        cy.get(locCadastroColheita.inputPorcentagemCarga).clear()
          .type(talhao.porcentagemCarga)
      })
    }

    if (seedTest.destino === 'Externo') {
      cy.log('Selecionar cliente')
      cy.getVisible(locCadastroColheita.selectCliente).click({ timeout: '@conversor' })
        .get(locCadastroColheita.selecionarCliente).contains(seedTest.clienteDestino).click()

      if (seedTest.contratos === 'Todos os contratos') {
        cy.getVisible(locCadastroColheita.contratoSelecionado).should(($el) => {
          expect($el).to.contain.text('Todos os contratos')
        })
      } else {
        cy.log('Selecionar contratos')
        cy.getVisible(locCadastroColheita.selectContrato).click()
          .contains(seedTest.contratos).click()
      }
    } else {
      cy.getVisible(locCadastroColheita.toggleDestino)
        .contains(seedTest.destino).click()

      cy.wait('@conversor')

      cy.log('Selecionar unidade armazenamento')
      cy.getVisible(locCadastroColheita.selectUnidadeArmazenamento).click()
        .get(locCadastroColheita.selecionarUnidadeArmazenamento).contains(seedTest.unidadeArmazenamento).click()
    }

    cy.log('informar o peso bruto na pesagem interna')
    cy.getVisible(locCadastroColheita.inputPesoBrutoPesagem).clear().click()
      .type(seedTest.pesoBrutoInterna)

    cy.log('informar o peso do veiculo na pesagem interna')
    cy.getVisible(locCadastroColheita.inputTaraVeiculoPesagem).clear().click()
      .type(seedTest.taraVeiculoInterna)

    cy.wait('@conversor')

    cy.log('validar o peso total apos peso bruto e o peso do veiculo')
    cy.getVisible(locCadastroColheita.spanSubtotalPesagem).click()
      .contains(seedTest.subTotalInterno)

    if (seedTest.descontoClassificacao) {
      cy.log('informar o desconto da classificação de modo manual')
      cy.getVisible(locCadastroColheita.inputDescontoClassificacaoPesagem).clear().click()
        .type(seedTest.descontoClassificacaoInterno)

      cy.wait('@conversor')

      if (seedTest.tabelaDescontoInterno) {
        cy.log('selecionar o checkBox da tabela de desconto')
        cy.getVisible(locCadastroColheita.checkTabelaDescontoPesagem).click()

        cy.wait('@conversor')
      }
    }

    if (seedTest.retornoCliente) {
      const quantidade = seedTest.retornoCliente
      cy.log('informar o numero do romaneio do retorno do cliente')
      cy.getVisible(locCadastroColheita.inputNumeroRomaneio).clear()
        .type(quantidade.numeroRomaneio)

      cy.log('informar o peso bruto da colheita do retorno do cliente')
      cy.getVisible(locCadastroColheita.inputPesoBrutoRetorno).clear().click()
        .type(quantidade.pesoBrutoRetorno)

      cy.log('informar o peso do veiculo do retorno do cliente')
      cy.getVisible(locCadastroColheita.inputTaraVeiculoRetorno).clear().click()
        .type(quantidade.taraVeiculoRetorno)

      cy.wait('@conversor')

      cy.log('validar o peso total apos o peso bruto da colheita e peso do veiculo')
      cy.getVisible(locCadastroColheita.spanSubTotalRetorno).click().should(($el) => {
        expect($el).to.contain.text(quantidade.subtotalRetorno)
      })

      if (quantidade.descontoClassificacaoRetorno) {
        cy.log('informar o desconto de classificação')
        cy.getVisible(locCadastroColheita.inputDescontoClassificacaoRetorno).clear()
          .type(quantidade.descontoClassificacaoRetorno)

        cy.wait('@conversor')

        if (quantidade.tabelaDescontoRetorno) {
          cy.log('selecionar o checkBox da tabela de desconto')
          cy.getVisible(locCadastroColheita.checkTabelaDescontoRetorno).click()

          cy.wait('@conversor')
        }
      }
    }

    if (seedTest.partilha) {
      const partilhas = seedTest.partilha
      partilhas.forEach((partilha, index) => {
        cy.log('informar a quantidade partilhada da colheita para cada contrato')
        cy.get(locCadastroColheita.inputQuantidadePartilha).eq(index)
          .clear({ force: true })
          .type(`{movetoend}${partilha.partilhaValor}`)
      })

      cy.wait('@conversor')
    }

    cy.log('validar o subTotal final')
    cy.getVisible(locCadastroColheita.spanSubtotal).click().should(($el) => {
      expect($el).to.contain.text(seedTest.subTotal)
    })

    cy.log('validar o total de desconto final')
    cy.getVisible(locCadastroColheita.spanTotalDesconto).should(($el) => {
      expect($el).to.contain.text(seedTest.totalDesconto)
    })

    cy.log('validar o total liquido final')
    cy.getVisible(locCadastroColheita.spanTotalLiquido).should(($el) => {
      expect($el).to.contain.text(seedTest.totalLiquido)
    })

    cy.log('validar conversao total de acordo com a unidade de medida da varidade colhida')
    cy.getVisible(locCadastroColheita.spanTotalCultura).should(($el) => {
      expect($el).to.contain.text(seedTest.totalCultura)
    })

    cy.log('Clicar no botão de salvar colheita')
    cy.getVisible(locCadastroColheita.buttonAdicionar).click()

    if (seedTest.modal) {
      cy.getVisible(locCadastroColheita.msgAlert, { timeout: 30000 }).should(($el) => {
        expect($el).to.contain.text('"A Fixar" para o Armazem cliente.')
      })

      cy.getVisible(locCadastroColheita.btnSim).click()

    } else {
      cy.get(locCadastroColheita.msgSucesso, { timeout: 30000 }).should(($el) => {
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

    cy.log('Selecionar fazenda')
    cy.getVisible(locListagemColheita.selectFazenda).click()
      .get(locListagemColheita.selecionarFazenda).contains(seedTest.fazenda).click()
      .wait(['@listUnidadeArmazenamento', '@listColheitas'])

    cy.log('Selecionar safra')
    cy.getVisible(locListagemColheita.selectSafra).click()
      .get(locListagemColheita.selecionarSafra).contains(seedTest.safra).click()
      .wait(['@listCiclos', '@listColheitas', '@iconeCultura'])

    cy.log('Abrir colheita')
    cy.get(locListagemColheita.buttonAbrirDetalhes).click({ force: true })

    cy.log('Excluir colheita')
    cy.get(locDetalhesColheita.buttonExcluir).click()

    cy.log('Confirmar exclusão')
    cy.get(locDetalhesColheita.buttonConfirmarExclusao).click()

    cy.log('Validar mensagem exclusão')
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

    cy.log('Navegar para dashboard de Colheita')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconeCultura')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/list?**`)
      .as('listCiclos')
    cy.intercept('GET', '/api/producao-agricola/v1/colheitas/List?**')
      .as('listColheitas')
    cy.intercept('GET', '/api/fazenda/v1/UnidadeArmazenamento/List?**')
      .as('listUnidadeArmazenamento')

    cy.log('Selecionar fazenda')
    cy.getVisible(locListagemColheita.selectFazenda).click()
      .get(locListagemColheita.selecionarFazenda).contains(seedTest.fazenda).click()

    cy.wait('@listUnidadeArmazenamento')
    cy.wait('@listColheitas')

    cy.log('Selecionar safra')
    cy.getVisible(locListagemColheita.selectSafra).click()
      .get(locListagemColheita.selecionarSafra).contains(seedTest.safra).click()

    cy.wait('@listCiclos')
    cy.wait('@listColheitas')

    if (seedTest.semCards) {
      cy.getVisible(locListagemColheita.mensagemSemDados).should(($el) => {
        expect($el).to.contain.text(seedTest.mensagem)
      })
    } else {
      cy.log('Validar card colheita - destino')
      cy.getVisible(locListagemColheita.spanDestino).should(($el) => {
        expect($el).to.contain.text(seedTest.destino)
      })

      cy.log('Validar card colheita - placa')
      cy.getVisible(locListagemColheita.spanPlaca).should(($el) => {
        expect($el).to.contain.text(seedTest.placa)
      })

      cy.log(' Validar card colheita - um ou mais contratos destino')
      if (seedTest.contrato) {
        cy.get(locListagemColheita.spanContratoDestino).should('contain', seedTest.contratoDestino1)
          .and('contain', seedTest.contratoDestino2)
      } else {
        cy.getVisible(locListagemColheita.spanContratoDestino).should(($el) => {
          expect($el).to.contain.text(seedTest.contratoDestino)
        })
      }

      cy.log('Validar card colheita - cultura')
      cy.getVisible(locListagemColheita.spanCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.cultura)
      })

      cy.log('Validar card colheita - quantidade')
      cy.getVisible(locListagemColheita.spanQuantidade).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      cy.log('Validar card colheita - quantidade cultura')
      cy.getVisible(locListagemColheita.spanQuantidadeCultura).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeCultura)
      })
    }
  }
}

export default new Colheita()
