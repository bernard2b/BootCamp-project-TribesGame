import { Link } from "react-router-dom";
import React, { useState } from "react";
import Header from "../header/Header";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Header />
      <div className="text">
        <h2>Stop your spaceship, traveller!</h2>
        <br />
        <h3>This space station is under construction. You might want </h3>
        <h3> to come back later, or travel in time to its completion.</h3>
        <br />
        <p>Until then, please follow our patrol ships </p>
        <p> back to the closest space station:</p>
        <br />
        <div className="button">
          <Link to="/imperia/buildings">Back to the galaxy</Link>
        </div>
      </div>
    </div>
  );
}
