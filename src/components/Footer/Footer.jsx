import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.text}>created by </span>
      <a
        className={styles.bold}
        href="https://github.com/egatsak/superm-1"
        target="_blank"
      >
        egatsak
      </a>
      <span className={styles.text}> - github.com</span> <br />
      <span className={styles.text}>
        based on Jad Joubran's{" "}
        <a
          className={styles.bold}
          href="https://react-tutorial.app"
          target="_blank"
        >
          react-tutorial.app
        </a>
      </span>
    </div>
  );
}
