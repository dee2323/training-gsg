import React from 'react'
import { Link } from 'react-router-dom'
import Square from '../Square/Square'
import style from './style.module.css'

const Quantity = ({products}) => {
  
  return (
    <>
    <div className={style.quantity}>Quantity</div>
    <Square  text='+'/>
    <Square  text='2'/>
    <Square  text='-'/>
    <span className={style.quantitySize}>Add</span>
    
    </>
  )
}

export default Quantity
