import React from 'react';

const Card = ({ produit }) => {
    return (
        <div>
            <li className='card'>
                <img src={produit.picture} alt="" />
                <h2 className='cardName'>{produit.name}</h2>
                <p>{produit.description}</p>
                <h2>{produit.price}€</h2>
                <button>AJOUTER</button>
            </li>
        </div>
    );
};

export default Card;