import React, { useState, useContext, useEffect } from "react";
// import products from "../../data/data.json";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";

let filtered = [];

const Category = () => {
  const category = window.location.pathname.substring(1).replace("-", " ");
  const products = JSON.parse(localStorage.getItem("BestCompsProducts"));
  if (products) {
    // return sales items first by default
    filtered = products
      .filter((val) => val.category.toLowerCase() === category)
      .sort((a, b) => {
        return b.sale || 0 - a.sale || 0;
      });
    console.log(filtered);
  }

  const addToCart = () => {
    alert("add");
  };

  const onChange = () => {
    alert("on change");
  };

  const Categories = () => {
    let html = null;
    if (filtered.length) {
      console.log(filtered);

      html = filtered.map(
        ({ productId, name, description, image, price, sale }) => {
          const onSale = sale ? (
            <span className={styles.sale}>{sale}% OFF</span>
          ) : null;

          return (
            <div key={productId} className={styles.product}>
              <div className={styles.productInner}>
                <Link
                  to={`/${category}/${productId}`}
                  className={styles.productLink}
                >
                  <h2>{name}</h2>
                  <img
                    src={require("../../img/" + image)}
                    alt={name}
                    className={styles.img}
                  />
                  <div className={styles.price}>
                    <span className={styles.dollarSign}>$</span>
                    {price} {onSale}
                  </div>
                  <div className={styles.desc}>{description}</div>
                </Link>
                <button
                  onClick={() => addToCart({ productId, name, price })}
                  className={styles.cart}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        }
      );
      // console.log(html);
    }
    return html;
  };

  return (
    <>
      <div className={styles.categories}>
        {/* <div>You selected {search}</div> */}
        <div className={styles.sort}>Sort by:</div>
        <div>
          <select name="filters" onChange={onChange}>
            <option value="relevance">Relevance</option>
            <option value="ascend">A-Z</option>
            <option value="decend">Z-A</option>
            <option value="priceLow">Price: $ to $$$</option>
            <option value="priceHigh">Price: $$$ to $</option>
          </select>
        </div>
      </div>
      <div className={styles.container}>
        <Categories />
      </div>
    </>
  );
};

export default Category;
