import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";  // ✅ Navbar Component
import AboutPage from "./Component/Aboutpage.jsx";  // ✅ About Page Component
import Footer from "./Component/Footer.jsx";  // ✅ Footer Component
import "./App.css";

function App() {
  return (
    <>
      <Navbar />  {/* Navbar Show Hoga */}
      <Home /> {/* Home Show Hoga  */}
     

      <Footer />  {/* Footer Show Hoga */}

    </>
  );
}

export default App;
