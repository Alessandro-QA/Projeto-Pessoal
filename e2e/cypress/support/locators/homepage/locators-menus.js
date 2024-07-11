const locators = {
  titulos: {
    titulo: '.cnx-page-header__container--title',
  },
  botoes: {
    atividadeAgricola: 'a[title="Atividades Agricolas"] sub',
    maquinarios: 'a[title="Maquinários"] sub',
    suprimentos: 'a[title="Suprimentos"] sub',
    producao: 'a[title="Produção"] sub',
    financeiro: 'a[title="Financeiro"] sub',
    resultados: 'a[title="Resultados"] sub',
    nfe: 'a[title="NF-e"] sub',
  },

  textosEsperadosAG: {
    botoesAtividadesAgricolas: [
      'Dashboard ', 'Planejamento ', 'Execução ', 'Clima ', 'Histórico dos talhões ', ' Painéis ', ' Cadastros '
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

  textosEsperadosMaq: {
    botoesMaquinarios: [
      'Dashboard ', 'Máquinas ', 'Manutenção Corretiva ', 'Manutenção Preventiva ', 'Abastecimento ', ' Painéis ', ' Cadastros '
    ],

    listaPaineis: [
      'Custo de Maquinário'
    ],

    listaCadastros: [
      'Fabricante', 'Material', 'Modelo de máquina', 'Ocorrência', 'Pessoas'
    ]
  },

  textosEsperadosSup: {
    botoesSuprimentos: [
      'Dashboard ', 'Movimentações ', 'Pedidos ', 'Recebimento ', 'Baixar Notas ', ' Consultas ', ' Cadastros '
    ],

    listaConsultas: [
      'Atendimento de Materiais por Pedidos', 'Consultas Estoque', 'Extrato de Materiais', 'Histórico de compras'
    ],

    listaCadastros: [
      'Configuração de Importação de Documentos', 'Detentora', 'Empresas', 'Fabricante', 'Material', 'Pessoas', 'Und. de Armazenamento'
    ]
  },

  textosEsperadosProd: {
    botoesProducao: [
      'Dashboard ', 'Colheita ', 'Contratos ', 'Fixação ', 'Expedição ', 'Acerto de Frete ', ' Cadastros '
    ],

    listaCadastros: [
      'Empresas', 'Fazendas', 'Pessoas', 'Tabela de descontos'
    ]
  },

  textosEsperadosFin: {
    botoesFinanceiro: [
      'Dashboard ', 'Contas bancárias ', 'Documentos ', 'Baixar Notas ', 'Agenda financeira ',
      'Movimentações bancárias ', 'Livro de caixa ', ' Painéis ', ' Cadastros '
    ],

    listaPaineis: [
      'Contas a Receber e Pagar', 'Fluxo de Caixa com Descasamento de Moeda', 'Pagamentos e recebimentos por categoria', 'Resultado por Ciclo'
    ],

    listaCadastros: [
      'Configuração de Importação de Documentos', 'Conta Contábil', 'Empresas', 'Fechamento de Período', 'Operações', 'Pessoas', 'Tags'
    ]
  },

  textosEsperadosResult: {
    botoesResultados: [
      'Resultados da safra '
    ]
  },

  textosEsperadosNfe: {
    botoesNfe: [
      'Dashboard ', 'NF-e ', 'MDF-e ', ' Cadastros '
    ],

    listaCadastros: [
      'Empresas', 'FCP', 'Material', 'Mensagens', 'Operações', 'Pessoas', 'Retenções'
    ]
  },

  menu: {
    menuAtivo: '.is-active.navmenu',
    subMenu: 'div.submenu-holder',
    voltar: '.is-active.navmenu > .el-button > .siagri-icon-burger'
  }
}

export default locators