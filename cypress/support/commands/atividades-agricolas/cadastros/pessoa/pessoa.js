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

    // Navegar para cadastro de Pessoas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar pessoa
    cy.getVisible(locPessoa.dashboard.adicionarPessoa).click()

    // selecionar tipo pessoa
    selecionarPessoa.selecionarTipoPessoa(seedTestPessoa.tipo, locPessoa.pessoaJuridica.tipo)

    // botao continuar
    cy.getVisible(locPessoa.pessoaJuridica.continuar).click()

    // cnpj
    cy.getVisible(locPessoa.pessoaJuridica.cnpj).type(seedTestPessoa.cnpj)

    // razao social
    cy.getVisible(locPessoa.pessoaJuridica.razaoSocial).type(seedTestPessoa.razaoSocial)

    // inscricao estadual
    cy.getVisible(locPessoa.pessoaJuridica.inscricaoEstadual).type(seedTestPessoa.inscricaoEstadual)

    // email
    cy.getVisible(locPessoa.pessoaJuridica.email).type(seedTestPessoa.email)

    // nome fantasia
    cy.getVisible(locPessoa.pessoaJuridica.nomeFantasia).type(seedTestPessoa.nomeFantasia)

    // telefone
    cy.getVisible(locPessoa.pessoaJuridica.telefone).type(seedTestPessoa.telefone)

    // cep
    cy.getVisible(locPessoa.pessoaJuridica.cep).type(seedTestPessoa.cep)

    // estado
    cy.get(locPessoa.pessoaJuridica.estado)
      .click()
      .contains(seedTestPessoa.estado)
      .click()

    // municipio
    cy.get(locPessoa.pessoaJuridica.municipio)
      .click()
      .findAllByText(seedTestPessoa.municipio)
      .click()

    // bairro
    cy.getVisible(locPessoa.pessoaJuridica.bairro).type(seedTestPessoa.bairro)

    // complemento
    cy.getVisible(locPessoa.pessoaJuridica.complemento).type(seedTestPessoa.complemento)

    // logradouro
    cy.getVisible(locPessoa.pessoaJuridica.logradouro).type(seedTestPessoa.logradouro)

    // numero
    cy.getVisible(locPessoa.pessoaJuridica.numero).type(seedTestPessoa.numero)

    // botao salvar
    cy.getVisible(locPessoa.pessoaJuridica.adicionar).click()

    cy.get(locPessoa.pessoaJuridica.cancelar)
      .should('not.exist')

    // titulo da pagina
    cy.getVisible(locPessoa.dashboard.titulo)
      .and('contain', 'Cadastro de pessoas')

    // Validar nome da pessoa cadastrada
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
