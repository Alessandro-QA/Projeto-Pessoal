const testDescriptionHtml = {
    listagemSemFiltro: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar todos os pedidos de compra <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar todos os Pedidos Sem Filtro</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar todos os pedidos <br />
            <strong>QUANDO</strong> eu acessar a Dashboard de Pedidos <br />
            <strong>ENTÃO</strong> todos os pedidos deverão ser listados sem aplicar filtros <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorSafra: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por safra <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Safra</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por safra <br />
            <strong>QUANDO</strong> eu aplicar o filtro de safra <br />
            <strong>ENTÃO</strong> somente os pedidos da safra selecionada deverão ser listados <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorFazenda: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por fazenda <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Fazenda</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por fazenda <br />
            <strong>QUANDO</strong> eu aplicar o filtro de fazenda <br />
            <strong>ENTÃO</strong> somente os pedidos da fazenda selecionada deverão ser listados <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorEmpresa: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por empresa <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Empresa</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por empresa <br />
            <strong>QUANDO</strong> eu aplicar o filtro de empresa <br />
            <strong>ENTÃO</strong> somente os pedidos da empresa selecionada deverão ser listados <br />
        </div>
    </div>
    `,
  
    buscaPorString: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> buscar pedidos de compra por string <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Fazer uma Busca por String Entre os Pedidos</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira buscar pedidos por uma string <br />
            <strong>QUANDO</strong> eu aplicar a busca pela string <br />
            <strong>ENTÃO</strong> somente os pedidos que correspondam à string deverão ser listados <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorData: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por data <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Data</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por data <br />
            <strong>QUANDO</strong> eu aplicar o filtro de data <br />
            <strong>ENTÃO</strong> somente os pedidos da data selecionada deverão ser listados <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorFornecedor: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por fornecedor <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Fornecedor</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por fornecedor <br />
            <strong>QUANDO</strong> eu aplicar o filtro de fornecedor <br />
            <strong>ENTÃO</strong> somente os pedidos do fornecedor selecionado deverão ser listados <br />
        </div>
    </div>
    `,
  
    listagemFiltradoPorStatus: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por status <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Status</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por status <br />
            <strong>QUANDO</strong> eu aplicar o filtro de status <br />
            <strong>ENTÃO</strong> somente os pedidos com o status selecionado deverão ser listados <br />
        </div>
    </div>
    `,
    listagemFiltradaPorMultiplosFiltros: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> listar os pedidos de compra por múltiplos filtros <br />
        <strong>PARA</strong> melhor gestão de suprimentos da fazenda <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Listar os Pedidos filtrados por Múltiplos Filtros</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu queira listar os pedidos por múltiplos filtros <br />
            <strong>QUANDO</strong> eu aplicar diversos filtros <br />
            <strong>ENTÃO</strong> somente os pedidos que correspondam a todos os filtros deverão ser listados <br />
        </div>
    </div>
    `,
  
    validarMensagemNenhumPedidoEncontrado: `
    <div>
        <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
        <span style="color: #b22222;"> Listagem de Pedidos</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>COMO</strong> gerente/responsável pelas compras da fazenda <br />
        <strong>QUERO</strong> validar a mensagem de nenhum pedido encontrado <br />
        <strong>PARA</strong> identificar situações sem resultados <br />
    </div>
    </br>
    <div>
        <div>
            <span style="color: #800080; font-weight: bold;">Cenário :</span>
            <span style="color: #b22222;"> Validar Mensagem de Nenhum Pedido Encontrado</span>
        </div>
        <div style="margin-left: 40px;">
            <strong>DADO</strong> que eu realize uma busca sem resultados <br />
            <strong>QUANDO</strong> eu aplicar filtros que não correspondam a nenhum pedido <br />
            <strong>ENTÃO</strong> uma mensagem de nenhum pedido encontrado deverá ser exibida <br />
        </div>
    </div>
    `,
  };
 
  
  module.exports = testDescriptionHtml;
  