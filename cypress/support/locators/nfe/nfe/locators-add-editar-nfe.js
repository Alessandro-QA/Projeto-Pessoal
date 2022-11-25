const locators = {
  emitente: {
    selectEmpresa: '[data-cy=select-empresa-emitente]',
    selecionarEmpresa: '[data-cy=select-empresa-emitente] .list__items',
    empresaSelecionada: '[data-cy=select-empresa-emitente] .selected',
    selectIE: '[data-cy=select-ie-emitente]',
    selecionarIE: '[data-cy=select-ie-emitente] .list__items',
    IESelecionada: '[data-cy=select-ie-emitente] .selected',
    cpfCnpj: '[data-cy=cpf-cnpj-emitente]',
    selectFazenda: '[data-cy=select-fazenda-emitente]',
    selecionarFazenda: '[data-cy=select-fazenda-emitente] .list__items',
    fazendaSelecionada: '[data-cy=select-fazenda-emitente] .selected',
    selectSafra: '[data-cy=select-safra-emitente]',
    selecionarSafra: '[data-cy=select-safra-emitente] .list__items',
    exibirOcultarEndereco: '[data-cy=section-emitente] [data-cy=exibir-ocultar-endereco]',
    infoEndereco: '[data-cy=endereco-emitente]'
  },
  destinatario: {
    selectEmpresa: '[data-cy=select-empresa-destinatario]',
    selecionarEmpresa: '[data-cy=select-empresa-destinatario] .list__items',
    selectIE: '[data-cy=select-ie-destinatario]',
    selecionarIE: '[data-cy=select-ie-destinatario] .list__items',
    IESelecionada: '[data-cy=select-ie-destinatario] > .selected',
    IECnpj: '[data-cy=inscricao-estadual]',
    cpfCnpj: '[data-cy=cpf-cnpj-destinatario]',
    exibirOcultarEndereco: '[data-cy=section-destinatario] [data-cy=exibir-ocultar-endereco]',
    infoEndereco: '[data-cy=endereco-destinatario]'
  },
  informacoesNota: {
    buttoGerarNFeRascunho: '[data-cy=check-rascunho]',
    numeroNFe: '[data-cy=numero-nota]',
    selectFinalidade: '[data-cy=select-finalidade]',
    selecionarFinalidade: '[data-cy=select-finalidade] .list__items',
    finalidadeSelecionada: '[data-cy=select-finalidade] .selected',
    selectOperacao: '[data-cy=select-operacao]',
    selecionarOperacao: '[data-cy=select-operacao] .list__items',
    selectFrete: '[data-cy=select-frete]',
    selecionarFrete: '[data-cy=select-frete] .list__items',
    dataEmissao: '[data-cy=data-emissao]',
    toggleSaidaFutura: '[data-cy=toggle-data-futura]',
    dataSaida: '[data-cy=data-entrada-saida] input',
    horaSaida: '[data-cy=hora-entrada-saida] input',
    verDetalhes: '[data-cy=ver-ocultar-detalhes]',
    tipo: '[data-cy=select-tipo]',
    modelo: '[data-cy=select-modelo]',
    serie: '[data-cy=span-serie]'
  },
  transportador: {
    selectTransportador: '[data-cy=select-transportadora]',
    selecionarTransportador: '[data-cy=select-transportadora] .list__items',
    selectVeiculo: '[data-cy=select-veiculo]',
    selecionarVeiculo: '[data-cy=select-veiculo] .list__items',
    quantidade: '[data-cy=input-quantidade] input',
    especie: '[data-cy=input-especie]',
    marca: '[data-cy=input-marca]',
    numeracao: '[data-cy=input-numeracao]',
    pesoBruto: '[data-cy=input-peso-bruto]',
    pesoLiquido: '[data-cy=input-peso-liquido]'
  },
  materiais: {
    buttonNovoMateiral: '[data-cy=button-novo-material] button',
    tabelaMateriais: '[data-cy=table-material]',
    nomeMaterial: '[data-cy=nome-material]',
    quantidade: '[data-cy=quantidade-material]',
    valorUnitario: '[data-cy=valor-unitario-material]',
    buttonEditar: '[data-cy=button-editar-excluir] .siagri-icon-edit-xsmall',
    buttonExcluir: '[data-cy=button-editar-excluir] .siagri-icon-trash-alt-xsmall'
  },
  outrosValores: {
    collapse: '[data-cy=collapse-outros-valores] .siagri-icon-arrow-right-xsmall',
    inputValorFrete: '[data-cy=input-valor-frete] > input',
    inputValorSeguro: '[data-cy=input-valor-seguro] > input',
    inputOutrasDespesas: '[data-cy=input-outras-despesas] > input'
  },
  totalImpostos: {
    collapse: '[data-cy=collapse-total-impostos] .siagri-icon-arrow-right-xsmall',
    icms: '[data-cy=span-icms]',
    pis: '[data-cy=span-pis]',
    cofins: '[data-cy=span-cofins]',
    retencao: '[data-cy=span-retencao]',
    fcp: '[data-cy=span-fcp]'
  },
  financeiro: {
    collapse: '[data-cy=collapse-financeiro] .siagri-icon-arrow-right-xsmall',
    inputValorTotal: '[data-cy=input-valor-total] > input',
    checkboxFoiPago: '[data-cy=checkbox-ja-foi-pago]',
    toggleDeducao: '[data-cy=radio-dedutivel]',
    selectFormaPagamento: '[data-cy=select-forma-pagamento]',
    selecionarFormaPagamento: '[data-cy=select-forma-pagamento] .list__items',
    toggleCondicaoPagamento: '[data-cy=radio-condicao-pagamento]',
    selectContaBancaria: '[data-cy=select-conta-bancaria]',
    selecionarContaBancaria: '[data-cy=select-conta-bancaria] .list__items',
    inputDataPagamento: '[data-cy=date-picker-data-pagamento] input',
    inputQtdParcela: '[data-cy=input-quantidade-parcelas] > input',
    inputValorParcela: '[data-cy=input-valor-parcela] > input',
    inputVencimentoParcela: '[data-cy=date-picker-data-vencimento] input'
  },
  rateio: {
    collapse: '[data-cy="collapse-rateio"] .siagri-icon-arrow-right-xsmall',
    selectCategoria: '[data-cy=select-categoria]',
    selecionarCategoria: '[data-cy=select-categoria] .list__items',
    inputPorcentagem: '[data-cy=input-porcentagem] > input',
    inputValorCategoria: '[data-cy=input-valor] > input',
    selectCiclo: '[data-cy=select-ciclo]',
    selecionarCiclo: '[data-cy=select-ciclo] .list__items',
    inputValorCiclo: '[data-cy=input-valor-ciclo] > input',
    buttonAddDeleteCiclo: '[data-cy=button-add-delete-ciclo] button'
  },
  informacoesComplementares: {
    exibirOcultar: '[data-cy=informacoes-complementares]',
    inputInformacoesComplementares: '[data-cy=input-informacoes-complementares]'
  },
  valorTotalNota: '[data-cy=valor-total]',
  buttonCancelar: '[data-cy=button-cancelar-salvar] .btn-secondary',
  buttonGerarNota: '[data-cy=button-cancelar-salvar] .el-button--primary',
  msgAutorizada: '[data-cy=modal-autorizada]',
  buttonFecharModalNfe: '[data-cy=modal-nfe] .el-dialog__headerbtn'
}

export default locators
