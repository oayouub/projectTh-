import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const CategorieDiv = ({ checkedColor, setCheckedColor}) => {

    return (
        <div className="categorieDiv">
        <h2>CATÉGORIES</h2>
        <div className="categorie-filter">
          <ul>
          <NavLink to="/filterproduit" >
            <li> 
              <img src="./img/imgFilter.jpg" alt="img" />
              <h4>NOIR</h4>
            </li>
            </NavLink>
            <li>
              <img src="./img/imgFilter.jpg" alt="img" />
              <h4>BLANC</h4>
            </li>
            <li>
              <img src="./img/imgFilter.jpg" alt="img" />
              <h4>VERT</h4>
            </li>
            <li>
              <img src="./img/imgFilter.jpg" alt="img" />
              <h4>JAUNE</h4>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default CategorieDiv;