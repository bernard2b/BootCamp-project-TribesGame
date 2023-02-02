import React, { useEffect, useState, useCallback } from "react";
import "./Buildings.scss";
import fetchBuildings from "../../api/buildings";
import buildingsInterface from "./../../interfaces/buildingsInterface";
import { useNavigate } from "react-router-dom";

function Buildings() {
  const [buildingsData, setBuildingsData] = useState<buildingsInterface[]>([]);

  const [rresponse, setResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBuildings().then((response) => {
      setResponse(response.message);
    });
  }, []);

  if (rresponse == "Not Bearer token included") {
    navigate("/welcome", { replace: true });
  }

  const getBuildings = useCallback(async () => {
    fetchBuildings().then((buildingsData) => {
      setBuildingsData(buildingsData.buildings);
    });
  }, []);

  useEffect(() => {
    getBuildings();
  }, [getBuildings]);

  return (
    <div className="buildingPage">
      <section className="buildingsContainer">
        <ul className="buildingList">
          {buildingsData.map((building) => {
            return (
              <li className="oneBuilding" key={building.id}>
                <div className="buildingTitle">
                  <h4 className="buildingTitle">{building.type}</h4>
                </div>
                <div className="buildingLevel">
                  <p className="buildingLevel">
                    Level: {building.level}
                  </p>
                </div>
                <div className="mineralCost">
                  <p>UpgradeCost: {building.mineralCost}</p>
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
