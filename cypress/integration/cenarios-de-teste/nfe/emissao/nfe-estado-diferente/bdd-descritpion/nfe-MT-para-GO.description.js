const testDescription = {
    cadastrarNfe: `
<div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;">Emissão de NFe</span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> gerar uma Nota Fiscal <br/>
    <strong>PARA</strong> que possa formalizar a entrada ou saída de produtos <br/>
</div>
</br>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario: </span>
        <span style="color: #b22222;">Emitente MT para Destinatário GO</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu realize a emissão de uma NFe <br/>
        <strong>QUANDO </strong> o documento for autorizado na Sefaz <br/>
        <strong>ENTAO</strong> deve exibir uma mensagem informando que a nota foi autorizada <br/>
        <strong>E</strong> o documento deve ser listado na dashboard <br/>
    </div>
</div>
`,

    validarDetalhes: `
<div>
    <span style="color: #800080; font-weight: bold;">Funcionalidade: </span>
    <span style="color: #b22222;">Emissão de NFe</span>
</div>
<div style="margin-left: 40px;">
    <strong>COMO</strong> responsável financeiro da fazenda <br/>
    <strong>QUERO</strong> gerar uma Nota Fiscal <br/>
    <strong>PARA</strong> que possa formalizar a entrada ou saída de produtos <br/>
</div>
</br>
<div>
    <div>
        <span style="color: #800080; font-weight: bold;">Cenario: </span>
        <span style="color: #b22222;">Consulta e Listagen de NFe</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu acesse a tela de Gerenciamento de NFe <br/>
        <strong>QUANDO </strong> selecionar o emitente e ambiente <br/>
        <strong>ENTAO</strong> deve listar as NFEs geradas para o emitente e ambiente seleiconado <br/>
    </div>
</div>
`
}

export default testDescription
