import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";  // ✅ Navbar Component
import Footer from "./component/Footer.jsx"; 


function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;