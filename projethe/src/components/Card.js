import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Card = ({ produit }) => {
    

    return (
        <div>
            <NavLink to={'/produit/'+ produit._id}>
            <li className='card' >
                <img src={produit.picture} alt="" />
                <h2 className='cardName'>{produit.name}</h2>
                <p>{produit.description}</p>
                <h2>{produit.price}€</h2>
                <button>AJOUTER</button>
            </li>
            </NavLink>
        </div>
    );
};

export default Card;