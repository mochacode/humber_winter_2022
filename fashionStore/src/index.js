import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";

import reportWebVitals from "./reportWebVitals";
import { ClothesCat } from "./ClothesCat/ClothesCat";
import { ShopCart } from "./ShopCart/ShopCart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/clothes" element={<ClothesCat />}/>
        <Route path="/cart" element={<ShopCart />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
