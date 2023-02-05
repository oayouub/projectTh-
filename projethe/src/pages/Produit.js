import React, { useState, useEffect } from "react";
import ContainProduit from "../components/ContainProduit";
import InfoProduit from "../components/InfoProduit";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import SliderProduit from "../components/SliderProduit";

const Produit = () => {
  // const divider = document.querySelector(".divider");

  // window.addEventListener("scroll", (e) => {
  //   const scrolled = window.scrollY;

  //   if (scrolled > 100) {
  //     divider.style.paddingRight = "140px";
  //     divider.style.paddingLeft = "140px";
  //   }
  // });

  return (
    <div>
      {" "}
      <Navigation />
      <ContainProduit />;
      <InfoProduit />;{/* <SliderProduit />; */}
      <Slider />
    </div>
  );
};

export default Produit;
