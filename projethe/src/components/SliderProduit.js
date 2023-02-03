import React from "react";

const SliderProduit = () => {
  return (
    <div className="bodySlider">
      <div className="slider-container">
        <div className="slider-content">
          <div className="card-wrapper">
            <div className="cardProduit">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img
                    src="./img/imgProduit/M_logo.png"
                    alt=""
                    className="card-img"
                  />
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">Maxime Britto</h2>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  unde dolorem, exercitationem sed ducimus tempore!
                </p>

                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProduit;
