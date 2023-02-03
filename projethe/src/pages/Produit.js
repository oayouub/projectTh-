import React from "react";
import ContainProduit from "../components/ContainProduit";
import InfoProduit from "../components/InfoProduit";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import SliderProduit from "../components/SliderProduit";

const Produit = () => {
  return (
    <div>
      {" "}
      <Navigation />
      <ContainProduit />;
      <InfoProduit />;
      <SliderProduit />;
      <Slider />
    </div>
  );
};

export default Produit;
