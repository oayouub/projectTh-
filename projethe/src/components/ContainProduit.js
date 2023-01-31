import React from "react";

const ContainProduit = () => {
  return (
    <div className="ProduitContainer">
      <img src="./img/thenoir.webp" alt="cheh" />
      <div className="infoProduit-container">
        <h2>Nom du produit</h2>
        <p>Description du produit</p>
        <div className="quantity-container">
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default ContainProduit;
