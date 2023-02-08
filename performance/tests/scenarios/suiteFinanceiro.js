import { group, sleep } from 'k6'
import { postRequest, getRequest } from '../requests/request.js'

export default function (headers) {
  const BASE_URL = 'https://myfarm.dev.conexa.com.br/api'

  group('Suite - Financeiro', function () {
    group('Dashboard - Pagamentos Pendentes', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/Pedentes`

      getRequest(url, headers)
    })

    sleep(1)

    group('Dashboard - Saldo em Conta', function () {
      const EmpresaId = '00000000-0000-0000-0000-000000000000'
      const Data = '2021-12-23T23%3A59%3A59-03%3A00'
      const url = BASE_URL + `/financeiro/v1/Dashboard/SaldoConta?EmpresaId=${EmpresaId}&Data=${Data}`

      getRequest(url, headers)
    })

    sleep(1)

    group('Agenda Financeira - Listagem', function () {
      const url = BASE_URL + `/financeiro/v1/Agenda/Listagem`

      const body = {
        'dataInicial': '2021-12-23T00:00:00-03:00',
        'dataFinal': '2022-12-23T23:59:59-03:00',
        'empresaIds': [
          '0f0d88a8-f481-4d14-8aec-227418f35cbe'
        ],
        'fazendaIds': [
          '9c42d357-9668-446f-a051-090d028ef6f0'
        ],
        'filter': {
          'fields': [
            'NumeroDocumento',
            'ValorTitulo',
            'Pessoa'
          ]
        },
        'filterAgendamento': 0,
        'statusTitulos': [
          1,
          2,
          3,
          4
        ],
        'page': 1,
        'size': 20
      }

      postRequest(url, body, headers)
    })

    sleep(1)

    group('Documentos - Listagem', function () {
      const url = BASE_URL + `/financeiro/v1/Documento/Listagem`

      const body = {
        'Conferido': 'Todos',
        'page': 1,
        'size': 20,
        'filter': {
          'fields': [
            'Numero',
            'Categoria',
            'Operacao',
            'Pessoa'
          ]
        }
      }

      postRequest(url, body, headers)
    })

    sleep(1)

    group('Movimentações - Listagem', function () {
      const url = BASE_URL + `/financeiro/v1/Movimentacao/Listagem`

      const body = {
        'EmpresaIds': [
          '548ba91d-8dbe-4c93-87ef-22fbdbc87974',
          '16cc8e31-40e3-4755-8758-93156f3af95c',
          '83c91c01-7ee8-4bc7-adfd-3f9ff03fb9f7',
          'bee31ee6-98ee-4a20-a6ee-d9d2ba17d6ad'
        ],
        'DataInicial': '2021-01-15T00:00:00-03:00',
        'DataFinal': '2021-12-15T23:59:59-03:00',
        'Page': 1,
        'Size': 20,
        'filter': {
          'fields': [
            'NumeroDocumento',
            'Categoria',
            'ContaBancaria',
            'TipoMovimentacao'
          ]
        }
      }
      postRequest(url, body, headers)
    })

    sleep(1)

    group('Livro Caixa - Produtores Livro Caixa', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/ProdutoresLivroCaixa?ProdutorId=&Ano=2021`

      getRequest(url, headers)
    })

    sleep(1)
  })
}
