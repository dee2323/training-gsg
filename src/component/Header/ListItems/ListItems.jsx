import React, { Component } from "react";
import styles from "./style.module.css";

export default class ListItems extends Component {
  render() {
    const menuItems = ["shop", "fabric", "journal", "about"];
    return (
      <div className={styles.menuItems}>
        
        <ul className={styles.items}>
          {menuItems.map((item) => (
            <li className={styles.innerItems}>{item}</li>
          ))}
          <li className={styles.innerItems}>login</li>
        </ul>
      </div>
    );
  }
}
