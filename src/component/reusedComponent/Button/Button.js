import React from 'react'
import style from './style.module.css'
const Button = ({text,position}) => {
  return (
    <button className={style.btn} style={{position:`${position}`,top:'85px',left:'57px'}}>{text}</button>
  )
}

export default Button
