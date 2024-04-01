"use client";

import React from "react";
import Button from "../shared/Button/Button";
import styles from "./style.module.css";
import { GithubIcon, LinkedinIcon, ResumeIcon } from "../icons";
import { rampartOne, roboto } from "@/fonts/fonts";

export default function Header() {
  const handleAction = () => {
    window.open("/assets/resume/Dev-Fullstack-Developer.pdf", "_blank");
  };

  return (
    <div className={styles.headerContainer}>
      <div
        className={`${styles.nameCont}  ${rampartOne.className} ${roboto.className}`}
      >
        <p>Hi I'm</p>
        <h1>Devaraj B</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className={`${styles.iconContainer}`}>
        <Button href={"https://www.github.com/roguedev5"} target={"_blank"}>
          <GithubIcon />
        </Button>
        <Button
          href={"https://linkedin.com/in/devaraj-b-408b461b5"}
          target={"_blank"}
        >
          <LinkedinIcon />
        </Button>
      </div>
      <div className={styles.resumeButton}>
        <Button title={"View Resume"} handleAction={handleAction} />
      </div>
      <div className={styles.descCont}>
        <p>
          🚀 Welcome to My Portfolio! I am a passionate full-stack developer
          with 2+ years of experience. I specialize in creating user-centric
          software, proficient in both front-end and back-end development across
          various platforms. I integrate cutting-edge technology seamlessly
          while prioritizing design.
        </p>
      </div>
    </div>
  );
}
