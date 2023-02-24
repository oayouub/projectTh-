import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";


const Filter = ({ checkedColor, setCheckedColor}) => {
    const [data, setData] = useState([]);
    const checkColor = ['', "Noir", "Vert", "Blanc", "Jaune", "Maté"];
    const checkParfums = ['', "Classique", "Agrume", "Fruité", "Floral"];
    const [rangeValue, setRangeValue] = useState(30);
 
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
       
    
           
                <ul>
                    <li>
               <h3>PRIX</h3>
                <input 
                type="range" 
                id='filtreRange'
                min="10"
                max="50"
                defaultValue={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}/><p>max {rangeValue} €</p></li>
                </ul>

              
         

            </div>
            <div className='cardContainerFilter'>
            <ul>
                {data
                .filter((produit) => produit.color[0].includes(checkedColor))
                .filter((produit) => produit.parfums[0].includes(checkedParfums))
                .filter((produit) => produit.price <= rangeValue)
              
                .map((produit, index) => (
                    <Card key={index} produit={produit} />
                ))}
            
            </ul>
            </div>
        </div>
        
    );
};

export default Filter;