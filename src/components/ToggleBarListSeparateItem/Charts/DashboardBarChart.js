import React from "react";
import { Bar } from "react-chartjs-2";
// import { Line } from "react-chartjs-2";
// import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function DashboardBarChart(props) {
    return <Bar data={props.FilteredStudentData} />;
  //   return <Line data={props.FilteredStudentData} />;
//   return <Pie data={props.FilteredStudentData} />;
}
