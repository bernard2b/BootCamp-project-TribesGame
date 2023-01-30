import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import { Cookies, useCookies } from "react-cookie";

export default function Header() {
  const settings = "/user";
  const logout = "/";
  const [token, setToken, removeToken] = useCookies();
  const cookies = new Cookies();

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
          <Link onClick={loggingOut} to={logout} className="link">
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