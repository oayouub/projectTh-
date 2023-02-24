import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ produit }) => {
  return (
    <div>
      <li className="card">
        <NavLink to={"/produit/" + produit._id}>
          <img src={produit.picture} alt="" />
          <h2 className="cardName">{produit.name}</h2>
          <p>{produit.description}</p>
          <h2>{produit.price}€</h2>
        </NavLink>

        <button onClick={console.log("click")}>AJOUTER</button>
      </li>
    </div>
  );
};

export default Card;
