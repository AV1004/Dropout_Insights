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
    <div className="h-[30rem] w-[60rem] text-[#267DFF] bg-[#C8DBFF] absolute  left-[30rem] top-52 rounded-[2rem] drop-shadow-2xl grid grid-rows-2 ">
      <div className="grid grid-cols-3 text-[#267DFF] ml-40 m-8 bg-[#C8DBFF]">
        <PieChart FilteredStudentData={studentFilterData} />
        <LineChart FilteredStudentData={studentFilterDataBarLine} />
      </div>
      <div className="text-[#267DFF] bg-[#C8DBFF] m-4 h-[12.5rem] pb-4 w-[25rem] ml-[17rem]">
        <BarChart FilteredStudentData={studentFilterDataBarLine} />
      </div>
    </div>
  );
}
