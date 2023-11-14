/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styles from "../styles/Testimonial.module.css";

function Testimonial({ name, children }) {
  function retrieveFirstName(name) {
    // eslint-disable-next-line react/prop-types
    const firstName = name.split(" ");
    return firstName[0].toLowerCase();
  }

  return (
    <div className={styles.testimonial}>
      <img src={`assets//avatar-${retrieveFirstName(name)}.png`} alt="Avatar" />
      <p className={styles.name}>{name}</p>
      <p>{children}</p>
    </div>
  );
}

export default Testimonial;
