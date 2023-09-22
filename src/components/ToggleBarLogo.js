import React from "react";
import Logo from "./Images/LOGO.png";

export default function ToggleBarLogo() {
  return (
    <div className="bg-[#267DFF]  pt-10 pr-10 pb-0 pl-10 rounded-tr-3xl">
      <img
        src={Logo}
        alt="Dropout Insights"
        className="bg-[#267DFF] w-56 text-white font-bold  text-3xl  py-10"
      ></img>
    </div>
  );
}
