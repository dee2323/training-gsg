import React, { Component } from "react";
import style from "./styleText.module.css";
export default class Text extends Component {
  render() {
    
    return (
      <>
       
          <div className={style.text}>{this.props.txt}</div>
      
      </>
    );
  }
}
