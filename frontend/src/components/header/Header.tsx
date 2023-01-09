import React, {useState, useEffect} from "react";
import './Header.scss';

export default function Header() {
  const [settingsButton, setSettingsButton] = useState('');
  const [LogoutButton, setLogoutButton] = useState('');

  useEffect(() => {
    if (window.location.pathname === "/") {
      setSettingsButton("Settings");
      setLogoutButton("Logout");
    } else {
      setSettingsButton("Register");
      setLogoutButton("Login");
    }
  }, []);


  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1 className="kingdomName">My Kingdom</h1>
        </div>
        <div className="navigation">
          <h3>{ settingsButton }</h3>
          <h3>{ LogoutButton }</h3>
        </div>
      </div> 
    </div>
  )
}