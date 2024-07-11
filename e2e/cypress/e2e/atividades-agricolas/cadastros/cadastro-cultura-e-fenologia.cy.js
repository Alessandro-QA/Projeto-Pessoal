/// <reference types="cypress" />

import seedTestCultura from '../../../fixtures/atividades-agricolas/cadastros/fixture-cultura-e-fenologia.json'
import Cultura from '../../../support/commands/atividades-agricolas/cadastros/cultura e fenologia/cultura-e-fenologia'
//import testDescription from './bdd-description/empresa.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {

    describe('Cadastros', { tags: '@cadastro' }, () => {

        context('Cultura e Fenologia', () => {
            describe('Cadastro de Cultura', () => {
                it('Deve cadastrar cultura sem fase fenológica relacionada', function () {
                    //cy.allureSeverity('critical').allureDescriptionHtml(testDescription.empresa)

                    Cultura.cadastro(seedTestCultura.semFaseFenologica)
                })

                it('Deve cadastrar cultura com fase fenológica relacionada', function () {
                    //cy.allureSeverity('critical').allureDescriptionHtml(testDescription.empresa)

                    Cultura.cadastro(seedTestCultura.comFaseFenológica)
                })
                
            })
        })
    })
})
