import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Skills from "@/components/skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/services";
import AnimatedBackGround from "@/components/shared/AnimatedBackGround";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <svg aria-hidden="true" className={styles.svg}>
        <defs>
          <pattern
            id=":S1:"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle
              id="pattern-circle"
              cx="1"
              cy="1"
              r="1"
              fill="black"
            ></circle>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#:S1:)"
        ></rect>
      </svg> */}
      {/* <Services /> */}

      <Header />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
