const locators = {
  login: {
    urlLogin: 'https://auth.dev.conexa.com.br/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmy-farm-clientapp%26redirect_uri%3Dhttps%253A%252F%252Fmyfarm.dev.conexa.com.br%252Fauth%26response_type%3Dcode%26scope%3Dopenid%2520email%2520cultura%2520cicloproducao%2520fazenda%2520safra%2520material%2520pessoa%2520atividade%2520planocontas%2520unidademedida%2520tenant%2520atividadeagricola%2520controleclimatico%2520bem%2520bemocorrencia%2520estoque%2520formapagamento%2520pedidocompra%2520instituicaofinanceira%2520contabancaria%2520notafiscal%2520operacao%2520financeiro%2520localidade%2520producaoagricola%2520subscription%2520permission%2520parametrotributario%2520product%2520notification%2520onboarding%2520nfedistribuicao%2520profile-management%26state%3Dd520a2fa05764751bddc08e5b598d9f4%26code_challenge%3DwabJyPo03oUHu-5KEutRcdRlNkIuojDYoqswNt7ZIrE%26code_challenge_method%3DS256',
    btnCadastreSe: '.possui-conta > a',
    iptEmail: '#Email',
    iptSenha: '#Password',
    btnLogin: '.btn',
    btnDrop: '.el-avatar--wrapper',
    btnSair: '.el-dropdown-menu__item:nth-child(7)'
  }
}

export default locators
