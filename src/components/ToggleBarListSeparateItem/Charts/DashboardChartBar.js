import React from "react";
import BarChart from "./BarChart";

export default function DashboardChart(props) {
  const studentFilterData = {
    labels: props.FilteredAnalyzedStudentData.map((data) => data.Year),
    datasets: [
      {
        label: "Numbers of Students",
        data: props.FilteredAnalyzedStudentData.map(
          (data) => data.NumberOfStudents
        ),
        // backgroundColor: ["#C8DBFF", "#267DFF", "red", "black", "blue"],
        backgroundColor: ["#267DFF"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return <BarChart FilteredStudentData={studentFilterData} />;
}
