const testDescription = {
  testes1: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1 : </span>
    <span style="color: #b22222;"> Cadastrar Documento dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar que o documento é dedutível <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 2 : </span>
    <span style="color: #b22222;"> Cadastrar Documento com tag </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar uma tag <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 3 : </span>
    <span style="color: #b22222;"> Cadastrar Documento com observação </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> preencher o campo de Observação <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 4 : </span>
    <span style="color: #b22222;"> Cadastrar Documento já pago </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar que o documento já foi pago <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
  `,
  testes2: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario 1 : </span>
    <span style="color: #b22222;"> Cadastrar Documento já pago e com rateio entre ciclos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar que o documento já foi pago <br/>
    <strong>E</strong> selecionar o Rateio entre os ciclos <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 2 : </span>
    <span style="color: #b22222;"> Cadastrar Documento com rateio entre ciclos, com duas ou mais categoria </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar o rateio entre duas ou mais categorias <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
    <span style="color: #800080; font-weight: bold;"> Cenario 3 : </span>
    <span style="color: #b22222;"> Cadastrar Documento não dedutível </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar que o documento não é dedutível <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
  `,

  testes3: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Cadastrar Documento parcelado, com rateio entre ciclos </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar Parcelado <br/>
    <strong>E</strong> selecionar Rateio entre os ciclos <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
</div>
  `,

  testes4: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Cadastrar Documento com rateio de categoria </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar uma ou mais categorias <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
</div>
  `,

  testes5: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Cadastrar Documento com rateio entre ciclos, com duas ou mais categorias </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> selecionar rateio entre os ciclos <br/>
    <strong>E</strong> selecionar o rateio entre duas ou mais categorias <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
</div>
  `,

  testes6: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de Documento  </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gestor da Fazenda <br/>
    <strong>QUERO</strong> registrar cupons fiscais, notas de despesas outros documentos <br/>
    <strong>PARA</strong> melhor gerenciar os gastos e controle de documentos da empresa <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario : </span>
    <span style="color: #b22222;"> Cadastrar Documento com um anexo </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira incluir um novo documento <br/>
    <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
    <strong>E</strong> anexar um arquivo no documento <br/>
    <strong>E</strong> clicar em Adicionar Documento <br/>
    <strong>ENTAO</strong> o registro será gravado, exibido e validado na dashboard de Documentos <br/>
</div>
</div>
  `
}

export default testDescription
