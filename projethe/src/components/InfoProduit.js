import React, { useState, useEffect } from "react";

const InfoProduit = () => {
  const [dividerBar, setDividerBar] = useState(false);

  const changeDivider = () => {
    if (window.scrollY >= 150) {
      console.log(window.scrollY);
      setDividerBar(true);
    } else {
      setDividerBar(false);
    }
  };

  window.addEventListener("scroll", changeDivider);

  return (
    <div className="infoProduit-container">
      <div className={dividerBar ? "divider active" : "divider"}>
        Preparation
      </div>
      <div className="preparation-container">
        <div className="contenue">
          <h2>Temps d'infusion</h2>
          <h3>X min/s</h3>
        </div>
        <div className="contenue">
          <h2>Dosage</h2>
          <h3>nb dose</h3>
        </div>
        <div className="contenue">
          <h2>Temperature d'infusion</h2>
          <h3>X °C</h3>
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
      <div className={dividerBar ? "divider active" : "divider"}>
        Ingredient
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        itaque doloribus saepe tenetur eum! Perferendis minus tempore itaque
        harum dolorem id quo modi rem aperiam, non numquam dolores eaque dicta.
      </p>
    </div>
  );
};

export default InfoProduit;
