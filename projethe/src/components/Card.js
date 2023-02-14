import React from 'react';

const Card = ({ produit }) => {
    return (
        <div>
            <li className='card'>
                <img src="" alt="" />
                <h2 className='cardName'>{produit.name}</h2>
                <p>{produit.description}</p>
                <button>AJOUTER</button>
            </li>
        </div>
    );
};

export default Card;