import React, { Component } from 'react'
import iconsStyle from './style.module.css'
import search from "../icons/search.svg";
import heart from "../icons/heart.svg";
import shape from "../icons/Shape.svg";
import { Link } from 'react-router-dom';

export default class ListIcons extends Component {
  render() {
    return (
        <ul className={iconsStyle.icons}>
       
        <li className={iconsStyle.login}><Link to={"login"} style={{color:'black',textDecoration:'none'}}>{"Login"}</Link></li>
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
