import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";  // ✅ Navbar Component
import AboutPage from "./Component/Aboutpage.jsx";  // ✅ About Page Component
import Footer from "./Component/Footer.jsx";  // ✅ Footer Component
import "./App.css";

function App() {
  return (
    <Router>  
      <Navbar />  {/* ✅ Navbar har page pe dikhna chahiye */}
      <AboutPage />
      <Footer />  {/* ✅ Footer har page pe dikhna chahiye */}
    </Router>
  );
}

export default App;
