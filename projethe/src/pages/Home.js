import React from "react";
import BanniereSlide from "../components/BanniereSlide";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import scrollWindow from "../components/Navigation";

const Home = () => {
  return (
    <div className="home" onScroll={(e)=> scrollWindow(e)}>
      <Navigation />
      <BanniereSlide />

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
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>

      <div className="selectionAvis">
        <h2>AVIS</h2>
        {/* <ul>
                <li className='cardAvis'></li>
                <li className='cardAvis'></li>
                <li className='cardAvis'></li>
                <li className='cardAvis'></li>
            </ul> */}
        <Slider />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
