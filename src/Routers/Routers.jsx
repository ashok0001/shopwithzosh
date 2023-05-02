import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import Product from "../Components/Product/Product/Product";
import ProductPage from "../Components/Product/ProductPage/ProductPage";
import Navbar from "../Components/Navbar/Navbar";
import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";

const Routers = () => {
  return (
    <div>
        <div>
             <Navbar/>
        </div>
       <div className="pt-10">
        <Routes>

        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Homepage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}></Route>
        <Route path="/terms-condition" element={<TearmsCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/men" element={<Product/>}></Route>
        <Route path="/men/product/:productId" element={<ProductDetails/>}></Route>

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
