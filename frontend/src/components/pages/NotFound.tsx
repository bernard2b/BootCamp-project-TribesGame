import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="button">
        <Link to="/">Back To The Galaxy</Link>
      </div>
    </div>
  );
}
