import React from "react";
import styles from "./MainContainer.module.css";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

const MainContainer = (WrappedComponent) => () =>
  (
    <>
      {/* <Header /> */}
      <h1>Header</h1>
      <main className={styles.container}>
        {/* App component is passed into MainContainer as WrappedComponent */}
        <div className={styles.contInner}>
          <WrappedComponent />
        </div>
      </main>
      <h1>Footer</h1>
      {/* <Footer /> */}
    </>
  );

export default MainContainer;
