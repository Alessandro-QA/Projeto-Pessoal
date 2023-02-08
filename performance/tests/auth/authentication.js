import { generateToken } from './generateToken.js'

const USERNAME = '__PerformanceTest.Email__'
const PASSWORD = '__PerformanceTest.Password__'
const OFERTA = '38F68463-F895-47CA-BE8B-D296ED2EC0FB'
const TENANTID = '__PerformanceTest.Tenant__'
const CONFIRM = true

// gera token de acesso para utilizacao no header
export function authentication () {
  const token = generateToken(
    {
      username: USERNAME,
      password: PASSWORD
    }
  )

  // header de autenticacao utilizado nos endpoints
  const headers = {
    headers: {
      'authorization': `Bearer ${token.access_token}`,
      'content-type': 'application/json',
      'oferta': OFERTA,
      'x-tenant': TENANTID,
      'Confirm-Message': CONFIRM
    }
  }
  return headers
}
