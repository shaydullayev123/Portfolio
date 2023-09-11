/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/images/logo.svg";
import github from "../assets/images/github.svg";
import linkedIn from "../assets/images/Linkedin.svg";

function Navbar() {
  return (
    <div className="container">
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>Portfolio</p>
        </div>
        <ul>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
        <div className={styles.icons}>
          <a target="blank" href="https://github.com/shaydullayev123">
            <img src={github} alt="github" />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/shaydullayev123/">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a
            target="blank"
            className={styles.resume}
            href="https://docs.google.com/document/d/1kDEnZABi030OhNHZWVnj27EMIeOtmmN0By785f1xw9I/edit?usp=sharing"
          >
            Get a Resume
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
