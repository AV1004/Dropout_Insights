import React, { useState } from "react";
import Dashboard from "./ToggleBarListIcons/Dashboard";
import SchoolList from "./ToggleBarListIcons/SchoolList";
import Analysis from "./ToggleBarListIcons/Analysis";
import Register from "./ToggleBarListIcons/Register";
import Login from "./ToggleBarListIcons/Login";

export default function ToggleBarListItems() {
  const [bgColorDashboard, setBgColorDashboard] = useState("#267DFF");
  const [changePaddingDashboard, setChangePaddingDashboard] = useState("px-10");
  const [AddClassDashboard, setAddClassDashboard] = useState("bg-[#267DFF]");

  const handleDashboard = () => {
    setBgColorDashboard("#DBE7FD");
    setChangePaddingDashboard("pl-10");
    setAddClassDashboard(
      "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl"
    );
  };

  return (
    <div className="bg-[#267DFF] h-[29.8rem] rounded-br-3xl">
      <ul>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium  ${changePaddingDashboard} flex py-6`}
        >
          <div className={AddClassDashboard}>
            <button onClick={handleDashboard} className="flex">
              <Dashboard changeBG={bgColorDashboard} />
              {"Dashboard"}
            </button>
          </div>
        </li>
        <li className="bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium px-10 flex py-6">
          <button className="flex">
            <SchoolList />
            {"School List"}
          </button>
        </li>
        <li className="bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium px-10 flex py-6">
          <button className="flex">
            <Analysis />
            {"Analysis"}
          </button>
        </li>
        <li className="bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium px-10 flex py-6">
          <button className="flex">
            <Register />
            {"Register"}
          </button>
        </li>
        <li className="bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium px-10 flex py-6">
          <button className="flex">
            <Login />
            {"Login"}
          </button>
        </li>
      </ul>
    </div>
  );
}
