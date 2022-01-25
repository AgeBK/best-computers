import React, { useState, useContext, useEffect } from "react";
// import data from "../../data/data.json";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

let cats = {};
let products = [];

const Home = () => {
  // const [category, setProduct] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    if (
      localStorage.getItem("BestCompsProducts") === null ||
      localStorage.getItem("BestCompsCats") === null
    ) {
      const fetchData = async () => {
        const res = await fetch("./../data.json");
        const { ProductCollection: products } = await res.json();
        // console.log(ProductCollection);

        cats = products.reduce(
          (acc, { image, category }) =>
            !acc[category] ? { ...acc, [category]: image } : acc,
          {}
        );
        localStorage.setItem("BestCompsProducts", JSON.stringify(products));
        localStorage.setItem("BestCompsCats", JSON.stringify(cats));
        setCategories(cats);
        // setProduct(ProductCollection);
      };
      fetchData();
    } else {
      products = JSON.parse(localStorage.getItem("BestCompsProducts"));
      cats = JSON.parse(localStorage.getItem("BestCompsCats"));
      setCategories(cats);
    }
  }, []);

  return (
    <div className={styles.container}>
      {Object.entries(categories).map(([key, value]) => {
        const category = key.toLowerCase().replace(/ /gi, "-");
        return (
          <div key={category} className={styles.category}>
            <Link to={`/${category}`}>
              <div className={styles.imgCont}>
                <img
                  src={require("../../img/" + value)}
                  alt={category}
                  className={styles.img}
                />
              </div>
            </Link>
            <Link to={`/${category}`} className={styles.link}>
              {key}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
