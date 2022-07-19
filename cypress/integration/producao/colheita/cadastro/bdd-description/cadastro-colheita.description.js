const html = {
  externaContrato: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita externa, com contrato, sem partilha </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
  <strong>E</strong> selecionar destino "Externo" <br/>
  <strong>E</strong> selecionar um contrato <br/>
  <strong>E</strong> clicar no botão salvar <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `,
  externaPartilha: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita externa, com contrato e com partilha </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
  <strong>E</strong> selecionar destino "Externo" <br/>
  <strong>E</strong> selecionar dois ou mais contratos <br/>
  <strong>E</strong> clicar no botão salvar <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `,
  externaExcedente: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita externa, com partilha (Quantidade Excedente) </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher todos os campos obrigatórios <br/>
  <strong>E</strong> selecionar destino "Externo" <br/>
  <strong>E</strong> selecionar dois ou mais contratos <br/>
  <strong>E</strong> clicar no botão salvar  <br/>
  <strong>E</strong> clicar em sim no modal <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `,
  externaInferior: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita externa, com partilha (Quantidade Inferior) </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher os campos obrigatórios, com quantidade de carga sendo menor que a quantidade especificada nos contratos <br/>
  <strong>E</strong> anexar um arquivo no documento <br/>
  <strong>E</strong> selecionar dois ou mais contratos <br/>
  <strong>E</strong> clicar no botão salvar  <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `,
  externa: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita externa sem contrato </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher os campos obrigatórios <br/>
  <strong>E</strong> selecionar destino "Externo" <br/>
  <strong>E</strong> não selecionar qualquer contrato <br/>
  <strong>E</strong> clicar no botão salvar  <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `,
  interna: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Cadastro de colheita </span>
</div>
<div style="margin-left: 40px;">
  <strong>COMO</strong> gestor da Fazenda <br/>
  <strong>QUERO</strong> cadastrar os Registros de Colheita <br/>
  <strong>PARA</strong> gerenciar quanto colhi durante o ciclo e armazenei em destino interno ou externo <br/>
</div>
</br>
<div>
  <span style="color: #800080; font-weight: bold;"> Cenario: </span>
  <span style="color: #b22222;"> Cadastrar colheita interna </span>
</div>
<div style="margin-left: 40px;">
  <strong>DADO</strong> que eu queira incluir um registro de colheita <br/>
  <strong>QUANDO</strong> eu preencher os campos obrigatórios <br/>
  <strong>E</strong> selecionar destino "Interno" <br/>
  <strong>E</strong> clicar no botão salvar  <br/>
  <strong>ENTAO</strong> o registro de colheita será gravado, exibido e validado na dashboard de colheitas e de produção <br/>
</div>
  `
}

export default html
