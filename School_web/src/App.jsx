import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/Aboutpage.jsx";
import Layout from "./layout/Layout.jsx";
import React from "react";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <Router>
      <Routes >
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
