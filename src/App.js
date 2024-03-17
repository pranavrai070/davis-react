import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import  Home  from "./pages/Home";
import  ContactUs from "./pages/ContactUs";
import Consulting from "./pages/Consulting";
import CorporateEducation from "./pages/CorporateEducation";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Navbar from "./components/NavBar/NavBar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Footer from "./components/Footer";

const App=()=>{
  return(

    <>
   <div className="bg-gradient-to-br from-gray-400 to-gray-100 min-h-screen mainBigAppDiv">
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/consulting" element={<Consulting/>} />
      <Route path="/corporate-training" element={<CorporateEducation/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
      <Route path="/termsofuse" element={<TermsOfUse/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
    </>
  )

};


export default App;