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
      nfe: '.siagri-icon-nfe'
    },
    botoesAtividadesAgricolas: {
      dashboard: '.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > .swiper-slide-active',
      planejamento: '.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > .swiper-slide-next',
      execucao: '.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > :nth-child(3)',
      clima: '.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > :nth-child(4)',
      históricoTalhoes:'.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > :nth-child(5)',
      paineis:'.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > :nth-child(6)',
      cadastros:'.is-active.navmenu > .hold-children > .swiper-container > .swiper-wrapper > :nth-child(7)',
    },
    
    menu:{
      menuAtivo: '.is-active.navmenu'
    }
    /*botoesMaquinarios: {

    },
    botoesSuprimentos: {

    },
    botoesProducao: {

    },
    botoesFinanceiro: {

    },
    botoesResultados: {

    },
    bototesNFE: {
      
    } */
  }
  
  export default locators
  
  
  