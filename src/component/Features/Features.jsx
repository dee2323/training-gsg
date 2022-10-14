import { Component } from "react";
import Products from "./Products/Products";
import Title from '../reusedComponent/Title/Title'
import Container from '../reusedComponent/Container/Container'
export default class Features extends Component {
  render() {
    return (
      <>
        <Title title='Featured' />

        <Container> <Products /></Container>
          
      </>
    );
  }
}
