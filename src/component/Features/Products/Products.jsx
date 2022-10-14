import React, { Component } from "react";
import style from "./productStyle.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import Card from "../../../component/reusedComponent/Card/Card";

export default class Products extends Component {
  render() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
      <>
        {images.map((item) => (
          <div className={style.featureContainer}>
            <div className={`${style.row} `}>
            <Card  lable="Pueraria Mirifica And Study Phyto Estrogens" price="$599.00" img={item}/>
            
            </div>
          </div>
        ))}
      </>
    );
  }
}
