import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";  // ✅ Import BrowserRouter
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
<StrictMode>
  <App/>
</StrictMode>
)