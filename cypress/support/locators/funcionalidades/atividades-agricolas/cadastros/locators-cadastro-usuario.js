const locators = {
  dashboard: {
    titulo: '[data-cy=hearder-usuarios] > h1',
    nomeUsuario: '[data-cy=card-nome-usuario]',
    emailUsuario: '[data-cy=card-email-usuario]',
    pesquisarUsuario: '[data-cy=page-filter-usuarios] input',
    btnNovoUsuario: '[data-cy=hearder-usuarios] button'

  },

  cadastroUsuario: {
    selectNovoUsuario: '[data-cy=select-users]',
    convidarNovoUsuario: '[data-cy=icon-convidar-usuario]',
    nome: '[data-cy=input-nome] input',
    dataNascimento: '[data-cy=date-picker-data-nascimento] input',
    cpf: '[data-cy=input-cpf] input',
    email: '[data-cy=input-email] input',
    perfilAcesso: '[data-cy=select-perfis-acesso]',
    btnSalvar: '[data-cy=button-cancelar-salvar] > .el-button--primary'
  }
}

export default locators
