import React from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function AnalysisCharts(props) {
  const studentFilterDataBarLine = {
    labels: props.FilteredAnalyzedStudentData.map((data) => data.Year),
    datasets: [
      {
        label: "Numbers of Students",
        data: props.FilteredAnalyzedStudentData.map(
          (data) => data.NumberOfStudentsPercentage
        ),
        // backgroundColor: ["#C8DBFF", "#267DFF", "red", "black", "blue"],
        backgroundColor: ["#267DFF"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const studentFilterData = {
    labels: props.FilteredAnalyzedStudentData.map((data) => data.Year),
    datasets: [
      {
        label: "Numbers of Students",
        data: props.FilteredAnalyzedStudentData.map(
          (data) => data.NumberOfStudentsPercentage
        ),
        backgroundColor: ["#C8DBFF", "#267DFF", "#B9DDF8", "blue"],
        // backgroundColor: ["#267DFF"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div
      className={`grid grid-cols-3 text-[#267DFF] h-[13rem] w-[30rem] ${props.ML} `}
    >
      <PieChart FilteredStudentData={studentFilterData} />
    </div>
  );
}
