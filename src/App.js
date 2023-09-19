import React, { useState } from "react";
import "./views/main.css";
import ToggleBar from "./components/ToggleBar";
import DashboardView from "./components/ToggleBarListSeparateItem/DashboardView";
import SchoolListView from "./components/ToggleBarListSeparateItem/SchoolListView";
import AnalysisView from "./components/ToggleBarListSeparateItem/AnalysisView";
import RegisterView from "./components/ToggleBarListSeparateItem/RegisterView";
import LoginView from "./components/ToggleBarListSeparateItem/LoginView";
import LanguageButton from "./components/Language/LanguageButton";

function App() {
  const [showContent, setShowContent] = useState({
    condition: true,
    render: <DashboardView />,
  });

  const ShowMainContent = (selectedItem) => {
    switch (selectedItem) {
      case "Dashboard":
        setShowContent({
          condition: true,
          render: <DashboardView />,
        });
        break;
      case "SchoolList":
        setShowContent({
          condition: true,
          render: <SchoolListView />,
        });
        break;
      case "Analysis":
        setShowContent({
          condition: true,
          render: <AnalysisView />,
        });
        break;
      case "Register":
        setShowContent({
          condition: false,
          render: <RegisterView />,
        });
        break;
      case "Login":
        setShowContent({
          condition: false,
          render: <LoginView />,
        });
        break;
      default:
        setShowContent({
          condition: true,
          render: <DashboardView />,
        });
        break;
    }
    console.log(showContent);
  };

  const renderContent = (
    <div>
      {showContent.condition === false ? (
        showContent.render
      ) : (
        <div>
          <ToggleBar getSelectedItem={ShowMainContent} />
          {showContent.render}
        </div>
      )}
    </div>
  );

  return (
    <div>
      <LanguageButton />
      <div>{renderContent}</div>
    </div>
  );
}

export default App;
