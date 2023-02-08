/// <reference types="cypress" />

import locPessoa from '../../../../locators/atividades-agricolas/cadastros/locators-cadastro-pessoa.js'
import selecionarPessoa from './selecionar-tipo-pessoa'

class Pessoa {
  /**
   * Metodo para cadastrar uma pessoa
   * @param {} seedTestPessoa
   */
  cadastro(seedTestPessoa) {
    const url = '/atividade-agricola/pessoas/listagem'
    const locatorTituloPagina = locPessoa.dashboard.titulo
    const tituloPagina = 'Cadastro de pessoas'

    cy.log('Navegar para cadastro de Pessoas')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Clicar no botao adicionar pessoa')
    cy.getVisible(locPessoa.dashboard.adicionarPessoa).click()

    cy.log('Selecionar tipo pessoa')
    selecionarPessoa.selecionarTipoPessoa(seedTestPessoa.tipo, locPessoa.pessoaJuridica.tipo)

    cy.log('Clicar no botao continuar')
    cy.getVisible(locPessoa.pessoaJuridica.continuar).click()

    cy.log('Preencher cnpj')
    cy.getVisible(locPessoa.pessoaJuridica.cnpj).type(seedTestPessoa.cnpj)

    cy.log('Preencher razao social')
    cy.getVisible(locPessoa.pessoaJuridica.razaoSocial).type(seedTestPessoa.razaoSocial)

    cy.log('Preencher inscricao estadual')
    cy.getVisible(locPessoa.pessoaJuridica.inscricaoEstadual).type(seedTestPessoa.inscricaoEstadual)

    cy.log('Preencher email')
    cy.getVisible(locPessoa.pessoaJuridica.email).type(seedTestPessoa.email)

    cy.log('Preencher nome fantasia')
    cy.getVisible(locPessoa.pessoaJuridica.nomeFantasia).type(seedTestPessoa.nomeFantasia)

    cy.log('Preencher telefone')
    cy.getVisible(locPessoa.pessoaJuridica.telefone).type(seedTestPessoa.telefone)

    cy.log('Preencher cep')
    cy.getVisible(locPessoa.pessoaJuridica.cep).type(seedTestPessoa.cep)

    cy.log('Selecionar pais')
    cy.get(locPessoa.pessoaJuridica.pais).click()
      .get(locPessoa.pessoaJuridica.listaPais).contains(seedTestPessoa.pais).click()

    cy.log('Selecionar estado')
    cy.get(locPessoa.pessoaJuridica.estado)
      .click().contains(seedTestPessoa.estado).click()

    cy.log('Selecionar municipio')
    cy.get(locPessoa.pessoaJuridica.municipio).click()
      .findAllByText(seedTestPessoa.municipio).click()

    cy.log('Preencher bairro')
    cy.getVisible(locPessoa.pessoaJuridica.bairro).type(seedTestPessoa.bairro)

    cy.log('Preencher complemento')
    cy.getVisible(locPessoa.pessoaJuridica.complemento).type(seedTestPessoa.complemento)

    cy.log('Preencher logradouro')
    cy.getVisible(locPessoa.pessoaJuridica.logradouro).type(seedTestPessoa.logradouro)

    cy.log('Preencher numero')
    cy.getVisible(locPessoa.pessoaJuridica.numero).type(seedTestPessoa.numero)

    cy.log('Clicar no botao salvar')
    cy.getVisible(locPessoa.pessoaJuridica.adicionar).click()

    cy.get(locPessoa.pessoaJuridica.cancelar)
      .should('not.exist')

    cy.log('Validar titulo da pagina')
    cy.getVisible(locPessoa.dashboard.titulo)
      .and('contain', 'Cadastro de pessoas')

    cy.log('Validar nome da pessoa cadastrada')
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

    // Navegar para cadastro de Pessoas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locPessoa.dashboard.pesquisarPessoa)
      .clear().type(seedTestPessoa.razaoSocial, '{enter}')

    // Validar nome da pessoa cadastrada
    cy.get(locPessoa.dashboard.nomePessoa)
      .and('have.text', seedTestPessoa.razaoSocial)

    // Validar cpf/cnpj da pessoa cadastrada
    cy.getVisible(locPessoa.dashboard.cpfCnpjPessoa)
      .and('have.text', seedTestPessoa.cnpj)

    // Validar telefone da pessoa cadastrada
    cy.getVisible(locPessoa.dashboard.telefonePessoa)
      .and('contain', seedTestPessoa.telefone)

    // Validar e-mail da pessoa cadastrada
    cy.getVisible(locPessoa.dashboard.emailPessoa)
      .and('contain', seedTestPessoa.email)
  }
}

export default new Pessoa()
