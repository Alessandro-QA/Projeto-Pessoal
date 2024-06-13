/// <reference types="cypress" />

const Homepage = require('../../support/commands/homepage/homepage.js');

describe('Acessar Homepage', { tags: '@home' }, () => {
  context('Detectar elementos da Homepage', () => {

    it('Deve acessar a Homepage e verificar existência dos bottons', function () {
      //cy.allure().severity('normal').startStep('test content').descriptionHtml(testDescription.ciclo)
      Homepage.validarDashboard()
    })
  })
})

