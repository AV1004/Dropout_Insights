import React, { useState } from "react";
import Dashboard from "./ToggleBarListIcons/Dashboard";
import SchoolList from "./ToggleBarListIcons/SchoolList";
import Analysis from "./ToggleBarListIcons/Analysis";
import Register from "./ToggleBarListIcons/Register";
import Login from "./ToggleBarListIcons/Login";

export default function ToggleBarListItems() {
  const [dashboard, setDashboard] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
  });
  const [schoolList, setSchoolList] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
  });
  const [analysis, setAnalysis] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
  });
  const [register, setRegister] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
  });
  const [login, setLogin] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
  });

  const handleDashboard = () => {
    setDashboard({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
  };
  const handleSchoolList = () => {
    setSchoolList({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
  };
  const handleAnalysis = () => {
    setAnalysis({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
  };
  const handleRegister = () => {
    setRegister({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
  };
  const handleLogin = () => {
    setLogin({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
    });
  };

  return (
    <div className="bg-[#267DFF] h-[29.8rem]  2xl:h-[35rem] rounded-br-3xl">
      <ul>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium  ${dashboard.padding} flex py-6`}
        >
          <div className={dashboard.class}>
            <button onClick={handleDashboard} className="flex">
              <Dashboard changeBG={dashboard.bgColor} />
              {"Dashboard"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${schoolList.padding} flex py-6`}
        >
          <div className={schoolList.class}>
            <button onClick={handleSchoolList} className="flex">
              <SchoolList changeBG={schoolList.bgColor} />
              {"School List"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${analysis.padding} flex py-6`}
        >
          <div className={analysis.class}>
            <button onClick={handleAnalysis} className="flex">
              <Analysis changeBG={analysis.bgColor} />
              {"Analysis"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${register.padding} flex py-6`}
        >
          <div className={register.class}>
            <button onClick={handleRegister} className="flex">
              <Register changeBG={register.bgColor} />
              {"Register"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${login.padding} flex py-6`}
        >
          <div className={login.class}>
            <button onClick={handleLogin} className="flex">
              <Login changeBG={login.bgColor} />
              {"Login"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
