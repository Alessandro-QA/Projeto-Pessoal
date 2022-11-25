/* eslint no-console: ["error", { allow: ["log", "error"] }] */
/// <reference types="cypress" />

import locMdfe from '../../../locators/nfe/mdfe/locators-add-editar-mdfe.js'
import locGerenciadorMdfe from '../../../locators/nfe/mdfe/locators-gerenciador-mdfe.js'

const url = '/fiscal/mdfe'
const locatorTituloPagina = locGerenciadorMdfe.titulo
const tituloPagina = 'Gerenciador MDF-e'

class Mdfe {
  /**
   * Cadastro de MDFe
   * @param {*} seedTestMdfe
   */
  cadastrar(seedTestMdfe) {
    cy.log('=== Navegar para Gerenciador de MDF-e ===')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/nota-fiscal/v1/manifesto/List?EmpresaId=**').as('listagemMdfe')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/localidade/v1/Municipio?estadoId=**`).as('localidadeMunicipio')
    cy.intercept('POST', '/api/nota-fiscal/v1/manifesto/Transmitir/**').as('transmitirMDFe')

    cy.log('=== === Selecionar emitente ===')
    cy.getVisible(locGerenciadorMdfe.selectEmissor).click()
      .get(locGerenciadorMdfe.selecionarEmissor)
      .contains(seedTestMdfe.mdfe.emitente.empresa).click()

    cy.log('=== Selecionar ambiente ===')
    cy.getVisible(locGerenciadorMdfe.selectAmbiente).click()
      .get(locGerenciadorMdfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemMdfe')

    cy.log('=== Botao nova Mdf-e ===')
    cy.getVisible(locGerenciadorMdfe.buttonNovaMdfe).click()

    cy.log('=== Wait necessario para carregamento dos dados na tela ===')
    cy.wait(7000)

    // Manifesto
    cy.log('=== Gerar MDFe em rascunho ===')
    if (seedTestMdfe.mdfe.manifesto.gerarRascunho === true) {
      cy.getVisible(locMdfe.manifesto.checkGerarRascunho).click()
    }

    cy.log('=== Tipo do emitente selecionado ===')
    cy.getVisible(locMdfe.manifesto.selectTipoEmitente).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.tipoEmitente)
    })

    cy.log('=== Tipo do transportador selecionado ===')
    cy.getVisible(locMdfe.manifesto.selectTipoTransportador).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.tipoTrasnportador)
    })

    cy.log('=== Indicador de carregamento posterior selecionado ===')
    cy.getVisible(locMdfe.manifesto.radioIndicadorCarregamentoPosterior).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.indicadorCarregamentoPosterior)
    })

    cy.log('=== Tipo de ambiente ===')
    cy.getVisible(locMdfe.manifesto.spanTipoAmbiente).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.tipoAmbiente)
    })

    cy.log('=== Modelo ===')
    cy.getVisible(locMdfe.manifesto.spanModelo).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.modelo)
    })

    cy.log('=== Modalidade de transporte ===')
    cy.getVisible(locMdfe.manifesto.spanModalidadeTransporte).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.manifesto.modalidadeTransporte)
    })

    // Emitente
    cy.log('=== Expandir collpase Emitente ===')
    cy.getVisible(locMdfe.emitente.collapse).click()

    cy.log('=== Selecionar emitente ===')
    cy.getVisible(locMdfe.emitente.selectEmitente).click()
      .get(locMdfe.emitente.listaEmitente)
      .contains(seedTestMdfe.mdfe.emitente.empresa).click()

    cy.log('=== CPF/CNPJ ===')
    cy.getVisible(locMdfe.emitente.spanCpfCnpj).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.cpfCnpj)
    })

    cy.log('=== Inscrição Estadual ===')
    cy.getVisible(locMdfe.emitente.spanInscricaoEstadual).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.inscricaoEstadual)
    })

    cy.log('=== Expandir Endereço ===')
    cy.getVisible(locMdfe.emitente.linkExibirEndereco).click()

    cy.log('=== CEP ===')
    cy.getVisible(locMdfe.emitente.cep).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.cep)
    })

    cy.log('=== País ===')
    cy.getVisible(locMdfe.emitente.pais).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.pais)
    })

    cy.log('=== Estado ===')
    cy.getVisible(locMdfe.emitente.estado).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.estado)
    })

    cy.log('=== Município ===')
    cy.getVisible(locMdfe.emitente.municipio).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.municipio)
    })

    cy.log('=== Bairro ===')
    cy.getVisible(locMdfe.emitente.bairro).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.bairro)
    })

    cy.log('=== Complemento ===')
    cy.getVisible(locMdfe.emitente.complemento).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.complemento)
    })

    cy.log('=== Logradouro ===')
    cy.getVisible(locMdfe.emitente.logradouro).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.logradouro)
    })

    cy.log('=== Numero ===')
    cy.getVisible(locMdfe.emitente.numero).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.emitente.numero)
    })

    // Notas Fiscais
    cy.log('=== Expandir collpase Notas Fiscais ===')
    cy.getVisible(locMdfe.notasFiscais.collapse).click()

    cy.log('=== Selecionar origem ===')
    cy.getVisible(locMdfe.notasFiscais.selectOrigemNotas).click()
      .get(locMdfe.notasFiscais.listaOrigemNotas)
      .contains(seedTestMdfe.mdfe.notasFiscais.origem).click()

    cy.log('=== Digitar série ===')
    cy.getVisible(locMdfe.notasFiscais.inputSerie).clear()
      .type(seedTestMdfe.mdfe.notasFiscais.serie)

    cy.log('=== Digitar chave de acesso ===')
    cy.getVisible(locMdfe.notasFiscais.inputChaveAcesso).clear()
      .type(seedTestMdfe.mdfe.notasFiscais.chaveDeAcesso)

    cy.log('=== Clicar em Avançar ===')
    cy.getVisible(locMdfe.buttonAvancar).click()

    // Veiculo
    cy.log('=== Selecionar placa do veículo ===')
    cy.getVisible(locMdfe.veiculo.selectPlaca).click()
      .get(locMdfe.veiculo.listaPlaca)
      .contains(seedTestMdfe.mdfe.veiculo.placaDoVeiculo).click()

    cy.log('=== Digitar renavam ===')
    cy.getVisible(locMdfe.veiculo.inputRenavam).clear()
      .type(seedTestMdfe.mdfe.veiculo.renavam)

    cy.log('=== Selecionar tipo da carroceria ===')
    cy.getVisible(locMdfe.veiculo.selectTipoCarroceria).click()
      .get(locMdfe.veiculo.listaTipoCarroceria)
      .contains(seedTestMdfe.mdfe.veiculo.tipoDaCarroceria).click()

    cy.log('=== Selecionar UF de licenciamento ===')
    cy.getVisible(locMdfe.veiculo.selectUfLicenciamento).click()
      .get(locMdfe.veiculo.listaUfLicenciamento)
      .contains(seedTestMdfe.mdfe.veiculo.ufDeLicenciamento).click()

    cy.log('=== Digitar Tara ===')
    cy.getVisible(locMdfe.veiculo.inputTara).clear()
      .type(seedTestMdfe.mdfe.veiculo.tara)

    cy.log('=== Digitar Capacidade KG ===')
    cy.getVisible(locMdfe.veiculo.inputCapacidadeKg).clear()
      .type(seedTestMdfe.mdfe.veiculo.capacidadeKg)

    cy.log('=== Digitar Capacidade M3 ===')
    cy.getVisible(locMdfe.veiculo.inputCapacidadeM3).clear()
      .type(seedTestMdfe.mdfe.veiculo.capacidadeM3)

    cy.log('=== Selecionar tipo de rodado ===')
    cy.getVisible(locMdfe.veiculo.selectTipoRodado).click()
      .get(locMdfe.veiculo.listaTipoRodado)
      .contains(seedTestMdfe.mdfe.veiculo.tipoDeRodado).click()

    cy.log('=== Tipo do Proprietário do Veículo selecionado ===')
    cy.getVisible(locMdfe.veiculo.radioProprietarioVeiculo).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.veiculo.proprietarioDoVeiculo)
    })

    // Condutor
    cy.log('=== Expandir collpase Condutor ===')
    cy.getVisible(locMdfe.condutor.collapse).click()

    cy.log('=== Selecionar condutor ===')
    cy.getVisible(locMdfe.condutor.selectCondutor).click()
      .get(locMdfe.condutor.listaCondutor)
      .contains(seedTestMdfe.mdfe.condutor.condutor).click()

    cy.log('=== Verificar se preenche reboque ===')
    if (!seedTestMdfe.mdfe.reboque) {
      cy.log('=== Sem reboque ===')

      cy.log('=== Clicar em Avançar ===')
      cy.getVisible(locMdfe.buttonAvancar).click()
    }
    else {
      // Reboque
      cy.log('=== Com reboque ===')

      cy.log('=== Expandir collpase Reboque ===')
      cy.getVisible(locMdfe.reboque.collapse).click()

      cy.log('=== Clicar em adicionar reboque ===')
      cy.getVisible(locMdfe.reboque.buttonAddReboque).click()

      cy.log('=== Selecionar placa do veículo ===')
      cy.getVisible(locMdfe.reboque.selectPlacaVeiculo).click()
        .get(locMdfe.reboque.listaPlacaVeiculo)
        .contains(seedTestMdfe.mdfe.reboque.placaDoVeiculo).click()

      cy.log('=== Digitar renavam ===')
      cy.getVisible(locMdfe.reboque.inputRenavam).clear()
        .type(seedTestMdfe.mdfe.reboque.renavam)

      cy.log('=== Selecionar tipo da carroceria ===')
      cy.getVisible(locMdfe.reboque.selectTipoCarroceria).click()
        .get(locMdfe.reboque.listaTipoCarroceria)
        .contains(seedTestMdfe.mdfe.reboque.tipoDaCarroceria).click()

      cy.log('=== Selecionar UF de licenciamento ===')
      cy.getVisible(locMdfe.reboque.selectUfLicenciamento).click()
        .get(locMdfe.reboque.listaUfLicenciamento)
        .contains(seedTestMdfe.mdfe.reboque.ufDeLicenciamento).click()

      cy.log('=== Digitar Tara ===')
      cy.getVisible(locMdfe.reboque.inputTara).clear()
        .type(seedTestMdfe.mdfe.reboque.tara)

      cy.log('=== Digitar Capacidade KG ===')
      cy.getVisible(locMdfe.reboque.inputCapacidadeKg).clear()
        .type(seedTestMdfe.mdfe.reboque.capacidadeKg)

      cy.log('=== Digitar Capacidade M3 ===')
      cy.getVisible(locMdfe.reboque.inputCapacidadeM3).clear()
        .type(seedTestMdfe.mdfe.reboque.capacidadeM3)

      cy.log('=== Tipo do Proprietário do Veículo selecionado ===')
      cy.getVisible(locMdfe.reboque.radioProprietarioVeiculo).should(($el) => {
        expect($el).to.contain.text(seedTestMdfe.mdfe.reboque.proprietarioDoVeiculo)
      })

      cy.log('=== Clicar em Avançar ===')
      cy.getVisible(locMdfe.buttonAvancar).click()
    }

    // Carregamento
    cy.log('=== Selecionar estado carregamento ===')
    cy.getVisible(locMdfe.carregamento.selectEstado).click()
      .get(locMdfe.carregamento.listaEstado)
      .contains(seedTestMdfe.mdfe.carregamento.estado).click()

    cy.wait('@localidadeMunicipio')
    cy.wait(5000)

    cy.log('=== Selecionar municipio carregamento ===')
    cy.get(locMdfe.carregamento.municipioSelecionado).then(($el) => {
      const municipio = $el.text().toString().trim()

      if (municipio === seedTestMdfe.mdfe.carregamento.municipio) {
        expect($el).to.contain.text(seedTestMdfe.mdfe.carregamento.municipio)
        cy.log(`=== O município já foi preenchido: ${municipio} ===`)
      }
      else {
        cy.log('=== Selecionando municipio ===')

        cy.get(locMdfe.carregamento.selectMunicipio).click()
          .get(locMdfe.carregamento.pesquisarMunicipio)
          .type(seedTestMdfe.mdfe.carregamento.municipio)
          .get(locMdfe.carregamento.listaMunicipio)
          .contains(seedTestMdfe.mdfe.carregamento.municipio).click()
      }
    })

    cy.getVisible('[data-cy=header-rota]').click()

    // Descarregamento
    cy.log('=== Selecionar estado descarregamento ===')
    cy.getVisible(locMdfe.descarregamento.selectEstado).click()
      .get(locMdfe.descarregamento.listEstado)
      .contains(seedTestMdfe.mdfe.descarregamento.estado).click()

    cy.log('=== Selecionar municipio descarregamento ===')
    cy.getVisible(locMdfe.descarregamento.selectMunicipio).click()
      .get(locMdfe.descarregamento.pesquisarMunicipio)
      .type(seedTestMdfe.mdfe.descarregamento.municipio)
      .get(locMdfe.descarregamento.listaMunicipio)
      .contains(seedTestMdfe.mdfe.descarregamento.municipio).click()

    cy.getVisible('[data-cy=header-rota]').click()

    cy.log('=== Clicar em Avançar ===')
    cy.getVisible(locMdfe.buttonAvancar).click()

    // Totais de Carga
    cy.log('=== Selecionar Unidade de Medida ===')
    cy.getVisible(locMdfe.totaisDeCarga.radioUnidadeMedida)
      .contains(seedTestMdfe.mdfe.totaisDeCarga.unidadeDeMedida).click()

    cy.log('=== Digitar valor total da carga ===')
    cy.getVisible(locMdfe.totaisDeCarga.inputValorTotalCarga).clear()
      .realType(seedTestMdfe.mdfe.totaisDeCarga.valorTotalDaCarga)

    cy.log('=== Digitar peso bruto total ===')
    cy.getVisible(locMdfe.totaisDeCarga.inputPesoBrutoTotal).clear()
      .type(seedTestMdfe.mdfe.totaisDeCarga.pesoBrutoTotal)

    cy.log('=== Validar total de NF-e ===')
    cy.getVisible(locMdfe.totaisDeCarga.spanTotalNfe).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.totaisDeCarga.totalDeNfe)
    })

    cy.log('=== Validar Unidade de medida da carga ===')
    cy.getVisible(locMdfe.totaisDeCarga.spanUnidadeMedidaCarga).should(($el) => {
      expect($el).to.contain.text(seedTestMdfe.mdfe.totaisDeCarga.unidadeDeMedidaDaCarga)
    }).click()

    // Validar modal de autorizado
    cy.log('=== Aguardar mensagem de autorização do MDF-e ===')
    cy.getVisible(locMdfe.buttonTransmitir, { timeout: 60000 }).click().then(() => {
      cy.wait('@transmitirMDFe', { timeout: 60000, requestTimeout: 60000, responseTimeout: 60000 })
        .then((interception) => {
          cy.log(`Numero do Recibo: ${interception.response.body.data.numeroRecibo}`)
          cy.log(`Chave do MDFe: ${interception.response.body.data.chave}`)
          cy.log(`Nome Normalizado: ${interception.response.body.data.nomeNormalizado}`)
          cy.log(JSON.stringify(interception))
        })
      cy.getVisible(locMdfe.modalAutorizacao).contains('MDF-e autorizado com sucesso!')
    })
  }

  /**
   * Encerrar MDFe autorizado
   * @param {*} seedTestMdfe
   */
  encerrar(seedTestMdfe) {
    cy.log('=== Navegar para Gerenciador de MDF-e ===')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/nota-fiscal/v1/manifesto/List?EmpresaId=**').as('listagemMdfe')

    cy.log('=== === Selecionar emitente ===')
    cy.getVisible(locGerenciadorMdfe.selectEmissor).click()
      .get(locGerenciadorMdfe.selecionarEmissor)
      .contains(seedTestMdfe.mdfe.emitente.empresa).click()

    cy.log('=== Selecionar ambiente ===')
    cy.getVisible(locGerenciadorMdfe.selectAmbiente).click()
      .get(locGerenciadorMdfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemMdfe')

    cy.log('=== Selecionar MDF-e ===')
    cy.get(locGerenciadorMdfe.situacao).each(($el) => {
      const cardMDFe = $el.text().toString().trim()
      if (cardMDFe === 'Autorizado') {
        cy.get(locGerenciadorMdfe.cardMDFe)
          .contains('Autorizado')
          .parents(locGerenciadorMdfe.cardMDFe)
          .within(() => {
            cy.get(locGerenciadorMdfe.radioSelecionarMDFe).click()
          })

        cy.log('=== Encerrar MDF-e ===')
        cy.get(locGerenciadorMdfe.btnMaisAcoes).contains('Encerrar').click()

        cy.log('=== Aguardar mensagem de encerrramento do MDF-e ===')
        cy.get(locGerenciadorMdfe.msgStatus, { timeout: 60000 }).should(($el) => {
          expect($el).to.contain.text('Encerrado com sucesso!')
        })
      }
    })
  }

  /**
    * Encerrar MDFe autorizado
    * @param {*} seedTestMdfe
    */
  validarListagem(seedTestMdfe) {
    cy.log('=== Navegar para Gerenciador de MDF-e ===')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/nota-fiscal/v1/manifesto/List?EmpresaId=**').as('listagemMdfe')

    cy.log('=== === Selecionar emitente ===')
    cy.getVisible(locGerenciadorMdfe.selectEmissor).click()
      .get(locGerenciadorMdfe.selecionarEmissor)
      .contains(seedTestMdfe.mdfe.emitente.empresa).click()

    cy.log('=== Selecionar ambiente ===')
    cy.getVisible(locGerenciadorMdfe.selectAmbiente).click()
      .get(locGerenciadorMdfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemMdfe')

    cy.log('=== Validar informações do card de MDF-e ===')
    cy.get(locGerenciadorMdfe.cardMDFe)
      .contains('Autorizado')
      .parents(locGerenciadorMdfe.cardMDFe)
      .within(() => {
        cy.log('=== UF de carregamento ===')
        cy.get(locGerenciadorMdfe.ufCarregamento).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.ufCarregamento)
        })

        cy.log('=== UF de descarregamento ===')
        cy.get(locGerenciadorMdfe.ufDescarregamento).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.ufDescarregamento)
        })

        cy.log('=== Tipo de emissao ===')
        cy.get(locGerenciadorMdfe.tipoEmissao).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.tipoEmissao)
        })

        cy.log('=== Modalidade do transporte ===')
        cy.get(locGerenciadorMdfe.modalidade).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.modalidade)
        })

        cy.log('=== Situação do MDF-e ===')
        cy.get(locGerenciadorMdfe.situacao).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.situacao)
        })

        cy.log('=== Expandir collapse ===')
        cy.get(locGerenciadorMdfe.collapseCard).click()

        cy.log('=== Chave de acesso ===')
        cy.get(locGerenciadorMdfe.chaveDeAcesso).should('exist')

        cy.log('=== Nome do Motorista ===')
        cy.get(locGerenciadorMdfe.motorista).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.motorista)
        })

        cy.log('=== Total do MDF-e ===')
        cy.get(locGerenciadorMdfe.totaisMdfe).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.totaisMdfe)
        })

        cy.log('=== Retorno da Sefaz ===')
        cy.get(locGerenciadorMdfe.retornoSefaz).should(($el) => {
          expect($el).to.contain.text(seedTestMdfe.detalhesMdfe.ultimaRespostaSefaz)
        })
      })
  }
}

export default new Mdfe()
