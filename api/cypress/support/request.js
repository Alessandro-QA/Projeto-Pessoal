const baseUrl = Cypress.config('baseUrl')
const tenant = Cypress.env('tenant')

Cypress.Commands.add('getRequest', (url) => {
    cy.section(`Executando request do tipo "GET" no endpoint "${url}"`)

    return cy.api({
        "method": 'GET',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "failOnStatusCode": false
    })
})

Cypress.Commands.add('getRequestWithParams', (url, params) => {
    cy.section(`Executando request do tipo "GET" no endpoint "${url}"`)

    return cy.api({
        "method": 'GET',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "qs": params,
        "failOnStatusCode": false
    })
})

Cypress.Commands.add('postRequestWithParams', (url, params) => {
    cy.section(`Executando request do tipo "POST" no endpoint "${url}"`)

    return cy.api({
        "method": 'POST',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "qs": params,
        "failOnStatusCode": false
    })
})

Cypress.Commands.add('postRequest', (url, payload) => {
    cy.section(`Executando request do tipo "POST" no endpoint "${url}"`)

    return cy.api({
        "method": 'POST',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "body": payload,
        "failOnStatusCode": false
    })
})


Cypress.Commands.add('deleteRequest', (url, id) => {
    cy.section(`Executando request do tipo "DELETE" no endpoint "${url}"`)

    return cy.api({
        "method": 'DELETE',
        "url": `${url}/${id}`,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "failOnStatusCode": false
    })
})


Cypress.Commands.add('putRequest', (url, payload) => {
    cy.section(`Executando request do tipo "PUT" no endpoint "${url}"`)

    return cy.api({
        "method": 'PUT',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "body": payload,
        "failOnStatusCode": false
    })
})

Cypress.Commands.add('putRequestWithParams', (url, params) => {
    cy.section(`Executando request do tipo "POST" no endpoint "${url}"`)

    return cy.api({
        "method": 'PUT',
        "url": url,
        "headers": {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        "qs": params,
        "failOnStatusCode": false
    })
})


Cypress.Commands.add('patchRequest', (url, payload) => {
    cy.section(`Executando request do tipo "PATCH" no endpoint "${url}"`)
  
    return cy.api({
      "method": 'PATCH',
      "url": url,
      "headers": {
        'x-tenant': tenant,
        'content-type': 'application/json',
        'authorization': `Bearer ${Cypress.env('access_token')}`,
      },
      "body": payload,
      "failOnStatusCode": false
    })
})
