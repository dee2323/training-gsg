import React, { Component } from 'react'
import iconsStyle from './style.module.css'
import search from "../icons/search.svg";
import heart from "../icons/heart.svg";
import shape from "../icons/Shape.svg";

export default class ListIcons extends Component {
  render() {
    return (
        <ul className={iconsStyle.icons}>
       
        <li className={iconsStyle.login}>login</li>
        <li className={iconsStyle.img}>
          <img src={search} alt="search icon" />
        </li>
        <li className={iconsStyle.img}>
         
          <img src={heart} alt="heart icon" />
        </li>
        <li className={iconsStyle.img}>
         
          <img src={shape} alt="shape icon" />
        </li>
      </ul>
    );
  }
}
