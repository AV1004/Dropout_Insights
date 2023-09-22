import React from "react";

export default function SchoolListView() {
  return (
    <div className="h-[30rem] w-[60rem] text-[#267DFF]  absolute left-[30rem] top-40 rounded-[2rem]  text-center">
      <div className="relative overflow-x-auto drop-shadow-2xl sm:rounded-lg">
        <table className="w-full text-xl text-left">
          <thead className="text-xl  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">
                School Name
              </th>
              <th scope="col" className="px-6 py-3">
                District
              </th>
              <th scope="col" className="px-6 py-3">
                Gov./SF
              </th>
              <th scope="col" className="px-6 py-3">
                Available Standard
              </th>
              <th scope="col" className="px-6 py-3">
                Dropout Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                ABC Public School
              </th>
              <td className="px-6 py-4">Ahmedabad</td>
              <td className="px-6 py-4">Government</td>
              <td className="px-6 py-4">1-10</td>
              <td className="px-6 py-4">10%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                XYZ International School
              </th>
              <td className="px-6 py-4">Vadodara</td>
              <td className="px-6 py-4">Self Finance</td>
              <td className="px-6 py-4">5 to 10</td>
              <td className="px-6 py-4">5%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                Gujarat High School
              </th>
              <td className="px-6 py-4">Surat</td>
              <td className="px-6 py-4">Government</td>
              <td className="px-6 py-4">1 to 12</td>
              <td className="px-6 py-4">8%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                Shree Vidyalay
              </th>
              <td className="px-6 py-4">Rajkot</td>
              <td className="px-6 py-4">Self Finance</td>
              <td className="px-6 py-4">1 to 10</td>
              <td className="px-6 py-4">7%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                Mount Carmel School
              </th>
              <td className="px-6 py-4">Jamnagar</td>
              <td className="px-6 py-4">Government</td>
              <td className="px-6 py-4">1 to 12</td>
              <td className="px-6 py-4">6%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                Saraswati Vidyalaya
              </th>
              <td className="px-6 py-4">Bhavnagar</td>
              <td className="px-6 py-4">Self Finance</td>
              <td className="px-6 py-4">1 to 10</td>
              <td className="px-6 py-4">9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
