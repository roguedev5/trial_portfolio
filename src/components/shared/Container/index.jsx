import React from "react";
import styles from "./style.module.css";

export default function Container({ children, isNonBorder }) {
  return (
    <div
      className={isNonBorder ? styles.containerNonBoxShadow : styles.container}
    >
      {children}
    </div>
  );
}
