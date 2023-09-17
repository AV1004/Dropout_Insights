import React from "react";
import ToggleBarLogo from "./ToggleBarLogo";
import ToggleBarListItems from "./ToggleBarListItems";

export default function ToggleBar() {
  return (
    <div>
      <div className="flex flex-col float-left">
        <ToggleBarLogo />
        <ToggleBarListItems />
      </div>
    </div>
  );
}
