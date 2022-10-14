import React from 'react'
import style from './style.module.css'
const Button = ({text}) => {
  return (
    <button className={style.btn}>{text}</button>
  )
}

export default Button
