const { defineConfig } = require('cypress');
//const cypressEslint = require('cypress-eslint-preprocessor');
const UtilsDatabase = require('./cypress/support/utils/utils-database');
const path = require('path');
const { merge } = require('webpack-merge');
const { rmdir } = require('fs');
const cypressGrep = require('cypress-grep/src/plugin');
const { allureCypress } = require("allure-cypress/reporter");

// Função para encontrar qual arquivo de configuração de ambiente será carregado pelo Cypress,
// esses arquivos são obtidos do diretório 'cypress/config-files' de acordo
// com o parâmetro 'ambiente' passado na execução npm run (ver package.json).
function getConfigurationFileFor(env) {
  const pathToConfigFile = path.resolve('cypress/config-files', `${env}.json`);
  const config = require(pathToConfigFile);
  if (!config.baseUrl || !config.env) {
    throw new Error(`Não foi possível encontrar as configurações necessárias no arquivo: ${pathToConfigFile}`);
  }
  console.log('Arquivo de configuração carregado: %o', pathToConfigFile);

  return config;
}

module.exports = defineConfig({
  e2e: {

    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    testIsolation: false,
    defaultCommandTimeout: 8000,


    setupNodeEvents(on, config) {

      // Allure Report
      allureCypress(on, {
        resultsDir: "cypress/allure-results"
      })

      // plugin de filtragem de testes usando uma substring (tags)
      cypressGrep(config);

      // função para leitura das variáveis de ambiente, assume 'dev' como default.
      const env = config.env.ambiente || 'dev';
      const envConfig = getConfigurationFileFor(env);

      // plugin para 'linting' dos arquivos de teste
      //on('file:preprocessor', cypressEslint());

      // task que executa instrução parametrizada utilizando a lib mssql.
      /*
      on('task', {
        preparedStatement({ query, dbConfig }) {
          const utilsDatabase = new UtilsDatabase();
          return utilsDatabase.preparedStatement(query, dbConfig);
        },
      });
 
        */
      on('task', {
        deleteDownloadsFolder(folderName) {
          console.log('Deletando diretório %s', folderName);

          return new Promise((resolve, reject) => {
            rmdir(folderName, { maxRetries: 5, recursive: true }, (err) => {
              if (err) {
                console.error(err);
                return reject(err);
              }
              resolve(null);
            });
          });
        },
      });

      const allConfig = merge({}, config, envConfig);
      return allConfig;
    },
  },
});