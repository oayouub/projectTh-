import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from "axios";

const SelectionProduit = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setData(res.data));
  }, []);

    return (
        <div className="selectionProduit">
        <h2>Selection de produits</h2>
        <ul>
        {data
          .slice(0, 4)
          .map((produit, index) => (
                    <Card key={index} produit={produit} />
                ))}
        </ul>
      </div>
    ); 
};

export default SelectionProduit;