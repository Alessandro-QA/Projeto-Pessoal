const html = {
    editarComRateio: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Edição de Documento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> editar algumas informações de um documento já criado <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Editar documento com rateio entre ciclos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria editar um documento já criado <br/>
    <strong>QUANDO</strong> eu preencher as informações editáveis disponíveis <br/>
    <strong>E</strong> selecionar um ou mais rateios entre os ciclos <br/>
    <strong>E</strong> clicar em atualizar lançamento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na Listagem de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
    <span style="color: #b22222;"> Editar documento Dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria editar um documento não dedutível já criado <br/>
    <strong>QUANDO</strong> eu preencher as informações editáveis disponíveis <br/>
    <strong>E</strong> selecionar "Sim" no campo Dedutível <br/>
    <strong>E</strong> clicar em atualizar lançamento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na Listagem de Documentos <br/>
</div>
    `,
    editarSemRateio: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Edição de Documento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> editar algumas informações de um documento já criado <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1: </span>
    <span style="color: #b22222;"> Editar documento sem rateio entre ciclos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria editar um documento já criado <br/>
    <strong>QUANDO</strong> eu preencher as informações editáveis disponíveis <br/>
    <strong>E</strong> clicar em atualizar lançamento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na Listagem de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 2: </span>
    <span style="color: #b22222;"> Editar documento não Dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria editar um dedutível documento já criado <br/>
    <strong>QUANDO</strong> eu preencher as informações editáveis disponíveis <br/>
    <strong>E</strong> selecionar "Não" no campo Dedutível <br/>
    <strong>E</strong> clicar em atualizar lançamento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na Listagem de Documentos <br/>
</div>
    `,
    jaPago: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Edição de Documento </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> editar algumas informações de um documento já criado <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Editar documento já pago </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queria editar um documento já pago <br/>
    <strong>QUANDO</strong> eu preencher as informações editáveis disponíveis <br/>
    <strong>E</strong> validar os campos não editáveis <br/>
    <strong>E</strong> clicar em atualizar lançamento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na Listagem de Documentos <br/>
</div>
    `
}

export default html
