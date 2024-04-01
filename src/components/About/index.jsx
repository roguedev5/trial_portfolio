import React from "react";
import Container from "../shared/Container";
import styles from "./style.module.css";
import { experience } from "../data/about";
import { rampartOne, roboto } from "@/fonts/fonts";

const About = () => {
  return (
    <Container isNonBoxShadow={true}>
      <div className={styles.aboutContent}>
        <h2 className={`${roboto.className} ${rampartOne.className}`}>
          Experience
        </h2>
        <div className={styles.aboutFeatures}>
          <ul>
            {experience.map((ele, index) => {
              return (
                <li key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.featureIcon}
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span>{ele}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
