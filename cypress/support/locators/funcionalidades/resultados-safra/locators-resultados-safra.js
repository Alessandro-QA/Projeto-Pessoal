const locators = {
  dashboard: {
    titulo: '[data-cy=header-resultado-safra] h1',
    filtroFazenda: '[data-cy=select-filter-fazenda]',
    limparFiltroFazenda: '[data-cy=select-filter-fazenda] .siagri-icon-close',
    filtroSafra: '[data-cy=select-filter-safra]',
    limparFiltroSafra: '[data-cy=select-filter-safra] .siagri-icon-close',
    checkboxInformacoesAtividade: '[data-cy=checkbox-informacoes-atividades-agricolas]',
    checkboxContasPagarReceber: '[data-cy=checkbox-contas-pagar-receber]',
    checkboxSaldoColheita: '[data-cy=checkbox-saldo-colheitas]',
    cardCiclo: '[data-cy=dashboard-card-ciclo]',
    cardHectares: '[data-cy=dashboard-card-hectares]',
    cardValores: '[data-cy=dashboard-card-valores]',
    cardVisaoGeral: '[data-cy=dashboard-card-visao-geral]',
    valorTotalDespesas: '[data-cy=dashboard-card-visao-geral] .value',
    cardMargemLucro: '[data-cy=dashboard-card-margem-lucro]',
    valorTotalMargemLucro: '[data-cy=dashboard-card-margem-lucro] .value',
    mensagemEmpty: '[data-cy=msg-empty-state]'
  },

  analitica: {
    titulo: '[data-cy=header-resultado-safra-analitica] h1',
    filtroFazenda: '[data-cy=select-filter-fazenda]',
    limparFiltroFazenda: '[data-cy=select-filter-fazenda] .siagri-icon-close',
    filtroSafra: '[data-cy=select-filter-safra]',
    limparFiltroSafra: '[data-cy=select-filter-safra] .siagri-icon-close',
    checkboxInformacoesAtividade: '[data-cy=checkbox-informacoes-atividades-agricolas]',
    checkboxContasPagarReceber: '[data-cy=checkbox-contas-pagar-receber]',
    checkboxSaldoColheita: '[data-cy=checkbox-saldo-colheitas]',
    cardMargemLucro: '[data-cy=dashboard-card-margen-lucro]',
    cardValores: '[data-cy=dashboard-card-valores-totais]',
    cardTotalHaSafra: '[data-cy=dashboard-card-hectares-safra]',
    cardCiclosCultura: '[data-cy=card-ciclo-cultura]',
    nomeCicloCultura: '[data-cy=card-ciclo-nome-cultura]',
    dropdownExportarRelatorio: '[data-cy=dropdown-exportar-relatorio]',
    buttonRelatorioAnalitico: '[data-cy=relatorio-analitico]',
    buttonRelatorioSintetico: '[data-cy=relatorio-sintetico]',
    valorTotalDespesas: '[data-cy=span-valor-despesas]',
    nomeCategoria: '[data-cy=nome-categoria]',
    acumuladoSafra: '[data-cy=span-acumulado-safra]',
    percentualCustoTotal: '[data-cy=span-percentual-custo-total]',
    buttonDropdownCard: '[data-cy=dropdown-card]',
    iconDropdownCard: '[data-cy=dropdown-card] i',
    tabelaDetalhesDepesas: '[data-cy=table-detalhes] .el-table__row',
    iconAbrirTitulo: '[data-cy=icon-abrir-titulo]',
    mensagemEmpty: '[data-cy=msg-empty-state]'
  }
}

export default locators
