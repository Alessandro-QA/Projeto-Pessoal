const locators = {
  dashboard: {
    adicionarEmpresa: '[data-cy=header-empresa] > button',
    pesquisarEmpresa: '[data-cy=page-filter-empresa] input',
    nomeEmpresa: '[data-cy=nome-empresa]',
    telefoneEmpresa: '[data-cy=telefone-empresa]',
    cpfCnpjEmpresa: '[data-cy=documento-empresa]',
    emailEmpresa: '[data-cy=email-empresa]',
    titulo: '[data-cy=header-empresa] > h1'
  },

  cadastroEmpresa: {
    tipoEmpresa: '[data-cy=radio-tipo-empresa]',
    cpfCnpj: '[data-cy=input-documento-empresa] input',
    nomeRazaoSocial: '[data-cy=input-nome-razao-social] input',
    inscricaoEstadual: '[data-cy=input-inscricao-estadual] input',
    nomeFantasia: '[data-cy=input-nome-fantasia] input',
    email: '[data-cy=input-email] input',
    telefone: '[data-cy=input-telefone] input',
    cep: '[data-cy=input-cep] input',
    pais: '[data-cy=select-pais]',
    estado: '[data-cy=select-estado]',
    municipio: '[data-cy=select-municipio]',
    bairro: '[data-cy=input-bairro] input',
    complemento: '[data-cy=input-complemento] input',
    logradouro: '[data-cy=input-logradouro] input',
    numero: '[data-cy=input-numero] input',
    adicionar: '[data-cy=button-cancelar-salvar] > .el-button--primary',
    cancelar: '[data-cy=button-cancelar-salvar] > .el-button--secondary'
  }
}

export default locators
