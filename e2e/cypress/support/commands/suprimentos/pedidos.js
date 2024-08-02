/// <reference types="cypress" />

import locatorPedidos from '../../locators/suprimentos/pedidos/locators-pedidos.js'

const url = '/suprimentos/pedidos'
const locatorTituloPagina = locatorPedidos.dashboard.titulo
const tituloPagina = 'Pedidos'

class Pedidos {
  /**
   * Realiza o cadastro de um pedido
   * @param {} seedTest
   * */
  cadastrar(seedTest) {

    var listaMateriais = seedTest.listaMateriais
    var ciclos = seedTest.ciclos

    cy.intercept('POST', '/api/pedido-compra/v1/Pedidos/Listagem').as('listaPedidos')
    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Planejamento/Safra/ciclosRateio?**`).as('ciclosRateio')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/List?SafraId=**`).as('getSafra')

    // Navegar para Pedidos
    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Pedidos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaPedidos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    // botao adicionar pedido
    cy.getVisible(locatorPedidos.dashboard.botaoNovoPedido).click()

    // data do pedido
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputDataPedido)
      .clear().type(seedTest.dataPedido)

    // fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFornecedor).click()
      .contains(seedTest.nomeFornecedor).click()

    // cnpj fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.cnpjFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.cnpjFornecedor)
    })

    // numero pedido fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputNumeroPedidoFornecedor)
      .clear().type(seedTest.numeroPedidoFornecedor)

    // safra
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectSafra).click()
      .contains(seedTest.safra).click({ force: true })

    cy.wait('@getSafra', { timeout: 30000 })

    // fazenda
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFazenda).click()
      .contains(seedTest.fazenda).click({ force: true })

    // mesmo local de entrega
    if (seedTest.mesmoLocalEntrega) {
      // marcar checkbox local de entrega
      cy.getVisible(locatorPedidos.registrarEditarPedido.checkBoxMesmoLocalEntrega).click()

      // validar local de entrega
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectLocalEntrega).should(($el) => {
        expect($el).to.contain.text(seedTest.localEntrega)
      })
    } else {
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectLocalEntrega).click()
        .contains(seedTest.localEntrega).click()
    }

    // empresa
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // inscricao estadual
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectInscricaoEstadual).click()
      .contains(seedTest.inscricaoEstadual).click()

    // data da entrega
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputDataEntrega)
      .clear().type(`${seedTest.dataEntrega}{enter}`)

    // Aguardar a chamada à rota ser feita e obter o response
    cy.wait('@ciclosRateio').then((interception) => {
      // Extrair o array de ciclos do response
      const responseCiclos = interception.response.body

      // Adicionar cada objeto ao array ciclos
      ciclos = responseCiclos.map(ciclo => ({
        nomeCiclo: ciclo.descricao,
        porcentagemCiclo: ciclo.percentual
      }))

      // Usar cy.wrap() para tornar ciclos disponível para outros comandos
      cy.wrap(ciclos).as('ciclos')
    })


    // material
    listaMateriais.forEach((listaMaterial, index) => {
      if (index >= 1) {
        // adicionar material
        cy.getVisible(locatorPedidos.registrarEditarPedido.botaoAddMaterial).click()
      }

      // selecionar material
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectMaterial).eq(index).click()
      cy.getVisible(locatorPedidos.registrarEditarPedido.pesquisarMaterial)
        .clear().type(listaMaterial.material)
      cy.getVisible(locatorPedidos.registrarEditarPedido.listItemsMaterial)
        .findAllByText(listaMaterial.material).click()

      // unidade
      cy.getVisible(locatorPedidos.registrarEditarPedido.labelUnidadeMaterial).eq(index).should(($el) => {
        expect($el).to.contain.text(listaMaterial.unidade)
      })

      // quantidade
      cy.getVisible(locatorPedidos.registrarEditarPedido.inputQuantidadeMaterial).eq(index)
        .clear().type(listaMaterial.quantidade)

      // preco unitario
      cy.getVisible(locatorPedidos.registrarEditarPedido.inputPrecoUnitarioMaterial).eq(index)
        .clear().type(listaMaterial.precoUnitario)

      // valor total
      cy.getVisible(locatorPedidos.registrarEditarPedido.valorTotal).click().eq(index).should(($el) => {
        expect($el).to.contain.text(`R$ ${Number(listaMaterial.valorTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
      })
    })

    // valor total materiais
    cy.getVisible(locatorPedidos.registrarEditarPedido.valorTotalMateriais).should(($el) => {
      expect($el).to.contain.text(`R$ ${Number(seedTest.valorTotalMateriais).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    })

    // forma de pagamento
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFormaPagamento).click()
      .contains(seedTest.formaPagamento).click()

    // valor parcela
    cy.getVisible(locatorPedidos.registrarEditarPedido.valorParcela).should(($el) => {
      expect($el).to.contain.text(`R$ ${Number(seedTest.valorParcela).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    })

    // categoria
    if (seedTest.categoriaPorMaterial) {
      cy.getVisible(locatorPedidos.registrarEditarPedido.categoriaSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTest.categoria)
      })
    } else {
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectCategoria).click()
        .contains(seedTest.categoria).click()
    }

    // porcentagem categoria
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputPorcentagemCategoria)
      .should(($el) => {
        expect($el).to.have.value(`${Number(seedTest.porcentagemCategoria).toFixed(2).replace('.', ',')}%`)
      })

    // valor categoria
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputValorCategoria).should(($el) => {
      expect($el).to.have.value(`R$ ${Number(seedTest.valorCategoria).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`)
    })

    // rateio entre ciclos
    cy.get(locatorPedidos.registrarEditarPedido.checkBoxRateioEntreCiclos).should(($el) => {
      expect($el).to.have.class('is-checked')
    })

    cy.get('@ciclos').then((ciclos) => {
      seedTest.ciclos = ciclos
      cy.log(ciclos)
      // validar nome, porcentagem e valor dos ciclos

      ciclos.forEach((ciclo, index) => {
        // nome ciclo
        cy.get(locatorPedidos.registrarEditarPedido.selectCiclo).eq(index).should(($el) => {
          expect($el).to.contain.text(ciclo.nomeCiclo)
        })

        // porcentagem ciclo
        cy.get(locatorPedidos.registrarEditarPedido.inputPorcentagemCiclo).eq(index).should(($el) => {
          const valorEsperado = `${ciclo.porcentagemCiclo.toFixed(2).replace('.', ',')}%`
          expect($el).to.have.value(valorEsperado)
        })

        // valor ciclo calculado com base na porcentagem e valor total
        const valorEsperado = (seedTest.valorTotalMateriais * ciclo.porcentagemCiclo / 100).toFixed(2)
        seedTest.ciclos[index].valor

        cy.log(valorEsperado)
        cy.log(seedTest.valorTotalMateriais)
        cy.log(ciclo.porcentagemCiclo)

        // valor ciclo
        cy.get(locatorPedidos.registrarEditarPedido.inputValorCiclo).eq(index).should(($el) => {
          // Extrair o valor, remover o símbolo da moeda e substituir a vírgula por ponto
          const valorTexto = $el.val().replace('R$ ', '').replace('.', '').replace(',', '.')

          // Converter para número e garantir duas casas decimais
          const valorCiclo = parseFloat(valorTexto).toFixed(2)
          seedTest.ciclos[index].valor = valorCiclo
          expect(parseFloat(valorCiclo)).to.be.closeTo(parseFloat(valorEsperado), 0.01)
        })
      })
    })

    // salvar pedido
    cy.getVisible(locatorPedidos.registrarEditarPedido.botaoFinalizarAdicionar).click()

    cy.get(locatorPedidos.registrarEditarPedido.botaoFinalizarAdicionar)
      .should('not.exist')

    // mensagem sucesso
    cy.get(locatorPedidos.dashboard.mensagemSucesso).should(($el) => {
      expect($el).to.contain.text('Pedido salvo com sucesso')
    })

  }

  /**
   * Realiza exclusao de um pedido
   * @param {} seedTest
   * */
  excluir(seedTest) {

    cy.intercept('POST', '/api/pedido-compra/v1/Pedidos/Listagem').as('listaPedidos')
    cy.intercept('DELETE', '/api/pedido-compra/v1/Pedidos/**').as('deletePedido')

    // Navegar para Pedidos
    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Pedidos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaPedidos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    // pesquisar por Numero Pedido
    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear().type(seedTest.numeroPedidoFornecedor)

    cy.wait('@listaPedidos', { timeout: 20000 })

    cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')

    // Selecionar todos os <div class="line--wrapper"> dentro da <section>
    cy.get('section.list')
      .find('div.line--wrapper').each(($wrapper) => {
        // Verificar se o número do fornecedor está presente dentro do <div class="line--wrapper">
        cy.wrap($wrapper)
          .find('div.line--item-provider_number .line--text')
          .invoke('text')
          .then((text) => {
            if (text.trim() === seedTest.numeroPedidoFornecedor) {
              // Se encontrar o número do fornecedor, clicar no <div class="line--wrapper">
              cy.wrap($wrapper).click()
            }
          })
      })


    cy.wait('@getPedido', { timeout: 30000 })

    cy.getVisible(locatorPedidos.detalhesPedido.botaoExcluir).click()
    cy.getVisible('button.el-button--primary').click()

    // Esperar a requisição DELETE ser realizada e validar a resposta
    cy.wait('@deletePedido', { timeout: 20000 }).then((interception) => {
      // Verificar o status da resposta
      expect(interception.response.statusCode).to.eq(200)
    })

    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear()

    cy.wait('@listaPedidos', { timeout: 20000 })

    cy.get(locatorPedidos.detalhesPedido.botaoExcluir)
      .should('not.exist')
  }

  /**
   * Valida os detalhes de um pedido
   * @param {} seedTest
   * */
  validarDetalhes(seedTest) {
    var ciclos = seedTest.ciclos
    var notas = seedTest.notas
    var listaMateriais = seedTest.listaMateriais

    cy.intercept('POST', '/api/pedido-compra/v1/Pedidos/Listagem').as('listaPedidos')
    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Planejamento/Safra/ciclosRateio?**`).as('ciclosRateio')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/List?SafraId=**`).as('getSafra')
    cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')

    // Navegar para Pedidos
    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Pedidos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaPedidos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    // pesquisar por Numero Pedido
    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear().type(seedTest.numeroPedidoFornecedor)

    cy.wait('@listaPedidos', { timeout: 20000 })

    cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')

    // Selecionar todos os <div class="line--wrapper"> dentro da <section>
    cy.get('section.list')
      .find('div.line--wrapper').each(($wrapper) => {
        // Verificar se o número do fornecedor está presente dentro do <div class="line--wrapper">
        cy.wrap($wrapper)
          .find('div.line--item-provider_number .line--text')
          .invoke('text')
          .then((text) => {
            if (text.trim() === seedTest.numeroPedidoFornecedor) {
              // Se encontrar o número do fornecedor, clicar no <div class="line--wrapper">
              cy.wrap($wrapper).click()
            }
          })
      })

    cy.wait('@getPedido', { timeout: 30000 })

    // validar status
    cy.getVisible(locatorPedidos.detalhesPedido.statusPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.statusPedido)
    })

    // validar data do pedido
    cy.getVisible(locatorPedidos.detalhesPedido.dataPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.dataPedido)
    })

    // validar nome fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.fornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.nomeFornecedor)
    })

    // validar cnpj fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.cnpjFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.cnpjFornecedor)
    })

    // validar numero pedido fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.numeroPedidoFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.numeroPedidoFornecedor)
    })

    // validar safra
    cy.getVisible(locatorPedidos.detalhesPedido.safra).should(($el) => {
      expect($el).to.contain.text(seedTest.safra)
    })

    // validar empresa
    cy.getVisible(locatorPedidos.detalhesPedido.empresa).should(($el) => {
      expect($el).to.contain.text(seedTest.empresa)
    })

    // validar inscricao estadual
    cy.getVisible(locatorPedidos.detalhesPedido.inscricaoEstadual).should(($el) => {
      expect($el).to.contain.text(seedTest.inscricaoEstadual)
    })

    // validar data entrega
    cy.getVisible(locatorPedidos.detalhesPedido.dataEntrega).should(($el) => {
      expect($el).to.contain.text(seedTest.dataEntrega)
    })

    // validar materiais da lista de materiais
    if (listaMateriais) {
      listaMateriais.forEach((listaMaterial, index) => {
        // validar nome material
        cy.getVisible(locatorPedidos.detalhesPedido.material).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.material)
        })

        // validar  unidade material
        cy.getVisible(locatorPedidos.detalhesPedido.unidade).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.unidade)
        })

        // validar quantidade material
        cy.getVisible(locatorPedidos.detalhesPedido.quantidade).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.quantidade)
        })

        // validar preco unitario material
        cy.getVisible(locatorPedidos.detalhesPedido.precoUnitario).eq(index).should(($el) => {
          const actualPrice = parseFloat($el.text().trim().replace('R$', '').replace(',', '.'));
          const expectedPrice = parseFloat(listaMaterial.precoUnitario);

          expect(actualPrice).to.equal(expectedPrice);
        })

        // validar valor total material
        cy.getVisible(locatorPedidos.detalhesPedido.valorTotal).eq(index).should(($el) => {
          const formattedTotal = `R$ ${Number(listaMaterial.valorTotal).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          expect($el.text().trim()).to.contain(formattedTotal)
        })
      })

      // validar valor total dos materiais
      cy.getVisible(locatorPedidos.detalhesPedido.valorTotalMateriais).should(($el) => {
        const formattedTotal = `R$ ${Number(seedTest.valorTotalMateriais).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        expect($el.text().trim()).to.contain(formattedTotal)
      })

    }

    // validar notas da lista de materiais
    if (notas) {
      notas.forEach(nota => {
        // numero nota
        cy.get(locatorPedidos.detalhesPedido.notaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.numeroNota)
        })

        // quantidade material nota
        cy.get(locatorPedidos.detalhesPedido.quantidadeNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.quantidadeNota)
        })

        // preco unitario material nota
        cy.get(locatorPedidos.detalhesPedido.precoUnitarioNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.precoUnitarioNota)
        })

        // desconto nota
        cy.get(locatorPedidos.detalhesPedido.descontoNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.descontoNota)
        })

        // valot total material nota
        cy.get(locatorPedidos.detalhesPedido.valorTotalNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.valorTotalNota)
        })

      })

      // validar valor total de notas recebidas
      cy.getVisible(locatorPedidos.detalhesPedido.valorTotalNotasRecebidas).should(($el) => {
        const formattedTotal = `R$ ${Number(seedTest.valorTotalNotasRecebidas).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        expect($el.text().trim()).to.contain(formattedTotal)
      })
    }


    // validar forma de pagamento
    cy.getVisible(locatorPedidos.detalhesPedido.formaPagamento).should(($el) => {
      expect($el).to.contain.text(seedTest.formaPagamento)
    })

    // validar quantidade de parcelas
    cy.getVisible(locatorPedidos.detalhesPedido.quantidadeParcelas).should(($el) => {
      expect($el).to.contain.text(seedTest.quantidadeParcelas)
    })

    // validar valor da parcela
    cy.getVisible(locatorPedidos.detalhesPedido.valorParcela).should(($el) => {
      const formattedTotal = `R$ ${Number(seedTest.valorParcela).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      expect($el.text().trim()).to.contain(formattedTotal)
    })

    // validar categoria
    cy.getVisible(locatorPedidos.detalhesPedido.categoria).should(($el) => {
      expect($el).to.contain.text(seedTest.categoria)
    })

    // validar porcentagem categoria
    cy.getVisible(locatorPedidos.detalhesPedido.porcentagemCategoria).should(($el) => {
      expect($el.text().trim()).to.contain(`${seedTest.porcentagemCategoria} %`)
    })

    // validar valor categoria
    cy.getVisible(locatorPedidos.detalhesPedido.valorCategoria).should(($el) => {
      const formattedTotal = `R$ ${Number(seedTest.valorCategoria).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      expect($el.text().trim().replace(/\s/g, '')).to.equal(formattedTotal.replace(/\s/g, ''))
    })

    if (ciclos) {
      // validar nome, porcentagem e valor dos ciclos
      ciclos.forEach(ciclo => {
        // nome ciclo
        cy.get(locatorPedidos.detalhesPedido.ciclo).should(($el) => {
          expect($el).to.contain.text(ciclo.nomeCiclo)
        })

        // validar porcentagem ciclo
        cy.get(locatorPedidos.detalhesPedido.porcentagemCiclo).should(($el) => {
          expect($el.text().trim()).to.contain(`${ciclo.porcentagemCiclo} %`)
        })

        // valor ciclo
        cy.get(locatorPedidos.detalhesPedido.valorCiclo).should(($el) => {
          const formattedCicloValor = `${ciclo.valor}`.replace('.', ',');
          expect($el.text().trim()).to.contain(formattedCicloValor);
        })

      })
    }

    cy.get(locatorPedidos.detalhesPedido.voltar).click({ force: true })
  }

  /**
   * Valida a exclusao de um pedido
   * */
  validarExclusao() {
    // navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // alterar visualizacao para cards
    cy.getVisible(locatorPedidos.dashboard.botaoMudarVisualizacao).click()

    // validar inexistencia do card de pedidos
    cy.get(locatorPedidos.dashboard.cardPedidos).should('not.exist')

    // validar mensagem de nenhum pedido encontrado
    cy.getVisible(locatorPedidos.dashboard.mensagemNenhumPedido)
      .should('contain', 'Você ainda não possui nenhum pedido.')
  }

  /**
   * Valida a listagem dos pedidos cadastrados
   * @param {} seedTest
   * */
  validarListagem(seedTest) {

    cy.intercept('POST', '/api/pedido-compra/v1/Pedidos/Listagem').as('listaPedidos')

    // Navegar para Pedidos
    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Pedidos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaPedidos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    if (seedTest === "Toda Listagem") {

    } else {

      // Selecionar todos os <div class="line--wrapper"> dentro da <section>
      cy.get('section.list')
        .find('div.line--wrapper').each(($linha) => {
          // Verificar se o número do fornecedor está presente dentro do <div class="line--wrapper">
          cy.wrap($linha)
            .find('div.line--item-provider_number .line--text')
            .invoke('text')
            .then((text) => {
              if (text.trim() === seedTest.numeroPedidoFornecedor) {

                // Validar status
                cy.wrap($linha).find('div.line--item-status').should('contain.text', seedTest.statusPedido)

                // Validar fazenda
                cy.wrap($linha)
                  .find('div.line--item-farm')
                  .invoke('text')
                  .then((text) => {
                    // Limpar o texto removendo espaços em branco extras e caracteres especiais
                    const cleanedText = text.replace(/\s+/g, ' ').trim()
                    expect(cleanedText).to.contain(seedTest.fazenda)
                  })

                // Validar nome fornecedor
                cy.wrap($linha).find('div.line--item-provider').should('contain.text', seedTest.nomeFornecedor)

                // Validar CNPJ fornecedor
                cy.wrap($linha).find('div.line--item-cnpj').should('contain.text', seedTest.cnpjFornecedor)

                // Validar safra
                cy.wrap($linha).find('div.line--item-harvest').should('contain.text', seedTest.safra)

                // Validar número pedido fornecedor
                cy.wrap($linha).find('div.line--item-provider_number').should('contain.text', seedTest.numeroPedidoFornecedor)

                // Validar data do pedido
                cy.wrap($linha).find('div.line--item-date').should('contain.text', seedTest.dataPedido)

                return false // Isso interrompe o loop each()
              }
            })
        })
    }
  }
}

export default new Pedidos()
