import React, { Component } from "react";
import Container from "../reusedComponent/Container/Container";
import Title from "../reusedComponent/Title/Title";
import style from "./AboutStyle.module.css";
import FirstCol from './FirstCol/FirstCol';
import SecoundCol from './SecoundCol/SecoundCol'

export default class About extends Component {
  render() {
    return (
      
       <>  <Title title="About Matter" />
       <Container>
       
       <FirstCol />
         <SecoundCol />
         
       </Container></>
      
     
    );
  }
}
