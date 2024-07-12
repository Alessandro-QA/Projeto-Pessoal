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
   `
}

export default html
