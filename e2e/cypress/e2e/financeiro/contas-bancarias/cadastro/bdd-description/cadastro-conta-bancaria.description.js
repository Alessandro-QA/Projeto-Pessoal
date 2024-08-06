const html = {
  Ct1: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Obrigatoriedade de Campos ao Cadastrar Conta Corrente </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> não preencher os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser exibida mensagem para cada campo obrigatório não preenchido <br/>
    </div>
    `,
  Ct2: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastrar Conta Corrente </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária do tipo Conta Corrente <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Conta Corrente' <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
    </div>
    `,
  Ct3: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem da conta corrente cadastrada </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu cadastrei uma nova conta corrente <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome da conta corrente <br/>
      <strong>ENTAO</strong> deverá ser listada a conta corrente com nome correspondente <br/>
    </div>
    `,
  Ct4: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Obrigatoriedade de Campos ao Cadastrar Conta Corrente com Open Banking </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária com Open Banking <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> Selecionar o Banco do Brasil <br/>
      <strong>E</strong> Habilitar a opção Open Banking <br/>
      <strong>E</strong> não preencher os demais campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser exibida mensagem para cada campo obrigatório não preenchido <br/>
    </div>
    `,
  Ct5: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastrar Conta Corrente com Open Banking </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária do tipo Conta Corrente com Open Banking <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Conta Corrente' <br/>
      <strong>E</strong> selecionar o Banco do Brasil' <br/>
      <strong>E</strong> habilitar a opção Open Banking' <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
    </div>
    `,
  Ct6: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem da conta corrente com Open Banking cadastrada </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu cadastrei uma nova conta corrente com Open Banking <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome da conta corrente <br/>
      <strong>ENTAO</strong> deverá ser listada a conta corrente com nome correspondente <br/>
    </div>
    `,
  Ct7: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Obrigatoriedade de Campos ao Cadastrar Cartão de Crédito </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Cartão de Crédito' <br/>
      <strong>E</strong> não preencher os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser exibida mensagem para cada campo obrigatório não preenchido <br/>
    </div>
    `,
  Ct8: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastrar cartão de crédito </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar um novo cartão de crédito <br/>
      <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Cartão de Crédito' <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
    </div>
    `,
  Ct9: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem de cartão de crédito </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu cadastrei um novo cartão de crédito <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome do cartão <br/>
      <strong>ENTAO</strong> deverá ser listado o cartão com nome correspondente <br/>
    </div>
    `,
  Ct10: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Obrigatoriedade de Campos ao Cadastrar Conta Tesouraria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta bancária <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Conta Tesouraria' <br/>
      <strong>E</strong> não preencher os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser exibida mensagem para cada campo obrigatório não preenchido <br/>
    </div>
    `,
  Ct11: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastrar conta Tesouraria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queira cadastrar uma nova conta Tesouraria <br/>
      <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> selecionar o tipo de conta 'Conta Tesouraria' <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na dashboard de Contas bancárias <br/>
    </div>
    `,
  Ct12: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Visualizar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> visualizar contas bancárias existentes <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Validar listagem de conta tesouraria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu cadastrei uma conta tesouraria <br/>
      <strong>QUANDO</strong> eu entrar na Dashboard de Contas bancárias <br/>
      <strong>E</strong> pesquisar o nome do conta <br/>
      <strong>ENTAO</strong> deverá ser listada a conta com nome correspondente <br/>
    </div>
    `,
  contaCorrenteMovimentacao: `
    <div>
      <span style="color: #800080; font-weight: bold;"> Funcionalidade: </span>
      <span style="color: #b22222;"> Cadastrar Conta Bancaria </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>COMO</strong> gerente/responsável financeiro da fazenda <br/>
      <strong>QUERO</strong> cadastrar uma nova conta <br/>
      <strong>PARA</strong> melhor gestão da fazenda <br/>
    </div>
    </br>
    <div>
      <span style="color: #800080; font-weight: bold;"> Cenario: </span>
      <span style="color: #b22222;"> Cadastro de conta bancária deve lançar movimentação inicial </span>
    </div>
    <div style="margin-left: 40px;">
      <strong>DADO</strong> que eu queria cadastrar uma conta bancária <br/>
      <strong>QUANDO</strong> eu entrar na Listagem de Contas bancárias <br/>
      <strong>E</strong> clicar em Nova conta <br/>
      <strong>E</strong> preencher todos os campos obrigatórios <br/>
      <strong>E</strong> não clicar no checkbox "Incluir no saldo disponível" <br/>
      <strong>E</strong> clicar em Adicionar <br/>
      <strong>ENTAO</strong> deverá ser salvo e validado na movimentação financeira a movimentação inicial da conta bancária <br/>
    </div>
    `
}
export default html