import React, { useState } from "react";
import DashboardChartBar from "./Charts/DashboardChartBar";

export default function DashboardView() {
  // Dummy Data to show the AnalayzedGraph
  const AnalyzedStudentData = [
    {
      Reason: "Poverty",
      NumberOfStudents: 256,
      Year: 2021,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 1200,
      Year: 2022,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 8900,
      Year: 2023,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 76,
      Year: 2024,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 430,
      Year: 2025,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 7800,
      Year: 2026,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 2345,
      Year: 2027,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 98,
      Year: 2028,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 650,
      Year: 2029,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 3700,
      Year: 2030,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 1780,
      Year: 2031,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 32,
      Year: 2032,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 880,
      Year: 2033,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 5400,
      Year: 2034,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 3456,
      Year: 2035,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 123,
      Year: 2036,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 710,
      Year: 2037,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 6700,
      Year: 2038,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 2900,
      Year: 2039,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 57,
      Year: 2040,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 890,
      Year: 2041,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 4200,
      Year: 2042,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 1650,
      Year: 2043,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 87,
      Year: 2044,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 990,
      Year: 2045,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 5900,
      Year: 2046,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 2200,
      Year: 2047,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 45,
      Year: 2048,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 760,
      Year: 2049,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 4100,
      Year: 2050,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 1765,
      Year: 2051,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 68,
      Year: 2052,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 900,
      Year: 2053,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 6200,
      Year: 2054,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 2550,
      Year: 2055,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 102,
      Year: 2056,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 790,
      Year: 2057,
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudents: 4800,
      Year: 2058,
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudents: 1980,
      Year: 2059,
    },
    {
      Reason: "Orphan",
      NumberOfStudents: 76,
      Year: 2060,
    },
    {
      Reason: "Poverty",
      NumberOfStudents: 880,
      Year: 2061,
    },
  ];

  //Reason Filterd Array
  const [reasonSpecificData, setReasonSpecificData] = useState(
    AnalyzedStudentData.filter((data) => data.Reason === "Poverty")
  );

  // State to handle selected reasons
  const [selectedReason, setSelectedReason] = useState("Poverty");

  const selectReasonHandler = (event) => {
    let conditionCheck = event.target.value;
    setSelectedReason(conditionCheck);
    // console.log(conditionCheck);
    if (conditionCheck === "Poverty") {
      setReasonSpecificData(
        AnalyzedStudentData.filter((data) => data.Reason === "Poverty")
      );
    } else if (conditionCheck === "Seasonal Migration") {
      setReasonSpecificData(
        AnalyzedStudentData.filter(
          (data) => data.Reason === "Seasonal Migration"
        )
      );
    } else if (conditionCheck === "Orphan") {
      setReasonSpecificData(
        AnalyzedStudentData.filter((data) => data.Reason === "Orphan")
      );
    } else {
      setReasonSpecificData(
        AnalyzedStudentData.filter(
          (data) => data.Reason === "Poor quality of MDM"
        )
      );
    }
  };

  // console.log(selectedReason);
  // console.log(reasonSpecificData);

  return (
    <div>
      <select
        onChange={selectReasonHandler}
        className="border-2 border-black rounded-2xl top-32 left-[75rem] absolute bg-[#267DFF] py-2 px-4 text-white "
        name="Filter"
        id="selectFilter"
      >
        <option className="text-black" value="Poverty">
          Poverty
        </option>
        <option className="text-black" value="Seasonal Migration">
          Seasonal Migration
        </option>
        <option className="text-black" value="Orphan">
          Orphan
        </option>
        <option className="text-black" value="Poor quality of MDM">
          Poor quality of MDM
        </option>
      </select>
      <h1 className="text-4xl absolute text-[#267DFF] font-sans font-semibold top-16 left-[22rem]">
        Overall Analysis
      </h1>
      <div className="h-[30rem] w-[60rem] text-[#267DFF] bg-[#C8DBFF] absolute flex left-[30rem] top-52 rounded-[2rem] drop-shadow-2xl">
        <DashboardChartBar FilteredAnalyzedStudentData={reasonSpecificData} />
      </div>
    </div>
  );
}

// border-radius: 2rem;
// box-shadow: 5px 5px 20px 0 #00000030;
