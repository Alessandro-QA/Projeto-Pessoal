const html = {
    Ct1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de ciclo </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> cadastrar um ciclo de produção <br/>
    <strong>PARA</strong> gerenciar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cadastrar ciclo inexistente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja com o modal cadastro de ciclo aberto <br/>
    <strong>QUANDO</strong> os campos obrigatórios forem preenchidos <br/>
    <strong>E</strong> clicar no botão <b>"Adicionar"</b> <br/>
    <strong>ENTAO</strong> o ciclo é cadastrado e o modal de cadastro será fechado <br/>
</div>
   `,
    Ct2: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Busca de ciclo </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> buscar um ciclo de produção <br/>
    <strong>PARA</strong> acessar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Pesquisar ciclo existente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja na página de ciclos cadastrados <br/>
    <strong>QUANDO</strong> digitado um valor na barra de pesquisa <br/>
    <strong>ENTAO</strong> os ciclos apresentados são filtrado de acordo o texto na barra de busca <br/>
</div>
   `,
    Ct3: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Filtro de ciclo pela Safra </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> filtrar os ciclos de produção <br/>
    <strong>PARA</strong> acessar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar ciclo por Safra existente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja na página de ciclos cadastrados <br/>
    <strong>QUANDO</strong> aberto a opção de filtros personalizados <br/>
    <strong>E</strong> clicar no tooltip <b>"Safra"</b> <br/>
    <strong>E</strong> selecionar no tooltip <b>"2024 / 2025"</b> <br/>
    <strong>ENTAO</strong> os ciclos apresentados são filtrado de acordo a safra selecionada <br/>
</div>
   `,
    Ct4: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Filtro de ciclo pela Data </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> filtrar os ciclos de produção <br/>
    <strong>PARA</strong> acessar as culturas que irei trabalhar em uma safra específica <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Filtrar ciclo por Data existente </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que o usuário esteja na página de ciclos cadastrados <br/>
    <strong>QUANDO</strong> aberto a opção de filtros personalizados <br/>
    <strong>E</strong> clicar na data de <b>"Início "</b> <br/>
    <strong>E</strong> Digitar/Selecionar Data de Início <b>"01/08/2024"</b> <br/>
    <strong>E</strong> clicar na data <b>"Final"</b> <br/>
    <strong>E</strong> Digitar/Selecionar Data de Início <b>"31/07/2025"</b> <br/>
    <strong>ENTAO</strong> os ciclos apresentados são filtrado de acordo a data informada <br/>
</div>
   `,
    Ct5: `
   <div>
       <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
       <span style="color: #b22222;"> Filtro de ciclo pela Situação </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>COMO</strong> gestor da Fazenda <br/>
       <strong>QUERO</strong> filtrar os ciclos de produção <br/>
       <strong>PARA</strong> acessar as culturas que irei trabalhar em uma safra específica <br/>
   </div>
   </br>
   <div>
       <span style="color: #800080; font-weight: bold;"> Cenario: </span>
       <span style="color: #b22222;"> Filtrar ciclo por Situação Ativo/Inativo </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>DADO</strong> que o usuário esteja na página de ciclos cadastrados <br/>
       <strong>QUANDO</strong> aberto a opção de filtros personalizados <br/>
       <strong>E</strong> clicar no tooltip <b>"Situação"</b> <br/>
       <strong>E</strong> selecionar no tooltip <b>"Inativo"</b> <br/>
       <strong>ENTAO</strong> os ciclos apresentados são filtrado de acordo a sua situação <br/>
   </div>
      `,
    Ct6: `
      <div>
          <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
          <span style="color: #b22222;"> Editar um Ciclo Existente </span>
      </div>
      <div style="margin-left: 40px;">
          <strong>COMO</strong> gestor da Fazenda <br/>
          <strong>QUERO</strong> editar os ciclos de produção <br/>
          <strong>PARA</strong> alterar valores de ciclo das culturas que irei trabalhar em uma safra específica <br/>
      </div>
      </br>
      <div>
          <span style="color: #800080; font-weight: bold;"> Cenario: </span>
          <span style="color: #b22222;"> Editar um Ciclo Existente </span>
      </div>
      <div style="margin-left: 40px;">
          <strong>DADO</strong> que o usuário esteja com o modal cadastro de ciclo aberto <br/>
          <strong>QUANDO</strong> alterar os valores atuais / manter os campos obrigatórios preenchidos  <br/>
          <strong>E</strong> clicar no botão <b>"Atualizar"</b> <br/>
          <strong>ENTAO</strong> o ciclo em questão deve ser atualizado para os novos valores informados <br/>
      </div>
         `,
    Ct7: `
        <div>
            <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
            <span style="color: #b22222;"> Cadastro de ciclo </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>COMO</strong> gestor da Fazenda <br/>
            <strong>QUERO</strong> cadastrar um ciclo de produção <br/>
            <strong>PARA</strong> gerenciar as culturas que irei trabalhar em uma safra específica <br/>
        </div>
        </br>
        <div>
            <span style="color: #800080; font-weight: bold;"> Cenario: </span>
            <span style="color: #b22222;"> Cadastrar ciclo sem preencher campos Obrigatórios </span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que o usuário esteja com o modal cadastro de ciclo aberto <br/>
            <strong>QUANDO</strong> os campos obrigatórios não forem preenchidos <br/>
            <strong>E</strong> clicar no botão <b>"Adicionar"</b> <br/>
            <strong>ENTAO</strong> o usuário deve ser informado que os campos obrigatórios não foram preenchidos <br/>
        </div>
        `,

}

export default html
