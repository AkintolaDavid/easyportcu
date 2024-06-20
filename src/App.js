// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Testimonials } from "./Testimonials/Testimonials";
import { Home } from "./Home/Home";
import Navbar from "./Navbar";
import { Teams } from "./Teams/Teams";
import { Maintenance } from "./Maintenance/Maintenance";
import { Contactme } from "./Contactme/Contactme";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </Router>
  );
}

export default App;
