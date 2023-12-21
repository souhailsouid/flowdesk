import { ApexOptions } from 'apexcharts';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { StyledChartContainer } from '../../../styles/StyledChart';
import { KLinesDataType } from '../../../types';

  type CandlestickChartProps = {
    data: KLinesDataType[];
  };
  
  const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
    const series = [{
      name: 'candle',
      data: data.map((item) => {
        return {
          x: new Date(item[0]),
          y: [item[1], item[2], item[3], item[4]].map(Number)
        };
      })
    }];
  
    const options: ApexOptions = {
      chart: {
        type: 'candlestick',
        height: 350
      },
      title: {
        text: 'Candlestick Chart',
        align: 'left' as const, // Ensure TypeScript infers the type correctly
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
  
  return (
    <StyledChartContainer id="chart1">
      <ReactApexChart options={options} series={series} type="candlestick" height={350} width={650} />
    </StyledChartContainer>
  );
};

export default CandlestickChart;
