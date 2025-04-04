import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Home/Footer";
import ContactUs from "./Components/Pages/Contact";
import AboutUs from "./Components/Pages/AboutUs";
import Navbar from "./Components/Home/Navbar";
import OurClients from "./Components/Pages/OurClients";
import Services from "./Components/Pages/Services";
import BackToTop from "./Components/Common.jsx/BackToTop";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Cynor Media - Your Digital Growth Partner</title>
        <meta
          name="description"
          content="Cynor Media offers top-notch BTL marketing, branding, and advertising solutions to help businesses grow."
        />
        <meta
          name="keywords"
          content="Cynor Media, BTL marketing, branding, advertising, business growth"
        />
        <meta name="author" content="Cynor Media" />
      </Helmet>
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
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
