import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
 
const ChartComp = ({numberOfAppoforDay}:{numberOfAppoforDay:number[]}) => {
  const chartRef = useRef(null); // Create a ref for the canvas

  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Appointments",
        data: numberOfAppoforDay,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Appointments Per Day",
      },
      legend: {
        position: "top",
      },
    },
  };


  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance; // Get the current chart instance
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the previous chart instance if it exists
    }
  }, [data]); // The chart will re-render if the data changes

  return (
    <div >
      <h1>Appointments Per Day</h1>
      <canvas ref={chartRef} width={200} height={300}></canvas> {/* Use canvas element directly */}
      <Bar ref={chartRef} data={data} options={options}  width={200} height={'200px'}/> {/* Add the Bar chart */}
    </div>
  );
};

export default ChartComp;
