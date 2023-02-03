const locators = {
  dashboard: {
    titulo: '[data-cy=header-cadastro-pessoa] > h1',
    adicionarPessoa: '[data-cy=header-cadastro-pessoa] button',
    nomePessoa: '[data-cy=nome-pessoa]',
    cpfCnpjPessoa: '[data-cy=cpf-cnpj-pessoa]',
    telefonePessoa: '[data-cy=telefone-pessoa]',
    emailPessoa: '[data-cy=email-pessoa]',
    pesquisarPessoa: '[data-cy=page-filter-pessoa] input'
  },

  pessoaJuridica: {
    tipo: '[data-cy=card-tipo-pessoa] .el-card__body',
    continuar: '[data-cy=modal-tipo-pessoa] .el-button--primary',
    juridica: '[value="Jurídica"]',
    fisica: '[value="Física"]',
    cnpj: '[data-cy=input-cnpj] input',
    razaoSocial: '[data-cy=input-razao-social] input',
    isento: '[data-cy=checkbox-isento]',
    inscricaoEstadual: '[data-cy=input-inscricao-estadual] input',
    email: '[data-cy=input-email] input',
    nomeFantasia: '[data-cy=input-nome-fantasia] input',
    telefone: '[data-cy=input-telefone] input',
    cep: '[data-cy=input-cep] input',
    pais: '[data-cy=select-pais]',
    listaPais: '[data-cy=select-pais] .list__items',
    estado: '[data-cy=select-estado]',
    municipio: '[data-cy=select-municipio]',
    bairro: '[data-cy=input-bairro] input',
    complemento: '[data-cy=input-complemento] input',
    logradouro: '[data-cy=input-logradouro]',
    numero: '[data-cy=input-numero] input',
    cancelar: '[data-cy=button-cancelar]',
    adicionar: '[data-cy=button-adicionar-atualizar]'
  }
}

export default locators
