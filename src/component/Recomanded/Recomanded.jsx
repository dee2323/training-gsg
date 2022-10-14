import React, { Component } from "react";
import style from './style.module.css'
import Items from "./Items/Item";
import Title from "../reusedComponent/Title/Title";
import Container from "../reusedComponent/Container/Container";
import Button from "../reusedComponent/Button/Button";

export default class Recomanded extends Component {
  render() {
    return (
      <>
        <Title title="Recommended Videos" />
        <Container>
        
          <Items />
          <Button text='show more'/>
        </Container>
       
      </>
    );
  }
}
