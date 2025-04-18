import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout.jsx";
import Aboutpage from "./Component/Aboutpage.jsx";
import Contact from "./Component/Contact.jsx";
import Index from "./layout/Index.jsx";


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutpage />} />

       
      </Route>
    </Routes>
  );
}

export default App;
