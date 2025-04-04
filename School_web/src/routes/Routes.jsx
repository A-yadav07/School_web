import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home.jsx";
import About from "./Components/Aboutpage";

// testing development this is second pushqweihfkjhkajsmamdlkndlsm;l ns
function App() {
// sdjkhbfjjsdhbdhbv
  return (
    <Router>
      <Routes>

        <Route path="Layout" element={<Layout />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
         
        
      </Routes>
    </Router>
  );
}

export default App;
// asdfsf