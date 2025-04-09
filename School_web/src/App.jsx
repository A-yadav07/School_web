import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import Aboutpage from "./component/Aboutpage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {<Route path="/Aboutpage" element={<Aboutpage />} /> }
      </Route>
    </Routes>
  );
}

export default App;
