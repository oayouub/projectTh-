import React, { useEffect, useState } from "react";
import BanniereSlide from "../components/BanniereSlide";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";
import scrollWindow from "../components/Navigation";
import CategorieDiv from "../components/CategorieDiv";
import SelectionProduit from "../components/SelectionProduit";
import ReturnTop from "../components/ReturnTop";
import axios from "axios";

const Home = ({ checkedColor, setCheckedColor}) => {
  const [data, setData] = useState([]);


  useEffect(() => {
      axios
        .get("http://localhost:5000")
        .then((res) => setData(res.data));
    }, []);

  return (
    <div className="home">
      <Navigation />
      <BanniereSlide />

      {/* <CategorieDiv /> */}

      <SelectionProduit />

     
      <Slider />
      <Footer />
      <ReturnTop />
    </div>
  );
};

export default Home;
