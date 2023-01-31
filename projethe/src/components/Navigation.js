import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className="navbarTop">
                <ul>
                    <li><img src="./assets/img/logo.png" alt="img
                    " /></li>
                    <li><input type="text" placeholder='Recherche produits...'/></li>
                    <li>icon</li>
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