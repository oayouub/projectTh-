import React from "react";
import ContainProduit from "../components/ContainProduit";
import InfoProduit from "../components/InfoProduit";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import SliderProduit from "../components/SliderProduit";
import PanierProduit from "../components/PanierProduit";
import { defer } from "react-router-dom";

const Panier = () => {
  return (
    <div>
      <Navigation />
      <PanierProduit />
    </div>
  );
};

export default Panier;
