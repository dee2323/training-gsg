import React from 'react'
import style from './style.module.css'
const Description = (props) => {
  return (
    <div className={style.description}>
    <h4>Description</h4>
    <p>{props.description}</p>
    </div>

  )
}

export default Description
