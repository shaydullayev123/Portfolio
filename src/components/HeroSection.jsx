/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./HeroSection.module.css";


function HeroSection() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <h2>Frontend <span> Developer</span></h2>
        <br />
        <h3>
          I'm Shaydullayev <br /> Rasulbek
        </h3>
      </div>
    </div>
  );
}

export default HeroSection;
