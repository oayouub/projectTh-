import React from "react";

const ContainProduit = () => {
  return (
    <div className="ProduitContainer">
      <div className="ImgProduit-container">
        <img src="./img/thenoir.webp" alt="cheh" />
      </div>

      <div className="infoProduit-container">
        <h2>Nom du produit</h2>
        <p>Description du produit</p>
        <div className="quantity-container">
          <ul>
            <li>QTE 1 </li>
            <li>QTE 2 </li>
            <li>QTE 3 </li>
            <li>QTE 4 </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContainProduit;
