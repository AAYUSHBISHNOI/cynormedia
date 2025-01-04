import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Home/Footer";
import ContactUs from "./Components/Pages/Contact";
import AboutUs from "./Components/Pages/AboutUs";
import Navbar from "./Components/Home/Navbar";
import OurClients from "./Components/Pages/OurClients";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-clients" element={<OurClients />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
