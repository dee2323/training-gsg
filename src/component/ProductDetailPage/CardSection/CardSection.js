import React from "react";
import s from './style.module.css'
const CardSection=({images})=>{
return(
    <div className={s.featureContainer}>
    <div className={s.row}>
      {images.map((item,i) => i<3&&(
        
        <div className={s.col1}>
          <img
            src={item}
            alt=""
            style={{ width: "361px", height: "240px" }}
          />
        <p>Lorem ipsum dolor sit.</p>
        </div>
        
      ))}
    </div>
  </div>
)
}
export default CardSection;