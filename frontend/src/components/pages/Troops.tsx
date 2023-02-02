import React, { useEffect, useState } from "react";
import fetchTroops from "../../api/troops";
import troops from "../../interfaces/troopsInterface";
import userEvent from "@testing-library/user-event";

function Troops() {
  const [troopsData, setTroopsData] = useState<troops[]>([]);

  useEffect(() => {
    fetchTroops()
      .then((troopsData) => {
        setTroopsData(troopsData.troops);
      });
  }, []);

  return (
    <div className="buildingPage">
      <section className="buildingsContainer">
        <ul className="buildingList">
          {troopsData.map((troops) => {
            return (
              <li className="oneBuilding" key={troops.id}>
                <div className="buildingTitle">
                  <h4 className="buildingTitle">{troops.type}</h4>
                </div>
                <div className="buildingLevel">
                  <p className="buildingLevel">Level: {troops.level}</p>
                </div>
                <div className="buildingLevel"> 
                  <p className="buildLevel">Attack: {troops.attack}</p>
                </div>
                <div className="buildingLevel"> 
                  <p className="buildLevel">Defense: {troops.defense}</p>
                </div>
                <div className="buildingLevel"> 
                  <p className="buildLevel">HP: {troops.healthPoint}</p>
                </div>

              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Troops;
