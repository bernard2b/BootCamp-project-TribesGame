import React, {useState, useEffect} from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";




export default function Header() {
  const [settingsButton, setSettingsButton] = useState('');
  const [LogoutButton, setLogoutButton] = useState('');


  const userData = [
    {
      id: "1",
      name: "John",
      level: 1,
      img: require("./images/alien.png")
    }
  ]


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
          <h1 className="kingdomName"><a href="/">My Kingdom</a></h1>
        </div>
          <Menu />
        <div className="navigation">
            <h3>{settingsButton}</h3>
            <h3>{LogoutButton}</h3>
          {userData.map((user) => {
            return (
              <img src={user.img}  className="userImage"/>
            )
          })}
        </div>
      </div> 
    </div>
  )
}