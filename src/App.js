import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Home/Footer";
import ContactUs from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />{" "}
          {/* Consistent case */}
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
