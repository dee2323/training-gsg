import React, { Component } from "react";
import Arrows from "./Arrows/Arrows";
import styles from "./slider.module.css";
export default class Slider extends Component {
  render() {
    return (
      <div className={styles.slider}>
      
        <h1>Perfume Tips Tricks</h1>
        <p className={styles.p1}>Shop Now</p>
        <Arrows />
      </div>
    );
  }
}
