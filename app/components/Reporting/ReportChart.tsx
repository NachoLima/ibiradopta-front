"use client";
import React, { useState } from 'react';
import Chart from 'react-apexcharts';

interface ReportChartProps {
  data: ReportData;
}

const ReportChart: React.FC<ReportChartProps> = ({ data }) => {
  const [chartData] = useState({
    series: [
      {
        name: 'Árboles Plantados',
        data: data.treesPlantedPerMonth,
      },
      {
        name: 'Fondos Recaudados',
        data: data.fundsRaised,
      },
    ],
    options: {
      chart: {
        type: 'bar' as const,
        height: 350,
      },
      title: {
        text: 'Informe de Conservación del Bosque',
      },
      xaxis: {
        categories: data.months,
      },
    },
  });

  return <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />;
};

export default ReportChart;
