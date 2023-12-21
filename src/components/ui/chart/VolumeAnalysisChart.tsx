import {
    BarElement, CategoryScale, ChartDataset, Chart as ChartJS, ChartOptions, Legend, LineElement,
    LinearScale,
    PointElement,
    Title, Tooltip
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { StyledChartContainer } from '../../../styles/StyledChart';
import { KLinesDataType } from '../../../types';

ChartJS.register(CategoryScale, LinearScale, PointElement,
    BarElement, LineElement, Title, Tooltip, Legend);

const processKlineData = (klinesData: KLinesDataType[]) => {
    const labels = klinesData.map(kline => new Date(kline[0]).toLocaleDateString());
    const volumeData = klinesData.map(kline => parseFloat(kline[5]));
    const closingPriceData = klinesData.map(kline => parseFloat(kline[4]));

    return { labels, volumeData, closingPriceData };
};

const VolumeAnalysisChart = ({ klinesData }: { klinesData: KLinesDataType[] }) => {
    const { labels, volumeData, closingPriceData } = processKlineData(klinesData);

    const data = {
        labels: labels,
        datasets: [{
            type: 'line',
            label: 'Closing Price',
            data: closingPriceData,
            borderColor: 'blue',
            yAxisID: 'y-axis-price',
        }, {
            type: 'bar',
            label: 'Volume',
            data: volumeData,
            backgroundColor: 'red',
            yAxisID: 'y-axis-volume',
        }] as ChartDataset<"bar", number[]>[]
    };
    
    const options = {
        responsive: true,
        scales: {
            'y-axis-price': {
                type: 'linear',
                position: 'left',
            },
            'y-axis-volume': {
                type: 'linear',
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
 
    return (
        <StyledChartContainer id="chart2">
            <Bar options={options as ChartOptions<'bar'>} data={data} />
        </StyledChartContainer>
    )
};

export default VolumeAnalysisChart;
