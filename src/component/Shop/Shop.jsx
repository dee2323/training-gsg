import React, { Component } from "react";
import style from "./shopStyle.module.css";
import Items from "./Items/Items";
import Title from "../reusedComponent/Title/Title";
import Container from "../reusedComponent/Container/Container";

export default class Shop extends Component {
  render() {
    return (
      <>
        <Title title={'Shop'} />
        
        <div className={` ${style.shop} container`}>
        <Items />
      </div>
     
        
      </>
    );
  }
}
