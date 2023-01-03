import React, {useState} from "react";
import Header from "../../header/Header";
import "./Registration.scss";

export default function Registration() {

  return(
    <div className="Registration">
      <Header />
      <h1>Tribes of Strigops</h1>
      <div className="registerForm">
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            minLength={8}
            required
          />
          
          <input
            type="text"
            name="nameOfKingdom"
            id="kingdomName"
            placeholder="Kingdom name"
            required
          />

          <input
            type="submit"
            value="SIGN UP"
          />
        </form>
      </div>
    </div>
  )
}