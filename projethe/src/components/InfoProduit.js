import React from "react";

const InfoProduit = () => {
  return (
    <div className="infoProduit-container">
      <div className="divider">Preparation</div>
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
      <div className="divider">Description</div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dicta
        magni. Illum iusto ratione in sequi provident nisi repellendus similique
        officia adipisci? Consectetur a magnam ab cumque veniam autem quaerat
        vero possimus perspiciatis soluta quidem sunt natus, modi corrupti aut
        eaque mollitia facilis voluptates eligendi beatae deleniti ad adipisci?
        Saepe!
      </p>
      <div className="divider">Ingredient</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        itaque doloribus saepe tenetur eum! Perferendis minus tempore itaque
        harum dolorem id quo modi rem aperiam, non numquam dolores eaque dicta.
      </p>
    </div>
  );
};

export default InfoProduit;
