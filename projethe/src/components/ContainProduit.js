import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContainProduit = () => {
  let [number, setNumber] = useState(0);
  let [basePrice, setBasePrice] = useState(0);
  let [count, setCount] = useState(1);

  const { id } = useParams();
  const [data, setData] = useState([]);

  const totalPrice = data.price + number;
  const panierImg = data.picture;
  const nomProduit = data.name;

  const newData = {
    id: id,
    totalPrice: totalPrice,
    count: count,
    panierImg: panierImg,
    nomProduit: nomProduit,
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`http://localhost:5000/${id}`).then((res) => setData(res.data));
  }, [id]);

  if (!data) return "";

  const number50g = () => {
    setCount((count = 1));
    number = 0;
    basePrice = data.price;
    setNumber(number);
    setBasePrice(basePrice);
  };

  const number100g = () => {
    setCount((count = 1));
    number = data.price;
    basePrice = data.price * 2;
    setNumber(number);
    setBasePrice(basePrice);
  };
  const number200g = () => {
    setCount((count = 1));
    number = data.price;
    basePrice = data.price * 2;
    setNumber(number * 3);
    setBasePrice(basePrice * 2);
  };
  const number400g = () => {
    setCount((count = 1));
    number = data.price;
    basePrice = data.price * 2;
    setNumber(number * 4);
    setBasePrice(basePrice * 2);
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
        <img src={data.picture} alt="theNoirImg" />
      </div>

      <div className="infoLeft-container">
        <div className="title-produit">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
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
          <h2>{totalPrice} €</h2>

          <div className="compteur">
            <button onClick={handleDecrement}> - </button>
            <h2>{count}</h2>
            <button onClick={handleIncrement}> + </button>
          </div>
        </div>

        <div className="ingredient-container">
          <div className="text-infoProduit">Ingredients</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            itaque doloribus saepe tenetur eum! Perferendis minus tempore itaque
            harum dolorem id quo modi rem aperiam, non numquam dolores eaque
            dicta.
          </p>
        </div>
        <div className="pay">
          <button
            onClick={() => {
              localStorage.setItem(id, JSON.stringify(newData));
            }}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainProduit;
