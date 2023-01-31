import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import fetchUserDetails from "../../api/userDetails";
import { Cookies, useCookies } from "react-cookie";

export default function Header() {
  const settings = "/user";
  const logout = "/";
  const [token, setToken, removeToken] = useCookies();
  const cookies = new Cookies();
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
      img: require("./images/astronaut.png"),
    },
  ];




  const loggingOut = () => {
    removeToken("auth-cookie", { path: "/" });
    localStorage.clear();
    cookies.remove("auth-cookie", { path: '/', domain:"localhost:3000" }, );
  };

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
          <h1 className="kingdomName"><a href="/imperia/buildings">{ imperiumName }</a></h1>
        </div>
        <Menu />
        <div className="navigation">
          {userData.map((user) => {
            return (
              <ul><img src={user.img} className="userImage dropdown_menu dropdown_menu-5" onClick={handleOpen} />
                {
                  open && <div className="dropdown">
                    <li className="dropdown_item-1"> <Link to={settings} className="link">
            Settings
          </Link></li>
                    <li className="dropdown_item-2"> <Link onClick={loggingOut} to={logout} className="link">
            Logout
          </Link></li>
                  </div>
                }

              </ul>
            )
          })}
        </div>
      </div>
    </div>
  );
}