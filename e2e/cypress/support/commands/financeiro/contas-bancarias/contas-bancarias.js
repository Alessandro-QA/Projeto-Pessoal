/// <reference types="cypress" />

import locContaBancaria from '../../../locators/financeiro/contas-bancarias/locators-cadastro-conta-bancaria.js'

class ContaBancaria {
  /**
   * Metodo para o cadastro e edição de uma conta Bancaria
   * @param {*} seedTestContaBancaria
   */
  cadastroEditar(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.log('Navegar para Contas Bancárias')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    if (seedTestContaBancaria.adicionar) {
      cy.log('Adicionar uma conta nova')
      cy.log('Clicar no botao adicionar conta')
      cy.getVisible(locContaBancaria.dashboard.novaConta).click()

      cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
        expect($el).to.contain.text('Nova Conta')
      })
    }
    else {
      cy.log('Editar uma conta existente')
      cy.log('Digitar no input pesquisar')
      cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
        .type(seedTestContaBancaria.nomeConta)

      if (seedTestContaBancaria.numeroCartao) {
        cy.log('Selecionar a conta bancaria listada')
        cy.log('Clicar no card conta bancaria')
        cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito)
          .contains(seedTestContaBancaria.nomeConta).click()
      } else {
        cy.log('Selecionar card cartao de credito')
        cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
          .contains(seedTestContaBancaria.nomeConta).click()
      }

      cy.wait('@detalhesConta')

      cy.log('Validar nome da conta na tela de detalhes')
      cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
      })

      cy.log('Clicar no botão de editar conta bancaria')
      cy.getVisible(locContaBancaria.detalhesConta.buttonEditar).click()

      cy.wait('@detalhesConta')
    }

    if (seedTestContaBancaria.adicionar) {
      cy.log('Selecionar tipo de conta')
      cy.get(locContaBancaria.contaBancaria.tipoConta).click()
        .contains(seedTestContaBancaria.tipoConta).click()
    } else {
      cy.log('Validar o tipo de conta')
      cy.getVisible(locContaBancaria.contaBancaria.tipoConta).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.tipoConta)
      })
    }

    cy.log('Digitar nome da conta bancaria')
    cy.getVisible(locContaBancaria.contaBancaria.nomeConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    if (seedTestContaBancaria.adicionar) {
      cy.log('Selecionar empresa titular')
      cy.getVisible(locContaBancaria.contaBancaria.empresaTitular).click()
        .contains(seedTestContaBancaria.empresaTitular).click()
    } else {
      cy.log('Validar empresa titular da conta bancária')
      cy.getVisible(locContaBancaria.contaBancaria.empresaTitular).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.empresaTitular)
      })
    }

    cy.log('Selecionar empresas habilitadas')
    cy.getVisible(locContaBancaria.contaBancaria.empresasHabilitadas).click()
      .contains(seedTestContaBancaria.empresasHabilitadas).click()

    if (seedTestContaBancaria.contaPrincipal) {
      cy.getVisible(locContaBancaria.contaBancaria.contaPrincipal).click()
    }

    if (seedTestContaBancaria.dataSaldoInicial) {
      cy.log('Se a conta for do Tipo Conta Corrente/Tesouraria')
      cy.log('Digitar data do saldo inicial')
      cy.getVisible(locContaBancaria.contaBancaria.dataSaldoInicial).clear()
        .type(`${seedTestContaBancaria.dataSaldoInicial}{enter}`)

      cy.log('Digitar saldo inicial')
      cy.getVisible(locContaBancaria.contaBancaria.saldoInicial).clear()
        .type(seedTestContaBancaria.saldoInicial)

      cy.log('Validar saldo Atual')
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      if (seedTestContaBancaria.banco) {
        cy.log('Se a conta for do tipo Conta Corrente')
        cy.log('Selecionar banco')
        cy.get(locContaBancaria.contaBancaria.banco).click()
          .contains(seedTestContaBancaria.banco).click()

        cy.log('Digitar agencia')
        cy.getVisible(locContaBancaria.contaBancaria.agencia).clear()
          .type(seedTestContaBancaria.agencia)

        cy.log('Digitar digito da agencia')
        cy.getVisible(locContaBancaria.contaBancaria.agenciaDigito).clear()
          .type(seedTestContaBancaria.agenciaDigito)

        cy.log('numero da conta')
        cy.getVisible(locContaBancaria.contaBancaria.numeroConta).clear()
          .type(seedTestContaBancaria.numeroConta)

        cy.log('Digitar digito da conta')
        cy.getVisible(locContaBancaria.contaBancaria.contaDigito).clear()
          .type(seedTestContaBancaria.contaDigito)
      }
    }
    else {
      cy.log('Se a conta for do Tipo cartão de crédito')
      cy.log('Validar saldo Atual')
      cy.getVisible(locContaBancaria.contaBancaria.saldoAtual).should(($el) => {
        expect($el).to.have.value(seedTestContaBancaria.saldoAtual)
      })

      if (seedTestContaBancaria.adicionar) {
        cy.log('Selecionar a bandeira do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.selectBandeira).click()
          .find('li').contains(seedTestContaBancaria.bandeira).click()

        cy.log('Selecionar a Data do fechamento')
        cy.getVisible(locContaBancaria.contaBancaria.dataFechamento).clear()
          .type(seedTestContaBancaria.dataFechamento)

        cy.log('Informar a data de vencimento do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.dataVencimento).clear()
          .type(seedTestContaBancaria.dataVencimento)

        cy.log('Informar o numero do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.numeroCartao).clear()
          .type(seedTestContaBancaria.numeroCartao)

        cy.log('Informar o limite do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.limiteCartao).clear()
          .type(seedTestContaBancaria.limiteCartao)

        cy.log('Selecionar a conta que será vinculada ao cartão')
        cy.getVisible(locContaBancaria.contaBancaria.selectContaVinculada).click()
          .find('li').contains(seedTestContaBancaria.contaVinculada).click({ force: true })
      } else {
        cy.log('Validar a bandeira do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.selectBandeira).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.bandeira)
        })

        cy.log('Validar a data de fechamento do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.dataFechamento).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.dataFechamento)
        })

        cy.log('Validar a data de vencimento do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.dataVencimento).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.dataVencimento)
        })

        cy.log('Validar o numero do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.numeroCartao).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.numeroCartao)
        })

        cy.log('Validar o limite do cartão')
        cy.getVisible(locContaBancaria.contaBancaria.limiteCartao).should(($el) => {
          expect($el).to.have.value(seedTestContaBancaria.limiteCartao)
        })

        cy.log('Validar a conta vinculada ao cartão')
        cy.getVisible(locContaBancaria.contaBancaria.selectContaVinculada).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.contaVinculada)
        })
      }
    }

    if (seedTestContaBancaria.incluirSaldo) {
      cy.log('Clicar no icone de adicionar o valor do saldo a dashboard financeira')
      cy.getVisible(locContaBancaria.contaBancaria.incluirSaldo).click()
    }

    if (seedTestContaBancaria.ativarInativar) {
      cy.log('Inativar ou ativar a conta bancaria')
      cy.getVisible(locContaBancaria.contaBancaria.ativarInativar).click()
    }

    cy.log('Clicar no botão adicionar conta')
    cy.getVisible(locContaBancaria.contaBancaria.adicionar)
      .click()

    cy.wait('@detalhesConta')

    cy.log('Validar mensagem de sucesso')
    cy.get(locContaBancaria.contaBancaria.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Conta salva com sucesso')
    })

    cy.log('Validar que o botão de adicionar não exista mais')
    cy.get(locContaBancaria.contaBancaria.adicionar).should('not.exist')
  }

  /**
   * 
   * @param {*} seedTestContaBancaria 
   */
  excluir(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.log('Navegar para Contas Bancárias')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.wait('@detalhesConta')

    cy.log('Digitar no input pesquisar')
    cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    cy.log('Selecionar a conta bancaria listada')
    if (seedTestContaBancaria.numeroCartao) {
      cy.log('card conta bancaria')
      cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito)
        .contains(seedTestContaBancaria.nomeConta).click()
    } else {
      cy.log('Clicar no card cartao de credito')
      cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
        .contains(seedTestContaBancaria.nomeConta).click()
    }

    cy.wait('@detalhesConta')

    cy.log('Validar nome da conta na tela de detalhes')
    cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
      expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
    })

    cy.log('Clicar no botão de excluir conta bancaria')
    cy.getVisible(locContaBancaria.detalhesConta.buttonExcluir).click()

    if (seedTestContaBancaria.confirmarExclusao) {
      cy.log('Cancelar exclusão')
      cy.getVisible(locContaBancaria.detalhesConta.confirmarExclusao).click()
    } else {
      cy.log('Confirmar exclusão')
      cy.getVisible(locContaBancaria.detalhesConta.confirmarExclusao).click()
    }

    cy.wait('@detalhesConta')

    cy.log('Validar mensagem de sucesso')
    cy.get(locContaBancaria.detalhesConta.mensagemExclusao).should(($el) => {
      expect($el).exist.and.to.contain.text('Exclusão realizada com sucesso')
    })
  }

  /**
   * 
   * @param {*} seedTestContaBancaria 
   */
  inativar(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.log('Navegar para Contas Bancárias')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Digitar no input pesquisar')
    cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
      .type(seedTestContaBancaria.nomeConta)

    cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria)
      .contains(seedTestContaBancaria.nomeConta).click()

    cy.wait('@detalhesConta')

    cy.log('Validar nome da conta na tela de detalhes')
    cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
      expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
    })

    cy.log('Clicar no botão de editar conta bancaria')
    cy.getVisible(locContaBancaria.detalhesConta.buttonEditar).click()

    cy.wait('@detalhesConta')

    cy.getVisible(locContaBancaria.contaBancaria.ativarInativar).click()

    cy.log('Clicar botão adicionar conta')
    cy.getVisible(locContaBancaria.contaBancaria.adicionar)
      .click()

    cy.wait('@detalhesConta')

    cy.log('Validar mensagem de sucesso')
    cy.get(locContaBancaria.contaBancaria.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Conta salva com sucesso')
    })

    cy.log('Validar que o botão de adicionar não exista mais')
    cy.get(locContaBancaria.contaBancaria.adicionar).should('not.exist')
  }

  /**
   * Validar Listagem de Contas Bancarias
   * @param {*} seedTestContaBancaria
   */
  validarListagem(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.log('Navegar para Contas Bancárias')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.wait('@detalhesConta')

    cy.wait(3000)

    if (seedTestContaBancaria.pesquisar) {
      cy.log('Pesquisar Conta Bancaria')
      cy.getVisible(locContaBancaria.dashboard.pesquisarConta).clear()
        .type(seedTestContaBancaria.nomeConta)

      if (seedTestContaBancaria.validarCartao) {
        cy.log('Chamada da função para validar os lançamentos do cartão de crédito')
        ContaBancaria.lancamentosCartaoCredito(seedTestContaBancaria.validarCartao)
      }
    }

    if (seedTestContaBancaria.filtros) {
      cy.log('Abrir filtros')
      cy.getVisible(locContaBancaria.dashboard.abrirFiltros).click()

      if (seedTestContaBancaria.tipoConta) {
        cy.log('Selecionar filtro de tipo de conta')
        cy.getVisible(locContaBancaria.dashboard.selectFiltroTipo).click()
          .contains(seedTestContaBancaria.tipoConta).click()
      } else if (seedTestContaBancaria.selecionarEmpresa) {
        cy.log('Selecionar filtro de Empresa')
        cy.getVisible(locContaBancaria.dashboard.selectFiltroEmpresa).click()
          .contains(seedTestContaBancaria.selecionarEmpresa).click()
      } else {
        cy.log('Selecionar filtro por status (Ativo ou Inativo)')
        cy.getVisible(locContaBancaria.dashboard.selectFiltroStatus).click()
          .contains(seedTestContaBancaria.status).click()
      }
    }

    if (seedTestContaBancaria.validarContas) {
      cy.log('Validar Contas Bancárias')
      if (seedTestContaBancaria.numeroCartao) {
        cy.log('Validar nomes da conta bancaria no Card')
        cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
        })
      }
      if (seedTestContaBancaria.contaBancaria) {
        cy.log('Validar nomes dos cartão de crédido no Card')
        cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria).should(($el) => {
          expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
        })
      }
    } else if (seedTestContaBancaria.naoExiste) {
      cy.log('Validar que não exista contas bancarias, tesouraria e cartão de crédito')
      if (seedTestContaBancaria.numeroCartao) {
        cy.log('Validar que não existe Conta Bancaria/Tesouraria')
        cy.get(locContaBancaria.dashboard.nomeCartaoCredito).should('not.exist')
      } else {
        cy.log('Validar que não existe Cartão de Crédito')
        cy.get(locContaBancaria.dashboard.nomeContaBancaria).should('not.exist')
      }
    }

    if (seedTestContaBancaria.cardContasBancaria) {
      cy.log('Validar contas bancarias e seus respectivos dados')
      const cardsContas = seedTestContaBancaria.cardContasBancaria
      cardsContas.forEach((cards) => {
        cy.get(locContaBancaria.dashboard.nomeContaBancaria).should('have.length', cardsContas.length)
          .contains(cards.nomeContaBancaria)
          .parents(locContaBancaria.dashboard.cardConta).within(() => {
            if (cards.agencia) {
              cy.log('Validar Agencia da conta bancaria')
              cy.get(locContaBancaria.dashboard.agencia).should(($el) => {
                expect($el).to.contain.text(cards.agencia)
              })

              cy.log('Validar a numeração da conta')
              cy.get(locContaBancaria.dashboard.conta).should(($el) => {
                expect($el).to.contain.text(cards.conta)
              })

              cy.log('Validar a empresa titular da conta')
              cy.get(locContaBancaria.dashboard.empresaTitular).should(($el) => {
                expect($el).to.contain.text(cards.empresaTitular)
              })
            } else {
              cy.log('Validar conta bancaria do tipo Tesouraria')
              cy.get(locContaBancaria.dashboard.dataSaldoInicial).should(($el) => {
                expect($el).to.contain.text(cards.dataSaldoInicial)
              })
            }
          })
      })
    }

    if (seedTestContaBancaria.cardContasCartao) {
      cy.log('Validar cartões de créditos e seus respectivos dados')
      const cardsContas = seedTestContaBancaria.cardContasCartao
      cardsContas.forEach((cards) => {
        cy.get(locContaBancaria.dashboard.nomeCartaoCredito).should('have.length', cardsContas.length)
          .contains(cards.nomeCartaoCredito)
          .parents(locContaBancaria.dashboard.cardCartao).within(() => {
            cy.log('Validar empresa titular do cartão de crédito')
            cy.get(locContaBancaria.dashboard.empresaTitular).should(($el) => {
              expect($el).to.contain.text(cards.empresaTitular)
            })

            cy.log('Validar a data de vencimento do cartão de crédito')
            cy.get(locContaBancaria.dashboard.dataVencimentoCartao).should(($el) => {
              expect($el).to.contain.text(cards.dataVencimento)
            })
          })
      })
    }
  }

  /**
 * Validar lançamentos dos cartão de crédito via tela de Listagem de Contas Bancárias
 * @param {*} validarCartao 
 */
  static lancamentosCartaoCredito(validarCartao) {
    cy.intercept('GET', '/api/financeiro/v1/Movimentacao/Cartao?ContaId=**').as('listagemLancamentos')

    const cartao = validarCartao
    cartao.forEach((cardCartao) => {
      cy.log('Selecionar o cartão e clicar em Ver lançamentos')
      cy.get(locContaBancaria.dashboard.nomeCartaoCredito)
        .contains(cardCartao.nomeCartaoCredito)
        .parents(locContaBancaria.dashboard.cardCartao).within(() => {
          cy.get(locContaBancaria.dashboard.verLancamentos).click()

          cy.wait(10000)
          cy.wait('@listagemLancamentos')
        })

      cy.log('Validação necessária para carregar os dados na tela e evitar quebra por timeOut')
      cy.get(locContaBancaria.lancamentosCartao.saldoDoDia).should('exist').and('be.visible')
      cy.get(locContaBancaria.lancamentosCartao.cardLancamento).should('exist').and('be.visible')

      if (cardCartao.filtros) {
        cy.log('Abrir filtros')
        cy.getVisible(locContaBancaria.lancamentosCartao.abrirFiltros).click()

        var data = new Date()
        var dia = String(data.getDate()).padStart(2, '0')
        var mes = String(data.getMonth() + 1).padStart(2, '0')
        var ano = data.getFullYear()
        var dataAtual = dia + '/' + mes + '/' + ano

        cy.log('Limpar o campo data inicio e inserir nova data')
        cy.getVisible(locContaBancaria.lancamentosCartao.dataInicio).clear()
          .type(dataAtual)

        cy.log('Limpar o campo data fim de inserir nova data')
        cy.getVisible(locContaBancaria.lancamentosCartao.dataFim).clear()
          .type(`${dataAtual}{enter}`)

        cy.wait('@listagemLancamentos')
      }

      const cards = cardCartao.card
      cards.forEach((card) => {
        cy.log('Validar card da movimentação no cartão')
        cy.get(locContaBancaria.lancamentosCartao.cardSpanCategoria).should('have.length', cards.length)
        cy.get(locContaBancaria.lancamentosCartao.cardSpanCategoria)
          .contains(card.spanCategoria)
          .parents(locContaBancaria.lancamentosCartao.cardLancamento).within(() => {
            cy.log('Validar o tipo de operação (Recebimento/Pagamento)')
            cy.get(locContaBancaria.lancamentosCartao.cardDetalhes).should(($el) => {
              expect($el).to.contain.text(card.operacao)
            })

            cy.log('Validar o valor')
            cy.get(locContaBancaria.lancamentosCartao.cardDetalhes).should(($el) => {
              expect($el).to.contain.text(card.valor)
            })
          })
      })
    })

    cy.log('Clicar no butão de voltar a listagem de contas bancarias')
    cy.getVisible(locContaBancaria.lancamentosCartao.buttonVoltar).click()

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/**').as('detalhesConta')

    cy.wait('@detalhesConta')

    cy.getVisible(locContaBancaria.dashboard.titulo).should(($el) => {
      expect($el).to.contain.text('Contas bancárias')
    })
  }
}

export default new ContaBancaria()
