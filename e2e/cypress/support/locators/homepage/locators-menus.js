const locators = {
  titulos: {
    titulo: '.cnx-page-header__container--title',
  },
  botoes: {
    atividadeAgricola: '.siagri-icon-atividades',
    maquinarios: '.siagri-icon-maquinarios',
    suprimentos: '[title="Suprimentos"] > .siagri-icon-suprimentos',
    producao: '.siagri-icon-producao',
    financeiro: '.siagri-icon-financeiro',
    resultados: '.siagri-icon-resultados',
    nfe: '.siagri-icon-nfe',
  },

  textosEsperados: {
    botoesAtividadesAgricolas: [
      'Dashboard ', 'Planejamento ', 'Execução ', 'Clima ', 'Histórico dos talhões ', 'Painéis ', 'Cadastros '
    ],

    listaPaineis: [
      'Atividades do Campo'
    ],

    listaCadastros: [
      'Ciclo', 'Conta Contábil', 'Conversões de unidade', 'Cultura', 'Detentora',
      'Empresas', 'Fazendas', 'Material', 'Perfis', 'Pessoas', 'Safra', 'Talhão',
      'Und. de Armazenamento', 'Und. de Medida', 'Usuários', 'Variedade'
    ]
  },

  menu: {
    menuAtivo: '.is-active.navmenu'
  }
}

export default locators


