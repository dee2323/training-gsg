import React, { Component } from "react";
import style from "./itemStyle.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

export default class Item extends Component {
  render() {
    const images = [img1, img2, img3];

    return (
      <>
        <div className={style.featureContainer}>
          <div className={style.row}>
            {images.map((item) => (
              <div className={style.col1}>
                <img
                  src={item}
                  alt=""
                  style={{ width: "361px", height: "240px" }}
                />
                <i class="fa-regular fa-circle-play"></i>
              </div>
              
            ))}
          </div>
        </div>
      </>
    );
  }
}
