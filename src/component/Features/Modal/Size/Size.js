import React from 'react'
import Square from '../Square/Square'
import style from './style.module.css'

const Size = () => {
  return (
    <>
    <div className={style.size}>size</div>
    <Square  text='1'/>
    <Square  text='2'/>
    <Square  text='3'/>
    <Square  text='4'/>
    <span className={style.guidSize}>Size Guidelines</span>
    <p className={style.p}>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
    </>
  
  )
}

export default Size
