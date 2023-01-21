import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Buildings.scss";
import fetchBuildings from "../../api/buildings";
import buildingsInterface from "./../../interfaces/buildingsInterface";


function Buildings() {
  const [buildingsData, setBuildingsData] = useState<buildingsInterface[]>([]);

  useEffect(() => {
    fetchBuildings().then((buildingsData) => {
      setBuildingsData(buildingsData.buildings);
    });
  }, []);

  return (
    <div className="buildingPage">
      <section className="buildingsContainer">
        <ul className="buildingList">
          {buildingsData.map((building) => {
            return (
              <li className="oneBuilding" key={building.id}>
                <div className="buildingTitle">
                  <h4 className="buildingTitle">{building.name}</h4>
                </div>
                <div className="buildingLevel">
                  <p className="buildingLevel">Building Level: {building.level}</p>
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
