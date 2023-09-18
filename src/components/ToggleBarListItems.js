import React, { useState } from "react";
import Dashboard from "./ToggleBarListIcons/Dashboard";
import SchoolList from "./ToggleBarListIcons/SchoolList";
import Analysis from "./ToggleBarListIcons/Analysis";
import Register from "./ToggleBarListIcons/Register";
import Login from "./ToggleBarListIcons/Login";

export default function ToggleBarListItems() {
  const [dashboard, setDashboard] = useState({
    bgColor: "#DBE7FD",
    padding: "pl-10",
    class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
    color: "#267DFF",
  });
  const [schoolList, setSchoolList] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
    color: "#DBE7FD",
  });
  const [analysis, setAnalysis] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
    color: "#DBE7FD",
  });
  const [register, setRegister] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
    color: "#DBE7FD",
  });
  const [login, setLogin] = useState({
    bgColor: "#267DFF",
    padding: "px-10",
    class: "bg-[#267DFF]",
    color: "#DBE7FD",
  });

  const handleDashboard = () => {
    setDashboard({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
      color: "#267DFF",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
  };
  const handleSchoolList = () => {
    setSchoolList({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
      color: "#267DFF",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
  };
  const handleAnalysis = () => {
    setAnalysis({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
      color: "#267DFF",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
  };
  const handleRegister = () => {
    setRegister({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
      color: "#267DFF",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setLogin({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
  };
  const handleLogin = () => {
    setLogin({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[13.9rem] p-4 rounded-tl-3xl rounded-bl-3xl",
      color: "#267DFF",
    });
    setDashboard({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setSchoolList({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setAnalysis({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
    setRegister({
      bgColor: "#267DFF",
      padding: "px-10",
      class: "bg-[#267DFF]",
      color: "#DBE7FD",
    });
  };

  return (
    <div className="bg-[#267DFF] h-[29.8rem]  2xl:h-[35rem] rounded-br-3xl">
      <ul>
        <li
          className={`bg-[rgb(38,125,255)] text-[#FFFFFF] text-2xl font-medium  ${dashboard.padding} flex py-6`}
        >
          <div className={dashboard.class}>
            <button
              onClick={handleDashboard}
              className={`flex text-[${dashboard.color}]`}
            >
              <Dashboard changeBG={dashboard.bgColor} color={dashboard.color} />
              {"Dashboard"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${schoolList.padding} flex py-6`}
        >
          <div className={schoolList.class}>
            <button
              onClick={handleSchoolList}
              className={`flex text-[${schoolList.color}]`}
            >
              <SchoolList
                changeBG={schoolList.bgColor}
                color={schoolList.color}
              />
              {"School List"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${analysis.padding} flex py-6`}
        >
          <div className={analysis.class}>
            <button
              onClick={handleAnalysis}
              className={`flex text-[${analysis.color}]`}
            >
              <Analysis changeBG={analysis.bgColor} color={analysis.color} />
              {"Analysis"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${register.padding} flex py-6`}
        >
          <div className={register.class}>
            <button
              onClick={handleRegister}
              className={`flex text-[${register.color}]`}
            >
              <Register changeBG={register.bgColor} color={register.color} />
              {"Register"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${login.padding} flex py-6`}
        >
          <div className={login.class}>
            <button
              onClick={handleLogin}
              className={`flex text-[${login.color}]`}
            >
              <Login changeBG={login.bgColor} color={login.color} />
              {"Login"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}