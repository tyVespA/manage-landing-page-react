import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
import CloseNavIcon from "../assets/images/icon-close.svg";

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  function setMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
      <nav className={openMobileMenu ? styles.fadedIn : styles.fadedOut}>
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
      <div className={styles.ctaBtn}>
        <Button type="primary">Get Started</Button>
      </div>
      <div className={styles.mobileNavBtn}>
        <button onClick={setMobileMenu}>
          <img
            className={openMobileMenu ? styles.hidden : styles.visible}
            src={HamburgerIcon}
            alt="menu icon"
          />
        </button>
        <button onClick={setMobileMenu}>
          <img
            className={openMobileMenu ? styles.visible : styles.hidden}
            src={CloseNavIcon}
            alt="close menu icon"
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
