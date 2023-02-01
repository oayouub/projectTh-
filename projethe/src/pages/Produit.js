import React from "react";
import ContainProduit from "../components/ContainProduit";
import InfoProduit from "../components/InfoProduit";
import Navigation from "../components/Navigation";

const Produit = () => {
  return (
    <div>
      {" "}
      <Navigation />
      <ContainProduit />;
      <InfoProduit />;
    </div>
  );
};

export default Produit;
