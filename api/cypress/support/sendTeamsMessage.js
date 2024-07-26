const fs = require('fs')
const axios = require('axios')
const { generateChart } = require('./generateChart')

// Caminho para o arquivo de configuração JSON
const configFilePath = 'cypress/config-files/config.json'
const summaryFilePath = 'cypress/allure-report/widgets/summary.json' // Caminho para o summary.json do Allure Report
const suitesFilePath = 'cypress/allure-report/widgets/suites.json' // Caminho para o suites.json do Allure Report

function getConfig() {
  if (fs.existsSync(configFilePath)) {
    try {
      const configData = fs.readFileSync(configFilePath, 'utf8')
      return JSON.parse(configData)
    } catch (error) {
      console.error('Error reading or parsing config file:', error.message)
      return null
    }
  } else {
    console.error('Config file does not exist:', configFilePath)
    return null
  }
}

// Função para formatar o tempo total de duração dos testes em um formato legível
function formatDuration(duration) {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
  const hoursDisplay = (hours < 10) ? "0" + hours : hours
  const minutesDisplay = (minutes < 10) ? "0" + minutes : minutes
  const secondsDisplay = (seconds < 10) ? "0" + seconds : seconds
  
  return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`
}

// Função para formatar data e hora legíveis
function formatDateTime(timestamp) {
  const date = new Date(timestamp)
  return date.toISOString().replace('T', ' ').replace(/\..+/, '')
}

// Função para obter o ícone com base no status
function getIcon(status) {
  switch (status) {
    case 'passed':
      return '✔️' // Emoji de marca de verificação
    case 'failed':
      return '❌' // Emoji de marca de cruz
    case 'skipped':
      return '➖' // Emoji de sinal de menos
    case 'broken':
      return '🔨' // Emoji de martelo para testes quebrados
    case 'time':
      return '⏱️' // Emoji de cronômetro para tempo
    case 'start':
      return '🟢' // Emoji de círculo verde para hora de início
    case 'stop':
      return '🔴' // Emoji de círculo vermelho para hora de parada
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
