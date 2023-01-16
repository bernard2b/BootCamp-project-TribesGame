import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./Buildings.scss";
import fetchBuildings from "../../api/buildings";
import buildingsInterface from "./../../interfaces/buildingsInterface";


const buildingsData = [
  {
    id: "1",
    title: "Townhall",
    level: "1",
    img: require("./buildings-pictures/townhall.png"),
  },
  {
    id: "2",
    title: "Academy",
    level: "1",
    img: require("./buildings-pictures/addacademy.png"),
  },
  {
    id: "3",
    title: "Farm",
    level: "1",
    img: require("./buildings-pictures/farm.png"),
  },
  {
    id: "4",
    title: "Mine",
    level: "1",
    img: require("./buildings-pictures/mine.png"),
  }
];

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
