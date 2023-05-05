import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import CategoriesToBag from "../customer/Components/Home/HomeProductCard";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { lengha_page1 } from "../Data/LenghaCholi";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { men_page1, mensPantsPage1 } from "../Data/pants/men_page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import {  kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";

const Homepage = () => {
  return (
 
     
  
      <div className="">
        <HomeCarousel images={homeCarouselData} />
      

        <div className="space-y-10 py-20">
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"}/>
          <HomeProductSection data={lengha_page1} section={"Lengha Choli"}/>
          <HomeProductSection data={sareePage1} section={"Saree"}/>
          <HomeProductSection data={dressPage1} section={"Dress"}/>
          <HomeProductSection data={gounsPage1} section={"Women's Gouns"}/>
          <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"}/>
          <HomeProductSection data={mensPantsPage1} section={"Men's Pants"}/>
          
        </div>
       
        
      </div>
 
  );
};

export default Homepage;
