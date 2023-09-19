import React, { useState } from "react";
import DashboardIcon from "./ToggleBarListIcons/DashboardIcon";
import SchoolListIcon from "./ToggleBarListIcons/SchoolListIcon";
import AnalysisIcon from "./ToggleBarListIcons/AnalysisIcon";
import RegisterIcon from "./ToggleBarListIcons/RegisterIcon";
import LoginIcon from "./ToggleBarListIcons/LoginIcon";

export default function ToggleBarListItems(props) {
  // States to handle design of toggle menu items
  const [dashboard, setDashboard] = useState({
    bgColor: "#DBE7FD",
    padding: "pl-10",
    class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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

  // Function to swtich designs from one to another toggle items
  const handleDashboard = () => {
    setDashboard({
      bgColor: "#DBE7FD",
      padding: "pl-10",
      class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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
      class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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
      class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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
      class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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
      class: "bg-[#DBE7FD] w-[17.4rem] p-6 rounded-tl-3xl rounded-bl-3xl",
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

  // Funtion to send selected Item to Parent(here = > ToggleBar) Components
  const handleOnclicktoSelectItems = (ItemName) => {
    props.tosetSelectedItem(ItemName);
  };

  return (
    <div className="bg-[#267DFF] h-[29.8rem]  2xl:h-[35rem] rounded-br-3xl">
      <ul>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF]   text-2xl font-medium  ${dashboard.padding} flex py-6`}
        >
          <div className={dashboard.class}>
            <button
              onClick={() => {
                handleDashboard();
                handleOnclicktoSelectItems("Dashboard");
              }}
              className={`flex ml-6  text-[${dashboard.color}]`}
            >
              <DashboardIcon
                changeBG={dashboard.bgColor}
                color={dashboard.color}
              />
              {"Dashboard"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${schoolList.padding} flex py-6`}
        >
          <div className={schoolList.class}>
            <button
              onClick={() => {
                handleSchoolList();
                handleOnclicktoSelectItems("SchoolList");
              }}
              className={`flex ml-6 text-[${schoolList.color}]`}
            >
              <SchoolListIcon
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
              onClick={() => {
                handleAnalysis();
                handleOnclicktoSelectItems("Analysis");
              }}
              className={`flex ml-6 text-[${analysis.color}]`}
            >
              <AnalysisIcon
                changeBG={analysis.bgColor}
                color={analysis.color}
              />
              {"Analysis"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${register.padding} flex py-6`}
        >
          <div className={register.class}>
            <button
              onClick={() => {
                handleRegister();
                handleOnclicktoSelectItems("Register");
              }}
              className={`flex ml-6 text-[${register.color}]`}
            >
              <RegisterIcon
                changeBG={register.bgColor}
                color={register.color}
              />
              {"Register"}
            </button>
          </div>
        </li>
        <li
          className={`bg-[#267DFF] text-[#FFFFFF] text-2xl font-medium ${login.padding} flex py-6`}
        >
          <div className={login.class}>
            <button
              onClick={() => {
                handleLogin();
                handleOnclicktoSelectItems("Login");
              }}
              className={`flex ml-6 text-[${login.color}]`}
            >
              <LoginIcon changeBG={login.bgColor} color={login.color} />
              {"Login"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
