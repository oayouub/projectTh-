import React, { useDeferredValue, useEffect, useState } from "react";
import { Await, useParams } from "react-router-dom";
import axios from "axios";

const PanierProduit = () => {
  const cart = [];

  cart.forEach((item) => displayItem(item));
  const retrieveItemsFromCache = () => {
    const numberOfItems = localStorage.length;
    for (let i = 0; i < numberOfItems; i++) {
      const item = localStorage.getItem(localStorage.key(i));
      const itemObject = JSON.parse(item);
      cart.push(itemObject);

      //console.log("objet a la pos", i, "est", item);
    }
  };
  function displayItem(item) {
    const article = makeArticle(item);
    //displayArticle(article);
    console.log(article);
    const image = makeImage(item);
  }

  function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article);
  }

  const makeArticle = (item) => {
    const article = document.createElement("article");
    article.classList.add("cart__item");
    article.dataset.id = item.id;
    return article;
  };

  const makeImage = (item) => {
    const image = document.createElement("img");
    image.src = item.panierImg;
    return image;
  };

  return (
    //console.log(cart),
    retrieveItemsFromCache(),
    cart.forEach((item) => displayItem(item)),
    console.log(cart),
    (
      <section className="cart">
        <h1 className="titlePanier">Votre Panier</h1>
        <section id="cart__items"></section>
      </section>
    )
  );
};

export default PanierProduit;
