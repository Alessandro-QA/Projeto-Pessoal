const fs = require('fs')
const axios = require('axios')
const { generateChart } = require('./generateChart')

const ambienteFilePath = 'cypress/config-files/ambiente.json'
const summaryFilePath = 'cypress/allure-report/widgets/summary.json'
const suitesFilePath = 'cypress/allure-report/widgets/suites.json'

function getConfig() {
  try {
    if (fs.existsSync(ambienteFilePath)) {
      const ambienteData = fs.readFileSync(ambienteFilePath, 'utf8')
      const ambienteConfig = JSON.parse(ambienteData)
      const ambiente = ambienteConfig.ambiente

      let configFilePath = `cypress/config-files/${ambiente}.json`

      if (fs.existsSync(configFilePath)) {
        const configData = fs.readFileSync(configFilePath, 'utf8')
        return JSON.parse(configData)
      } else {
        console.error('O arquivo de configuração não existe:', configFilePath)
        return null
      }
    } else {
      console.error('O arquivo de ambiente não existe:', ambienteFilePath)
      return null
    }
  } catch (error) {
    console.error('Erro ao ler ou analisar o arquivo de configuração ou de ambiente:', error.message)
    return null
  }
}

function formatDuration(duration) {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  const hoursDisplay = (hours < 10) ? "0" + hours : hours
  const minutesDisplay = (minutes < 10) ? "0" + minutes : minutes
  const secondsDisplay = (seconds < 10) ? "0" + seconds : seconds

  return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`
}

function formatDateTime(timestamp) {
  const date = new Date(timestamp)
  return date.toISOString().replace('T', ' ').replace(/\..+/, '')
}

function getIcon(status) {
  switch (status) {
    case 'passed':
      return '✔️'
    case 'failed':
      return '❌'
    case 'skipped':
      return '➖'
    case 'broken':
      return '🔨'
    case 'time':
      return '⏱️'
    case 'start':
      return '🟢'
    case 'stop':
      return '🔴'
    default:
      return ''
  }
}

async function formatSummaryMessage(summaryData, suitesData, reportUrl, appName) {
  const totalTests = summaryData.statistic.total
  const passedTests = summaryData.statistic.passed
  const failedTests = summaryData.statistic.failed
  const skippedTests = summaryData.statistic.skipped
  const brokenTests = summaryData.statistic.broken

  const startTime = summaryData.time.start - 3 * 60 * 60 * 1000
  const stopTime = summaryData.time.stop - 3 * 60 * 60 * 1000
  const totalDuration = summaryData.time.duration

  const testTypes = suitesData.items.map(item => {
    return {
      name: item.name.replace(' Tests', ''),
      passed: item.statistic.passed,
      failed: item.statistic.failed,
      skipped: item.statistic.skipped,
      broken: item.statistic.broken
    }
  })

  const facts = [
    {
      title: "Hora de Início",
      value: `${getIcon('start')} ${formatDateTime(startTime)}`
    },
    {
      title: "Hora de Término",
      value: `${getIcon('stop')} ${formatDateTime(stopTime)}`
    },
    {
      title: "Duração Total",
      value: `${getIcon('time')} ${formatDuration(totalDuration)}`
    },
    {
      title: "Total de Testes Executados",
      value: `${totalTests} | ${passedTests} ${getIcon('passed')} | ${failedTests} ${getIcon('failed')} | ${skippedTests} ${getIcon('skipped')} | ${brokenTests} ${getIcon('broken')}`
    },
  ]

  // Gere o gráfico e obtenha o URL base64 da imagem
  const chartDataUrl = await generateChart(testTypes)

    // Adicionar fatos para cada tipo de teste
    testTypes.forEach(type => {
      facts.push({
        title: type.name,
        value: `${type.passed} ${getIcon('passed')} | ${type.failed} ${getIcon('failed')} | ${type.skipped} ${getIcon('skipped')} | ${type.broken} ${getIcon('broken')}`
      })
    })

  facts.push({
    title: "Relatório Allure",
    value: `[Ver Relatório Allure](${reportUrl})`
  })

  return {
    text: `Alerta: Um novo evento foi recebido pelo webhook!`,
    title: appName,
    themeColor: "0076D7",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          type: "AdaptiveCard",
          version: "1.0",
          body: [
            {
              type: "TextBlock",
              size: "Medium",
              weight: "Bolder",
              text: appName
            },
            {
              type: "FactSet",
              facts: facts
            },
            {
              type: "Image",
              url: chartDataUrl,
              size: "Auto",  // Usar 'Auto' pode ajudar a ajustar automaticamente o tamanho
              altText: "Gráfico dos Testes",
              width: "60%", // Ajuste a largura para ocupar toda a largura disponível
              height: "200px" // Ajuste a altura conforme necessário
            }
          ]
        }
      }
    ]
  }
}

const config = getConfig()

if (config && fs.existsSync(summaryFilePath) && fs.existsSync(suitesFilePath)) {
  try {
    const summaryData = JSON.parse(fs.readFileSync(summaryFilePath))
    const suitesData = JSON.parse(fs.readFileSync(suitesFilePath))

    formatSummaryMessage(summaryData, suitesData, config.reportUrl, config.appName)
      .then(summaryMessage => {
        axios.post(config.teamsWebhookUrl, summaryMessage)
          .then(response => {
            console.log('Mensagem de resumo enviada para o MS Teams com sucesso:', response.data)
          })
          .catch(error => {
            if (error.response) {
              console.error('Falha ao entregar a mensagem de resumo do webhook com erro:', error.response.data)
            } else {
              console.error('Falha ao enviar mensagem de resumo para o MS Teams:', error.message)
            }
          })
      })
      .catch(error => {
        console.error('Erro ao gerar a mensagem de resumo:', error.message)
      })
  } catch (error) {
    console.error('Erro ao ler ou analisar summary.json ou suites.json:', error.message)
  }
} else {
  console.error('A configuração ou summary.json ou suites.json não existe. Não é possível enviar mensagem de resumo para o MS Teams.')
}
