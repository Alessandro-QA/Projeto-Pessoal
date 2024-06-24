const fs = require('fs');
const axios = require('axios');

// Caminho para o arquivo de configuração JSON
const configFilePath = 'cypress/config-files/config.json';
const summaryFilePath = 'cypress/allure-report/widgets/summary.json'; // Caminho para o summary.json do Allure Report
const suitesFilePath = 'cypress/allure-report/widgets/suites.json'; // Caminho para o suites.json do Allure Report

function getConfig() {
  if (fs.existsSync(configFilePath)) {
    try {
      const configData = fs.readFileSync(configFilePath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      console.error('Error reading or parsing config file:', error.message);
      return null;
    }
  } else {
    console.error('Config file does not exist:', configFilePath);
    return null;
  }
}

// Função para formatar o tempo total de duração dos testes em um formato legível
function formatDuration(duration) {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
  const hoursDisplay = (hours < 10) ? "0" + hours : hours;
  const minutesDisplay = (minutes < 10) ? "0" + minutes : minutes;
  const secondsDisplay = (seconds < 10) ? "0" + seconds : seconds;
  
  return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}

function formatSummaryMessage(summaryData, suitesData, reportUrl, appName) {
  const totalTests = summaryData.statistic.total;
  const passedTests = summaryData.statistic.passed;
  const failedTests = summaryData.statistic.failed;
  const skippedTests = summaryData.statistic.skipped;
  const brokenTests = summaryData.statistic.broken;
  const totalDuration = summaryData.time.sumDuration; // Tempo total de duração dos testes

  // Lista dinâmica de tipos de teste do suites.json
  const testTypes = suitesData.items.map(item => {
    return {
      name: item.name,
      passed: item.statistic.passed,
      failed: item.statistic.failed,
      skipped: item.statistic.skipped,
      broken: item.statistic.broken
    };
  });

  // Função para retornar o ícone baseado no status
  function getIcon(status) {
    switch (status) {
      case 'passed':
        return '✔️'; // Check mark emoji
      case 'failed':
        return '❌'; // Cross mark emoji
      case 'skipped':
        return '➖'; // Minus sign emoji
      case 'broken':
        return '🔨'; // Hammer emoji for broken tests
      case 'time':
        return '⏱️'; // Stopwatch emoji for time
      default:
        return '';
    }
  }
  
  // Construção dos fatos para cada tipo de teste dinamicamente
  const facts = [
    {
      "name": "Total Duration:",
      "value": `${getIcon('time')} ${formatDuration(totalDuration)}`
    },
    {
      "name": "Total Tests Executed:",
      "value": `${totalTests} | ${passedTests} ${getIcon('passed')} | ${failedTests} ${getIcon('failed')} | ${skippedTests} ${getIcon('skipped')} | ${brokenTests} ${getIcon('broken')}`
    },
  ];

  // Adiciona fatos para cada tipo de teste
  testTypes.forEach(type => {
    facts.push({
      "name": `${type.name} Tests:`,
      "value": `${type.passed} ${getIcon('passed')} | ${type.failed} ${getIcon('failed')} | ${type.skipped} ${getIcon('skipped')} | ${type.broken} ${getIcon('broken')}`
    });
  });

  facts.push({
    "name": `Allure Report:`,
    "value": `[View Allure Report](${reportUrl})`
  });

  return {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "summary": "Allure Report Summary",
    "themeColor": "0076D7",
    "title": `${appName}`,
    "sections": [
      {
        "activityTitle": "Test Summary",
        "markdown": true,
        "facts": facts
      }
    ]
  };
}

// Obtém as configurações do arquivo JSON
const config = getConfig();

if (config && fs.existsSync(summaryFilePath) && fs.existsSync(suitesFilePath)) {
  try {
    const summaryData = JSON.parse(fs.readFileSync(summaryFilePath));
    const suitesData = JSON.parse(fs.readFileSync(suitesFilePath));

    const summaryMessage = formatSummaryMessage(summaryData, suitesData, config.reportUrl, 'Test Results - API-DEV');

    axios.post(config.teamsWebhookUrl, summaryMessage)
      .then(response => {
        console.log('Summary message sent to MS Teams successfully:', response.data);
      })
      .catch(error => {
        if (error.response) {
          console.error('Webhook summary message delivery failed with error:', error.response.data);
        } else {
          console.error('Failed to send summary message to MS Teams:', error.message);
        }
      });
  } catch (error) {
    console.error('Error reading or parsing summary or suites json:', error.message);
  }
} else {
  console.error('Configuration or summary.json or suites.json does not exist. Cannot send summary message to MS Teams.');
}
