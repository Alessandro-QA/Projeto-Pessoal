const locators = {
  titulo: '[data-cy=header-dashboard-contrato] h1',
  selectFazenda: '[data-cy=select-fazenda]',
  listaFazenda: '[data-cy=select-fazenda] .list__items',
  selectSafra: '[data-cy=select-safra]',
  listaSafra: '[data-cy=select-safra] .list__items',
  buttonNovoContrato: '[data-cy=header-dashboard-contrato] > .el-button',
  buttonFiltros: '[data-cy=filtros-contrato] .siagri-icon-filter-xsmall',
  inputPesquisar: '[data-cy=filtros-contrato] [name="search"]',
  selectCiclo: '[data-cy=select-ciclo]',
  selectCultura: '[data-cy=select-cultura]',
  selectNegociacao: '[data-cy=select-negociacao]',
  selectDestino: '[data-cy=select-destino]',
  selectStatus: '[data-cy=select-status]',
  selectEmpresas: '[data-cy=select-empresas]',
  cardContrato: '[data-cy=card-contrato]',
  spanCultura: '[data-cy=nome-cultura]',
  spanStatusContrato: '[data-cy=status-contrato]',
  spanNumeroContrato: '[data-cy=span-numero-contrato]',
  spanFormacaoValor: '[data-cy=span-valor-total]',
  spanValorRecebido: '[data-cy=span-valor-recebido]',
  spanQuantidadeEntregue: '[data-cy=span-quantidade-entregue]',
  spanNegociacao: '[data-cy=span-tipo-negociacao]',
  buttonDetalhesContrato: '[data-cy=abrir-contrato]'
}

export default locators
