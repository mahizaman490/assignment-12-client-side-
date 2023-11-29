import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Statistics = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Sample data for bookings by date
    const data = {
      labels: ['2023-11-27', '2023-11-28', '2023-11-29'],
      datasets: [
        {
          label: 'Bookings',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
          hoverBorderColor: 'rgba(75, 192, 192, 1)',
          data: [5, 10, 8], // Replace with your actual booking data
        },
      ],
    };

    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, config);

    // Clean up the chart when the component is unmounted
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bookings by Date</h2>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default Statistics;
