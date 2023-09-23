import React from "react";
import ToggleBarLogo from "./ToggleBarLogo";
import ToggleBarListItems from "./ToggleBarListItems";

export default function ToggleBar(props) {
  // Variabe to handle the selectedItem
  let selectedItem = "Dashboard";
  const toGetSelecedItem = (ToggleBarItem) => {
    selectedItem = ToggleBarItem;
    console.log(selectedItem);
    props.getSelectedItem(selectedItem);
  };

  return (
    <div className="flex fixed flex-col float-left">
      <ToggleBarLogo />
      <ToggleBarListItems tosetSelectedItem={toGetSelecedItem} />
    </div>
  );
}
