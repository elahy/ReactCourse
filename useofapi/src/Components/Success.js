import React from "react";
import styles from "./success.module.css";

function Success() {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.sub}>
          <i className={styles.checkmark}>✓</i>
        </div>
        <h1 className={styles.htag}>Success</h1>
        <p className={styles.ptag}>
          New Product is added to database.
          <br /> You can continue your work!
        </p>
      </div>
    </div>
  );
}

export default Success;
