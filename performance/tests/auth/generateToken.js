import http from 'k6/http'

// Gera token de acesso
export function generateToken(resource) {
  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      //'Authorization': 'Basic Y2NkZXZjbGllbnQ6MTdjNGZkYTUtYzUxOC00OTg1LTgzMmQtYmY4NWQxZmYxNGQ1'
    }
  }

 // let url = 'https://auth.dev.conexa.com.br/connect/token'
  let url = 'https://api.uat.aliare.digital/aliare-auth/connect/token'

  let requestBody = {
    'grant_type': 'password',
    'username': resource.username,
    'password': resource.password,
    'client_id': 'my-farm-clientapp-dev',
    //'scope': 'tenant i18n fazenda bemocorrencia atividade atividadeagricola bem cicloproducao controleclimatico cultura estoque formapagamento material notafiscal operacao pedidocompra pessoa planejamentosafra planocontas safra unidadearmazenamento unidademedida eexport subscription parametrotributario permission product webhookvindi contabancaria financeiro instituicaofinanceira localidade producaoagricola notification assinei webhook marketingcampaign nfedistribuicao aliare agriq onboarding profile openid indexadormoeda agriq openbanking'
  }

  const token = http.post(url, requestBody, params)

  return token.json()
}
