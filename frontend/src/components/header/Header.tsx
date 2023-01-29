import React, {useState, useEffect} from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import fetchUserDetails from "../../api/userDetails";




export default function Header() {
  const [settingsButton, setSettingsButton] = useState('');
  const [logoutButton, setLogoutButton] = useState('');
  const [imperiumName, setImperiumName] = useState("My Kingdom");

  useEffect(() => {
    fetchUserDetails().then((user) => {
    setImperiumName(user.imperium.name)
  })
}, [])


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
          <h1 className="kingdomName"><a href="/">{ imperiumName }</a></h1>
        </div>
          <Menu />
        <div className="navigation">
            <h3>{settingsButton}</h3>
            <h3>{logoutButton}</h3>
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