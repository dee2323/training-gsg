import React from 'react'
import Square from '../Square/Square'
import style from './style.module.css'

const Quantity = () => {
  
  return (
    <>
    <div className={style.quantity}>Quantity</div>
    <Square  text='+'/>
    <Square  text='2'/>
    <Square  text='-'/>
    <button className={style.btn}>Add to cart</button>
    <span className={style.quantitySize}>Add to wishlist</span>
    
    </>
  )
}

export default Quantity
