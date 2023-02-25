import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = ({ produit }) => {
  return (
    <div>
      <li className="card">
          <img src={produit.picture} alt="" />
          <h2 className="cardName">{produit.name}</h2>
          <p>{produit.description}</p>
          <h2>{produit.price}€</h2>

        <NavLink className='cardlink' to={"/produit/" + produit._id}>
        <button onClick={console.log("click")}>Voir</button>
        </NavLink>
      </li>
    </div>
  );
};

export default Card;
