import React from "react";
import "./Win.scss";
import { Link } from "react-router-dom";

export default function Win({ win}: { win:boolean}) {
  const home = "/imperia/buildings";

  return (
    <div className="ResultContainer">
      {
        win && <div className="Win">
          <h1> You win!</h1>
          <h5>You earn</h5>

          <div className="earings">
            <div className="quantity">
              <h4>500</h4>
              <h4>150</h4>
              <h4>86</h4>
            </div>
            <div className="name">
              <h4 className="xp">XP</h4>
              <h4 className="gold">GOLD</h4>
              <h4 className="food">FOOD</h4>
            </div>
          </div>
          <Link to={home} className="Button"><h2 className="Button">  Back to the galaxy </h2></Link>
          </div>
      }
    </div>
  )


}