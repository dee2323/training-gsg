import React from 'react'
import style from './style.module.css'
const MainImage = (props) => {
  return (
    <div className={style.col2}>
      <img src={props.image} style={{heigth:"100%",width:"80%"}}/>
      </div>
  )
}

export default MainImage
