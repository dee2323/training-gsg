import React, { Component } from "react";
import style from "./itemsStyle.module.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import Text from "./Text/Text";

export default class items extends Component {
  render() {
    const images = [img1, img2, img3, img4];
     const texts=["Pants", "Jumpsuits", "Tops", "Accessories"];
      

    return (
      <>
        {images.map((item,index) => (
          <div className={style.featureContainer}>
            <div className={style.row}>
              <div className={style.col1}>
                <img
                  src={item}
                  alt=""
                  style={{ width: "263px", height: "390px" }}
                />
                <div className={style.txt}>
              {texts[index]}
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </>
    );
  }
}
