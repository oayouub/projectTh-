import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
           <Navigation />

           <div className="sectionBanniere">
            <img src="./img/BANNIERE.png" alt="img" />
            <button>DÉCOUVRIR</button>
            </div>

            <div className="categorieDiv">
                <h2>CATÉGORIES</h2>
                <div className="categorie-filter">
                    <ul>
                        <li>
                            <img src="./img/imgFilter.jpg" alt="img" />
                            <h4>NOIR</h4>
                        </li>
                        <li>
                        <img src="./img/imgFilter.jpg" alt="img" />
                            <h4>BLANC</h4>
                        </li>
                        <li>
                        <img src="./img/imgFilter.jpg" alt="img" />
                            <h4>VERT</h4>
                        </li>
                        <li>
                        <img src="./img/imgFilter.jpg" alt="img" />
                            <h4>JAUNE</h4>
                        </li>
                    </ul>
                </div>
            </div>

        <div className="selectionProduit">
            <h2>Selection de produits</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>*

        <div className="selectionAvis">
        <h2>AVIS</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        </div>
    );
};

export default Home;