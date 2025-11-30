import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutUs from "./pages/aboutUs/AboutUs";
import Pricing from "./pages/pricing/Pricing";
import Imprints from "./pages/imprints/Imprints";
import DataPolicy from "./pages/dataPolicy/DataPolicy";
import ContactUs from "./pages/contactUs/ContactUs";
import Page404 from "./components/Page404";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { useRef, useState } from "react";
import SuccessRequest from "./components/SuccessRequest";
import FailureRequest from "./components/FailureRequest";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/imprint" element={<Imprints />} />
        <Route path="/private-policy" element={<DataPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
