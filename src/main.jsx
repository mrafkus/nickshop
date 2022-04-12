import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "remixicon/fonts/remixicon.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
