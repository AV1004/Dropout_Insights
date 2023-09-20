import React from "react";
import DashboardBarChart from "./DashboardBarChart";

export default function DashboardChart(props) {
  const studentFilterData = {
    labels: props.AnalyzedStudentData.map((data) => data.Year),
    datasets: [
      {
        label: "Numbers of Students",
        data: props.AnalyzedStudentData.map((data) => data.NumberOfStudents),
        // backgroundColor: ["#C8DBFF", "#267DFF", "red", "black", "blue"],
        backgroundColor: ["#267DFF"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return <DashboardBarChart FilteredStudentData={studentFilterData} />;
}
