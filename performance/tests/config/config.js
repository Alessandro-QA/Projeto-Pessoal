export const config = {
  scenarios: {
    testSuiteFinanceiro: {
      executor: 'ramping-vus',
      startVUs: 2,
      stages: [
        { duration: '10m', target: 200 },
        { duration: '20m', target: 400 },
        { duration: '30m', target: 600 }
      ],
      gracefulRampDown: '5s',
      tags: { test_type: 'carga' },
      exec: 'suiteFinanceiro'
    },
    testSuiteResultadoSafra: {
      executor: 'ramping-vus',
      startVUs: 2,
      stages: [
        { duration: '10m', target: 200 },
        { duration: '20m', target: 400 },
        { duration: '30m', target: 600 }
      ],
      gracefulRampDown: '5s',
      tags: { test_type: 'carga' },
      exec: 'suiteResultadoSafra'
    },
    testSuiteSuprimentos: {
      executor: 'ramping-vus',
      startVUs: 2,
      stages: [
        { duration: '10m', target: 200 },
        { duration: '20m', target: 400 },
        { duration: '30m', target: 600 }
      ],
      gracefulRampDown: '5s',
      tags: { test_type: 'carga' },
      exec: 'suiteSuprimentos'
    }
  },
  discardResponseBodies: false
  /*
  thresholds: {
    'http_req_duration{scenario:testSuiteFinanceiro}': ['avg < 500'],
    'group_duration{scenario:testSuiteFinanceiro}': ['avg <= 1000'],
    'checks': ['100'],
    'http_req_failed': ['rate <= 0.00'],
    'iteration_duration{scenario:testSuiteFinanceiro}': ['avg < 3000'],
    'http_req_waiting': ['avg < 500'],
    'http_req_blocked': ['min <= 0']
  }
  */
}
