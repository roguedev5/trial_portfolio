import React from "react";
import styles from "./style.module.css";

export default function TextAreaBox({
  label,
  value,
  placeHolder,
  handleChange,
}) {
  return (
    <div className={styles.textareaContainer}>
      <label>{label}</label>
      <textarea
        name={label}
        rows="4"
        cols="50"
        placeholder={placeHolder}
        onChange={handleChange}
      >
        {value}
      </textarea>
    </div>
  );
}
