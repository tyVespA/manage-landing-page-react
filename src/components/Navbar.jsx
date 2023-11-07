import React from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";

function Navbar() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>
      {/* <button>Get Started</button> */}
      <Button type="primary">Get Started</Button>
    </header>
  );
}

export default Navbar;
