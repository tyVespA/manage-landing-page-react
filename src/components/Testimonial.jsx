/* eslint-disable no-undef */
import React from "react";
import styles from "../styles/Testimonial.module.css";

function Testimonial({ firstName, name, children }) {
  function retrieveFirstName(name) {
    const firstName = name.split(" ");
    return firstName[0];
  }

  return (
    <div className={styles.testimonial}>
      {/* <img src={./public/avatar-ali.png} alt="" /> */}
      <img
        src={`./public/avatar-${retrieveFirstName(name)}.png`}
        alt="Avatar"
      />
      <p className={styles.name}>{name}</p>
      <p>{children}</p>
    </div>
  );
}

export default Testimonial;
