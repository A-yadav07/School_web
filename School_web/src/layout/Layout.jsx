import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet /> {/* Renders the nested child route like Home */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
