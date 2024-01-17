import React from "react";
import "./login.css";

export default function login() {
  return (
    <div>
      <div className="login">
        <form className="loginForm">
          <input placeholder="emaile" type="text" className="loginInput" />
          <input
            placeholder="password"
            type="password"
            className="loginInput"
          />
          <button className="loginButton">LOG IN</button>
        </form>
      </div>
    </div>
  );
}
