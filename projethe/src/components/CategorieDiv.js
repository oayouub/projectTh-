import React from 'react';

const CategorieDiv = () => {
    return (
        <div className="categorieDiv">
        <h2>CATÉGORIES</h2>
        <div className="categorie-filter">
          <ul>
            <li>
              <img src="./img/imgFilter.jpg" alt="img" />
              <h4>NOIR</h4>
            </li>
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