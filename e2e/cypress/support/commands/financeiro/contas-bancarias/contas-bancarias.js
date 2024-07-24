/// <reference types="cypress" />

import locContaBancaria from '../../../locators/financeiro/contas-bancarias/locators-cadastro-conta-bancaria.js'
const dayjs = require('dayjs')

class ContaBancaria {
  constructor() {
    this.idConta = null; // Declaração da variável como propriedade da classe para ser usada em qualquer método
  }
  /**
   * Metodo para o cadastro e edição de uma conta Bancaria
   * @param {*} seedTestContaBancaria
   */
  cadastroEditar(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'


    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`).as('postConta')

    //cy.intercept('PUT', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`).as('putConta')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.desabilitarPopUpNotificacao()
      }
      cy.log(currentPath)
    })

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

      cy.wait('@putConta')

      cy.log('Validar nome da conta na tela de detalhes')
      cy.getVisible(locContaBancaria.detalhesConta.nomeConta).should(($el) => {
        expect($el).to.contain.text(seedTestContaBancaria.nomeConta)
      })

      cy.log('Clicar no botão de editar conta bancaria')
      cy.getVisible(locContaBancaria.detalhesConta.buttonEditar).click()

      cy.wait('@putConta')
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

    cy.log('Validar mensagem de sucesso')
    cy.get(locContaBancaria.contaBancaria.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Conta adicionada com sucesso')
    })

    cy.log('Garantir que a tela foi fechada')
    cy.get(locContaBancaria.contaBancaria.tipoConta).should('not.exist')

    cy.wait('@postConta').then(interception => {
      // Verifica se a requisição retornou com sucesso (status 200)
      expect(interception.response.statusCode).to.eq(200)

      // Captura o response da requisição POST
      const responseBody = interception.response.body
      cy.log(responseBody)
      cy.log(responseBody.data.id)
      this.idConta = responseBody.data.id
    })
  }

  validarCadastro(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.desabilitarPopUpNotificacao()
      }
      cy.log(currentPath)
    })

    cy.log('Pesquisar a Conta Criada')
    cy.get(locContaBancaria.dashboard.pesquisarConta, { timeout: 5000 })
      .should('exist').and('be.visible')
      .click()
      .clear()
      .type(seedTestContaBancaria.nomeConta)
      .type('{enter}')

    if (seedTestContaBancaria.tipoConta == "Cartão de crédito") {
      cy.log('Verifica se a conta do tipo Cartão de Crédito criada existe')
      cy.get(locContaBancaria.dashboard.cardCartao).contains(seedTestContaBancaria.nomeConta).should('exist')
    }
    else {
      cy.log('Verifica se a conta criada existe')
      cy.get(locContaBancaria.dashboard.cardConta).contains(seedTestContaBancaria.nomeConta).should('exist')
    }

    cy.log('Deleta Conta Criada Para Evitar Acumulo de Registro')
    cy.wrap(this.idConta).then((idConta) => {
      cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, idConta).then((responseDelete) => {
        expect(responseDelete.status).to.be.equal(200)
      })
    })

    cy.log('Navegar de volta para Contas Bancárias após exclusão')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)
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
      expect($el).exist.and.to.contain.text('Conta adicionada com sucesso')
    })

    cy.log('Garantir que a tela foi fechada')
    cy.get(locContaBancaria.contaBancaria.tipoConta).should('not.exist')
  }

  /**
   * Validar Listagem de Contas Bancarias
   * @param {*} seedTestContaBancaria
   */
  validarListagem(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        // Realizar requisições para pegar lista de contas
        const tenant = Cypress.env('login_cadastro').tenant

        cy.request({
          method: 'GET',
          url: '/api/financeiro/v1/ContaBancaria/Corrente',
          headers: {
            'authorization': `Bearer ${Cypress.env('access_token')}`,
            'content-type': 'application/json',
            'oferta': '38F68463-F895-47CA-BE8B-D296ED2EC0FB',
            'x-tenant': tenant
          },
        }).then((response) => {
          const responseBody = response.body
          responseBody.forEach((conta) => {
            const newConta = {
              "nomeContaBancaria": conta.nomeConta,
              "agencia": `${conta.agenciaConta}-${conta.digitoAgencia}`,
              "conta": `${conta.numeroConta}-${conta.digitoConta}`,
              "empresaTitular": conta.empresaTitular,
              "ativo": conta.ativo,
              "tipoConta": 'Corrente'
            }
            cy.log(newConta)
            seedTestContaBancaria.cardContasBancaria.push(newConta)
            cy.log(seedTestContaBancaria.cardContasBancaria)
          })

          cy.request({
            method: 'GET',
            url: '/api/financeiro/v1/ContaBancaria/CaixaTesouraria',
            headers: {
              'authorization': `Bearer ${Cypress.env('access_token')}`,
              'content-type': 'application/json',
              'oferta': '38F68463-F895-47CA-BE8B-D296ED2EC0FB',
              'x-tenant': tenant
            },
          }).then((response) => {
            const responseBody = response.body
            responseBody.forEach((conta) => {
              const newConta1 = {
                "nomeContaBancaria": conta.nomeConta,
                "dataSaldoInicial": conta.dataSaldoInicial ? dayjs(conta.dataSaldoInicial).format('DD/MM/YYYY') : null,
                "ativo": conta.ativo,
                "empresaTitular": conta.empresaTitular,
                "tipoConta": 'Tesouraria'
              }
              cy.log(newConta1)
              seedTestContaBancaria.cardContasBancaria.push(newConta1)
              cy.log(seedTestContaBancaria.cardContasBancaria)
            })
            cy.request({
              method: 'GET',
              url: '/api/financeiro/v1/ContaBancaria/Credito',
              headers: {
                'authorization': `Bearer ${Cypress.env('access_token')}`,
                'content-type': 'application/json',
                'oferta': '38F68463-F895-47CA-BE8B-D296ED2EC0FB',
                'x-tenant': tenant
              },
            }).then((response) => {
              const responseBody = response.body
              responseBody.forEach((conta) => {
                const newConta2 = {
                  "nomeCartaoCredito": conta.nomeConta,
                  "empresaTitular": conta.empresaTitular,
                  "dataVencimento": conta.diaVencimentoCartao,
                  "ativo": conta.ativo,
                  "tipoConta": 'Cartão'
                }
                cy.log(newConta2)
                seedTestContaBancaria.cardContasCartao.push(newConta2)
                cy.log(seedTestContaBancaria.cardContasCartao)
              })
            })
          })
        })

      } else {

      }
      cy.wrap(seedTestContaBancaria).as('updatedSeedTestContaBancaria1')

      cy.log(currentPath)

    })

    cy.desabilitarPopUpNotificacao()


    // Limpar filtros ativos
    // Abrir filtros caso esteja fechado
    cy.document().then((doc) => {
      const filtersElement = doc.querySelector('#root-filtros-cnx-page-filter-cnx-container-filters-div-cnx-container-filters')

      if (filtersElement && window.getComputedStyle(filtersElement).display !== 'none') {
        // Elemento de filtros existe e está visível
        cy.log('Os filtros já estão visíveis')
        cy.get(locContaBancaria.dashboard.limparFiltros).click()
      } else {
        // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
        cy.log('Abrir filtros porque não estão visíveis')
        cy.get(locContaBancaria.dashboard.abrirFiltros).click()
        cy.get(locContaBancaria.dashboard.limparFiltros).click()
      }
    })

    // Filtrando baseado na Situação
    cy.get('@updatedSeedTestContaBancaria1').then((updatedSeedTestContaBancaria) => {
      const filtroSituacao = updatedSeedTestContaBancaria.filtroSituacao

      if (filtroSituacao !== false) {
        let tipoConta, tipoContaCartao

        if (filtroSituacao === 'Ativo') {
          cy.log('Filtrando contas ativas')
          tipoConta = updatedSeedTestContaBancaria.cardContasBancaria.filter(conta => conta.ativo === true)
          tipoContaCartao = updatedSeedTestContaBancaria.cardContasCartao.filter(cartao => cartao.ativo === true)
        } else if (filtroSituacao === 'Inativo') {
          cy.log('Filtrando contas inativas')
          tipoConta = updatedSeedTestContaBancaria.cardContasBancaria.filter(conta => conta.ativo === false)
          tipoContaCartao = updatedSeedTestContaBancaria.cardContasCartao.filter(cartao => cartao.ativo === false)
        } else {
          cy.log('Valor inválido para filtro de tipo de conta')
          // Trate aqui o caso em que filtroSituacao não é 'Ativo' nem 'Inativo'
        }

        updatedSeedTestContaBancaria.cardContasBancaria = tipoConta
        updatedSeedTestContaBancaria.cardContasCartao = tipoContaCartao
      } else {
        cy.log('Filtro de tipo de conta não definido')
        // Trate aqui o caso em que filtroSituacao é undefined
      }

      cy.wrap(updatedSeedTestContaBancaria).as('updatedSeedTestContaBancaria2')
    })

    // Filtrando baseado no filtroTipoEmpresa
    cy.get('@updatedSeedTestContaBancaria2').then((updatedSeedTestContaBancaria) => {
      const filtroTipoEmpresa = updatedSeedTestContaBancaria.filtroEmpresa

      if (filtroTipoEmpresa !== false) {
        cy.log(`Filtrando Tipo de Conta pelo valor: ${filtroTipoEmpresa}`)

        // Filtra o array cardContasBancaria pelo campo tipoConta igual a filtroTipoDeConta
        const tipoConta = updatedSeedTestContaBancaria.cardContasBancaria.filter(conta => conta.empresaTitular === filtroTipoEmpresa)

        // Filtra o array cardContasCartao pelo campo tipoConta igual a filtroTipoDeConta
        const tipoContaCartao = updatedSeedTestContaBancaria.cardContasCartao.filter(cartao => cartao.empresaTitular === filtroTipoEmpresa)

        // Atualiza o objeto com os arrays filtrados
        updatedSeedTestContaBancaria.cardContasBancaria = tipoConta
        updatedSeedTestContaBancaria.cardContasCartao = tipoContaCartao
      } else {
        cy.log('Filtro de tipo de conta desativado')
      }

      cy.wrap(updatedSeedTestContaBancaria).as('updatedSeedTestContaBancaria3')
    })

    // Filtrando baseado no filtroTipoDeConta
    cy.get('@updatedSeedTestContaBancaria3').then((updatedSeedTestContaBancaria) => {
      const filtroTipoDeConta = updatedSeedTestContaBancaria.filtroTipoDeConta

      if (filtroTipoDeConta !== false) {
        cy.log(`Filtrando Tipo de Conta pelo valor: ${filtroTipoDeConta}`)

        // Filtra o array cardContasBancaria pelo campo tipoConta igual a filtroTipoDeConta
        const tipoConta = updatedSeedTestContaBancaria.cardContasBancaria.filter(conta => conta.tipoConta === filtroTipoDeConta)

        // Filtra o array cardContasCartao pelo campo tipoConta igual a filtroTipoDeConta
        const tipoContaCartao = updatedSeedTestContaBancaria.cardContasCartao.filter(cartao => cartao.tipoConta === filtroTipoDeConta)

        // Atualiza o objeto com os arrays filtrados
        updatedSeedTestContaBancaria.cardContasBancaria = tipoConta
        updatedSeedTestContaBancaria.cardContasCartao = tipoContaCartao
      } else {
        cy.log('Filtro de tipo de conta desativado')
      }

      cy.wrap(updatedSeedTestContaBancaria).as('updatedSeedTestContaBancaria4')
    })

    cy.get('@updatedSeedTestContaBancaria4').then((updatedSeedTestContaBancaria) => {
      const filtroNome = updatedSeedTestContaBancaria.filtroNome

      if (filtroNome) {
        cy.log(`Filtrando pelo nome da conta: ${filtroNome}`)

        // Filtra o array cardContasBancaria pelo campo nomeContaBancaria contendo filtroNome
        const contasFiltradas = updatedSeedTestContaBancaria.cardContasBancaria.filter(conta =>
          conta.nomeContaBancaria.includes(filtroNome)
        )

        // Atualiza o objeto com o array filtrado
        updatedSeedTestContaBancaria.cardContasBancaria = contasFiltradas

        // Filtra o array cardContasCartao pelo campo nomeCartaoCredito contendo filtroNome
        const cartoesFiltrados = updatedSeedTestContaBancaria.cardContasCartao.filter(cartao =>
          cartao.nomeCartaoCredito.includes(filtroNome)
        )

        // Atualiza o objeto com o array filtrado
        updatedSeedTestContaBancaria.cardContasCartao = cartoesFiltrados
      } else {
        cy.log('Filtro de nome de conta desativado')
      }

      cy.wrap(updatedSeedTestContaBancaria).as('updatedSeedTestContaBancaria5')
    })

    cy.scrollTo(0, 0, { ensureScrollable: false })
    cy.get('@updatedSeedTestContaBancaria5').then((updatedSeedTestContaBancaria) => {
      if (updatedSeedTestContaBancaria.filtroNome !== false) {
        cy.log('Pesquisar Conta Bancaria')
        cy.get(locContaBancaria.dashboard.pesquisarConta).clear()
          .type(updatedSeedTestContaBancaria.filtroNome)
      }

      if (updatedSeedTestContaBancaria.filtros !== false) {

        if (updatedSeedTestContaBancaria.filtroTipoDeConta !== false) {
          cy.log('Selecionar filtro de tipo de conta')
          cy.get(locContaBancaria.dashboard.selectFiltroTipo).click()
          cy.get('.list__items')
            .contains('corrente').click({ force: true })
        } else if (updatedSeedTestContaBancaria.filtroEmpresa !== false) {
          cy.log('Selecionar filtro de Empresa')
          cy.get(locContaBancaria.dashboard.selectFiltroEmpresa).click()
          cy.get('.list__items')
            .contains(updatedSeedTestContaBancaria.filtroEmpresa).click({ force: true })
        } else {
          cy.log('Selecionar filtro por status (Ativo ou Inativo)')
          cy.get(locContaBancaria.dashboard.selectFiltroStatus).click()
          cy.get('.list__items')
            .contains(updatedSeedTestContaBancaria.filtroSituacao).click({ force: true })
        }
      }

      if (updatedSeedTestContaBancaria.validarContas) {
        cy.log('Validar Contas Bancárias')
        if (updatedSeedTestContaBancaria.numeroCartao) {
          cy.log('Validar nomes da conta bancaria no Card')
          cy.getVisible(locContaBancaria.dashboard.nomeCartaoCredito).should(($el) => {
            expect($el).to.contain.text(updatedSeedTestContaBancaria.nomeConta)
          })
        }
        if (updatedSeedTestContaBancaria.contaBancaria) {
          cy.log('Validar nomes dos cartão de crédido no Card')
          cy.getVisible(locContaBancaria.dashboard.nomeContaBancaria).should(($el) => {
            expect($el).to.contain.text(updatedSeedTestContaBancaria.nomeConta)
          })
        }
      } else if (updatedSeedTestContaBancaria.naoExiste) {
        cy.log('Validar que não exista contas bancarias, tesouraria e cartão de crédito')
        if (updatedSeedTestContaBancaria.numeroCartao) {
          cy.log('Validar que não existe Conta Bancaria/Tesouraria')
          cy.get(locContaBancaria.dashboard.nomeCartaoCredito).should('not.exist')
        } else {
          cy.log('Validar que não existe Cartão de Crédito')
          cy.get(locContaBancaria.dashboard.nomeContaBancaria).should('not.exist')
        }
      }

      if (updatedSeedTestContaBancaria.cardContasBancaria) {
        cy.log('Validar contas bancarias e seus respectivos dados')
        const cardsContas = updatedSeedTestContaBancaria.cardContasBancaria
        cy.log(updatedSeedTestContaBancaria)
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

      if (updatedSeedTestContaBancaria.cardContasCartao) {
        cy.log('Validar cartões de créditos e seus respectivos dados')
        const cardsContas = updatedSeedTestContaBancaria.cardContasCartao
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
    })
  }

  /**
  * Metodo para o cadastro e edição de uma conta Bancaria
  * @param {*} seedTestLancamentoCartao
  */
  validarCartao(seedTestLancamentoCartao) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.intercept('GET', '/api/financeiro/v1/Movimentacao/**').as('listagemCartao')

    cy.location('pathname').then((currentPath) => {

      // Expressão regular para verificar o caminho ( Mesmo que esteja já dentro dos lançamentos )
      const pathPattern = /^\/financeiro\/contas-bancarias\/cartoes\/lancamento\/[^\/]+$/

      if (!pathPattern.test(currentPath)) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.desabilitarPopUpNotificacao()

        cy.scrollTo(0, 0, { ensureScrollable: false })

        if (seedTestLancamentoCartao.filtroNome !== false) {
          cy.log('Pesquisar Conta Bancaria')
          cy.get(locContaBancaria.dashboard.pesquisarConta).clear()
            .type(seedTestLancamentoCartao.nomeConta)
        }

        cy.get(locContaBancaria.dashboard.verLancamentos).click()


      } else {
        cy.log(currentPath)
      }
    })


    // Validar se Filtra por Data ou não
    if (seedTestLancamentoCartao.filtros) {

      // Abrir filtros caso esteja fechado
      cy.document().then((doc) => {
        const filtersElement = doc.querySelector('.selects')

        if (filtersElement && window.getComputedStyle(filtersElement).display !== 'none') {
          // Elemento de filtros existe e está visível
          cy.log('Os filtros já estão visíveis')
          cy.get(locContaBancaria.lancamentosCartao.limparFiltros).click()
        } else {
          // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
          cy.log('Abrir filtros porque não estão visíveis')
          cy.get(locContaBancaria.lancamentosCartao.abrirFiltros).click()
          cy.get(locContaBancaria.lancamentosCartao.limparFiltros).click()
        }
      })

      cy.log('Pesquisar Data')
      cy.get(locContaBancaria.lancamentosCartao.dataInicio)
        .clear()
        .type(seedTestLancamentoCartao.dataInicio)

      cy.get(locContaBancaria.lancamentosCartao.dataFim)
        .clear()
        .type(seedTestLancamentoCartao.dataFim)
        .type('{enter}')

    }

    cy.wait('@listagemCartao').then(interception => {
      // Aqui você pode acessar a resposta da interceptação
      const response = interception.response

      // Exemplo de como acessar dados da resposta
      cy.log(response.body) // Exibe o corpo da resposta no console
      seedTestLancamentoCartao.validarCartao = response.body.movimentacoesDiarias
      // Você pode continuar seus testes ou asserções aqui dentro
    })



    cy.log(seedTestLancamentoCartao)

    // Capturar todos os cards da timeline
    cy.get('.card-timeline .card-lancamento-wrapper').each(($card, index, $list) => {
      // Dentro de cada card, validar os detalhes da transação
      cy.wrap($card).within(() => {
        cy.get('[data-cy="span-categoria-lancamento"]').should('contain.text', seedTestLancamentoCartao.validarCartao[index].categoria)
        // Validar operação, ignorando acentos 
        cy.get('[data-cy="span-operacao-lancamento"]').invoke('text').then((text) => {
          const operacaoTexto = text.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos e converte para minúsculas
          const operacaoEsperada = seedTestLancamentoCartao.validarCartao[index].operacao.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos e converte para minúsculas

          expect(operacaoTexto).to.contain(operacaoEsperada) // Verifica se o texto contém a operação esperada
        })
        cy.get('[data-cy="span-valor-lancamento"]').invoke('text').then((text) => {
          // Extrair o valor numérico do texto e converter para float
          const valorTexto = parseFloat(text.trim().replace(/[^\d,-]/g, '').replace(',', '.'))

          // Comparar com o valor esperado convertido para float
          expect(valorTexto).to.equal(seedTestLancamentoCartao.validarCartao[index].valor)
        })
      })
    })

  }

  obrigatoriedadeContaCorrente(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.desabilitarPopUpNotificacao()
      }
      cy.log(currentPath)
    })

    cy.get(locContaBancaria.dashboard.pesquisarConta, { timeout: 5000 }).click().clear()

    cy.log('Clicar no botao adicionar conta')
    cy.getVisible(locContaBancaria.dashboard.novaConta).click()
    cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
      expect($el).to.contain.text('Nova Conta')
    })

    cy.log('Aguardar o loader desaparecer antes de limpar o tipo de conta')
    cy.get('div.siagri-loader').should('not.be.visible').then(() => {
      cy.log('Limpar campo "Tipo de Conta"')
      cy.getVisible(locContaBancaria.contaBancaria.tipoConta).click()
      cy.getVisible(locContaBancaria.contaBancaria.limparTipoConta).click()
    })

    cy.log('Clicar no botão Adicionar')
    cy.getVisible(locContaBancaria.contaBancaria.adicionar).click()

    cy.log('Verifica se apresentou mensagem de erro para os campos')
    cy.get('.el-form-item__error')
      .filter(':visible') // Filtra apenas os elementos visíveis
      .should('have.length', 9) // Verifica se há exatamente 9 elementos visíveis

    cy.log('Verifica se apresentou mensagem de erro suspensa')
    cy.get('.el-message__content').should('be.visible')

    cy.log('Clicar em Cancelar')
    cy.get(locContaBancaria.contaBancaria.cancelar).click()
      .then(() => {
        // Aguarda até que a janela não esteja mais visível
        cy.get(locContaBancaria.contaBancaria.titulo).should('not.exist')
      })
  }

  obrigatoriedadeContaTesouraria(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.desabilitarPopUpNotificacao()
      }
      cy.log(currentPath)
    })

    cy.get(locContaBancaria.dashboard.pesquisarConta, { timeout: 5000 }).click().clear()

    cy.log('Clicar no botao adicionar conta')
    cy.getVisible(locContaBancaria.dashboard.novaConta).click()
    cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
      expect($el).to.contain.text('Nova Conta')
    })

    cy.log('Aguardar o loader desaparecer antes de selecionar o tipo de conta')
    cy.get('div.siagri-loader').should('not.be.visible').then(() => {
      cy.log('Selecionar Tipo de Conta Tesouraria')
      cy.get(locContaBancaria.contaBancaria.tipoConta).click()
        .contains('Conta tesouraria').click()
    })

    cy.log('Clicar no botão Adicionar')
    cy.getVisible(locContaBancaria.contaBancaria.adicionar).click()

    cy.log('Verifica se apresentou mensagem de erro para os campos')
    cy.get('.el-form-item__error')
      .filter(':visible') // Filtra apenas os elementos visíveis
      .should('have.length', 4) // Verifica se há exatamente 4 elementos visíveis

    cy.log('Verifica se apresentou mensagem de erro suspensa')
    cy.get('.el-message__content').should('be.visible')

    cy.log('Clicar em Cancelar')
    cy.get(locContaBancaria.contaBancaria.cancelar).click()
      .then(() => {
        // Aguarda até que a janela não esteja mais visível
        cy.get(locContaBancaria.contaBancaria.titulo).should('not.exist')
      })
  }

  obrigatoriedadeContaCartaoCredito(seedTestContaBancaria) {
    const url = '/financeiro/contas-bancarias'
    const locatorTituloPagina = locContaBancaria.dashboard.titulo
    const tituloPagina = 'Contas bancárias'

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Contas Bancárias')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.desabilitarPopUpNotificacao()
      }
      cy.log(currentPath)
    })

    cy.get(locContaBancaria.dashboard.pesquisarConta, { timeout: 5000 }).click().clear()

    cy.log('Clicar no botao adicionar conta')
    cy.getVisible(locContaBancaria.dashboard.novaConta).click()
    cy.getVisible(locContaBancaria.contaBancaria.titulo).should(($el) => {
      expect($el).to.contain.text('Nova Conta')
    })

    cy.log('Aguardar o loader desaparecer antes de selecionar o tipo de conta')
    cy.get('div.siagri-loader').should('not.be.visible').then(() => {
      cy.log('Selecionar Tipo de Conta Cartão de Crédito')
      cy.get(locContaBancaria.contaBancaria.tipoConta).click()
        .contains('Cartão de crédito').click()
    })

    cy.log('Clicar no botão Adicionar')
    cy.getVisible(locContaBancaria.contaBancaria.adicionar).click()

    cy.log('Verifica se apresentou mensagem de erro para os campos')
    cy.get('.el-form-item__error')
      .filter(':visible') // Filtra apenas os elementos visíveis
      .should('have.length', 7) // Verifica se há exatamente 8 elementos visíveis

    cy.log('Verifica se apresentou mensagem de erro suspensa')
    cy.get('.el-message__content').should('be.visible')

    cy.log('Clicar em Cancelar')
    cy.get(locContaBancaria.contaBancaria.cancelar).click()
      .then(() => {
        // Aguarda até que a janela não esteja mais visível
        cy.get(locContaBancaria.contaBancaria.titulo).should('not.exist')
      })
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
