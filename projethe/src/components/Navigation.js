import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className="navbarTop">
                <ul>
                    <li><img src="./logo.png" alt="img
                    " /></li>
                    <li><input type="text" placeholder='Recherche produits...'/></li>
                    <li>
                        <img src="./icon_account.png" alt="icon" />
                        <img src="./icon_help.png" alt="icon" />
                        <img src="./icon_cart.png" alt="icon" />
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