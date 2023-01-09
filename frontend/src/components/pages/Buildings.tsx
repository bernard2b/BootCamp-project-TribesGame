import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Building from "../../../../backend/src/models/building";
import { GetAllBuildingsResponse } from "../../interfaces/buildings";
import "./Buildings.scss";

function Buildings() {
  const [buildingsData, setBuildingsData] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/buildings")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBuildingsData(data.buildings);
      });
  }, []);

  return (
    <div className="buildingPage">
      <div className="buildingHeader">
        <div className="logo">
          <h1 className="kingdomName">My Kingdom</h1>
        </div>
        <div className="navigation">
          <h3>
            <Link to="/">HOME</Link>
          </h3>
        </div>
      </div>
      <section className="buildingsContainer">
        <ul className="buildingList">
          {buildingsData.map((building) => {
            console.log(building.id);
            return (
              <li className="oneBuilding" key={building.id}>
                <div className="buildingTitle">
                  <h4>{building.name}</h4>
                </div>
                <div className="buildingLevel">
                  <p>Building Level: {building.level}</p>
                </div>
                <div className="mineralCost">
                  <p>Mineral Cost: {building.mineralCost}</p>
                </div>
                <div className="timeCost">
                  <p>Time Cost: {building.timeCost}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Buildings;
