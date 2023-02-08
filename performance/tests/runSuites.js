import { authentication } from './auth/authentication.js'
import { config } from './config/config.js'
import testSuiteFinanceiro from './scenarios/suiteFinanceiro.js'
import testSuiteResultadoSafra from './scenarios/suiteResultadoSafra.js'
import testSuiteSuprimentos from './scenarios/suiteSuprimentos.js'

// opcoes de execucao
export const options = config

// gera token de acesso
export function setup () {
  return authentication()
}

// executa as suites
export function suiteFinanceiro () {
  const headers = setup()
  testSuiteFinanceiro(headers)
}

export function suiteResultadoSafra () {
  const headers = setup()
  testSuiteResultadoSafra(headers)
}

export function suiteSuprimentos () {
  const headers = setup()
  testSuiteSuprimentos(headers)
}
