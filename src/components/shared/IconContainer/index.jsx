import React from "react";
import styles from "./style.module.css";

const IconContainer = ({ icon, iconSize = 70, lable }) => {
  const Icon = icon;
  return (
    <div className={styles.iconContainer}>
      <div className={styles.innerContainer}>
        <Icon width={iconSize} height={iconSize} />
        <span className={styles.label}>{lable}</span>
      </div>
    </div>
  );
};

export default IconContainer;
