import React from "react";
import BanniereSlide from "../components/BanniereSlide";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import scrollWindow from "../components/Navigation";
import CategorieDiv from "../components/CategorieDiv";
import SelectionProduit from "../components/SelectionProduit";

const Home = () => {
  return (
    <div className="home" onScroll={(e)=> scrollWindow(e)}>
      <Navigation />
      <BanniereSlide />

     <CategorieDiv />

     <SelectionProduit />

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
