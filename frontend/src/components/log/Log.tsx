import React from "react";
import "./Log.scss";
import AddBuilding from "../addBuildingLog/addBuilding";
import AddTroop from "../addTroopLog/addTroop";

export default function Log() {
  
  return (
    <div className="log">
      <AddBuilding />
      <AddTroop />
    </div>
  )
}