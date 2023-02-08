import http from 'k6/http'
import { check } from 'k6'

export function getRequest(url, headers) {
  const request = http.get(url, headers)

  /*
  console.log('----------------Dados da requisição----------------')
  console.log(JSON.stringify(`Status da requisição: ${request.status} - ${request.status_text}`))
  console.log(JSON.stringify(`Duração da requisição: ${request.timings.duration}`))
  */

  check(request, {
    'Status deve ser 200': (r) => r.status === 200,
    'Body deve estar presente': (r) => r.body != null
  })
}

export function postRequest(url, body, headers) {
  const request = http.post(url, JSON.stringify(body), headers)

  check(request, {
    'Status deve ser 200': (r) => r.status === 200,
    'Body deve estar presente': (r) => r.body != null
  })
}