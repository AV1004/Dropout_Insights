import React, { useState } from "react";
import AnalysisCharts from "./Charts/AnalysisChart";

export default function AnalysisView() {
  const AnalyzedStudentData = [
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 5.6,
      Year: 2021,
      District: "Ahmedabad",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 12.3,
      Year: 2022,
      District: "Vadodara",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 20.1,
      Year: 2023,
      District: "Surat",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 1.8,
      Year: 2024,
      District: "Rajkot",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 8.9,
      Year: 2025,
      District: "Gandhinagar",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 16.2,
      Year: 2026,
      District: "Bhavnagar",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 12.7,
      Year: 2027,
      District: "Jamnagar",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 0.9,
      Year: 2028,
      District: "Junagadh",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 14.0,
      Year: 2029,
      District: "Kutch",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 11.3,
      Year: 2030,
      District: "Anand",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 10.0,
      Year: 2031,
      District: "Mehsana",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 0.5,
      Year: 2032,
      District: "Patan",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 9.2,
      Year: 2033,
      District: "Bharuch",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 15.5,
      Year: 2034,
      District: "Sabarkantha",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 13.6,
      Year: 2035,
      District: "Surendranagar",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 0.7,
      Year: 2036,
      District: "Amreli",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 11.1,
      Year: 2037,
      District: "Dahod",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 19.0,
      Year: 2038,
      District: "Navsari",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 14.5,
      Year: 2039,
      District: "Valsad",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 1.2,
      Year: 2040,
      District: "Botad",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 7.8,
      Year: 2041,
      District: "Porbandar",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 14.3,
      Year: 2042,
      District: "Banaskantha",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 12.2,
      Year: 2043,
      District: "Dang",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 0.8,
      Year: 2044,
      District: "Narmada",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 9.5,
      Year: 2045,
      District: "Tapi",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 16.7,
      Year: 2046,
      District: "Morbi",
    },
    {
      Reason: "Poor quality of MDM",
      NumberOfStudentsPercentage: 17.8,
      Year: 2047,
      District: "Devbhoomi Dwarka",
    },
    {
      Reason: "Orphan",
      NumberOfStudentsPercentage: 0.6,
      Year: 2048,
      District: "Aravalli",
    },
    {
      Reason: "Poverty",
      NumberOfStudentsPercentage: 8.2,
      Year: 2049,
      District: "Mahisagar",
    },
    {
      Reason: "Seasonal Migration",
      NumberOfStudentsPercentage: 15.8,
      Year: 2050,
      District: "Chhota Udaipur",
    },
  ];

  const povertyData = AnalyzedStudentData.filter(
    (data) => data.Reason === "Poverty"
  );
  const SMData = AnalyzedStudentData.filter(
    (data) => data.Reason === "Seasonal Migration"
  );
  const orphanData = AnalyzedStudentData.filter(
    (data) => data.Reason === "Orphan"
  );
  const MDMData = AnalyzedStudentData.filter(
    (data) => data.Reason === "Poor quality of MDM"
  );

  return (
    <div>
      <h1 className="text-4xl absolute text-[#267DFF] font-sans font-semibold top-16 left-[22rem]">
        Overall Analysis
      </h1>
      <div>
        {/* <div className="h-[38rem] w-[60rem]  text-[#267DFF] bg-[#C8DBFF] absolute  left-[30.5rem] top-28 rounded-[2rem] drop-shadow-2xl  grid-cols-2 "> */}
        <div className="h-[38rem] w-[60rem]  text-[#267DFF]  absolute  left-[30.5rem] top-28   grid-cols-2 ">
          <div className="flex mt-[5.5rem] ml-[9rem] h-36 ">
            <h1 className=" absolute right-[41.5rem] text-[2rem] top-4">
              Poverty
            </h1>
            <AnalysisCharts ML={""} FilteredAnalyzedStudentData={povertyData} />
            <h1 className=" absolute right-[6rem] text-[2rem] top-4">
              Seasonal Migration
            </h1>
            <AnalysisCharts
              FilteredAnalyzedStudentData={SMData}
              ML={"ml-[10rem]"}
            />
          </div>
          <div className="flex mt-[9.5rem] ml-[9rem] h-36">
            <h1 className=" absolute right-[41.5rem] text-[2rem] top-[20rem]">
              Orphan
            </h1>
            <AnalysisCharts ML={""} FilteredAnalyzedStudentData={orphanData} />
            <h1 className=" absolute right-[5rem] text-[2rem] top-[20rem]">
              Poor quality of MDM
            </h1>
            <AnalysisCharts
              ML={"ml-[10rem]"}
              FilteredAnalyzedStudentData={MDMData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// FilteredAnalyzedStudentData={reasonSpecificData}
// FilteredAnalyzedStudentData={reasonSpecificData}
// FilteredAnalyzedStudentData={reasonSpecificData}
