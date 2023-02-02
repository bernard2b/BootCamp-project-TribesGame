import React from "react";

export default function Loose({loose}:{loose:boolean}) {
  

  return (
    <div className="looseContainer">
      {
        loose &&
        <div>
            <h1>LOOSE</h1>
        </div>
      }
    </div>
  )
}