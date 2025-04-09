import { Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./layout/Layout.jsx";
import About from "./Component/Aboutpage.jsx";
import ContactPage from "./Component/Contact.jsx";
import Index from "./layout/Index.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />

       
      </Route>
    </Routes>
  );
}

export default App;
