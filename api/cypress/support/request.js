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

//Criado para o teste icone.cy.js dentro de culturas
//Situação onde temos um só parâmetro que recebe vários valores,
//e a API espera os parâmetros ids como múltiplos parâmetros de consulta individuais, e não como um array de strings em um único parâmetro.
Cypress.Commands.add('getRequestWithMoreParams', (url, params) => {
    cy.section(`Executando request do tipo "GET" no endpoint "${url}"`);

    // Construindo a query string a partir dos parâmetros fornecidos
    const queryParams = Object.entries(params).flatMap(([key, values]) => {
        // Verifica se values é um array antes de mapeá-lo
        if (Array.isArray(values)) {
            return values.map(value => `${key}=${value}`);
        } else {
            // Trata caso values não seja um array (por exemplo, apenas um valor único)
            return `${key}=${values}`;
        }
    }).join('&');

    const fullUrl = `${url}?${queryParams}`;

    return cy.api({
        method: 'GET',
        url: fullUrl,
        headers: {
            'x-tenant': tenant,
            'content-type': 'application/json',
            'authorization': `Bearer ${Cypress.env('access_token')}`,
        },
        failOnStatusCode: false
    });
});

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
