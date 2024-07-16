/// <reference types="cypress" />

import locCultura from '../../../../locators/atividades-agricolas/cadastros/locators-cadastro-cultura-e-fenologia'

class Cultura {
    /**
     * Metodo para cadastro de uma Cultura
     * @param {} seedTestCultura
     */

    cadastro(seedTestCultura) {
        const url = '/atividade-agricola/culturas'
        const locatorTituloPagina = locCultura.dashboard.titulo
        const tituloPagina = 'Culturas e Fenologia'
        let idCultura

        // Intercepta a requisição POST para a criação de culturas sem fenologia
        cy.intercept('POST', `${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/cultura`).as('postCultura')

        // Intercepta a requisição POST para a criação de culturas com fenologia 
        cy.intercept('POST', `${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`).as('postCulturaFenologia')

        cy.location('pathname').then((currentPath) => {
            if (currentPath !== url) {
                cy.log('Navegar para cadastro de Culturas')
                cy.navegarPara(url, locatorTituloPagina, tituloPagina)
            }
            cy.log(currentPath)
            cy.desabilitarPopUpNotificacao()
        })

        cy.log(seedTestCultura)
        cy.log(seedTestCultura.nomeCultura)
        cy.desabilitarPopUpNotificacao()

        cy.log('Clicar no botao "Adicionar Cultura"')
        cy.get(locCultura.dashboard.adicionarCultura).click()

        cy.log('Preencher Nome da Cultura')
        cy.getVisible(locCultura.cadastroCultura.nomeCultura).type(seedTestCultura.nomeCultura)

        cy.log('Selecionar Ícone da Cultura')
        cy.getVisible(locCultura.cadastroCultura.iconeCultura).click()
        cy.get(locCultura.cadastroCultura.listaIconesCultura).first().click()

        cy.log('Preencher Nome Científico')
        cy.getVisible(locCultura.cadastroCultura.nomeCientifico).type(seedTestCultura.nomeCientifico)

        cy.log('Selecionar Unidade de Medida')
        cy.getVisible(locCultura.cadastroCultura.unidadeMedida).click()
        cy.getVisible(locCultura.cadastroCultura.buscaUnidadeMedida).click().type(seedTestCultura.unidadeMedida)
        cy.contains(seedTestCultura.unidadeMedida).click()

        cy.log('Selecionar Material da Colheita')
        cy.getVisible(locCultura.cadastroCultura.materialColheita).click()
        cy.getVisible(locCultura.cadastroCultura.buscaMaterialColheita).click().type(seedTestCultura.materialColheita)
        cy.contains(seedTestCultura.materialColheita).click()

        cy.get(locCultura.cadastroCultura.carregarMaterial).should('have.css', 'display', 'none')

        cy.log('Clicar em Avançar')
        cy.getVisible(locCultura.cadastroCultura.botaoAvancar).should('be.visible').contains('Avançar').click()

        if (seedTestCultura.tipo === 'Sem Fenologia') {

            cy.log('Clicar em Concluir')
            cy.get(locCultura.cadastroFenologia.botaoConcluir).contains('Concluir').should('be.visible', { timeout: 9000 }).and('not.be.disabled').click()

        } else if (seedTestCultura.tipo === 'Com Fenologia') {

            cy.log('Clicar em Adicionar Fase Fenológica')
            cy.getVisible(locCultura.cadastroFenologia.adicionarFase).click()

            cy.log('Preencher Nome da Fase')
            cy.get(locCultura.cadastroFenologia.nomeFase).should('be.visible').click().type(seedTestCultura.nomeFase)

            cy.log('Selecionar Ícone da Fase')
            cy.get(locCultura.cadastroFenologia.iconeFase).click()
            cy.get(locCultura.cadastroFenologia.listaIconesFase).filter(':visible').should('be.visible').first().click()

            cy.log('Preencher Código do Estádio')
            cy.get(locCultura.cadastroFenologia.codigoEstadio).should('be.visible').type(seedTestCultura.codigoEstadio)

            cy.log('Preencher Descrição do Estádio')
            cy.get(locCultura.cadastroFenologia.descricaoEstadio).should('be.visible').type(seedTestCultura.descricaoEstadio)

            cy.log('Clicar em Salvar Estádio')
            cy.getVisible(locCultura.cadastroFenologia.salvarEstadio).should('be.visible').contains('Salvar estádio').click()

            cy.log('Clicar em Concluir')
            cy.get(locCultura.cadastroFenologia.botaoConcluir).contains('Concluir').should('be.visible', { timeout: 9000 }).and('not.be.disabled').click()
        }

        // Aguarda até que a requisição POST seja completada
        cy.wait('@postCultura').then(interception => {
            // Verifica se a requisição retornou com sucesso (status 200)
            expect(interception.response.statusCode).to.eq(200)

            // Captura o response da requisição POST
            const responseBody = interception.response.body
            cy.log(responseBody)
            cy.log(responseBody.data.id)
            idCultura = responseBody.data.id

            // Usa `cy.wrap` para armazenar o valor da variável fora do wait
            cy.wrap(idCultura).as('idCultura')

            // Oculta o #api-view para continuar na página Atual
            cy.hideApiView()
        })

        if (seedTestCultura.tipo === 'Com Fenologia') {

            cy.wait('@postCulturaFenologia').then(interception => {
                // Verifica se a requisição retornou com sucesso (status 200)
                expect(interception.response.statusCode).to.eq(200)
            })
        }

        cy.get(locCultura.dashboard.pesquisar, { timeout: 5000 })
            .should('exist').and('be.visible')
            .click()
            .clear()
            .type(seedTestCultura.nomeCultura)
            .type('{enter}')

        if (seedTestCultura.tipo === 'Sem Fenologia') {
            cy.log('Validar nome da cultura cadastrada e quantidade de estádios vinculados')
            cy.getVisible(locCultura.dashboard.conteinerCultura)
                .should('contain', seedTestCultura.nomeCultura)
                .and('contain', '0 Estádios Fenológicos')

        } else if (seedTestCultura.tipo === 'Com Fenologia') {
            cy.log('Validar nome da cultura cadastrada e quantidade de estádios vinculados')
            cy.getVisible(locCultura.dashboard.conteinerCultura)
                .should('contain', seedTestCultura.nomeCultura)
                .and('contain', '1 Estádios Fenológicos')
        }

        // Deleta Registro Criado Para Evitar Acumulo de Registro
        cy.get('@idCultura').then((idCultura) => {
            cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/cultura`, idCultura).then((responseDelete) => {
                expect(responseDelete.status).to.be.equal(200)
            })
        })

    }

    editarCultura(seedTestCultura) {
        const url = '/atividade-agricola/culturas'
        const locatorTituloPagina = locCultura.dashboard.titulo
        const tituloPagina = 'Culturas e Fenologia'

        // Intercepta a requisição PUT para edição de culturas
        cy.intercept('PUT', `${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/cultura`).as('putCultura')

        // Intercepta a requisição PUT para edição de culturas com fenologia
        cy.intercept('PUT', `${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaFenologia`).as('putCulturaFenologia')

        cy.location('pathname').then((currentPath) => {
            if (currentPath !== url) {
                cy.log('Navegar para edição de Culturas')
                cy.navegarPara(url, locatorTituloPagina, tituloPagina)
            }
            cy.log(currentPath)
            cy.desabilitarPopUpNotificacao()
        })

        cy.log(seedTestCultura.nomeCultura)
        cy.desabilitarPopUpNotificacao()

        // Pesquisa a Cultura para Edição
        cy.log('Pesquisar a Cultura para Edição')
        cy.get(locCultura.dashboard.pesquisar, { timeout: 5000 })
            .should('exist').and('be.visible')
            .click()
            .clear()
            .type('Edição')
            .type('{enter}')

        cy.log('Clicar no botão "Editar Cultura"')
        cy.get(locCultura.dashboard.editarCultura).click()

        if (seedTestCultura.tipo === 'Edição Sem Fenologia') {

            cy.log('Editar Nome da Cultura')
            cy.get(locCultura.cadastroCultura.nomeCultura).should('be.visible').click().clear().type(seedTestCultura.nomeCultura)

            cy.get(locCultura.cadastroCultura.carregarMaterial).should('have.css', 'display', 'none')

            cy.log('Clicar em Avançar')
            cy.getVisible(locCultura.cadastroCultura.botaoAvancar).should('be.visible').contains('Avançar').click()

            cy.log('Clicar em Concluir')
            cy.get(locCultura.cadastroFenologia.botaoConcluir).contains('Concluir').should('be.visible', { timeout: 9000 }).and('not.be.disabled').click()
        }

        else if (seedTestCultura.tipo === 'Edição Com Fenologia') {

            cy.get(locCultura.cadastroCultura.carregarMaterial).should('have.css', 'display', 'none')

            cy.log('Clicar em Avançar')
            cy.getVisible(locCultura.cadastroCultura.botaoAvancar).should('be.visible').contains('Avançar').click()

            cy.log('Clicar em Editar Fase')
            cy.getVisible(locCultura.cadastroFenologia.editarFase).should('be.visible').click()

            cy.log('Editar Nome da Fase')
            cy.getVisible(locCultura.cadastroFenologia.nomeFase).should('be.visible').clear().type(seedTestCultura.nomeFase)

            cy.log('Clicar em Salvar Estádio')
            cy.get(locCultura.cadastroFenologia.salvarEstadio).should('be.visible').click()

            cy.log('Clicar em Concluir')
            cy.get(locCultura.cadastroFenologia.botaoConcluir).contains('Concluir').should('be.visible', { timeout: 9000 }).and('not.be.disabled').click()
        }

        // Aguarda até que a requisição PUT seja completada
        cy.wait('@putCultura').then(interception => {
            // Verifica se a requisição retornou com sucesso (status 200)
            expect(interception.response.statusCode).to.eq(200)

            // Oculta o #api-view para continuar na página Atual
            cy.hideApiView()
        })

        cy.wait('@putCulturaFenologia').then(interception => {
            expect(interception.response.statusCode).to.eq(200)
        })

        if (seedTestCultura.tipo === 'Edição Sem Fenologia') {
            cy.log('Validar descrição da cultura editada')
            cy.getVisible(locCultura.dashboard.conteinerCultura)
                .should('contain', seedTestCultura.nomeCultura)
        }
    }
}

export default new Cultura()