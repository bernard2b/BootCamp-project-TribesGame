import React, { useState, useEffect } from "react";
import './Resources.scss';

export default function Resources() {

  const [goldAmount, setGoldAmount] = useState(500);
  const [breadAmount, setBreadAmount] = useState(500);
  const [goldCounter, setGoldCounter] = useState(5);
  const [breadCounter, setBreadCounter] = useState(-3);

  useEffect(() => {

    setTimeout(() => {
      setGoldAmount(goldAmount + goldCounter)
      setBreadAmount(breadAmount + breadCounter);
    }, 3000)

  })


  return (
    <div className="resources">
      <div className="res-type">
        <img className="resourceImage" src={require("./img/academy.jpg")} />
        <div className="container">
          <div className="title-row">
            <h3 id="amount" className="amount">{breadAmount}</h3>
            <img className="bread" src={require("./img/big_bread.png")} />
          </div>
          <p style={{ color: breadCounter > 0 ? "green" : "red" }}>{breadCounter}/minute</p>
        </div>
      </div>

      <div className="res-type">
        <img className="resourceImage" src={require("./img/academy.jpg")} />
        <div className="container">
          <div className="title-row">
            <h3 id="amount" className="amount">{goldAmount}</h3>
            <img className="bread" src={require("./img/coin.png")} />
          </div>
          <p style={{ color: goldCounter > 0 ? "green" : "red" }}>{goldCounter}/minute</p>
        </div>
      </div>
    </div>
  )

}