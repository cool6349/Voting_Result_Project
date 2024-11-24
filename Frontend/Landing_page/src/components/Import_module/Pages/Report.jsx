// Import necessary libraries
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample data based on the PC 2024 report (example data)
const reportData = {
  "BJP": 36.9, // Example data (percentages or counts)
  "INC": 21.4,
  "SP": 4.6,
  "AITC": 4.4,
  "BSP": 2.1,
  "Others": 30.6,
  
};

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: Object.keys(reportData), // Labels (categories)
    datasets: [
      {
        data: Object.values(reportData), // Values (data points)
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#0D2C54', '#E55934',  '#DFD5A5,'], // Color for each segment
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Hover colors
      },
    ],
  };

  // Options for the pie chart (optional)
  const options = {
    responsive: true, // Make the chart responsive to window size
    plugins: {
      legend: {
        position: 'bottom', // Position of the legend at the bottom
        labels: {
          boxWidth: 20, // Width of the box next to the label
          padding: 15,
          font: {
            size: 14,  // Font size of the label
            family: 'Arial',  // Font family
            weight: 'bold',  // Font weight
          },
          
        },
        layout: {
            padding: 10,  // Padding around the legend
            align: 'start', // Align legend items at the start (left-aligned)
          },
        
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`, // Show value in tooltip
        },
      },
    },
  };

  return (
    <div>
      
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
