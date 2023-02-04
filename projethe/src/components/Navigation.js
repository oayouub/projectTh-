import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [scroll, setScroll] = useState(false);
   

    let lastScroll = 0;
    const scrollWindow = (e) =>{
        console.log(window.scrollY);
        if(window.scrollY > lastScroll){
            setScroll(false);
        }else{
            setScroll(true)
        };
        lastScroll = window.scrollY;
        
    }

    return (
        <div className='navbar'  style={{ top: scroll ? "0" : "-60px" }}>
            <div className="navbarTop">
                <ul>
                    <li id='logo'><img src="./img/logo.png" alt="img
                    " /></li>
                    <li><input type="text" placeholder='Recherche produits...'/></li>
                    <li id='icon'>
                        <img src="./img/icon_account.png" alt="icon" />
                        <img src="./img/icon_cart.png" alt="icon" />
                        <img src="./img/icon_help.png" alt="icon" />
                    </li>
                </ul>
            </div>
            <div className="navbarBot">
                <ul>
                    
                    <li id='solde'>SOLDE</li>
                    <li>THÉ</li>
                    <li>A PROPOS</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;