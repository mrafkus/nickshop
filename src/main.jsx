import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "remixicon/fonts/remixicon.css";

import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Ml from "./pages/ml";
import Pubg from "./pages/Pubg";
import Ff from "./pages/FF";
import Aov from "./pages/Aov";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ml" element={<Ml />}></Route>
        <Route path="/pubg" element={<Pubg />}></Route>
        <Route path="/ff" element={<Ff />}></Route>
        <Route path="/aov" element={<Aov />}></Route>
      </Routes>
    </BrowserRouter>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
