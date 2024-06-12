import './request.js'


Cypress.Commands.add('getToken', (email, password) => {
    cy.section(`Gerando Access Token para o usuário "${email}"`)

    cy.request({
        method: 'POST',
        url: 'https://api.uat.aliare.digital/aliare-auth/connect/token',
        headers: {
           // 'authorization': 'Basic Y2NkZXZjbGllbnQ6MTdjNGZkYTUtYzUxOC00OTg1LTgzMmQtYmY4NWQxZmYxNGQ1',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: {
           // scope: "tenant i18n fazenda bemocorrencia atividade atividadeagricola bem cicloproducao controleclimatico cultura estoque formapagamento material notafiscal operacao pedidocompra pessoa planejamentosafra planocontas safra unidadearmazenamento unidademedida eexport subscription parametrotributario permission product webhookvindi contabancaria financeiro instituicaofinanceira localidade producaoagricola notification assinei webhook marketingcampaign nfedistribuicao aliare agriq onboarding profile openid indexadormoeda agriq openbanking",
            grant_type: "password",
            username: email,
            password: password,
            client_id: 'my-farm-clientapp-dev'
        }
    }).then((response) => {
        Cypress.env('access_token', response.body.access_token)
        cy.step(`Access Token do usuário ${email} definido nas variaveis de ambiente do Cypress com sucesso!`)
    })
})

// Command para navegar entre as páginas
Cypress.Commands.add('navegarPara', (url, locator, tituloPagina) => {
    cy.visit(url, { timeout: 30000 })
  
    cy.get(locator, { timeout: 30000 })
      .should('exist').and('be.visible')
      .and('contain', tituloPagina)
  })

  
Cypress.Commands.add('getVisible', (locator) => {
    return cy.get(locator).scrollIntoView().should('exist').and('be.visible')
  })

  // Command Cypress para desabilitar a popup de notificação do MyFarm,
// setando um item no localStorage. 
Cypress.Commands.add('desabilitarPopUpNotificacao', () => {
    window.localStorage.setItem('notification-permission-myfarm', 'denied')
  })
  
  // Command Cypress para executar uma query, utilizando a task cypress preparedStatement
  // que faz preparação da instrução que será enviada ao banco de dados.
  Cypress.Commands.add('executarQuery', (query) => {
    const dbConfig = Cypress.env('db')
    return cy.task('preparedStatement', { query, dbConfig }, { timeout: 60000 })
  })
  
  
  


