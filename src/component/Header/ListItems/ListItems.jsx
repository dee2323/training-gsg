import React, { Component } from "react";
import styles from "./style.module.css";
import {Link} from 'react-router-dom'
export default class ListItems extends Component {
  render() {
    const menuItems = [ "fabric", "journal", "about"];
    return (
      <div className={styles.menuItems}>
        
        <ul className={styles.items}>
        <li className={styles.innerItems}><Link to={"shop"} style={{color:'black',textDecoration:'none'}}>{"shop"}</Link></li>
          {menuItems.map((item) => (
            <li className={styles.innerItems}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
