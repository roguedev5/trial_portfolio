import React from "react";
import Link from "next/link";
import styles from "./style.module.css";

export default function Button({
  children,
  title,
  handleAction,
  href,
  target,
}) {
  return (
    <div className={styles.div}>
      {href ? (
        <Link href={href} target={target}>
          <span className={styles.iconSpan}>{children}</span>
        </Link>
      ) : (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleAction}>
            {title}
          </button>
        </div>
      )}
    </div>
  );
}
