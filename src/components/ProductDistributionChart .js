"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';

const ProductDistributionChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Set to false to allow custom width and height
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <div className='mt-[3rem]' >
      <h2 className='text-[1.25rem] font-bold'>Product Distribution by Categories</h2>
      <div className='xl:w-full lg:w-[75%] md:w-[50%] w-[40%] mx-auto'>
        <Pie data={chartData} options={chartOptions} className='w-[100%]' />
      </div>
    </div >
  );
};

export default ProductDistributionChart;
