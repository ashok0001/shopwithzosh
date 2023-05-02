import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";

const Routers = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>

      </Routes>
    </div>
  );
};

export default Routers;
