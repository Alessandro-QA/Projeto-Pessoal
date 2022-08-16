const locators = {
  dashboard: {
    titulo: '[data-cy=header-contas-bancarias] > h1',
    novaConta: '[data-cy=header-contas-bancarias] button',
    nomeContaBancaria: '[data-cy=nome-conta]',
    nomeCartaoCredito: '[data-cy=nome-conta-cartao]',
    agencia: '[data-cy=span-agencia]',
    conta: '[data-cy=span-conta]',
    empresaTitular: '[data-cy=span-empresa-titular]',
    pesquisarConta: '[data-cy=page-filter-contas-bancarias] input'
  },

  contaBancaria: {
    titulo: '[data-cy=header-cadastro-edicao-conta-bancaria] h1',
    tipoConta: '[data-cy=select-tipo-conta]',
    nomeConta: '[data-cy=input-nome-conta]',
    empresaTitular: '[data-cy=select-empresa-titular]',
    contaPrincipal: '[data-cy=checkbox-conta-principal]',
    empresasHabilitadas: '[data-cy=select-empresas-habilitadas]',
    saldoAtual: '[data-cy=input-saldo-atual] input',
    selectBandeira: '[data-cy=select-bandeira-cartao]',
    dataFechamento: '[data-cy=input-dia-fechamento-fatura] input',
    dataVencimento: '[data-cy=input-dia-vencimento-fatura] input',
    numeroCartao: '[data-cy=input-numero-cartao]',
    limiteCartao: '[data-cy=input-limite-cartao]',
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
    cancelar: '[data-cy=button-cancelar-salvar] > .el-button--secondary',
    adicionar: '[data-cy=button-cancelar-salvar] > .el-button--primary',
    mensagemSucesso: '.el-message__content'
  }
}

export default locators
