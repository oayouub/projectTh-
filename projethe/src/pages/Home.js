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

        </div>
    );
};

export default Home;