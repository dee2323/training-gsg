import React from 'react'
import StarRating from '../../../reusedComponent/StarRating/StarRating'
import style from './style.module.css'
const Price = (props) => {
  return (
    <div className={style.price}>SGD {props.price}
    <StarRating />
    </div>

  )
}

export default Price
