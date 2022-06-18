import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.text}>created by </span>
      <a
        className={styles.link}
        href="https://devchallenges.io/portfolio/egatsak"
      >
        egatsak
      </a>
      <span className={styles.text}> - devChallenges.io</span>
    </div>
  );
}