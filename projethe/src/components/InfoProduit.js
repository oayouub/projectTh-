import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const InfoProduit = () => {
  const [dividerBar, setDividerBar] = useState(false);

  const changeDivider = () => {
    if (window.scrollY >= 200) {
      // console.log(window.scrollY);
      setDividerBar(true);
    } else {
      setDividerBar(false);
    }
  };

  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if(!id) {
      return;
    }
    axios
      .get(`http://localhost:5000/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  if (!data) return '';

  window.addEventListener("scroll", changeDivider);

  return (
    <div className="infoProduit-container">
      <div className={dividerBar ? "divider active" : "divider"}>
        Preparation
      </div>
      <div className="preparation-container">
        <div className="contenue">
          <h2>Temps d'infusion</h2>
          <h3>{data.infusionTime} min/s</h3>
        </div>
        <div className="contenue">
          <h2>Dosage</h2>
          <h3>{data.dosage} dose</h3>
        </div>
        <div className="contenue">
          <h2>Temperature d'infusion</h2>
          <h3>{data.temperature} °C</h3>
        </div>
      </div>
      <div className={dividerBar ? "divider active" : "divider"}>
        Description
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dicta
        magni. Illum iusto ratione in sequi provident nisi repellendus similique
        officia adipisci? Consectetur a magnam ab cumque veniam autem quaerat
        vero possimus perspiciatis soluta quidem sunt natus, modi corrupti aut
        eaque mollitia facilis voluptates eligendi beatae deleniti ad adipisci?
        Saepe!
      </p>
    </div>
  );
};

export default InfoProduit;
