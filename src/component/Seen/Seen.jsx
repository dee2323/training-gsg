import React, { Component } from "react";
import Container from "../reusedComponent/Container/Container";
import Title from "../reusedComponent/Title/Title";
import img from "./images/img.png";
import style from './style.module.css'
export default class Seen extends Component {
  render() {
    return (
      <>
        <Title title={"As Seen On"} />
        <Container><div className={style.img}>
         
        </div></Container>
        
      </>
    );
  }
}
