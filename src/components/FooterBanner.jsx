import React from "react";
import styles from "../styles/FooterBanner.module.css";
import Button from "./Button";
import BackgroundImage from "../assets/images/bg-tablet-pattern.svg";

function FooterBanner() {
  return (
    <div className={styles.footerBannerContainer}>
      <div className={styles.footerBanner}>
        <img src={BackgroundImage} alt="" />
        <h2>Simplify how your team works today.</h2>
        <Button type="secondary">Get Started</Button>
      </div>
    </div>
  );
}

export default FooterBanner;
