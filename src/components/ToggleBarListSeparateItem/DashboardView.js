import React from "react";
import DashboardChart from "./Charts/DashboardChart";

export default function DashboardView() {
  const AnalyzedStudentData = [
    {
      Reason: "Poverty",
      NumberOfStudents: 256,
      Year: 2015,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 1200,
      Year: 2016,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 8900,
      Year: 2017,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 76,
      Year: 2018,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 430,
      Year: 2019,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 7800,
      Year: 2020,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 2345,
      Year: 2021,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 98,
      Year: 2022,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 650,
      Year: 2023,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 3700,
      Year: 2024,
    },
  ];

  return (
    <div className="h-[30rem] w-[60rem] text-[#267DFF] bg-[#C8DBFF] absolute flex left-[30rem] top-40 rounded-[2rem] drop-shadow-2xl">
      <DashboardChart AnalyzedStudentData={AnalyzedStudentData} />
    </div> 
  );
}

// border-radius: 2rem;
// box-shadow: 5px 5px 20px 0 #00000030;
