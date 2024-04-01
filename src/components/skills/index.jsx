import React from "react";
import Container from "../shared/Container";
import FrontEnd from "./Frontend";
import Backend from "./Backend";
import ProgrammingLanguage from "./ProLanguages";
import styles from "./style.module.css";
import { rampartOne, roboto } from "@/fonts/fonts";

export default function Skills() {
  return (
    <Container isNonBorder={true}>
      <h2
        className={`${styles.skillHeader} ${roboto.className} ${rampartOne.className}`}
      >
        Skills
      </h2>
      <div className={styles.skillContainer}>
        <ProgrammingLanguage />
        <FrontEnd />
        <Backend />
      </div>
    </Container>
  );
}
