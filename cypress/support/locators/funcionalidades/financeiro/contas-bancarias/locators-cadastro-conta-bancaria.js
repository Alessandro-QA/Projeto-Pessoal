const locators = {
  dashboard: {
    titulo: '[data-cy=header-contas-bancarias] > h1',
    novaConta: '[data-cy=header-contas-bancarias] button',
    abrirFiltros: '[data-cy=page-filter-contas-bancarias] .el-button--medium',
    fecharFiltro: '[data-cy=page-filter-contas-bancarias] .el-button--secondary',
    selectFiltroTipo: '[data-cy=select-filter-tipo-conta]',
    selectFiltroEmpresa: '[data-cy=select-filter-empresas]',
    selectFiltroStatus: '[data-cy=select-filter-situacao]',
    pesquisarConta: '[data-cy=page-filter-contas-bancarias] input',
    cardConta: '[data-cy=card-conta]',
    cardCartao: '[data-cy=card-cartao]',
    nomeContaBancaria: '[data-cy=nome-conta]',
    nomeCartaoCredito: '[data-cy=nome-conta-cartao]',
    dataSaldoInicial: '[data-cy=span-data-saldo-inicial]',
    saldo: '[data-cy=span-saldo]',
    agencia: '[data-cy=span-agencia]',
    conta: '[data-cy=span-conta]',
    empresaTitular: '[data-cy=span-empresa-titular]',
    limiteDisponivelCartao: '[data-cy=span-limite-disponivel]',
    dataVencimentoCartao: '[data-cy=span-vencimento-cartao]'
  },

  detalhesConta: {
    buttonEditar: '[data-cy=header-detalhes-conta-bancaria] .siagri-icon-edit-xsmall',
    buttonExcluir: '[data-cy=header-detalhes-conta-bancaria] .siagri-icon-trash-alt-xsmall',
    confirmarExclusao: '.el-button--primary',
    cancelarExclusao: '.el-button--primary-outline',
    nomeConta: '[data-cy=span-nome-conta]',
    mensagemExclusao: '.el-message__content'
  },

  contaBancaria: {
    titulo: '[data-cy=header-cadastro-edicao-conta-bancaria] h1',
    tipoConta: '[data-cy=select-tipo-conta]',
    nomeConta: '[data-cy=input-nome-conta]',
    empresaTitular: '[data-cy=select-empresa-titular]',
    contaPrincipal: '[data-cy=checkbox-conta-principal]',
    empresasHabilitadas: '[data-cy=select-empresas-habilitadas]',
    selectBandeira: '[data-cy=select-bandeira-cartao]',
    dataFechamento: '[data-cy=input-dia-fechamento-fatura] input',
    dataVencimento: '[data-cy=input-dia-vencimento-fatura] input',
    numeroCartao: '[data-cy=input-numero-cartao]',
    limiteCartao: '[data-cy=input-limite-cartao] input',
    selectContaVinculada: '[data-cy=select-conta-corrente-vinculada]',
    dataSaldoInicial: '[data-cy=date-picker-data-saldo-inicial] input',
    saldoInicial: '[data-cy=input-saldo-inicial] > input',
    saldoAtual: '[data-cy=input-saldo-atual] input',
    banco: '[data-cy=select-banco]',
    agencia: '[data-cy=input-numero-agencia] input',
    agenciaDigito: '[data-cy=input-digito-agencia]',
    numeroConta: '[data-cy=input-numero-conta] input',
    contaDigito: '[data-cy=input-digito-conta]',
    incluirSaldo: '[data-cy=checkbox-incluir-saldo-disponivel]',
    ativarInativar: '.situacao.el-col.el-col-5',
    cancelar: '[data-cy=button-cancelar-salvar] > .el-button--secondary',
    adicionar: '[data-cy=button-cancelar-salvar] > .el-button--primary',
    mensagemSucesso: '.el-message__content'
  }
}

export default locators
