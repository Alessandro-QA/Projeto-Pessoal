const testDescriptionHtml = {
    pedido: `
  <div>
      <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
      <span style="color: #b22222;"> Novo Pedidos</span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
      <strong>QUERO</strong> registrar um pedido de compra <br />
      <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
  </div>
  </br>
  <div>
      <div>
          <span style="color: #800080; font-weight: bold;">Cenario 1 :</span>
          <span style="color: #b22222;"> Mesmo local de entrega</span>
      </div>
      <div style="margin-left: 40px;">
          <strong>DADO</strong> que eu queira incluir um novo Pedido <br />
          <strong>QUANDO </strong> eu entrar na Dashboard de Pedidos <br />
          <strong>E</strong> clicar em "Novo Pedido" <br />
          <strong>E</strong> clicar no campo "Mesmo local de entrega" <br />
          <strong>E</strong> preencher todos os campos obrigatórios <br />
          <strong>E</strong> clicar em "Adicionar Pedido" <br />
          <strong>ENTAO</strong> deverá ser salvo e validado na Dashboard de Pedidos <br />
      </div>
  </div>
  <div>
      <div>
          <span style="color: #800080; font-weight: bold;">Cenario 2 :</span>
          <span style="color: #b22222;">Um material</span>
      </div>
      <div style="margin-left: 40px;">
          <strong>DADO</strong> que eu queira incluir um novo Pedido <br />
          <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br />
          <strong>E</strong> clicar em "Novo Pedido" <br />
          <strong>E</strong> escolher apenas um material <br />
          <strong>E</strong> preencher todos os campos obrigatórios <br />
          <strong>E</strong> clicar em "Adicionar Pedido" <br />
          <strong>ENTAO</strong> deverá ser salvo e validado na Dashboard de Pedidos <br />
      </div>
  </div>
  <div>
      <span style="color: #800080; font-weight: bold;">Cenario 3 :</span>
      <span style="color: #b22222;">Com rateio entre ciclos</span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira incluir um novo Pedido <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br/>
      <strong>E</strong> clicar em "Novo Pedido" <br/>
      <strong>E</strong> clicar em "Rateio entre os ciclos" <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em "Adicionar Pedido" <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na Dashboard de Pedidos <br/>
  </div>
  </div>
  `,
    dashboardPedidos: `
<div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Dashboard </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
    <strong>QUERO</strong> visualizar todos os pedidos de compra da minha fazenda <br />
    <strong>PARA</strong> melhor controle de suprimentos da fazenda <br />
</div>
</br>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario 1 :</span>
        <span style="color: #b22222;"> Listagem para módulos </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira visualizar os Pedidos da minha fazenda em módulos <br />
        <strong>QUANDO </strong> eu entrar na Dashboard de Pedidos <br />
        <strong>E</strong> clicar no ícone de <br> "alterar listagem" </br> <br />
        <strong>ENTAO</strong> será exibido e validado todos os Pedidos <br />
    </div>
</div>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario 2 :</span>
        <span style="color: #b22222;">Pesquisar </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira pesquisar por um Pedidos <br />
        <strong>QUANDO</strong> eu entrar na dashboard de Pedidos <br />
        <strong>E</strong> pesquisar por um pedido <br />
        <strong>ENTAO</strong> será exibido e validado o pedido pesquisado <br />
    </div>
</div>
<div>
    <span style="color: #800080; font-weight: bold;">Cenario 3 :</span>
    <span style="color: #b22222;">Filtrar por safra </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira filtrar os Pedidos <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br/>
    <strong>E</strong> selecionar o filtro por safra <br/>
    <strong>ENTAO</strong> será exibido e validado todos os pedidos do filtro selecionado <br/>
</div>
</div>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario 2 :</span>
        <span style="color: #b22222;">Filtrar por fazenda </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira filtrar os Pedidos <br />
        <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br />
        <strong>E</strong> pesquisar por um pedido <br />
        <strong>ENTAO</strong> será exibido e validado o pedido pesquisado <br />
    </div>
</div>
<div>
    <span style="color: #800080; font-weight: bold;">Cenario 3 :</span>
    <span style="color: #b22222;">Filtrar por safra </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira filtrar os Pedidos <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br/>
    <strong>E</strong> selecionar o filtro pro fazenda <br/>
    <strong>ENTAO</strong> será exibido e validado todos os pedidos do filtro selecionado <br/>
</div>
</div>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario 2 :</span>
        <span style="color: #b22222;">Filtrar por fazenda </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira filtrar os Pedidos <br />
        <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br />
        <strong>E</strong> pesquisar por um pedido <br />
        <strong>ENTAO</strong> será exibido e validado o pedido pesquisado <br />
    </div>
</div>
<div>
    <span style="color: #800080; font-weight: bold;">Cenario 3 :</span>
    <span style="color: #b22222;">Filtrar por empresa/pessoa </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> que eu queira filtrar os Pedidos <br/>
    <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br/>
    <strong>E</strong> selecionar o filtro por empresa/pessoa <br/>
    <strong>ENTAO</strong> será exibido e validado todos os pedidos do filtro selecionado <br/>
</div>
</div>
    `,
    detalhesPedido: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Detalhes do Pedido </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br/>
      <strong>QUERO</strong> visualizar os detalhes dos pedidos de compra da minha fazenda <br/>
      <strong>PARA</strong> melhor controle de suprimentos da fazenda <br/>
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario : </span>
      <span style="color: #b22222;"> Visualizar detalhes </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira visualizar os detalhes de um Pedido <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br/>
      <strong>E</strong> clicar em um dos pedidos listados <br/>
      <strong>ENTAO</strong> devera ser apresentado e validado todos os detalhes do pedido <br/>
  </div>
  </div>
  `,
    detalhesPedidoDocumento: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Detalhes do Pedido </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br/>
      <strong>QUERO</strong> visualizar os detalhes dos pedidos de compra da minha fazenda <br/>
      <strong>PARA</strong> melhor controle de suprimentos da fazenda <br/>
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario : </span>
      <span style="color: #b22222;"> Visualizar detalhes do Documento </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira visualizar os detalhes de um Documento gerado do Pedido <br/>
      <strong>QUANDO</strong> eu entrar na listagem de Documentos <br/>
      <strong>E</strong> clicar no documento do pedido criado <br/>
      <strong>ENTAO</strong> devera ser apresentado e validado todos os detalhes do pedido <br/>
  </div>
  </div>
  `,
    pesquisarAgendaFinanceira: `
<div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;"> Dashboard Agenda Financeira </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> gerente da fazenda <br />
    <strong>QUERO</strong> visualizar agenda financeira <br />
    <strong>PARA</strong> melhor gestão financeira <br />
</div>
</br>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario 1 :</span>
        <span style="color: #b22222;"> Pesquisar título </span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira pesquisar um titulo <br />
        <strong>QUANDO </strong> eu entrar na dashboard de Agenda Financeira <br />
        <strong>E</strong> pesquisar por um título <br />
        <strong>ENTAO</strong> deverá ser apresentado e validado o título pesquisar <br />
    </div>
</div>
    `,
    excluirPedido: `
<div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Excluir pedido </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
      <strong>QUERO</strong> excluir os pedidos de compra da minha fazenda com status de Aguardando Entrega <br />
      <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario : </span>
      <span style="color: #b22222;"> Excluir </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira excluir um Pedido <br />
      <strong>QUANDO</strong> eu entrar na Dashboard de Pedidos <br />
      <strong>E</strong> clicar em um dos pedidos listados <br />
      <strong>E</strong> clicar no ícone de excluir <br />
      <strong>E</strong> confirmar exclusão <br />
      <strong>ENTAO</strong> deverá ser excluído e validado na Dashboard de Pedidos <br />
  </div>
  </div>
  `,
    recebimento: `
  <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Lançar nota de forma manual </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável do almoxarifado da fazenda <br />
      <strong>QUERO</strong> poder realizar recebimento de material com NF de forma manual sem pedido e com Pedido <br />
      <strong>PARA</strong> melhor gestão dos materiais <br />
  </div>
  </br>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario 1 : </span>
      <span style="color: #b22222;"> Adicionar material sem pedido </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira lançar um recebimento <br />
      <strong>QUANDO</strong> entrar na Dashboard de Recebimento <br />
      <strong>E</strong> clicar em "Buscar" <br />
      <strong>E</strong> clicar no campo "Adicionar material sem pedido" <br />
      <strong>E</strong> preencher os campos obrigatórios <br />
      <strong>E</strong> clicar em "Finalizar Recebimento" <br />
      <strong>ENTAO</strong> deverá ser validado na Dashboard de Documentos <br />
  </div>
  <div>
      <span style="color: #800080; font-weight: bold;"> Cenario 2 : </span>
      <span style="color: #b22222;"> Rateio entre ciclos </span>
  </div>
  <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira lançar um recebimento <br />
      <strong>QUANDO</strong> entrar na Dashboard de Recebimento <br />
      <strong>E</strong> clicar em "Buscar" <br />
      <strong>E</strong> selecionar o campo "Rateio entre os ciclos" <br />
      <strong>E</strong> preencher os campos obrigatórios <br />
      <strong>E</strong> clicar em "Finalizar Recebimento" <br />
      <strong>ENTAO</strong> deverá ser validado na Dashboard de Documentos <br />
  </div>
  </div>
  `
}

export default testDescriptionHtml
