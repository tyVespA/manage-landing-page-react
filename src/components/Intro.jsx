import React from "react";
import styles from "../styles/Intro.module.css";
import Button from "./Button";
import GraphImg from "../assets/images/illustration-intro.svg";

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introText}>
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button type="primary">Get Started</Button>
      </div>
      <div className={styles.introImage}>
        <img src={GraphImg} alt="graphs" />
      </div>
    </div>
  );
}

export default Intro;
