import locCadastroConta from '../../support/locators/funcionalidades/login/onboarding/locators-cadastro-conta.js'
import locLogin from '../../support/locators/funcionalidades/login/locators-login.js'
import locOnboarding from '../../support/locators/funcionalidades/login/onboarding/locators-onboarding.js'
import locDashboard from '../../support/locators/funcionalidades/main-dashboard/locators-dashboard.js'
import Authenticate from '../../support/commands/funcionalidades/login/login-logout.js'

describe.skip('Cadastro de Conta e realização de Onboarding', { tags: '@onboarding' }, () => {
  let email
  const fixtureCadastroConta = 'funcionalidades/login/onboarding/fixture-cadastro-conta'

  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit(locLogin.login.urlLogin)
  })

  it('Deve acessar home page e cadastrar conta', function () {
    cy.get(locLogin.login.btnCadastreSe).click()
    cy.fixture(fixtureCadastroConta).as('dadosConta').then(() => {
      cy.cadastrarConta((this.dadosConta)).then(tempEmail => {
        email = tempEmail
      })
    })

    cy.get(locCadastroConta.cadastroConta.msgCadastroSucesso)
      .scrollIntoView().should('exist').and('be.visible')
      .and('have.text', 'Cadastro efetuadocom sucesso!')
  })

  it('Deve ativar via banco a conta cadastrada', function () {
    cy.task('executarQuery', `update idsvr.AspNetUsers set EmailConfirmed = 1 where Email = '${email}'`)
    cy.task('executarQuery', `select Email from idsvr.AspNetUsers where Email = '${email}'`)
    cy.task('executarQuery', `select EmailConfirmed from idsvr.AspNetUsers where Email = '${email}'`)
  })

  it('Deve logar na conta cadastrada', function () {
    Authenticate.login({
      'email': email,
      'senha': 'teste@123'
    })
    cy.get(locOnboarding.dashboard.msgWelcome)
      .scrollIntoView().should('exist').and('be.visible')
      .and('contain', 'Olá, Conta QA.')
  })

  it('Deve selecionar onboarding financeiro', function () {
    // Insere o nome da Fazenda
    cy.get(locOnboarding.dashboard.iptNomeFazenda)
      .scrollIntoView().should('exist')
      .and('be.visible').type('Fazenda Teste 1')

    cy.get(locOnboarding.dashboard.btnAvancar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get('.hold-modules').scrollIntoView()
      .should('exist').and('be.visible')

    // Seleciona o módulo financeiro
    cy.get(locOnboarding.cards.financeiro)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    // Seleciona o módulo Contas a Pagar
    cy.get(locOnboarding.guias.contaPagar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()
  })

  // TODO Melhorar criando command para realizar cada ação de cadastro
  // Completa o cadastro de empresa
  it('Deve completar o cadastro de empresa', () => {
    cy.get(locOnboarding.dashboard.btnCadastrar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroEmpresa.nome)
      .scrollIntoView().should('exist').and('be.visible')
    cy.get(locOnboarding.cadastroEmpresa.nome)
      .should('exist').and('be.visible')
      .clear().type('Empresa 1')

    cy.get(locOnboarding.cadastroEmpresa.cpf)
      .scrollIntoView().should('exist')
      .and('be.visible').type('849.456.460-90')

    cy.get(locOnboarding.cadastroEmpresa.cep)
      .scrollIntoView().should('exist')
      .and('be.visible').type('74000000')

    cy.get(locOnboarding.cadastroEmpresa.novaIe)
      .scrollIntoView().should('exist')
      .and('be.visible').click()
    cy.get(locOnboarding.cadastroEmpresa.novaIeCollapse)
      .scrollIntoView().should('exist')
      .and('be.visible').click()
    cy.get(locOnboarding.cadastroEmpresa.ie)
      .scrollIntoView().should('exist')
      .and('be.visible').type('10203040')

    cy.get(locOnboarding.cadastroEmpresa.ieDescricao)
      .scrollIntoView().should('exist')
      .and('be.visible').type('IE Empresa 1')

    cy.get(locOnboarding.cadastroEmpresa.btnAtualizar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.notification.msgSucesso)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', 'Empresa salva com sucesso')
  })

  // Cadastra um ciclo
  it('Deve cadastrar um ciclo', () => {
    cy.get(locOnboarding.dashboard.btnCadastrar)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', 'Cadastrar ciclo').click()

    cy.get(locOnboarding.cadastroCiclo.safra)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('2020/2020')

    cy.get(locOnboarding.cadastroCiclo.selectSafra)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroCiclo.cultura)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Milho')

    cy.get(locOnboarding.cadastroCiclo.selectCultura)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroCiclo.valorizacao)
      .scrollIntoView().should('exist')
      .and('be.visible').type('100,00')

    cy.get(locOnboarding.cadastroCiclo.btnAdicionar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroCiclo.btnAdicionar)
      .should('not.exist')
  })

  // Cadastra uma Conta Bancária
  it('Deve cadastrar uma conta bancária', () => {
    cy.get(locOnboarding.dashboard.btnCadastrar)
      .scrollIntoView().should('exist').and('be.visible')
      .and('contain', 'Cadastrar conta bancária').click()

    cy.get(locOnboarding.cadastroContaBancaria.nomeConta)
      .scrollIntoView().should('exist').and('be.visible')
      .type('Conta Bancaria Teste')

    cy.get(locOnboarding.cadastroContaBancaria.empresaTitular)
      .scrollIntoView().should('exist').and('be.visible')
      .click().type('Empresa 1')
    cy.get(locOnboarding.cadastroContaBancaria.selectEmpresaTitular)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroContaBancaria.empresasHabilitadas)
      .scrollIntoView().should('exist').and('be.visible')
      .and('contain', 'Empresa 1')

    cy.get(locOnboarding.cadastroContaBancaria.contaPrincipal)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroContaBancaria.dataSaldoInicial)
      .scrollIntoView().should('exist')
      .and('be.visible').type('01/04/2021')

    cy.get(locOnboarding.cadastroContaBancaria.saldoInicial)
      .scrollIntoView().should('exist')
      .and('be.visible').type('100.000,00')

    cy.get(locOnboarding.cadastroContaBancaria.banco)
      .scrollIntoView().should('exist').and('be.visible')
      .click().type('Banco do Brasil')
    cy.get(locOnboarding.cadastroContaBancaria.selectBanco)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroContaBancaria.agencia)
      .scrollIntoView().should('exist')
      .and('be.visible').type('1234')
    cy.get(locOnboarding.cadastroContaBancaria.digitoAgencia)
      .scrollIntoView().should('exist')
      .and('be.visible').type('2')

    cy.get(locOnboarding.cadastroContaBancaria.numeroConta)
      .scrollIntoView().should('exist')
      .and('be.visible').type('1234567')
    cy.get(locOnboarding.cadastroContaBancaria.digitoConta)
      .scrollIntoView().should('exist')
      .and('be.visible').type('1')

    cy.get(locOnboarding.cadastroContaBancaria.btnAdicionar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroContaBancaria.btnAdicionar)
      .should('not.exist')
  })

  // Registra um documento
  it('Deve registrar um documento', () => {
    cy.get(locOnboarding.dashboard.btnRegistrarDocumento)
      .should('exist').and('be.visible')
      .and('contain', 'Registrar documento').click()

    cy.get(locOnboarding.cadastroDocumento.operacao)
      .scrollIntoView().should('exist')
      .and('be.visible').click()
    cy.get(locOnboarding.cadastroDocumento.pesquisaOperacao)
      .scrollIntoView().should('exist')
      .and('be.visible').type('Defensivo')
    cy.get(locOnboarding.cadastroDocumento.selectOperacao)
      .scrollIntoView().should('exist')
      .and('be.visible').click({ force: true })

    cy.get(locOnboarding.cadastroDocumento.tipoDocumento)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', 'Nota Fiscal')

    cy.get(locOnboarding.cadastroDocumento.numeroDocumento)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('123')

    cy.get(locOnboarding.cadastroDocumento.pessoa)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Empresa 1')
    cy.get(locOnboarding.cadastroDocumento.selectPessoa)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.cpfCnpj)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', '849.456.460-90')

    cy.get(locOnboarding.cadastroDocumento.fazenda)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', 'Fazenda Teste 1')

    cy.get(locOnboarding.cadastroDocumento.safra)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('2020/2020')
    cy.get(locOnboarding.cadastroDocumento.selectSafra)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.empresa)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Empresa 1')
    cy.get(locOnboarding.cadastroDocumento.selectEmpresa)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.ieEmpresa)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', '10203040')

    cy.get(locOnboarding.cadastroDocumento.valorTotal)
      .scrollIntoView().should('exist')
      .and('be.visible').type('1.000,00')

    cy.get(locOnboarding.cadastroDocumento.jaFoiPago)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.rateioEntreCiclos)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.formaPagamento)
      .scrollIntoView().should('exist').and('be.visible')
    cy.get(locOnboarding.cadastroDocumento.formaPagamento)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Boleto')
    cy.get(locOnboarding.cadastroDocumento.selectFormaPagamento)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.contaBancaria)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Conta Bancaria Teste')
    cy.get(locOnboarding.cadastroDocumento.selectContaBancaria)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.parcelaUnica)
      .scrollIntoView().should('exist')
      .and('be.visible')

    cy.get(locOnboarding.cadastroDocumento.ciclo)
      .scrollIntoView().should('exist')
      .and('be.visible').click().type('Milho - 2020/2020')
    cy.get(locOnboarding.cadastroDocumento.selectCiclo)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.cadastroDocumento.valorCiclo)
      .scrollIntoView().should('exist')
      .and('be.visible')

    cy.get(locOnboarding.cadastroDocumento.btnAdicionar)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locOnboarding.dashboard.processoFinalizado)
      .should('exist').and('be.visible')
      .and('have.text', 'Processo finalizado com sucesso!')
  })
  it('Deve fechar guia de onboarding e redirecionar para a dashboard', () => {
    cy.get(locOnboarding.dashboard.fecharGuia)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locDashboard.dashboard.titulo)
      .scrollIntoView().should('exist')
      .and('be.visible').and('have.text', 'Dashboard geral')
  })
})
