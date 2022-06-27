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
    <span style="color: #b22222;"> Consulta de extrato de material para Expedição Interna x Interna, após colheita </span>
</div>
<div style="margin-left: 40px;">
    <strong>DADO</strong> a inclusão de uma colheita interna para a U.A do tipo silo <br/>
    <strong>QUANDO</strong> for realizado a expedição do tipo Interno X Interno (de UA para UA) <br/>
    <strong>ENTAO</strong> no extrato de materiais da UA de origem deve conter um lançamento de origem Armazenagem e tipo Saída com os valores expedidos <br/>
    <strong>E</strong> no extrato de materiais da UA de destino deve conter um lançamento de origem Armazenagem e tipo Entrada com os valores recebidos <br/>
    <strong>E</strong> no dashboard de produção, na tabela de Entregas e Fixações, deve conter um registro para a UA de destino com os valores recebidos <br/>
    <strong>E</strong> no dashboard de produção, na tabela de Entregas e Fixações, deve conter um registro para a UA de origem com a dedução do valor enviado do total e um registro para a transferência <br/>
</div>
   `
}

export default html
