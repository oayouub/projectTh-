import React from 'react';
import { NavLink } from "react-router-dom";

const ResultatRecherche = ({ produit }) => {
    return (
        <div>
             <NavLink to={'/produit/'+ produit._id}>
            <li className='lisearch'>{produit.name}</li>
            </NavLink>
        </div>
    );
};

export default ResultatRecherche;