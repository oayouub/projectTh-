import React from "react";

const ContainProduit = () => {
  return (
    <div className="ProduitContainer">
      <div className="ImgProduit-container">
        <img src="./img/thenoir.webp" alt="cheh" />
      </div>

      <div className="infoProduit-container">
        <div className="title-produit">
          <h2>Nom du produit</h2>
          <p>Description du produit</p>
        </div>

        <div className="quantity-container">
          <ul>
            <li> QTE 1 </li>
            <li> QTE 2 </li>
            <li> QTE 3 </li>
            <li> QTE 4 </li>
          </ul>
        </div>
        <div className="price-container">
          <h2>9.99€</h2>

          <div className="compteur">
            <button> - </button>
            <h2>0</h2>
            <button> + </button>
          </div>
        </div>
        <div className="pay">
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ContainProduit;
