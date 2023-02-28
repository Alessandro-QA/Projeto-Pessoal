Cypress.Commands.add('getToken', (email, password) => {
    cy.section(`Gerando Access Token para o usuário "${email}"`)

    cy.request({
        method: 'POST',
        url: 'https://auth.dev.conexa.com.br/connect/token',
        headers: {
            'authorization': 'Basic Y2NkZXZjbGllbnQ6MTdjNGZkYTUtYzUxOC00OTg1LTgzMmQtYmY4NWQxZmYxNGQ1',
            'content-type': 'application/x-www-form-urlencoded'
        },
        body: {
            scope: "tenant i18n fazenda bemocorrencia atividade atividadeagricola bem cicloproducao controleclimatico cultura estoque formapagamento material notafiscal operacao pedidocompra pessoa planejamentosafra planocontas safra unidadearmazenamento unidademedida eexport subscription parametrotributario permission product webhookvindi contabancaria financeiro instituicaofinanceira localidade producaoagricola notification assinei webhook marketingcampaign nfedistribuicao aliare agriq onboarding profile openid indexadormoeda agriq openbanking",
            grant_type: "password",
            username: email,
            password: password
        }
    }).then((response) => {
        Cypress.env('access_token', response.body.access_token)
        cy.step(`Access Token do usuário ${email} definido nas variaveis de ambiente do Cypress com sucesso!`)
    })
})

Cypress.Commands.add('executeRequest', (method, url, payload, id) => {
    const baseUrl = Cypress.config('baseUrl')

    cy.section(`Executando request do tipo "${method}" no endpoint "${url}"`)

    if (method === 'GET')
        return cy.api({
            "method": method,
            "url": `${baseUrl + url}`,
            "headers": {
                'x-tenant': Cypress.env('tenant'),
                'content-type': 'application/json',
                'authorization': `Bearer ${Cypress.env('access_token')}`,
            }
        })

    if (method === 'POST')
        return cy.api({
            "method": method,
            "url": `${baseUrl + url}`,
            "headers": {
                'x-tenant': Cypress.env('tenant'),
                'content-type': 'application/json',
                'authorization': `Bearer ${Cypress.env('access_token')}`,
            },
            "body": payload
        })

    if (method === 'DELETE')
        return cy.api({
            "method": method,
            "url": `${baseUrl + url}/${id}`,
            "headers": {
                'x-tenant': Cypress.env('tenant'),
                'content-type': 'application/json',
                'authorization': `Bearer ${Cypress.env('access_token')}`,
            },
        })

    if (method === 'PUT')
        return cy.api({
            "method": method,
            "url": `${baseUrl + url}`,
            "headers": {
                'x-tenant': Cypress.env('tenant'),
                'content-type': 'application/json',
                'authorization': `Bearer ${Cypress.env('access_token')}`,
            },
            "body": payload
        })
})
