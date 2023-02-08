import { group, sleep } from 'k6'
import { postRequest, getRequest } from '../requests/request.js'

export default function (headers) {
  const BASE_URL = 'https://myfarm.dev.conexa.com.br/api'

  group('Suite - Suprimentos', function () {
    group('Dashboard - Visao Geral', function () {
      const FazendaId = '9c42d357-9668-446f-a051-090d028ef6f0'
      const SafraId = '1cab9c3f-4b88-44e0-85de-7c2ea6ebc105'
      
      const url = BASE_URL + `pedido-compra/v1/Dashboard/VisaoGeral?FazendaId=${FazendaId}&SafraId=${SafraId}`

      getRequest(url, headers)
    })

    sleep(1)

    group('Dashboard - Proximas Entregas', function () {
      const FazendaId = '9c42d357-9668-446f-a051-090d028ef6f0'
      const SafraId = '1cab9c3f-4b88-44e0-85de-7c2ea6ebc105'
      
      const url = BASE_URL + `pedido-compra/v1/Dashboard/ProximasEntregas?FazendaId=${FazendaId}&SafraId=${SafraId}`

      getRequest(url, headers)
    })

    sleep(1)

    group('Pedidos - Listagem', function () {
      const url = BASE_URL + `/pedido-compra/v1/Pedidos/Listagem`

      const body = {
        'Page': 1,
        'Size': 20
      }

      postRequest(url, body, headers)
    })

    sleep(1)
  })
}
