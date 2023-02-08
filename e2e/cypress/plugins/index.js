/* eslint no-console: ["error", { allow: ["log", "error"] }] */

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const cypressEslint = require('cypress-eslint-preprocessor');
const UtilsDatabase = require('../support/utils/utils-database');
const path = require('path');
const { merge } = require('webpack-merge');
const { rmdir } = require('fs');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// Função para encontrar qual arquivo de configuração de ambiente será carregado pelo Cypress,
// esse arquivos são obtidos do diretório 'cypress/config-files' de acordo  
// com o parâmetro 'ambiente' passado na execução npm run (ver package.json).
function getConfigurationFileFor(env) {
  const pathToConfigFile = path.resolve('cypress/config-files', `${env}.json`)
  const config = require(pathToConfigFile);
  if (!config.baseUrl || !config.env) {
    throw new Error(`Nao foi possivel encontrar as configuracoes necessarias no arquivo: ${pathToConfigFile}`)
  }
  console.log('Arquivo de configuracao carregado: %o', pathToConfigFile)

  return config;
}

module.exports = (on, config) => {
  // Allure Report
  allureWriter(on, config)

  // plugin de cobertura de codigo de teste (https://github.com/cypress-io/code-coverage)
  // require('@cypress/code-coverage/task')(on, config)

  // plugin de filtragem de testes usando uma substring (tags) (https://github.com/cypress-io/cypress-grep)
  require('cypress-grep/src/plugin')(config)

  // funcao para leitura da variaveis de ambiente, assume 'dev' como default.
  const env = config.env.ambiente || 'dev'
  const envConfig = getConfigurationFileFor(env)

  // plugin para 'linting' dos arquivos de teste (https://www.npmjs.com/package/cypress-eslint-preprocessor)
  on('file:preprocessor', cypressEslint())

  // task que executa instrução parametrizada utilizando a lib mssql (https://www.npmjs.com/package/mssql).
  on('task', {
    preparedStatement({ query, dbConfig }) {
      const utilsDatabase = new UtilsDatabase()
      return utilsDatabase.preparedStatement(query, dbConfig)
    }
  })

  on('task', {
    deleteDownloadsFolder(folderName) {
      console.log('Deletando diretorio %s', folderName)

      return new Promise((resolve, reject) => {
        rmdir(folderName, { maxRetries: 5, recursive: true }, (err) => {
          if (err) {
            console.error(err)
            return reject(err)
          }
          resolve(null)
        })
      })
    },
  })

  const allConfig = merge({}, config, envConfig)
  return allConfig
}
