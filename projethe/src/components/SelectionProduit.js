import React from 'react';
import Card from './Card';

const SelectionProduit = () => {
    return (
        <div className="selectionProduit">
        <h2>Selection de produits</h2>
        <ul>
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
};

export default SelectionProduit;