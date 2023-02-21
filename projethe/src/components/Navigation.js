import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";
import ResultatRecherche from './ResultatRecherche';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
  
  

   useEffect(() => {
    axios
      .get(`http://localhost:5000`)
      .then((res) => setData(res.data));
  }, []);



    let lastScroll = 0;
    const scrollWindow = (e) =>{
        
        if(window.scrollY > lastScroll){
            setScroll(true);
        }else{
            setScroll(false)
        };
       
        
    }
    window.addEventListener('scroll', scrollWindow);
  
const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
        setFilteredData([]);
    }else{

        setFilteredData(newFilter);
    }
}

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className='navbar' style={{ top: scroll ? "-15vh" : "0" }}>
            <div className="navbarTop">
                <ul>
                <NavLink to="/">
                    <li id='logo'><img src="./img/logo.png" alt="img
                    " /></li>
                    </NavLink>
                    
                    <li>
                        <div className='recherche'>
                            <div className='rechercheInput' >
                                <input type="text" placeholder='Recherche produits...' value={wordEntered} onChange={handleFilter} />
                                {filteredData.length === 0 ? <SearchIcon id='searchBtn'/> : <CloseIcon  id='clearBtn' onClick={clearInput}/>}
                            </div>
                            {filteredData.length !== 0 && (
                                <ul className='resultats'>
                                    {filteredData
                                    .slice(0,10)
                                    .map((produit, index) => (
                                    <ResultatRecherche key={index} produit={produit} />
                                    ))}
            
                 
                                </ul>
                                )
                             }
                        </div>
                    </li>

                    <li id='icon'>
                        <img src="./img/icon_account.png" alt="icon" />
                        <img src="./img/icon_cart.png" alt="icon" />
                        <img src="./img/icon_help.png" alt="icon" />
                    </li>
                </ul>
            </div>
            <div className="navbarBot">
                <ul>
                <NavLink to="/filterproduit">
                    <li id='solde'>SOLDE</li>
                    </NavLink>
                    <NavLink to="/filterproduit">
                    <li>THÉ</li>
                    </NavLink>
                    <li>A PROPOS</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;