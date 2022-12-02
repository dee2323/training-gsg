import React from 'react'
import style from './style.module.css'
const Square = (props) => {
  
  return (
    <div className={style.square} >{props.text}</div>
  )
}

export default Square
