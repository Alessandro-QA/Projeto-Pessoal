const html = {
    contaValidaCadastrada: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para conta cadastrada</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, de uma conta cadastrada<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    contaValidaNaoCadastrada: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para conta NÃO cadastrada</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, de uma conta NÃO cadastrada<br/>
        <strong>ENTAO</strong> deverá ser exibido um alerta informando que a conta bancária não está cadastrada<br/>
    </div>
    `,
    contaInvalidaSemTag: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX inválido, sem tags de identificação da conta bancária</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, que não contém as tags de identificação da conta bancária<br/>
        <strong>ENTAO</strong> deverá ser exibido um alerta informando que ocorreu falha na leitura do OFX<br/>
    </div>
    `,
    cartaoValidoCadastrado: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para cartão cadastrado</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, de uma cartão de crédito cadastrado<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    cartaoValidoNaoCadastrado: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para cartão NÃO cadastrado</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, de uma cartão NÃO cadastrado<br/>
        <strong>ENTAO</strong> deverá ser exibido um alerta informando que o cartão não está cadastrada em Contas Bancárias<br/>
    </div>
    `,
    cartaoInvalidoSemTag: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX inválido, sem tags de identificação do cartão de crédito</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, que não contém as tags de identificação do cartão de crédito<br/>
        <strong>ENTAO</strong> deverá ser exibido um alerta informando que ocorreu falha na leitura do OFX<br/>
    </div>
    `,
    bancoDoBrasil: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o Banco do Brasil</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do Banco do Brasil<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    bancoBradesco: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o banco Bradesco</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do banco Bradesco<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    bancoCaixa: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o banco Caixa</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do banco Caixa<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    bancoItau: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o banco Itaú</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do banco Itaú<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    bancoSantander: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o banco Santander</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do banco Santander<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `,
    bancoSicred: `
    <div>
        <span style="color: #800080; font-weight: bold;"> Cenário: </span>
        <span style="color: #b22222;"> Upload de arquivo OFX válido, para o banco Sicred</span>
    </div>
    <div style="margin-left: 40px;">
        <strong>DADO</strong> que eu queira realizar uma conciliação bancária<br/>
        <strong>QUANDO</strong> eu acessar a Adição de Conciliação Bancária<br/>
        <strong>E</strong> selecionar um arquivo OFX para upload, do banco Sicred<br/>
        <strong>ENTAO</strong> deverá ser exibido um modal informando a quantidade de divergências encontradas<br/>
    </div>
    `
}

export default html
