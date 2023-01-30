import React, { useState, useEffect } from "react";
import './Resources.scss';
import fetchResources from "../../api/resources";
import resourcesData from "../../interfaces/resourcesInterface";

export default function Resources() {
  const [resourcesData, setResourcesData] = useState<resourcesData[]>([]);
  const [goldAmount, setGoldAmount] = useState(0);
  const [breadAmount, setBreadAmount] = useState(0);
  const [breadCounter, setBreadCounter] = useState(0);
  const [goldCounter, setGoldCounter] = useState(0);
  
  useEffect(() => {
      setTimeout(() => {
    fetchResources().then((resourcesData) => {
        setGoldAmount(resourcesData.mineralAmount)
        setBreadAmount(resourcesData.foodAmount);
        setGoldCounter(resourcesData.mineralGeneration)
        setBreadCounter(resourcesData.foodGeneration)
      })
    }, 10000)
  }, [resourcesData])
  

  return (
    <div className="resources">
      <div className="res-type">
        <div className="container">
          <div className="title-row">
            <img className="bread" src={require("./img/big_bread.png")} />
            <h3 id="amount" className="amount">{breadAmount}</h3>
          </div>
          <p style={{ color: breadCounter > 0 ? "green" : "red" }}>{breadCounter}/minute</p>
        </div>
      </div>
      <div className="res-type">
        <div className="container">
          <div className="title-row">
            <img className="bread" src={require("./img/coin.png")} />
            <h3 id="amount" className="amount">{goldAmount}</h3>
          </div>
          <p style={{ color: goldCounter > 0 ? "green" : "red" }}>{goldCounter}/minute</p>
        </div>
      </div>
    </div>
  )

}