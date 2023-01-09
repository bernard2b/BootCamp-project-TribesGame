import React from "react";
import "./Buildings.scss";

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
  return (
    <section className="buildingsContainer">
      <ul className="buildingList">
        {buildingsData.map((building) => {
          return (
            <li key={building.id}>
              <img className="buildingImg" src={building.img} />
              <div className="buildingTitle">{building.title}</div>
              <div className="buildingLevel">level: {building.level}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Buildings;
