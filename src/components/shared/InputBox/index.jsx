import React from "react";
import styles from "./style.module.css";

export default function InputBox({ label, handleChange, placeHolder, value }) {
  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        name={label}
      />
    </div>
  );
}
