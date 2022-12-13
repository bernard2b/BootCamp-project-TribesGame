import React from "react";
import './Header.scss';

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1 className="kingdomName">My Kingdom</h1>
        </div>
        <div className="navigation">
            <h3>Settings</h3>
            <h3>Logout</h3>
        </div>
      </div> 
    </div>
  )
}