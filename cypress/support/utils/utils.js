class Utils {
  /**
   * Montar e retorna a data atual no padrão YYYY-MM-DD
   * @returns {string} Data atual no padrão YYYY-MM-DD
   */
  getDate() {
    var dataAtual = new Date()
    var dd = String(dataAtual.getDate()).padStart(2, '0')
    var mm = String(dataAtual.getMonth() + 1).padStart(2, '0')
    var yyyy = dataAtual.getFullYear()

    return dataAtual = yyyy + '-' + mm + '-' + dd
  }

  /**
   * Substitui uma string (chave e valor) em arquivo
   * @param  {string} searchValue - String de pesquisa
   * @param  {string} replaceValue - String de substituição
   * @param  {Object} file - Arquivo Json
   * @returns {jsonObject} Objeto Json com strings substituidas
   */
  replacer(searchValue, replaceValue, file) {
    const jsonObject = JSON.stringify(file, (key, val) => {
      if (typeof val === 'string') {
        return val.replace(searchValue, replaceValue)
      }
      return val
    })
    return jsonObject
  }

  /**
   * Faz requisição em API
   * o tenant e acess_token são obtidos através das variáveis de ambiente do Cypress
   * @param  {string} method Método da requisição. Exemplo: GET, POST, PUT ...
   * @param  {string} url URL da requisição
   * @param  {Object} body Corpo da requisição, normalmente um objeto json
   * @param {string} credencial Nome da credencial de acesso: 'login_cenarios', 'login_cadastro' ou 'login_nfe'. Cada credencial possui login, senha e tenant
   */
  requestApi(method, url, body, credencial) {
    cy.request({
      method: method,
      url: url,
      headers: {
        'authorization': `Bearer ${Cypress.env('access_token')}`,
        'content-type': 'application/json',
        'oferta': '38F68463-F895-47CA-BE8B-D296ED2EC0FB',
        'x-tenant': Cypress.env(credencial).tenant
      },
      body: body
    }).then((resp) => {
      expect(resp.body).not.be.empty
      expect(resp.status).be.equal(200)
      cy.log('Requisição efetuada com sucesso!')
    })
  }

  /**
   * Seta o access_token do localStorage nas variáveis de ambiente do Cypress
   */
  setAccessTokenFromLocalStorage() {
    if (Cypress.env('authUrl')) {
      const oidc = JSON.parse(window.localStorage.getItem(`oidc.user:${Cypress.env('authUrl')}:my-farm-clientapp`))
      Cypress.env('access_token', oidc.access_token)
    } else {
      cy.log('Não foi possível obter o access_token do LocalStorage, verifique a authUrl da pasta config-files')
    }
  }

  deleteDownloadsFolder() {
    const downloadsFolder = Cypress.config('downloadsFolder')
    cy.task('deleteDownloadsFolder', downloadsFolder)
  }
}

export default new Utils()
