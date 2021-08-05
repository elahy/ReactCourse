import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <div className={styles.whole}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
