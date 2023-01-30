import React, {useState, useEffect} from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import fetchUserDetails from "../../api/userDetails";




export default function Header() {
  const [settingsButton, setSettingsButton] = useState('');
  const [logoutButton, setLogoutButton] = useState('');
  const [imperiumName, setImperiumName] = useState("My Kingdom");
  const [username, setUsername] = useState("user")
  const [loggedIn, setLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchUserDetails().then((user) => {
      setImperiumName(user.imperium.name)
      setUsername(user.name)
      setLoggedIn(true)
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
    if (loggedIn) {
      setSettingsButton("Settings");
      setLogoutButton("Logout");
    } else {
      setSettingsButton("Register");
      setLogoutButton("Login");
    }
  }, []);

  const handleOpen = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1 className="kingdomName"><a href="/">{ imperiumName }</a></h1>
        </div>
          <Menu />

        <div className="navigation">
          {userData.map((user) => {
            return (
              <ul><img src={user.img} className="userImage dropdown_menu dropdown_menu-5" onClick={handleOpen} />
                {
                  open && <div className="dropdown">
                    <li className="dropdown_item-1"><h3>{settingsButton}</h3></li>
                    <li className="dropdown_item-2"> <h3>{logoutButton}</h3></li>
                  </div>
                }

              </ul>
            )
          })}
        </div>
      </div> 
    </div>
  )
}