/// <reference types="cypress" />

class Expedicao {
  /**
  * Busca expedicoes de acordo com o ambiente em que o teste é executado (Dev ou QA)
  * @param {*} expedicoes 
  */
  getExpedicaoPorAmbiente(expedicoes) {
    var expedicao = []

    switch (Cypress.env('ambiente')) {
      case 'dev': expedicao = expedicoes.expedicaoDev
        break
      case 'qa': expedicao = expedicoes.expedicaoQA
        break
      default:
        throw new Error('Não foi possivel atribuir as expedicoes')
    }

    return expedicao
  }
}

export default new Expedicao()
