const locators = {
  dashboard: {
    titulo: '[data-cy=header-documentos] > h1',
    filtroFazenda: '[data-cy=select-filter-fazenda]',
    listaFazendas: '[data-cy=select-filter-fazenda] .list__items',
    filtroEmpresa: '[data-cy=select-filter-empresa]',
    listaEmpresas: '[data-cy=select-filter-empresa] .list__items',
    limparFiltroFazenda: '[data-cy=select-filter-fazenda] .siagri-icon-close',
    limparFiltroEmpresa: '[data-cy=select-filter-empresa] .siagri-icon-close',
    novoDocumento: '[data-cy=header-documentos] button',
    pesquisarDocumento: '[data-cy=page-filter-pesquisar] [name=search]',
    cardDocumento: '[data-cy=card-documento]',
    numeroDocumento: '[data-cy=span-numero-documento]',
    categoriaDocumento: '[data-cy=span-categoria-documento]',
    operacaoDocumento: '[data-cy=span-operacao-documento]',
    pessoaDocumento: '[data-cy=span-pessoa-documento]',
    valorDocumento: '[data-cy=span-valor-documento]',
    filtros: '[data-cy=page-filter-pesquisar] .el-button--text',
    filtroDataInicio: '[placeholder=Início]',
    filtroDataFinal: '[placeholder=Fim]',
    filtroPessoa: '[data-cy=select-filter-pessoa]',
    listaPessoas: '[data-cy=select-filter-pessoa] .list__items',
    filtroSafra: '[data-cy=select-filter-safra]',
    filtroCiclo: '[data-cy=select-filter-ciclo]',
    filtroConferido: '[data-cy=select-filter-conferido]',
    listConferido: '[data-cy=select-filter-conferido] .list__items',
    conferido: '[data-cy=span-conferido]',
    filtroTags: '[data-cy=select-filter-tags]',
    limparFiltro: '[data-cy=page-filter-pesquisar] .el-button--secondary',
    selecionarDocumento: '[data-cy=card-documento]',
    mensagemNenhumDocumento: '.container-empty-state'
  },

  documento: {
    bodyModal: '.fixed-steps__right--content',
    operacao: '[data-cy=select-operacao]',
    operacaoSelecionada: '[data-cy=select-operacao] .selected',
    selecionarOperacao: '[data-cy=select-operacao] .list .list__items',
    tipoDocumento: '[data-cy=select-tipo-documento]',
    tipoDocumentoSelecionado: '[data-cy=select-tipo-documento] > .selected',
    dataRecebimento: '[data-cy=datepicker-data-recebimento]',
    dataRecebimentoInativa: '[data-cy=datepicker-data-recebimento] .el-input__inner',
    dedutivel: '[data-cy=radio-dedutivel]',
    dedutivelSelecionado: '[data-cy=radio-dedutivel] .el-radio-button__inner',
    numeroDocumento: '[data-cy=input-numero-documento] input[type=text]',
    dataDocumento: '[data-cy=datepicker-data-documento]',
    dataDocumentoInativa: '[data-cy=datepicker-data-documento] .el-input__inner',
    pessoa: '[data-cy=select-pessoa]',
    pessoaSelecionada: '[data-cy=select-pessoa] .selected',
    selecionarPessoa: '[data-cy=select-pessoa] .list > .list__items',
    fazenda: '[data-cy=select-fazenda]',
    fazendaSelecionada: '[data-cy=select-fazenda] .selected',
    selecionarFazenda: '[data-cy=select-fazenda] .list > .list__items',
    safra: '[data-cy=select-safra]',
    safraSelecionada: '[data-cy=select-safra] .selected',
    selecionarSafra: '[data-cy=select-safra] .list > .list__items',
    empresa: '[data-cy=select-empresa]',
    empresaSelecionada: '[data-cy=select-empresa] .selected',
    selecionarEmpresa: '[data-cy=select-empresa] .list > .list__items',
    ieEmpresa: '[data-cy=select-ie-empresa]',
    ieEmpresaSelecionada: '[data-cy=select-ie-empresa] .selected',
    tagSelecionada: '[data-cy=select-tag] .selected',
    tags: '[data-cy=select-tag]',
    novaTag: '[data-cy=select-tag] .siagri-icon-plus',
    nomeTag: '[data-cy=select-tag] #newItemInput',
    salvarTag: '[data-cy=select-tag] .siagri-icon-check-xsmall',
    removerTag: '[data-cy=select-tag] .siagri-icon-close',
    observacao: '[data-cy=textarea-observacao]',
    valorTotal: '[data-cy=input-valor-total] input',
    valorTotalInativo: '[data-cy=input-valor-total] > input',
    foiPago: '[data-cy=check-documento-pago]',
    rateioEntreCiclos: '[data-cy=check-rateio-ciclos]',
    formaDePagamento: '[data-cy=select-forma-pagamento]',
    formaDePagamentoSelecionada: '[data-cy=select-forma-pagamento] .selected',
    quantidadeParcela: '[data-cy=input-quantidade-parcelas]',
    numeroBoleto: '[data-cy=input-numero-boleto] input',
    valorFixo: '[data-cy=check-valor-fixo]',
    selecionarFormaPagamento: '[data-cy=select-forma-pagamento] .list > .list__items',
    condicaoPagamento: '[data-cy=radio-condicao-pagamento]',
    condicaoPagamentoSelecionada: '[data-cy=radio-condicao-pagamento] label',
    valorParcela: '[data-cy=input-parcelas] > input',
    dataPagamento: '[data-cy=datepicker-data-pagamento]',
    contaBancaria: '[data-cy=select-conta-bancaria]',
    selecionarContaBancaria: '[data-cy=select-conta-bancaria] > .list > .list__items',
    contaDestino: '[data-cy=select-conta-destino]',
    selecionarContaDestino: '[data-cy=select-conta-destino] > .list > .list__items',
    vencimento: '[data-cy=datepicker-vencimento]',
    dataVencimentoInativo: '[data-cy=datepicker-vencimento] .el-input__inner',
    ciclo: '[data-cy=select-categoria-ciclo-rateio]',
    cicloSelecionado: '[data-cy=select-categoria-ciclo-rateio] .selected',
    rateioCicloValor: '[data-cy=input-valor-ciclo-rateio] > input',
    adicionarCiclo: '[data-cy=button-delete-add-ciclo] .siagri-icon-plus-xsmall',
    selecionarCategoria: '[data-cy=select-categoria-rateio]',
    pesquisarCategoria: '[data-cy=select-categoria-rateio] [placeholder="Pesquisar"]',
    categoriaSelecionada: '[data-cy=select-categoria-rateio] .selected',
    listaCategorias: '[data-cy=select-categoria-rateio] .list__items',
    categoriaValor: '[data-cy=input-valor-categoria-rateio] > input',
    adicionarCategoria: '[data-cy=button-delete-add-categoria] .siagri-icon-plus-xsmall',
    modelo: '[data-cy=input-modelo] input',
    serie: '[data-cy=input-numero-documento] input[type=number]',
    cfop: '[data-cy=select-cfop] > .selected',
    baseCalculoIcms: '[data-cy=input-baseCalculoICMS-documento] > input',
    icmsCredito: '[data-cy=input-numero-valorTotalICMS] > input',
    isentasIcms: '[data-cy=input-numero-isentas-nao-trib] > input',
    outrosIcms: '[data-cy=input-numero-outros-icms] > input',
    baseCalculoIcmsSt: '[data-cy=input-base-calculo-subst] > input',
    valorIcmsRetido: '[data-cy=input-icms-retido] > input',
    despesasAcessorias: '[data-cy=input-despesas-acessorias] > input',
    frete: '[data-cy=input-frete] > input',
    valorDoIpi: '[data-cy=input-valor-ipi] > input',
    isenta: '[data-cy=input-valor-isentas] > input',
    outros: '[data-cy=input-outros-ipi] > input',
    anexarArquivo: '[data-cy=upload-anexo] [name="file"]',
    anexo: '.anexos-list .anexos-list__item',
    excluirAnexo: '.siagri-icon-trash-alt',
    cancelar: '[data-cy=button-cancelar-adicionar-documento] .el-button--secondary',
    adicionar: '[data-cy=button-cancelar-adicionar-documento] .el-button--primary'
  },

  detalhesDocumento: {
    botaoEditarDocumento: '[data-cy=button-editar-documento]',
    botaoConferir: '[data-cy=button-conferido]',
    botaoRemoverDocumento: '[data-cy=button-remover-documento]',
    botaoSim: '.el-button--primary',
    mensagemSucesso: '.el-message__content',
    operacao: '[data-cy=span-operacao]',
    tipoDocumento: '[data-cy=span-tipo-documento]',
    dedutivel: '[data-cy=span-dedutivel]',
    numeroDocumento: '[data-cy=span-numero-documento]',
    pessoa: '[data-cy=span-pessoa]',
    cpfCnpj: '[data-cy=span-cnpj]',
    fazenda: '[data-cy=span-fazenda]',
    safra: '[data-cy=span-safra]',
    empresa: '[data-cy=span-empresa]',
    ieEmpresa: '[data-cy=span-ie-empresa]',
    tags: '[data-cy=span-tags]',
    observacao: '[data-cy=span-observacao]',
    conferido: '[data-cy=span-conferido]',
    valorTotal: '[data-cy=span-valor-total]',
    formaPagamento: '[data-cy=span-forma-pagamento]',
    condicaoPagamento: '[data-cy=span-condicao-pagamento]',
    quantidadeParcela: '[data-cy=span-quantidade-parcela]',
    contaBancaria: '[data-cy=span-conta-bancaria]',
    tabelaParcelas: '[data-cy=table-parcelas] .el-table__row .cell',
    tabelaRateioCiclos: '[data-cy=table-rateio-entre-ciclos] .el-table__row .cell',
    tabelaRateioCategorias: '[data-cy=table-rateio-categorias] .el-table__row .cell',
    anexos: '[data-cy="list-anexos"]'
  }
}

export default locators
