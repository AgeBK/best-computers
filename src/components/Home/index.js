import React, { useState, useContext, useEffect } from "react";
// import data from "../../data/data.json";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setProduct] = useState([]);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./../data.json");
      const { ProductCollection } = await res.json();
      // console.log(ProductCollection);

      let cats = ProductCollection.reduce(
        (acc, { image, category }) =>
          !acc[category] ? { ...acc, [category]: image } : acc,
        {}
      );
      setProduct(ProductCollection);
      setCategories(cats);
    };
    fetchData();
  }, []);

  // console.log(categories);

  // console.log(countedNames);
  // console.log(test);

  // I needed to total the dog’s ages only

  const data = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    },
  ];

  const test = data.reduce(
    (acc, val) => (val.years > acc ? (acc += val.age * 7) : acc),
    0
  );

  console.log(test);

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
