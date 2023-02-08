import { group, sleep } from 'k6'
import { postRequest } from '../requests/request.js'

export default function (headers) {
  const BASE_URL = 'https://myfarm.dev.conexa.com.br/api'

  group('Suite - Resultado da Safra', function () {
    group('Resultado da Safra - Sintética', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/ResultadoSafra`

      const body = {
        'fazendaIds': [
          '9c42d357-9668-446f-a051-090d028ef6f0'
        ],
        'safraId': '3ea751bf-ee9c-47b5-9aad-9c5aee8eef2a',
        'AdicionarSaldoAFixarDeColheitas': true,
        'ciclos': [
          {
            'area': 400,
            'descricao': 'Feijão - 2021/2021',
            'id': 'c868c6ee-9b85-4975-bff2-7260aa8c0c5a',
            'mediaNegociada': 0,
            'CulturaId': '0dcf7dd1-bcef-44e9-88a2-45c09e9c433c',
            'cultura': {
              'id': '0dcf7dd1-bcef-44e9-88a2-45c09e9c433c',
              'nomeNormalizado': 'Feijão',
              'unidadeMedida': {
                'id': '05c95e12-3630-6a09-0a3b-6534539f10e0',
                'nomeNormalizado': 'Saca 60'
              },
              'icon': 'siagri-icon-cultura-generico',
              'MaterialId': null
            },
            'unidadeMedida': {
              'id': '05c95e12-3630-6a09-0a3b-6534539f10e0',
              'nomeNormalizado': 'Saca 60'
            },
            'MaterialId': null
          },
          {
            'area': 500,
            'descricao': 'Soja - 2021/2021',
            'id': 'a33708a1-f6fe-49b1-badb-95d39b3efb96',
            'mediaNegociada': 0,
            'CulturaId': 'e57efd7f-3e08-4d89-81ff-35fc6476d778',
            'cultura': {
              'id': 'e57efd7f-3e08-4d89-81ff-35fc6476d778',
              'nomeNormalizado': 'Soja',
              'unidadeMedida': {
                'id': '05c95e12-3630-6a09-0a3b-6534539f10e0',
                'nomeNormalizado': 'Saca 60'
              },
              'icon': 'siagri-icon-soja',
              'MaterialId': null
            },
            'unidadeMedida': {
              'id': '05c95e12-3630-6a09-0a3b-6534539f10e0',
              'nomeNormalizado': 'Saca 60'
            },
            'MaterialId': null
          }
        ],
        'cicloContas': [],
        'ApresentarDocumentosNaoPagosERecebidos': true
      }

      postRequest(url, body, headers)
    })

    sleep(1)

    group('Resultado da Safra - Analítica (Ciclos)', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos`

      const body = {
        'fazendaIds': [
          '9c42d357-9668-446f-a051-090d028ef6f0'
        ],
        'safraId': '3ea751bf-ee9c-47b5-9aad-9c5aee8eef2a',
        'ApresentarDocumentosNaoPagosERecebidos': true,
        'AdicionarSaldoAFixarDeColheitas': true,
        'cicloContas': [],
        'ciclos': [
          {
            'id': 'c868c6ee-9b85-4975-bff2-7260aa8c0c5a',
            'mediaNegociada': 0,
            'area': 400,
            'descricao': 'Feijão - 2021/2021'
          },
          {
            'id': 'a33708a1-f6fe-49b1-badb-95d39b3efb96',
            'mediaNegociada': 0,
            'area': 500,
            'descricao': 'Soja - 2021/2021'
          }
        ]
      }

      postRequest(url, body, headers)
    })

    sleep(1)

    group('Resultado da Safra - Analítica (Contas)', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas`

      const body = {
        'fazendaIds': [
          '9c42d357-9668-446f-a051-090d028ef6f0'
        ],
        'safraId': '3ea751bf-ee9c-47b5-9aad-9c5aee8eef2a',
        'ApresentarDocumentosNaoPagosERecebidos': true,
        'AdicionarSaldoAFixarDeColheitas': true,
        'cicloContas': [],
        'ciclos': [
          {
            'id': 'c868c6ee-9b85-4975-bff2-7260aa8c0c5a',
            'CulturaId': '0dcf7dd1-bcef-44e9-88a2-45c09e9c433c',
            'MaterialId': null
          },
          {
            'id': 'a33708a1-f6fe-49b1-badb-95d39b3efb96',
            'CulturaId': 'e57efd7f-3e08-4d89-81ff-35fc6476d778',
            'MaterialId': null
          }
        ]
      }

      postRequest(url, body, headers)
    })

    sleep(1)

    group('Resultado da Safra - Analítica (Detalhes)', function () {
      const url = BASE_URL + `/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra`

      const body = {
        'tipoLancamento': 'despesa',
        'categoria': '4.02.01.03',
        'cicloContas': [],
        'ciclos': [
          {
            'id': 'c868c6ee-9b85-4975-bff2-7260aa8c0c5a',
            'CulturaId': '0dcf7dd1-bcef-44e9-88a2-45c09e9c433c',
            'MaterialId': null
          },
          {
            'id': 'a33708a1-f6fe-49b1-badb-95d39b3efb96',
            'CulturaId': 'e57efd7f-3e08-4d89-81ff-35fc6476d778',
            'MaterialId': null
          }
        ],
        'fazendaIds': [
          '9c42d357-9668-446f-a051-090d028ef6f0'
        ],
        'safraId': '3ea751bf-ee9c-47b5-9aad-9c5aee8eef2a',
        'ApresentarDocumentosNaoPagosERecebidos': true,
        'AdicionarSaldoAFixarDeColheitas': true
      }

      postRequest(url, body, headers)
    })

    sleep(1)
  })
}
