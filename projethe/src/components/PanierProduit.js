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
    displayArticle(article);
    console.log(article);
    const div = makeImageDiv(item);

    const cardItemContent = makeCardItemContent(item);

    setTimeout(() => {
      article.appendChild(div);
      article.appendChild(cardItemContent);
    }, 1000);
  }

  const addDeleteButton = (item) => {
    const div = document.createElement("div");
    div.classList.add("delete-button-container");
    const button = document.createElement("button");
    button.textContent = "Supprimer";
    div.appendChild(button);
    item.appendChild(div);
  };

  const makeCardItemContent = (item) => {
    const div = document.createElement("div");
    div.classList.add("card__item_content");

    const description = document.createElement("div");
    description.classList.add("cart__item__content__description");

    const h2 = document.createElement("h2");
    h2.textContent = item.nomProduit;

    const p = document.createElement("p");
    p.textContent = item.totalPrice + " €";

    const pIngredient = document.createElement("p");
    pIngredient.textContent = item.ingredient;

    const button = document.createElement("button");
    button.textContent = "Supprimer";
    button.addEventListener("click", () => deleteItem(item));

    description.appendChild(h2);
    description.appendChild(p);
    description.appendChild(pIngredient);
    description.appendChild(button);

    div.appendChild(description);

    return div;
  };

  const deleteItem = (item) => {
    const itemToDelete = cart.findIndex((produit) => produit.id === item.id);
    console.log("item to DeleteGang", itemToDelete);
    cart.splice(itemToDelete, 1);
    DeleteDataFromCache(item);
    // DeleteArticleFromDom(item);
  };
  const DeleteDataFromCache = (item) => {
    const key = `${item.id}`;
    localStorage.removeItem(key);
    window.location.reload(false);
  };
  // const DeleteArticleFromDom = (item) => {
  //   const articlToDelete = document.querySelector(
  //     `article[data-id="${item.id}]`
  //   );

  //   setTimeout(() => {
  //     articlToDelete.remove();
  //   }, 1000);

  // };

  function displayArticle(article) {
    setTimeout(() => {
      document.querySelector("#cart__items").appendChild(article);
    }, 1000);
  }

  const makeArticle = (item) => {
    const article = document.createElement("article");
    article.classList.add("cart__item");
    article.dataset.id = item.id;
    return article;
  };

  const makeImageDiv = (item) => {
    const div = document.createElement("div");
    div.classList.add("cart__item__img");
    const image = document.createElement("img");
    image.src = item.panierImg;
    div.appendChild(image);
    return div;
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
