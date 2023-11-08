import React from "react";
import styles from "../styles/Testimonials.module.css";
import Testimonial from "./Testimonial";
import Button from "./Button";

function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <h2>What they’ve said</h2>
      <div className={styles.testimonialsSection}>
        {/* TODO: add carousel logic */}
        <Testimonial name="Ali Bravo">
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Testimonial>
        <Testimonial name="Anisha Li">
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone
          motivated.”
        </Testimonial>
        <Testimonial name="Richard Watts">
          “Manage allows us to provide structure and process. It keeps us
          organized and focused. I can’t stop recommending them to everyone I
          talk to!”
        </Testimonial>
        <Testimonial name="Shanai Gough">
          “Their software allows us to track, manage and collaborate on our
          projects from anywhere. It keeps the whole team in-sync without being
          intrusive.”
        </Testimonial>
      </div>
      <Button type="primary">Get Started</Button>
    </div>
  );
}

export default Testimonials;
