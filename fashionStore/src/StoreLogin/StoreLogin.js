import "./StoreLogin.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const StoreLogin = () => {
  console.log("Store login rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    navigate("/clothes");
  };

  const form = (
    <body>
    <div className="login-form">
      <h1>Welcome to the Fasion Store</h1>
      <h3>Login below to view our catelog today!</h3>

      <label>Username:&nbsp;&nbsp;</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <br/>

      <label>Password: &nbsp;&nbsp;</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/><br/>

    <div class="lButton">
      <button id="button3" disabled={username.length === 0 || password.length === 0} onClick={handleLogin}>
        Login now!
      </button>
    </div>
    </div>
    </body>
  );

  return form;
};
