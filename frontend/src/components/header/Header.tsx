import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

export default function Header() {
  const settings = "/user";
  const logout = "/logout"

  const userData = [
    {
      id: "1",
      name: "John",
      level: 1,
      img: require("./images/astronaut.png"),
    },
  ];

  // const click = link('/register')

  // useEffect(() => {
  //   if (window.location.pathname === "/") {
  //     setSettingsButton("Settings");
  //     setButton1Link(settings);
  //     setLogoutButton("Logout");
  //     setButton2Link("logout");
  //   } else {
  //     setSettingsButton("Register");
  //     setButton1Link(register);
  //     setLogoutButton("Login");
  //     setButton2Link(login);
  //   }
  // }, []);

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1 className="kingdomName">
            <a href="/">Strigops Tribes®</a>
          </h1>
        </div>
        <Menu />
        <div className="navigation">
          <Link to={settings} className="link">
            Settings
          </Link>
          <Link to={logout} className="link">
            Logout
          </Link>
          {userData.map((user) => {
            return <img src={user.img} className="userImage" />;
          })}
        </div>
      </div>
    </div>
  );
}
