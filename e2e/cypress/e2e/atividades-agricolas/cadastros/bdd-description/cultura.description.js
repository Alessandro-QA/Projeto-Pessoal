const html = {
    Ct1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar Cultura </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor agrícola/agricultor <br/>
    <strong>QUERO</strong> poder cadastrar culturas <br/>
    <strong>PARA</strong> utilizá-las em contratos, planejamentos, safras, colheitas e etc. <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cultura sem Fase Fenológica vinculada </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira cadastrar uma nova cultura <br/>
    <strong>QUANDO</strong> eu entrar no cadastro de Cultura e Fenologia <br/>
    <strong>E</strong> clicar em <b>"Adicionar  cultura"</b> <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em <b>"Avançar"</b> <br/>
    <strong>E</strong> clicar em <b>"Concluir"</b> <br/>
    <strong>ENTAO</strong> será salvo a nova cultura e exibida na tela com as informações inseridas <br/>
</div>
   `,
    Ct2: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastrar Cultura e Fenologia </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor agrícola/agricultor <br/>
    <strong>QUERO</strong> poder cadastrar culturas e suas respectivas fases e estádios fenológicos <br/>
    <strong>PARA</strong> acompanhar o desenvolvimento das plantas e otimizar as práticas agrícolas <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Cultura com Fase Fenológica vinculada </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira cadastrar uma nova cultura <br/>
    <strong>QUANDO</strong> eu entrar no cadastro de Cultura e Fenologia <br/>
    <strong>E</strong> clicar em <b>"Adicionar  cultura"</b> <br/>
    <strong>E</strong> preencher todos os campos obrigatórios <br/>
    <strong>E</strong> clicar em <b>"Avançar"</b> <br/>
    <strong>E</strong> preencher todos os campos obrigatórios referentes à fenologia <br/>
    <strong>E</strong> clicar em <b>"Concluir"</b> <br/>
    <strong>ENTAO</strong> será salvo a nova cultura com seus dados fenológicos e exibida na tela com as informações inseridas <br/>
</div>
   `,
    Ct3: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Editar Cultura </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor agrícola/agricultor <br/>
    <strong>QUERO</strong> poder editar culturas existentes <br/>
    <strong>PARA</strong> utilizá-las em contratos, planejamentos, safras, colheitas e etc. <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Editar Cultura sem editar a Fase Fenológica vinculada </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira editar uma cultura <br/>
    <strong>QUANDO</strong> eu entrar no cadastro de Cultura e Fenologia <br/>
    <strong>E</strong> clicar em <b>"Editar"</b> <br/>
    <strong>E</strong> alterar o campo desejado <br/>
    <strong>E</strong> clicar em <b>"Avançar"</b> <br/>
    <strong>E</strong> clicar em <b>"Concluir"</b> <br/>
    <strong>ENTAO</strong> será salva a cultura com dados atualizados e exibida na tela com as informações novas <br/>
</div>
   `,
    Ct4: `
   <div>
       <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
       <span style="color: #b22222;"> Editar Fase Fenológica de uma Cultura </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>COMO</strong> gestor agrícola/agricultor <br/>
       <strong>QUERO</strong> poder editar fases e estádios fenológicos de uma cultura existente <br/>
       <strong>PARA</strong> acompanhar o desenvolvimento das plantas e otimizar as práticas agrícolas <br/>
   </div>
   </br>
   <div>
       <span style="color: #800080; font-weight: bold;"> Cenario: </span>
       <span style="color: #b22222;"> Editar Fase Fenológica vinculada a uma Cultura </span>
   </div>
   <div style="margin-left: 40px;">
       <strong>DADO</strong> que eu queira editar uma fase fenológica de uma cultura existente <br/>
       <strong>QUANDO</strong> eu entrar no cadastro de Cultura e Fenologia <br/>
       <strong>E</strong> clicar em <b>"Editar"</b> <br/>
       <strong>E</strong> clicar em <b>"Avançar"</b> <br/>
       <strong>E</strong> clicar em <b>"Editar Fase"</b> <br/>
       <strong>E</strong> alterar o campo desejado <br/>
       <strong>E</strong> clicar em <b>"Salvar estádios"</b> <br/>
       <strong>E</strong> clicar em <b>"Concluir"</b> <br/>
       <strong>ENTAO</strong> será salva a cultura com fase e estádios atualizados e exibida na tela com as informações novas <br/>
   </div>
      `,
}

export default html
