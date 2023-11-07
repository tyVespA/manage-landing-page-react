import React from "react";
import styles from "../styles/Button.module.css";

function Button({ children, type }) {
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
