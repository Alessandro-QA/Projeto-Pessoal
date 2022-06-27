const html = {
    description: `
<div>
    <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
    <span style="color: #b22222;"> Consulta de Extrato de Material </span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> usuário do sistema <br/>
    <strong>QUERO</strong> consultar o extrato de um material por unidade de armazenamento <br/>
    <strong>PARA</strong> melhor gerenciar as movimentações de materiais da fazenda <br/>
</div>
</br>
<div>
    <span style="color: #800080; font-weight: bold;"> Cenario: </span>
    <span style="color: #b22222;"> Não deve ocorrer lançamento no extrato de material para Expedição Externa x Externa, após colheita </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> a inclusão de uma colheita interna para a U.A do tipo silo <br/>
    <strong>QUANDO</strong> for realizado a expedição do tipo Externa X Externa (de cliente para cliente) <br/>
    <strong>ENTAO</strong> no extrato de materiais não deve constar nenhum lançamento <br/>
    <strong>E</strong> no dashboard de produção, na tabela de Entregas e Fixações, deve conter um registro para os clientes de destino e de origem, com os valores recebidos e um registro para a transferência e para a entrega <br/>
</div>
   `
}

export default html
