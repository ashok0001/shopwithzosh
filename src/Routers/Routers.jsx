import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import Product from "../Components/Product/Product/Product";

import ProductDetails from "../Components/Product/ProductDetails/ProductDetails";
import Navigation from "../Components/Navbar/Navigation";
import Cart from "../Components/Product/Cart/Cart";

const Routers = () => {
  return (
    <div>
        <div>
             <Navigation/>
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
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>

      </Routes>
       </div>
      
    </div>
  );
};

export default Routers;
