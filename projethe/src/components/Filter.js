import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";


const Filter = () => {
    const [data, setData] = useState([]);
    const checkColor = ["Noir", "Vert", "Blanc", "Jaune", "Maté"];
    const checkParfums = ["Classique", "Agrume", "Fruité", "Floral"];
    const [checkedColor, setCheckedColor] = useState("");
    const [checkedParfums, setCheckedParfums] = useState("");


    useEffect(() => {
        axios
          .get("http://localhost:5000")
          .then((res) => setData(res.data));
      }, []);

    return (
        <div className='filterPageContainer'>
        <div className='filter'>
            <ul>
                <h3>COULEUR DE THÉ</h3>
                {checkColor.map((color) => (
                <li><input 
                type="checkbox" 
                id={color} 
                name='Couleur' 
                checked={color === checkedColor} 
                onChange={(e) => setCheckedColor(e.target.id)}/>
                <label htmlFor={color} >{color}</label></li>

                ))}

            </ul>
            <ul>
                <h3>PARFUMS</h3>
                {checkParfums.map((parfums) => (
                <li><input 
                type="checkbox" 
                id={parfums} 
                name='Couleur'
                checked={parfums === checkedParfums} 
                onChange={(e) => setCheckedParfums(e.target.id)}
                />
                
                <label htmlFor={parfums} >{parfums}</label></li>

                ))}
              
            </ul>
       
    
            <div className='rightFilter'>
                <ul>
                    <li>
               <h3>PRIX</h3>
                <input type="range" id='filtreRange' /></li>
                <li><h3>ORDRE</h3></li>
                </ul>
            </div>

            </div>
            <ul className='cardContainerFilter'>
                {data
                .filter((produit) => produit.color[0].includes(checkedColor))
                .map((produit, index) => (
                    <Card key={index} produit={produit} />
                ))}
            
            </ul>
        </div>
        
    );
};

export default Filter;