import React from 'react'
import style from'./style.module.css'
export default function Card({img,lable="",price=""}) {
  return (
    <div className={`${style.card}`}>
    <img
      src={img}
      alt=""
      style={{ width: "263px", height: "390px" }}
    />

    <h3>
      {lable} <br />
      <br /> {price}
    </h3>
  </div>
  )
}
