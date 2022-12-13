import React from "react";
import Header from "../../header/Header";
import "./Registration.scss";

export default function Registration() {
  
  return(
    <div className="Registration">
      <Header />
      <h1>Tribes of Strigops</h1>
      <div className="registerForm">
        <form>
          <input type="text" name="username" id="username" placeholder="Username" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <input type="text" name="nameOfKingdom" id="kingdomName" placeholder="Kingdom name" />
          <input type="submit" value="SIGN UP"/>
        </form>
      </div>
    </div>
  )
}