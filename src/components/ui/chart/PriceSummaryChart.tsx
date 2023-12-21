import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { StyledChartContainer } from '../../../styles/StyledChart';
import { Ticker24hDataType } from '../../../types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PriceSummaryChart = ({ tickerData }: { tickerData: Ticker24hDataType }) => {
  const chartData = {
    labels: ['Open', 'High', 'Low', 'Last'],
    datasets: [{
      label: `Price ${tickerData.symbol}}`,
      data: [tickerData.openPrice, tickerData.highPrice, tickerData.lowPrice, tickerData.lastPrice],
      backgroundColor: ['blue', 'green', 'red', 'orange'],
    }],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <StyledChartContainer>
      <Bar data={chartData} options={options} />
    </StyledChartContainer>
  )
};

export default PriceSummaryChart;
