const fs = require('fs');
const axios = require('axios');

// Caminho para o arquivo de configuração JSON
const configFilePath = 'cypress/config-files/config.json';
const statusChartPath = 'cypress/allure-report/widgets/status-chart.json';

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

function formatSummaryMessage(tests, reportUrl) {
  const totalTests = tests.length;
  const passedTests = tests.filter(test => test.status === 'passed').length;
  const failedTests = tests.filter(test => test.status === 'failed').length;
  const skippedTests = tests.filter(test => test.status === 'skipped').length;

  // Função para retornar o ícone baseado no status
  function getIcon(status) {
    switch (status) {
      case 'passed':
        return '✔️'; // Check mark emoji
      case 'failed':
        return '❌'; // Cross mark emoji
      case 'skipped':
        return '➖'; // Minus sign emoji
      default:
        return '';
    }
  }
  
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
        "facts": [
          {
            "name": "Total Tests Executed:",
            "value": `${totalTests}`
          },
          {
            "name": "Passed:",
            "value": `${passedTests} ${getIcon('passed')}`
          },
          {
            "name": "Failed:",
            "value": `${failedTests} ${getIcon('failed')}`
          },
          {
            "name": "Skipped:",
            "value": `${skippedTests} ${getIcon('skipped')}`
          },
          {
            "name": "Allure Report:",
            "value": `[View Allure Report](${reportUrl})`
          }
        ]
      }
    ]
  };
}

// Obtém as configurações do arquivo JSON
const config = getConfig();

if (config && fs.existsSync(statusChartPath)) {
  try {
    const tests = JSON.parse(fs.readFileSync(statusChartPath));
    console.log('Tests:', tests);  // Log do conteúdo dos testes

    const summaryMessage = formatSummaryMessage(tests, config.reportUrl);

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
    console.error('Error reading or parsing status-chart.json:', error.message);
  }
} else {
  console.error('Configuration or status-chart.json does not exist. Cannot send summary message to MS Teams.');
}
