
import React, { useState, useEffect } from 'react'
import { Bar, Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => { 
    setChartData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#6366F1',
        borderColor: '#6366F1',
      }],
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
      },
        title: {
          display: true,
            text: 'Daily Sales',
      }
      },
      maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  )
}

export default BarChart