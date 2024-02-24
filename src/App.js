import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import  Home  from "./pages/Home";
import  ContactUs from "./pages/ContactUs";
import Consulting from "./pages/Consulting";
import CorporateEducation from "./pages/CorporateEducation";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App=()=>{
  return(

    <>
   
    <Router>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/consulting" element={<Consulting/>} />
      <Route path="/corporate-education" element={<CorporateEducation/>} />
      <Route path="/contact" element={<ContactUs/>} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )

};


export default App;