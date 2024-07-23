const html = {
    semFiltro: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Sem filtro </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira pesquisar todos os documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> não houve preenchimento de filtros <br/>
    <strong>ENTAO</strong> será exibido todos os documentos criados e recebidos pela minha empresa <br/>
</div>
    `,
    filtrarPessoa: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documentos por Pessoa </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar uma pessoa <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos referente a pessoa informada <br/>
</div>
    `,
    filtrarTag: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documentos por tag </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar uma tag <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos que possuem a tag informada <br/>
</div>
    `,
    filtrarConferido: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documentos conferido </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar que foi conferido <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos que foram conferidos <br/>
</div>
   `,
   filtrarSafra: `
   <div>
       <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
       <span style="color: #b22222;"> Listagem de Documentos </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>COMO</strong> gestor da Fazenda <br/>
       <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
       <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
   </div>
   </br>
   <div>
       <span style="color: #800080; font-weight: bold;"> Cenario: </span>
       <span style="color: #b22222;"> Filtrar documentos por Safra </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>DADO</strong> que eu queira consultar meus documentos <br/>
       <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
       <strong>E</strong> selecionar uma Safra <br/>
       <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos na Safra informado <br/>
   </div>
      `,
   filtrarSafraCiclo: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documento por safra e ciclo </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar uma Safra <br/>
    <strong>E</strong> selecionar um ciclo <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos na Safra e ciclo informado <br/>
</div>
   `,
   filtrarFazenda:`
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documentos por fazenda </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar uma Fazenda <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos no período informado <br/>
</div>
   `,
    filtrarData:`
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documentos por data </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar um período com inicio e fim <br/>
    <strong>ENTAO</strong> será exibido e validado todos os documentos criados e recebidos no período informado <br/>
</div>
   `
   ,
   nenhumEncontrado:`
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Listagem de Documentos </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> consultar os documentos lançados e recebidos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar documento não Encontrado </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira consultar meus documentos <br/>
    <strong>QUANDO</strong> eu entrar na Listagem de documentos <br/>
    <strong>E</strong> selecionar uma filtragem que não existe nenhum documento <br/>
    <strong>ENTAO</strong> será exibido um texto informativo que não existe documento encontrado para aquela filtragem <br/>
</div>
   `
}

export default html
