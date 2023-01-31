import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className="navbarTop">
                <ul>
                    <li><img src="" alt="" /></li>
                    <li><input type="text" placeholder='Recherche produits...'/></li>

                </ul>
            </div>
            <div className="navbarBot">
                <ul>
                    <li>SOLDE</li>
                    <li>THÉ</li>
                    <li>A PROPOS</li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;