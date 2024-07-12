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
  cy.visit(url, { timeout: 90000 })

  cy.get(locator, { timeout: 60000 })
    .should('exist').and('be.visible')
    .and('contain', tituloPagina)
})


Cypress.Commands.add('getVisible', (locator) => {
  return cy.get(locator).scrollIntoView().should('exist').and('be.visible')
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // ignorar erros específicos ou manipular de acordo com sua necessidade
  return false; // para evitar que o erro seja lançado no console do Cypress
});

// Command Cypress para desabilitar a popup de notificação do MyFarm,
// setando um item no localStorage. 
Cypress.Commands.add('desabilitarPopUpNotificacao', () => {
  window.localStorage.setItem('notification-permission-myfarm', 'denied')

  cy.window().then((win) => {
    const notification = win.document.querySelector('.el-notification__group');

    if (notification && notification.offsetParent !== null) { // Verifica se o elemento existe e está visível
      const closeButton = notification.querySelector('.el-notification__closeBtn');
      if (closeButton) {
        closeButton.click();
      }
    }
  });

})

// Command Cypress para executar uma query, utilizando a task cypress preparedStatement
// que faz preparação da instrução que será enviada ao banco de dados.
Cypress.Commands.add('executarQuery', (query) => {
  const dbConfig = Cypress.env('db')
  return cy.task('preparedStatement', { query, dbConfig }, { timeout: 60000 })
})

// Esconde a tela de API view para seguir na página principal sem visualizar cada requisição
Cypress.Commands.add('hideApiView', () => {
  cy.document().then((doc) => {
    const style = doc.createElement('style');
    style.textContent = '#api-view { display: none !important; }';
    doc.head.appendChild(style);
  });
});

Cypress.Commands.add('findAllByText', { prevSubject: 'element' }, (subject, text) => {
  return cy.wrap(subject).contains(text);
});

Cypress.Commands.add('fecharMensagem', () => {
  cy.document().then(doc => {
    const messageSelectors = ['.el-message', '.el-message__content'];
    messageSelectors.forEach(selector => {
      if (doc.querySelector(selector)) {
        cy.get(selector).then($el => {
          if ($el.is(':visible')) {
            cy.wrap($el).find('.siagri-icon-close').click();
          }
        });
      }
    });
  });
});

//Retirar o espaço no início e final de strings
Cypress.Commands.add('limparTexto', (text) => {
  return text.replace(/\s+/g, ' ').trim();
});

Cypress.Commands.add('esperarEClicar', (selector, options = {}) => {
  const { timeout = 10000, interval = 200 } = options;
  let startTime = Date.now();

  const isClickable = () => {
    return cy.get(selector)
      .then($el => {
        const isVisible = Cypress.dom.isVisible($el);
        const isEnabled = !$el.prop('disabled');
        const hasNoDisplayNone = $el.css('display') !== 'none';
        const hasNoVisibilityHidden = $el.css('visibility') !== 'hidden';

        if (!isVisible || !isEnabled || !hasNoDisplayNone || !hasNoVisibilityHidden) {
          return false;
        }

        const rect = $el[0].getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const elFromPoint = document.elementFromPoint(x, y);

        // Verifica se o elemento está coberto por outro elemento
        if (elFromPoint !== $el[0] && !$el.has(elFromPoint).length) {
          return false;
        }

        return true;
      });
  };

  const waitForClickable = () => {
    return isClickable().then(clickable => {
      if (clickable) {
        return cy.get(selector); // Retorna o elemento quando estiver clicável
      } else if (Date.now() - startTime >= timeout) {
        throw new Error(`Elemento ${selector} não se tornou clicável dentro do tempo limite.`);
      } else {
        return cy.wait(interval).then(waitForClickable);
      }
    });
  };

  return waitForClickable().should('exist').then($el => {
    cy.wrap($el).click();
  });
});

