import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import FloatingActionButton from "../pages/FloatingActionButton.jsx";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet /> {/* Renders the nested child route like Home */}
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
};

export default Layout;
