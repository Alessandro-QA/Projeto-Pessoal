/// <reference types="cypress" />

import seedTestCultura from '../../../fixtures/atividades-agricolas/cadastros/fixture-cultura-e-fenologia.json'
import Cultura from '../../../support/commands/atividades-agricolas/cadastros/cultura e fenologia/cultura-e-fenologia'
import testDescription from './bdd-description/empresa.description.js'
import Utils from '../../../support/utils/utils.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {

    var nomeSemFenologia = Utils.getAlphaNumeric(10)
    var nomeComFenologia = Utils.getAlphaNumeric(10)
    var nomeEditadoSemFenologia = Utils.getAlphaNumeric(10)
    var nomeEditadoComFenologia = Utils.getAlphaNumeric(10)

    var semFaseFenologica = Utils.replacer('Nome', nomeSemFenologia, seedTestCultura.semFaseFenologica)
    var comFaseFenologica = Utils.replacer('Nome', nomeComFenologia, seedTestCultura.comFaseFenologica)
    var EdicaoSemFenologia = Utils.replacer('Nome', nomeEditadoSemFenologia, seedTestCultura.EdicaoSemFenologia)
    var EdicaoComFenologia = Utils.replacer('Nome', nomeEditadoComFenologia, seedTestCultura.EdicaoComFenologia)

    describe('Cadastros', { tags: '@cadastro' }, () => {

        context('Cultura e Fenologia', () => {
            describe('Cadastro de Cultura', () => {
                it('Deve cadastrar cultura sem fase fenológica relacionada', function () {
                    cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct1)
                    Cultura.cadastro(semFaseFenologica)
                })

                it('Deve cadastrar cultura com fase fenológica relacionada', function () {
                    cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct2)
                    Cultura.cadastro(comFaseFenologica)
                })

                it.only('Deve editar uma Cultura sem editar a fase fenológica', function () {
                    cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct3)
                    Cultura.editarCultura(EdicaoSemFenologia)
                })

                it('Deve editar a Fase Fenológica de uma cultura criada', function () {
                    cy.allureSeverity('normal').allureDescriptionHtml(testDescription.Ct4)
                    Cultura.editarCultura(EdicaoComFenologia)
                })
            })
        })
    })
})
