import React from "react";
import Container from "../shared/Container";
import styles from "./style.module.css";
import { rampartOne, roboto } from "@/fonts/fonts";
import InputBox from "../shared/InputBox";
import TextAreaBox from "../shared/TextAreaBox";
import Button from "../shared/Button/Button";

export default function Contact() {
  return (
    <Container>
      <div className={`${roboto.className} ${rampartOne.className}`}>
        <h2>Contact me</h2>
      </div>
      <div className={styles.inputGrid}>
        <div className={styles.nameEmail}>
          <InputBox label={"Name"} placeHolder={"John Doe"} />
          <InputBox label={"Email"} placeHolder={"john.doe@gmail.com"} />
        </div>
        <InputBox label={"Subject"} placeHolder={"Looking for..."} />
        <TextAreaBox label={"Message"} placeHolder={"Your Message..."} />
        <div className={styles.sendmessageButton}>
          <Button title={"Send Message  🚀"} />
        </div>
      </div>
    </Container>
  );
}
