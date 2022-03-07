import "./App.css";
import React, { useState } from "react";
import { StoreLogin } from "./StoreLogin/StoreLogin";

export function App() {
  console.log("App rendered");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <StoreLogin
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}
