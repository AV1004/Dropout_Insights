import React from "react";

export default function SchoolListView() {
  return (
    <div className="h-[30rem] w-[60rem] text-[#267DFF] bg-[#C8DBFF] absolute left-[30rem] top-40 rounded-[2rem] drop-shadow-2xl text-center">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                B.M.Commerce
              </th>
              <td className="px-6 py-4">Bhavanagar</td>
              <td className="px-6 py-4">Semi Gov.</td>
              <td className="px-6 py-4">1-12</td>
              <td className="px-6 py-4">10%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                B.M.Commerce
              </th>
              <td className="px-6 py-4">Bhavanagar</td>
              <td className="px-6 py-4">Semi Gov.</td>
              <td className="px-6 py-4">1-12</td>
              <td className="px-6 py-4">10%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                B.M.Commerce
              </th>
              <td className="px-6 py-4">Bhavanagar</td>
              <td className="px-6 py-4">Semi Gov.</td>
              <td className="px-6 py-4">1-12</td>
              <td className="px-6 py-4">10%</td>
            </tr>
            <tr className="  border-b  dark:border-gray-700  ">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap "
              >
                B.M.Commerce
              </th>
              <td className="px-6 py-4">Bhavanagar</td>
              <td className="px-6 py-4">Semi Gov.</td>
              <td className="px-6 py-4">1-12</td>
              <td className="px-6 py-4">10%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
