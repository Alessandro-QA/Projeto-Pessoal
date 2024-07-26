const fs = require('fs')
const { ChartJSNodeCanvas } = require('chartjs-node-canvas')
const { Chart, ArcElement, Tooltip, Legend } = require('chart.js')
const ChartDataLabels = require('chartjs-plugin-datalabels')

// Registra explicitamente os componentes necessários do Chart.js e o plugin de rótulos de dados
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const width = 300 // Largura do gráfico
const height = 200 // Altura do gráfico
const chartJSOptions = {
  width,
  height,
  backgroundColour: 'white'
}

async function generateChart(testTypes) {
  const chartJSNodeCanvas = new ChartJSNodeCanvas(chartJSOptions)

  // Extrai os dados das estatísticas
  const labels = ['Passados', 'Falhados', 'Skipped', 'Quebrados']
  const data = [
    testTypes.reduce((sum, type) => sum + type.passed, 0),
    testTypes.reduce((sum, type) => sum + type.failed, 0),
    testTypes.reduce((sum, type) => sum + type.skipped, 0),
    testTypes.reduce((sum, type) => sum + type.broken, 0)
  ]

  const totalTests = data.reduce((acc, value) => acc + value, 0)

  const configuration = {
    type: 'pie', // Tipo de gráfico
    data: {
      labels: labels,
      datasets: [{
        label: 'Resultados dos Testes',
        data: data,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)', 
          'rgba(255, 99, 132, 0.2)', 
          'rgba(255, 159, 64, 0.2)', 
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)', 
          'rgba(255, 99, 132, 1)', 
          'rgba(255, 159, 64, 1)', 
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            font: {
              size: 8 // Tamanho da fonte para os títulos
            },
            boxWidth: 6
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || ''
              const value = context.raw || 0
              const percentage = totalTests ? ((value / totalTests) * 100).toFixed(2) + '%' : '0%'
              return `${label}: ${value} (${percentage})`
            }
          }
        },
        datalabels: {
          display: true,
          color: '#000',
          formatter: (value, context) => {
            const percentage = totalTests ? ((value / totalTests) * 100).toFixed(2) + '%' : '0%'
            return percentage
          },
          anchor: 'center',  // Coloca os rótulos no centro das fatias
          align: 'center',   // Alinha os rótulos ao centro
          font: {
            size: 10, // Tamanho da fonte das porcentagens
            weight: 'bold'
          },
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Cor de fundo para contraste
          borderRadius: 3, // Bordas arredondadas para a caixa de texto
          padding: 4 // Espaçamento ao redor do texto
        }
      }
    }
  }

  // Gera a imagem em buffer
  const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration)

  // Salva a imagem localmente
  fs.writeFileSync('chart.png', imageBuffer)

  // Converte a imagem em base64
  const imageBase64 = imageBuffer.toString('base64')
  const imageDataUrl = `data:image/png;base64,${imageBase64}`

  return imageDataUrl
}

module.exports = { generateChart }
