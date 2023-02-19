import React, { useState } from "react";

const ContainProduit = () => {
  let [number, setNumber] = useState(2);
  let [basePrice, setBasePrice] = useState(2);
  let [count, setCount] = useState(1);
  const isMultiply = false;

  const number50g = () => {
    setCount((count = 1));
    number = 2;
    basePrice = 2;
    setNumber(number);
    setBasePrice(basePrice);
  };

  const number100g = () => {
    setCount((count = 1));
    number = 2;
    basePrice = 2;
    setNumber(number * 2);
    setBasePrice(basePrice * 2);
  };
  const number200g = () => {
    setCount((count = 1));
    number = 2;
    basePrice = 2;
    setNumber(number * 2.5);
    setBasePrice(basePrice * 2.5);
  };
  const number400g = () => {
    setCount((count = 1));
    number = 2;
    basePrice = 2;
    setNumber(number * 3);
    setBasePrice(basePrice * 3);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setNumber(number + basePrice);
  };
  const handleDecrement = () => {
    if (count <= 1) {
      setCount((count = 1));
    } else {
      setCount(count - 1);
      setNumber(number - basePrice);
    }
  };

  return (
    <div className="ProduitContainer">
      <div className="ImgProduit-container">
        <img src="./img/thenoir.webp" alt="theNoirImg" />
      </div>

      <div className="infoLeft-container">
        <div className="title-produit">
          <h2>Nom du produit</h2>
          <p>Description du produit</p>
        </div>

        <div className="quantity-container">
          <ul>
            <li onClick={number50g}> 50g </li>
            <li onClick={number100g}> 100g </li>
            <li onClick={number200g}> 200g </li>
            <li onClick={number400g}> 400g </li>
          </ul>
        </div>
        <div className="price-container">
          <h2>{number} €</h2>

          <div className="compteur">
            <button onClick={handleDecrement}> - </button>
            <h2>{count}</h2>
            <button onClick={handleIncrement}> + </button>
          </div>
        </div>

        <div className="ingredient-container">
          <div className="text-infoProduit">Ingredient</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            itaque doloribus saepe tenetur eum! Perferendis minus tempore itaque
            harum dolorem id quo modi rem aperiam, non numquam dolores eaque
            dicta.
          </p>
        </div>
        <div className="pay">
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
};

export default ContainProduit;
