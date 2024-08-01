/// <reference types="cypress" />

const locPessoa = require('../../../../locators/atividades-agricolas/cadastros/locators-cadastro-pessoa.js')
const selecionarPessoa = require('./selecionar-tipo-pessoa')

class Pessoa {
  constructor() {
    this.idPessoa = null // Declaração da variável como propriedade da classe para ser usada em qualquer método
  }
  /**
   * Metodo para cadastrar uma pessoa
   * @param {} seedTestPessoa
   */
  cadastro(seedTestPessoa) {
    const url = '/atividade-agricola/pessoas/listagem'
    const locatorTituloPagina = locPessoa.dashboard.titulo
    const tituloPagina = 'Cadastro de pessoas'

    // Intercepta a requisição POST para a criação da pessoa
    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('pessoa')}/Pessoa`).as('postPessoa')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para cadastro de Pessoas')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
      }
      cy.desabilitarPopUpNotificacao()
      cy.log(currentPath)
    })

    cy.log('Clicar no botao adicionar pessoa')
    cy.getVisible(locPessoa.dashboard.adicionarPessoa).click()

    cy.log('Selecionar tipo Pessoa')
    selecionarPessoa.selecionarTipoPessoa(seedTestPessoa.tipo, locPessoa.pessoaJuridica.tipo)

    cy.log('Clicar no botao Continuar')
    cy.getVisible(locPessoa.pessoaJuridica.continuar).click()

    cy.log('Preencher CNPJ')
    cy.getVisible(locPessoa.pessoaJuridica.cnpj).type(seedTestPessoa.cnpj)

    cy.log('Preencher Razão Social')
    cy.getVisible(locPessoa.pessoaJuridica.razaoSocial).type(seedTestPessoa.razaoSocial)

    cy.log('Preencher Nome Fantasia')
    cy.getVisible(locPessoa.pessoaJuridica.nomeFantasia).type(seedTestPessoa.nomeFantasia)

    cy.log('Preencher Inscricao Estadual')
    cy.getVisible(locPessoa.pessoaJuridica.inscricaoEstadual).type(seedTestPessoa.inscricaoEstadual)

    cy.log('Preencher Email')
    cy.getVisible(locPessoa.pessoaJuridica.email).type(seedTestPessoa.email)

    cy.log('Preencher Telefone')
    cy.getVisible(locPessoa.pessoaJuridica.telefone).type(seedTestPessoa.telefone)

    cy.log('Preencher CEP')
    cy.getVisible(locPessoa.pessoaJuridica.cep).type(seedTestPessoa.cep)

    cy.log('Selecionar País')
    cy.get(locPessoa.pessoaJuridica.pais).click()
      .get(locPessoa.pessoaJuridica.listaPais).contains(seedTestPessoa.pais).click()

    cy.log('Selecionar Estado')
    cy.get(locPessoa.pessoaJuridica.estado)
      .click().contains(seedTestPessoa.estado).click()

    cy.log('Selecionar Município')
    cy.get(locPessoa.pessoaJuridica.municipio).click()
      .findAllByText(seedTestPessoa.municipio).click()

    cy.log('Preencher Bairro')
    cy.getVisible(locPessoa.pessoaJuridica.bairro).type(seedTestPessoa.bairro)

    cy.log('Preencher Complemento')
    cy.getVisible(locPessoa.pessoaJuridica.complemento).type(seedTestPessoa.complemento)

    cy.log('Preencher Logradouro')
    cy.getVisible(locPessoa.pessoaJuridica.logradouro).type(seedTestPessoa.logradouro)

    cy.log('Preencher Número')
    cy.getVisible(locPessoa.pessoaJuridica.numero).type(seedTestPessoa.numero)

    cy.log('Clicar em Adicionar Conta Bancária')
    cy.getVisible(locPessoa.pessoaJuridica.adicionarConta).click()

    cy.log('Preencher Dados da Conta')
    cy.getVisible(locPessoa.pessoaJuridica.banco).click().findAllByText(seedTestPessoa.banco).click()
    cy.getVisible(locPessoa.pessoaJuridica.agencia).click().type(seedTestPessoa.agencia)
    cy.get(locPessoa.pessoaJuridica.digito).first().click().type(seedTestPessoa.digito)
    cy.getVisible(locPessoa.pessoaJuridica.conta).click().type(seedTestPessoa.conta)
    cy.getVisible(locPessoa.pessoaJuridica.digitoConta).click().type(seedTestPessoa.digitoConta)

    cy.log('Clicar em Adicionar Chave PIX')
    cy.getVisible(locPessoa.pessoaJuridica.adicionarPix).click()

    cy.log('Preencher Dados do PIX')
    cy.getVisible(locPessoa.pessoaJuridica.tipoPix).click()
    cy.get(locPessoa.pessoaJuridica.listagemPix).contains('Aleatoria').click()
    cy.getVisible(locPessoa.pessoaJuridica.chavePix).click().type(seedTestPessoa.chavePix)

    cy.log('Clicar em Adicionar Certidão Negativa de Débito')
    cy.getVisible(locPessoa.pessoaJuridica.adicionarCertidao).click()

    cy.log('Preencher Dados da Certidão')
    cy.getVisible(locPessoa.pessoaJuridica.autenticacao).click().type(seedTestPessoa.autenticacao)
    cy.getVisible(locPessoa.pessoaJuridica.numeroCertidao).click().type(seedTestPessoa.numeroCertidao)
    cy.getVisible(locPessoa.pessoaJuridica.emissao).click().clear().type(seedTestPessoa.emissao)
    cy.getVisible(locPessoa.pessoaJuridica.validade).click().clear().type(seedTestPessoa.validade)

    cy.log('Clicar no botao Adicionar')
    cy.getVisible(locPessoa.pessoaJuridica.adicionar).click()

    cy.log('Validar mensagem de sucesso')
    cy.get(locPessoa.pessoaJuridica.mensagemSucesso).should(($el) => {
      expect($el).exist.and.to.contain.text('Pessoa salva com sucesso')
    })

    cy.log('Verificar se a tela foi fechada')
    cy.get(locPessoa.pessoaJuridica.cancelar)
      .should('not.exist')

    // Aguarda até que a requisição POST seja completada
    cy.wait('@postPessoa').then(interception => {
      // Verifica se a requisição retornou com sucesso (status 200)
      expect(interception.response.statusCode).to.eq(200)

      // Captura o response da requisição POST
      const responseBody = interception.response.body
      cy.log(responseBody)
      cy.log(responseBody.data.id)
      this.idPessoa = responseBody.data.id

      // Oculta o #api-view para continuar na página Atual
      cy.hideApiView()
    })

    cy.log('Validar Título da Página')
    cy.getVisible(locPessoa.dashboard.titulo)
      .and('contain', 'Cadastro de pessoas')

    cy.log('Validar Nome da Pessoa Cadastrada')
    cy.get(locPessoa.dashboard.nomePessoa)
      .and('contain', seedTestPessoa.razaoSocial)
  }

  /**
   * Metodo para pesquisar por uma pessoa
   * @param {} seedTestPessoa
   */
  validarDashboard(seedTestPessoa) {
    const url = '/atividade-agricola/pessoas/listagem'
    const locatorTituloPagina = locPessoa.dashboard.titulo
    const tituloPagina = 'Cadastro de pessoas'

    // Intercepta a requisição POST para a criação da pessoa
    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('pessoa')}/Pessoa`).as('postPessoa')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para cadastro de Pessoas')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
      }
      cy.desabilitarPopUpNotificacao()
      cy.log(currentPath)
    })

    cy.log('Pesquisar Pessoa Cadastrada')
    cy.getVisible(locPessoa.dashboard.pesquisarPessoa)
      .clear().type(seedTestPessoa.razaoSocial, '{enter}')

    cy.log('Validar Nome da Pessoa Cadastrada')
    cy.get(locPessoa.dashboard.nomePessoa)
      .and('have.text', seedTestPessoa.razaoSocial)

    cy.log('Validar CPF/CNPJ da pessoa cadastrada')
    cy.getVisible(locPessoa.dashboard.cpfCnpjPessoa)
      .and('have.text', seedTestPessoa.cnpj)

    cy.log('Validar telefone da pessoa cadastrada')
    cy.getVisible(locPessoa.dashboard.telefonePessoa)
      .and('contain', seedTestPessoa.telefone)

    cy.log('Validar e-mail da pessoa cadastrada')
    cy.getVisible(locPessoa.dashboard.emailPessoa)
      .and('contain', seedTestPessoa.email)

    cy.log('Deleta Conta Criada Para Evitar Acumulo de Registro')
    cy.wrap(this.idPessoa).then((idPessoa) => {
      cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('pessoa')}/Pessoa`, idPessoa).then((responseDelete) => {
        expect(responseDelete.status).to.be.equal(200)
      })
    })
  }
}

export default new Pessoa()