import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
