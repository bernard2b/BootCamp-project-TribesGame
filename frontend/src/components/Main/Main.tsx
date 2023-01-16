import React,{useState, useEffect} from "react";
import "./Main.scss";
import Buildings from "../pages/Buildings";
import Log from "../log/Log";
import Resources from "../Resources/Resources";

export default function Main() {

  return (
   <div className="container">
      <div className="Main">
      
      </div>
      <div className="sideBar">
        <Resources />
        <Log />
      </div>
   </div> 
  )
}