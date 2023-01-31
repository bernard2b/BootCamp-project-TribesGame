import React,{useState, useEffect} from "react";
import "./Main.scss";
import Buildings from "../pages/Buildings";
import Resources from "../Resources/Resources";
import Log from "../log/Log";
import { Routes, Route, Navigate } from "react-router-dom";
import Registration from "../pages/registration/Registration";
import Battle from "../pages/Battle";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Troops from "../pages/Troops";
import Landing from "../landing/Landing";

export default function Main() {

  return (
   <div className="container">
      <div className="Main">
        <Routes>
          <Route path="/imperia/battle" element={<Battle />} />
          <Route path="/imperia/buildings" element={<Buildings />} />
          <Route path="/imperia/leaderboard" element={<Leaderboard />} />
          <Route path="/imperia/troops" element={<Troops />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
      <div className="sideBar">
        <Resources />
        <Log />
      </div>
   </div> 
  )
}