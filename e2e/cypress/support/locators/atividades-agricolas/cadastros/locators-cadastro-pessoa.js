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
    adicionarConta: '.contas-bancarias-pessoa > .el-row > [data-cy="button-add-conta-bancaria"] > button',
    banco: '[data-cy="select-banco"]',
    agencia:'[data-cy="input-agencia"] > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    digito:'div.el-input.el-input--small input.el-input__inner[type="text"][maxlength="1"]',
    conta:'[data-cy="input-conta"] > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    digitoConta:':nth-child(5) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    adicionarPix:'.el-form > .el-row > [data-cy="button-add-conta-bancaria"] > button',
    tipoPix:'.el-select > .el-input > .el-input__inner',
    listagemPix:'.el-select-dropdown__item',
    chavePix:'.el-col-8 > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    adicionarCertidao:'.cnx-button-icon-wrapper-btn > button',
    autenticacao:'div.el-input.el-input--large input.el-input__inner[name="codigoAutenticacao"][maxlength="100"]',
    numeroCertidao:'div.el-input.el-input--large input.el-input__inner[name="numeroCdn"][maxlength="20"]',
    emissao:':nth-child(3) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner',
    validade:':nth-child(4) > .el-form-item > .el-form-item__content > .el-date-editor > .el-input__inner',
    cancelar: '[data-cy=button-cancelar]',
    adicionar: '[data-cy=button-adicionar-atualizar]',
    mensagemSucesso: '.el-message'
    
  }
}

export default locators
