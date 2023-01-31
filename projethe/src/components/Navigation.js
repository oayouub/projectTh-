import React from 'react';

const Navigation = () => {
    return (
        <div>
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