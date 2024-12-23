import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Home/Footer";
import ContactUs from "./Components/Pages/Contact";
import AboutUs from "./Components/Pages/AboutUs";
import Navbar from "./Components/Home/Navbar";

function App() {
  return (
    <Router>
      {/* Ensure Router wraps the entire app */}
      <Navbar /> {/* Navbar is now inside the Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
