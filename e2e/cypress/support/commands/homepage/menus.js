/// <reference types="cypress" />

const locMenus = require('../../locators/homepage/locators-menus')

class Menus {

  acessarHome() {

    const url = '/home'
    const locatorTituloPagina = locMenus.titulos.titulo
    const tituloPagina = 'Dashboard geral'

    // Navega para página de dashboard geral (home)
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.desabilitarPopUpNotificacao()

  }

  voltarHome() {
    cy.get(locMenus.menu.voltar).click()
  }

  validarDashboard() {

    // Itera sobre cada chave (botão) dentro de locators.botoes
    Object.keys(locMenus.botoes).forEach((buttonKey) => {
      const buttonSelector = locMenus.botoes[buttonKey]

      // Verifica se o botão está presente na página
      cy.get(buttonSelector)
        .should('be.visible')
    })
  }

  validarAtividadesAgricolas() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.atividadeAgricola).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosAG.botoesAtividadesAgricolas

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })
    })

    // Simula o hover ao passar sobre o botão "Painéis" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.subMenu).within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosAG.listaPaineis

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
      })
    })

    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseleave')


    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.subMenu).within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosAG.listaCadastros

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
      })
    })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')

  }

  validarMaquinarios() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.maquinarios).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosMaq.botoesMaquinarios

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })

    })

    // Simula o hover ao passar sobre o botão "Painéis" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).should('be.visible')
      .contains('Painéis')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosMaq.listaPaineis[0]).should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosMaq.listaPaineis

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseleave')


    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')


    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosMaq.listaCadastros[0]).should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosMaq.listaCadastros

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')

  }

  validarSuprimentos() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.suprimentos).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosSup.botoesSuprimentos

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })

    })

    // Simula o hover ao passar sobre o botão "Consultas" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Consultas')
      .should('be.visible')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosSup.listaConsultas[0])
      .should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosSup.listaConsultas

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Consultas')
      .should('be.visible')
      .trigger('mouseleave')


    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')


    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosSup.listaCadastros[0]).should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosSup.listaCadastros

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')

  }

  validarProducao() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.producao).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosProd.botoesProducao

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })

    })

    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')
      .wait(300)

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosProd.listaCadastros[3])
      .should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosProd.listaCadastros

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')

  }

  validarFinanceiro() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.financeiro).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosFin.botoesFinanceiro

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })
    })

    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseenter')


    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosFin.listaPaineis[0])
      .filter(':visible')
      .should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosFin.listaPaineis

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseleave')


    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')


    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosFin.listaCadastros[3])
      .should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosFin.listaCadastros

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')

  }

  validarResultados() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.resultados).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosResult.botoesResultados

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
          .should('be.visible')
          .invoke('text')
          .then(texto => {
            // Limpa o texto antes de comparar usando o comando personalizado
            cy.limparTexto(texto).then(textoLimpo => {
              cy.limparTexto(valor).then(valorLimpo => {
                expect(textoLimpo).to.equal(valorLimpo)
              })
            })
          })
      })
    })
  }

  validarNfe() {

    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.nfe).click()

    cy.fecharMensagem()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).should('be.visible').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperadosNfe.botoesNfe

      // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains(valor)
        .should('be.visible')
        .invoke('text')
        .then(texto => {
          // Limpa o texto antes de comparar usando o comando personalizado
          cy.limparTexto(texto).then(textoLimpo => {
            cy.limparTexto(valor).then(valorLimpo => {
              expect(textoLimpo).to.equal(valorLimpo)
            })
          })
        })
    })
    })

    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')


    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.contains(locMenus.menu.subMenu, locMenus.textosEsperadosNfe.listaCadastros[1])
      .should('be.visible')
      .within(() => {

        // Pega os textos esperados do arquivo de locators
        const valoresEsperados = locMenus.textosEsperadosNfe.listaCadastros

        // Itera sobre cada elemento dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible') // Verifica se o valor está presente e visível
        })
      })

    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseleave')
  }
}

export default new Menus()