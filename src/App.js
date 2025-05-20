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
// import Blog from "./Components/Pages/Blog";
// import CorporateWebsiteDesign2025 from "./Components/Blog/CorporateWebsiteDesign2025"; // Import the blog post page

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-clients" element={<OurClients />} />
          {/* <Route path="/blog/*" element={<Blog />} /> */}
          {/* <Route
            path="/blog/corporate-website-design-2025"
            element={<CorporateWebsiteDesign2025 />}
          /> */}
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </>
  );
}

export default App;
