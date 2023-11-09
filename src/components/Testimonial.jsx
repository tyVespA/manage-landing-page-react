/* eslint-disable no-undef */
import React from "react";
import styles from "../styles/Testimonial.module.css";

function Testimonial({ name, children }) {
  function retrieveFirstName(name) {
    const firstName = name.split(" ");
    return firstName[0].toLowerCase();
  }

  return (
    <div className={styles.testimonial}>
      <img src={`/avatar-${retrieveFirstName(name)}.png`} alt="Avatar" />
      <p className={styles.name}>{name}</p>
      <p>{children}</p>
    </div>
  );
}

export default Testimonial;
