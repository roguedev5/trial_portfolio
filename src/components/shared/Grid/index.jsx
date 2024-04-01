import React from "react";
import styles from "./style.module.css";

export default function Grid({ children }) {
  return <div className={styles.gridContainer}>{children}</div>;
}
