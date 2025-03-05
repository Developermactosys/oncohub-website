import React from "react";
import Chart from "react-apexcharts";

const RevenueChart = () => {
  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    colors: ["#0183CE", "#00E096"], 
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        endingShape: "rounded",
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 5, colors: ["transparent"], },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    yaxis: {
      title: { text: "Revenue (K)" },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}.00`,
      },
    },
    legend: { position: "bottom", markers: { fillColors: ["#007bff"] } },
  };

  const series = [
    { name: "Earning", data: [14, 16, 22, 18, 14, 17, 20] },
    { name: "Revenue", data: [13, 15, 25, 9, 11, 14, 12] }, 
  ];

  return (
    <div className="bg-[#F8F9FA] shadow-lg p-4 rounded-lg">
      <h3 className="text-xl text-[#05004E] font-bold  mb-2">Total Revenue</h3>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default RevenueChart;
