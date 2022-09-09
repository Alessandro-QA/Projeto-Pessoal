const locators = {
  dashboard: {
    adicionarEmpresa: '[data-cy=header-empresa] > button',
    pesquisarEmpresa: '[data-cy=page-filter-empresa] input',
    nomeEmpresa: '[data-cy=nome-empresa]',
    telefoneEmpresa: '[data-cy=telefone-empresa]',
    cpfCnpjEmpresa: '[data-cy=documento-empresa]',
    emailEmpresa: '[data-cy=email-empresa]',
    titulo: '[data-cy=header-empresa] > h1',
    cardEmpresa: '[data-cy=card-empresa]'
  },

  cadastroEmpresa: {
    tipoEmpresa: '[data-cy=radio-tipo-empresa]',
    cpfCnpj: '[data-cy=input-documento-empresa] input',
    nomeRazaoSocial: '[data-cy=input-nome-razao-social] input',
    checkBoxIsento: '[data-cy=checkbox-isento]',
    inscricaoEstadual: '[data-cy=input-inscricao-estadual] input',
    nomeFantasia: '[data-cy=input-nome-fantasia] input',
    email: '[data-cy=input-email] input',
    telefone: '[data-cy=input-telefone] input',
    cep: '[data-cy=input-cep] [name=cep]',
    pais: '[data-cy=select-pais]',
    estado: '[data-cy=select-estado][name=estado]',
    municipio: ':nth-child(3) > .el-form-item > .el-form-item__content > [data-cy=select-municipio]',
    bairro: ':nth-child(5) > [data-cy=input-bairro] [name=bairro]',
    complemento: ':nth-child(6) > [data-cy=input-complemento]',
    logradouro: '[data-cy=input-logradouro] [name=endereco]',
    numero: ':nth-child(6) > [data-cy=input-numero] > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    selectTipoApuracao: '[data-cy=select-apuracao]',
    listItemsTipoApuracao: '[data-cy=select-apuracao] .list__items',
    buttonAddInscricaoEstadual: '[data-cy=button-add-inscricao-estadual]',
    iconExpandirCadastroIe: '[data-cy=card-inscricao-estadual] .siagri-icon-arrow-right',
    inputInscricaoEstadual: '[data-cy=card-inscricao-estadual] [data-cy=input-inscricao-estadual] input',
    inputDescricaoIe: '[data-cy=card-inscricao-estadual] [data-cy=input-nome-inscricao-estadual] input',
    inputCepIe: '[data-cy=card-inscricao-estadual] [data-cy="input-cep"] input',
    selectEstadoIe: '[data-cy=card-inscricao-estadual] [data-cy=select-estado]',
    selectMunicipioIe: '[data-cy=card-inscricao-estadual] [data-cy=select-municipio]',
    inputBairroIe: '[data-cy=card-inscricao-estadual] [data-cy=input-bairro] input',
    inputComplementoIe: '[data-cy=card-inscricao-estadual] [data-cy=input-complemento] input',
    inputLogradouroIe: '[data-cy=card-inscricao-estadual] [data-cy=input-logradouro] input',
    inputNumeroIe: '[data-cy=card-inscricao-estadual] [data-cy=input-numero] input',
    radioStatusIe: '[data-cy=radio-status-inscricao-estadual] span',
    msgSucesso: '.el-message--success .el-message__content',
    adicionar: '[data-cy=button-cancelar-salvar] > .el-button--primary',
    cancelar: '[data-cy=button-cancelar-salvar] > .el-button--secondary'
  }
}

export default locators
